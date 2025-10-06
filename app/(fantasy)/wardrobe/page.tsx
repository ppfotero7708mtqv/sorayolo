'use client';

import { cn } from '@/app/utils/cn';
import {
  downloadImgUsingUrl,
  exportMaskImage,
  getLocalImage,
  removeImageNoisePoints,
  scaleImage,
} from '@/app/utils/image';
import { error, message, success } from '@/app/utils/message';
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from '@nextui-org/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { clearCanvas, drawImageInCenter } from './draw';

import API from '@/app/utils/api';
import { useDressher } from './dressher';

import DressHerForm from './components/Form';

import { sensitiveWords } from '@/app/components/sensitiveWords';
import useMetadata from '@/app/hooks/useMetadata';
import useUserInfo from '@/app/hooks/useUserInfo';
import inwhitelist from '@/app/hooks/useWhiteList';
import inyellowlist from '@/app/hooks/useYellowList';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/navigation';
import EditMaskCanvas from './components/CanvasEdit';
import DressHerFooter from './components/Footer';
import GemPanel from './components/GemPanel';
import DressHerProcess from './components/Process';
import DressherUploadImage from './components/Upload';

const randomPrompt = (): string => {
  const prompts: string[] = [
    'casual',
    'golf',
    'victorian',
    'doctor',
    'pajamas',
    'long skirt',
    'lab coat',
    'police',
    'nurse',
    'trench coat',
  ];
  const randomIndex: number = Math.floor(Math.random() * prompts.length);
  return prompts[randomIndex];
};

export const runtime = 'edge';

const DressHerPage = () => {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [autoMaskImage, setAutoMaskImage] = useState<string | null>(null);
  const [maskImage, setMaskImage] = useState<string>('');
  const [undressImage, setUndressImage] = useState<string | null>(null);

  /** task status */
  const [taskStatus, setTaskStatus] = useState<number>(0);
  const setTaskStatusCallback = useCallback((status: number) => {
    setTaskStatus(status);
  }, []);

  const processValue = Math.round((taskStatus / 2) * 100);

  const originImgRef = useRef<HTMLCanvasElement>(null);
  const maskEditRef = useRef<HTMLCanvasElement>(null);

  const boxRef = useRef<HTMLDivElement>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalHeader, setModalHeader] = useState('');
  const [okurl, setokurl] = useState('');

  const [errorWord, setErrorWord] = useState('');
  const undress = inwhitelist();
  const yellowundress = inyellowlist();

  useMetadata();

  let {
    clearAll,
    originSize,
    setOriginSize,
    containerSize,
    setSize,
    containerXYWH,
    setXYWH,
    selectedTags,
    prompt,
  } = useDressher((state) => state);

  const userInfo = useUserInfo();

  let isLogin = false;
  let userId = '';

  if (userInfo && userInfo.userId) {
    isLogin = userInfo.isLogin;
    userId = userInfo.userId;
  }
  const [uiid, setUiid] = useState<string>(nanoid());
  function resetUiid() {
    const newUiid = nanoid();
    setUiid(newUiid);
    return newUiid;
  }

  const router = useRouter();

  useEffect(() => {
    const container = boxRef.current;
    if (container == null) {
      error('container is null');
      return;
    }

    setSize(container.clientWidth, container.clientHeight);
  }, [setSize]);

  const getMaskImage = (imgBase64: string) => {
    setMaskImage(imgBase64);
  };

  // get local image
  const handleUpload = () => {
    if (!isLogin) {
      setModalHeader('Please Sign in!');
      setokurl('/auth?prev_url=/wardrobe');
      onOpen();
      return;
    }
    if (taskStatus < 1) {
      error('Choose any wardrobe or input your words to start');
      return;
    }
    message('Uploading...');
    getLocalImage(async (dataurl, size) => {
      if (dataurl == null) {
        error('dataurl is null');
      }

      if (typeof dataurl === 'string') {
        maskOnOpen();
        setShowMaskModel(true);
        setUploadImage(dataurl);
        success('Upload Successed');

        setTaskStatus(2);

        size && setOriginSize(size.width, size.height);

        drawImageInCenter(
          dataurl,
          originImgRef,
          containerSize,
          (x, y, w, h) => {
            setXYWH(x, y, w, h);
          }
        );

        let operation = selectedTags.join('');
        if (operation === '') {
          operation = 'undress';
        }

        const newUiid = resetUiid();
        await API.undressServiceApi
          .getAutoMask({
            type: 'base64',
            uiid: newUiid,
            data: dataurl,
            uid: userId,
            operation: operation,
          })
          .then(async (res) => {
            if (res.data.code === 6100) {
              success('Successsfully Get Mask');
              const maskImgBase64 = 'data:image/jpg;base64,' + res.data.mask;

              // remove image noise point
              const noNoiseImageBase64 =
                await removeImageNoisePoints(maskImgBase64);

              setAutoMaskImage(noNoiseImageBase64);
              setTaskStatus(3);
            } else {
              if (res.data.msg) {
                error(res.data.msg);
              }
            }
          })
          .catch(() => {
            error('Fail to get auto mask');
          })
          .finally(() => {
            setShowMaskModel(false);
          });
      }
    }, setWaitingModal);
  };

  // handle reset
  const handleReset = () => {
    setUploadImage(null);
    setTaskStatus(0);
    resetUiid();

    clearAll();

    clearCanvas(originImgRef);
    clearCanvas(maskEditRef);
  };

  // handle fantasy Now!
  const handleSubmitTask = async () => {
    if (undress || yellowundress) {
      setErrorWord('');
    } else {
      for (let i = 0; i < sensitiveWords.length; i++) {
        if (prompt.toLowerCase().indexOf(sensitiveWords[i]) >= 0) {
          setErrorWord(sensitiveWords[i]);
          return;
        }
      }
    }
    setErrorWord('');
    exportMaskImage(maskEditRef, containerXYWH, async (img: string) => {
      undressOnOpen();
      setShowUndressModel(true);

      setMaskImage(img);

      if (prompt === '') {
        prompt = randomPrompt();
      }

      const _prompt = selectedTags.join(',') + ' ' + prompt;

      const scale_img = await scaleImage(img, originSize);

      let operation = selectedTags.join('');
      if (operation === '') {
        operation = 'undress';
      }

      // get undress image
      await API.undressServiceApi
        .getUndressImg({
          uiid: uiid,
          uid: userId,
          masks: scale_img,
          prompt: _prompt,
          points: [],
          product: 'APP_IMAGE_GEN',
          operation: operation,
        })
        .then((res) => {
          if (res.data.code === 6200) {
            message(
              'You are running out of gems! Please purchase at the store'
            );
            setModalHeader(
              'You are running out of gems! Please purchase at the store'
            );
            if (operation === 'undress') {
              setokurl('/store?utm_content=wardrobe');
            } else {
              setokurl('/store?utm_content=wardrobe_plus');
            }
            onOpen();
            // setTimeout(() => {
            //   if (operation === 'undress') {
            //     router.push('/store?utm_content=wardrobe');
            //   } else {
            //     router.push('/store?utm_content=wardrobe_plus');
            //   }
            // }, 3000);
          } else if (res.data.code === 6100) {
            success('Success');
            res.data.data && setUndressImage(res.data.data);
            res.data.data && imageOnOpen();
            setTaskStatus(4);
          } else {
            error('Please Try Again');
          }
        })
        .catch(() => {
          error('Please Try Again');
        })
        .finally(() => {
          setShowUndressModel(false);
        });
    });
  };

  const [currentTab, setCurrentTab] = useState('wardrobe');

  const changeTab = (key: string) => {
    setCurrentTab(key);
  };

  const [showMaskModal, setShowMaskModel] = useState(false);
  const [showUndressModal, setShowUndressModel] = useState(false);
  const {
    isOpen: maskIsOpen,
    onOpen: maskOnOpen,
    onOpenChange: maskOnOpenChange,
  } = useDisclosure();
  const {
    isOpen: undressIsOpen,
    onOpen: undressOnOpen,
    onOpenChange: undressOnOpenChange,
  } = useDisclosure();
  const {
    isOpen: imageIsOpen,
    onOpen: imageOnOpen,
    onOpenChange: imageOnOpenChange,
  } = useDisclosure();

  const {
    isOpen: IsWaitOpen,
    onOpen: OnWaitOpen,
    onOpenChange: OnWaitOpenChange,
  } = useDisclosure();
  const [showWaitingModal, setShowWaitingModal] = useState(false);
  const setWaitingModal = useCallback((show: boolean) => {
    setShowWaitingModal(show);
  }, []);

  return (
    <div className=" mx-auto w-full max-w-7xl px-10 pt-6">
      <div className="flex h-full w-full flex-col">
        {/* content */}
        <div className="flex w-full flex-1 flex-col sm:flex-row lg:gap-6">
          {/* left */}
          <div className="flex h-auto w-full flex-col">
            <GemPanel className="mb-2 h-10 lg:h-6" />

            {/* canvas */}
            <div className="relative mb-4 h-full min-h-[500px] w-full flex-1 rounded-md border-1">
              {/* canvas edit */}
              <div
                className={cn(
                  'absolute left-0 top-0 h-full w-full text-center',
                  taskStatus <= 1 ? ' opacity-0' : 'opacity-100'
                )}
              >
                <div className="relative inset-0 h-full w-full" ref={boxRef}>
                  <canvas
                    ref={originImgRef}
                    className="relative z-10 h-full w-full"
                  ></canvas>

                  <div className="absolute inset-0 z-20 h-full w-full">
                    <EditMaskCanvas
                      autoMaskImage={autoMaskImage!}
                      onSubmit={getMaskImage}
                      maskEditRef={maskEditRef}
                    ></EditMaskCanvas>
                  </div>
                </div>
              </div>

              {/* absoule */}
              <DressherUploadImage
                taskStatus={taskStatus}
                handleUpload={handleUpload}
                currentTab={currentTab}
              />
            </div>

            <DressHerProcess
              processValue={processValue}
              taskStatus={taskStatus}
            />
          </div>

          {/* right */}
          <div className="mt-0 flex h-auto w-full flex-col gap-4 lg:mt-8">
            <DressHerForm
              tabchange={changeTab}
              currentTab={currentTab}
              errorword={errorWord}
              taskStatus={taskStatus}
              setTaskStatusCallback={setTaskStatusCallback}
            ></DressHerForm>

            <div className="flex flex-row justify-center gap-6 lg:h-[72px]">
              <Button
                className={`w-full rounded-md ${taskStatus <= 2 ? 'text-black opacity-45' : 'bg-fuchsia-500 text-white'} py-4 sm:w-[150px]`}
                aria-label="submit task"
                onClick={handleSubmitTask}
                disabled={taskStatus <= 2}
              >
                Change Now!
              </Button>
              <Button
                className="w-full rounded-md py-4 sm:w-[150px]"
                onClick={handleReset}
                aria-label="reset"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>

        <DressHerFooter />
      </div>

      {/* full screen shoe image right top , add close  button */}
      {/* {undressImage && (
        <div
          className={cn('fixed inset-0 z-50 bg-black bg-opacity-80')}
          onClick={() => {
            setUndressImage(null);
          }}
        >
          <div className=" relative flex h-full w-full items-center justify-center p-4">
            <Image
              src={undressImage}
              alt="undress"
              radius="none"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )} */}

      {/* waiting modal */}
      {showWaitingModal && (
        <Modal
          isOpen={true}
          defaultOpen={true}
          onOpenChange={OnWaitOpenChange}
          hideCloseButton={true}
          size={'sm'}
          isDismissable={false}
        >
          <ModalContent>
            <div className="mx-4 my-4">
              <ModalHeader className="flex flex-col items-center justify-center gap-5">
                {'Uploading...'}
                <Spinner color="danger" />
              </ModalHeader>
              <ModalBody className="my-3">
                <p>{'Please wait...'}</p>
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      )}

      <Modal
        backdrop="blur"
        isOpen={imageIsOpen}
        onOpenChange={imageOnOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="mt-7">
                <Image
                  // @ts-ignore
                  src={undressImage}
                  alt="Generated Image"
                  loading="eager"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    downloadImgUsingUrl(undressImage, 'Anime');
                  }}
                >
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {showMaskModal && (
        <Modal
          isOpen={maskIsOpen}
          onOpenChange={maskOnOpenChange}
          hideCloseButton={true}
          size={'2xl'}
          isDismissable={false}
        >
          <ModalContent>
            <div className="mx-4 my-4">
              <ModalHeader className="flex flex-col items-center justify-center gap-5">
                Auto-mask in progress
                <Spinner color="danger" />
              </ModalHeader>
              <ModalBody className="my-3">
                <p>
                  Our advanced algorithm is doing its magic now. The whole
                  process takes up to 30s. Thank you for your patient.
                </p>
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      )}

      {showUndressModal && (
        <Modal
          isOpen={undressIsOpen}
          onOpenChange={undressOnOpenChange}
          hideCloseButton={true}
          size={'2xl'}
          isDismissable={false}
        >
          <ModalContent>
            <div className="mx-4 my-4">
              <ModalHeader className="flex flex-col items-center justify-center gap-5">
                Change in progress
                <Spinner color="danger" />
              </ModalHeader>
              <ModalBody className="my-3">
                <p>
                  Our advanced algorithm is doing its magic now. The whole
                  process takes up to 30s. Thank you for your patient.
                </p>
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalHeader}
              </ModalHeader>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Cancel
                </Button>
                <Button
                  color="default"
                  onPress={() => {
                    onClose();
                    router.push(okurl);
                  }}
                >
                  Ok
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DressHerPage;
