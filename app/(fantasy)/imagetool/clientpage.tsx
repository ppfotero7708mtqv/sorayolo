'use client';
import AddSapphire from '@/app/components/gem/AddSapphire';
import { SapphireIcon } from '@/app/components/gem/GemIcon';
import useGemData from '@/app/hooks/useGems';
import useUserInfo from '@/app/hooks/useUserInfo';
import API from '@/app/utils/api';
import { downloadImgUsingUrl, getLocalImage } from '@/app/utils/image';
import { error, message, success } from '@/app/utils/message';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spinner,
  useDisclosure,
} from '@nextui-org/react';
import { nanoid } from 'nanoid';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';
import GemPanel from '../wardrobe/components/GemPanel';
import HD from './components/HD.png';
import Progress from './components/Process';
import basic from './components/basic.png';
import detailed from './components/detailed.png';
import realistic from './components/realistic.png';
import resultimg from './components/resultimg.png';
import uploadimg from './components/uploadimg.png';

export const runtime = 'edge';

const ImageToolPage = () => {
  const [uploadImage, setUploadImage] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<string | null>(null);
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [currentModel, setCurrentModal] = useState<
    | 'Female: Anime Basic'
    | 'Female: Anime Realistic'
    | 'Female: Anime Detailed'
    | 'Female: Anime HD'
    | null
  >(null);
  const [showNewImage, setShowNewImage] = useState(false);
  const models: Array<{
    id: string;
    model:
      | 'Female: Anime Basic'
      | 'Female: Anime Realistic'
      | 'Female: Anime Detailed'
      | 'Female: Anime HD';
    src: StaticImageData;
  }> = [
    { id: 'Anime Basic', model: 'Female: Anime Basic', src: basic },
    { id: 'Anime Realistic', model: 'Female: Anime Realistic', src: realistic },
    { id: 'Anime Detailed', model: 'Female: Anime Detailed', src: detailed },
    { id: 'Anime HD', model: 'Female: Anime HD', src: HD },
  ];

  /** task status */
  const [taskStatus, setTaskStatus] = useState<number>(0);
  const processValue = Math.round((taskStatus / 2) * 100);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalHeader, setModalHeader] = useState('');
  const [okurl, setokurl] = useState('');

  const { gemData } = useGemData();
  const isVip = gemData.PG_GEM_EPHEMERAL + gemData.PG_GEM_PERMANENT > 100;

  const userInfo = useUserInfo();
  let isLogin = false;
  let userId = 'None';

  if (userInfo && userInfo.userId) {
    isLogin = userInfo.isLogin;
    userId = userInfo.userId;
  }
  const router = useRouter();

  const isMobile = useIsMobile().isMobile;

  const {
    isOpen: isMobileNewOpen,
    onOpen: onMobileNewOpen,
    onOpenChange: onMobileNewOpenChange,
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

  // get local image
  const handleOriginUpload = () => {
    if (!isLogin) {
      setModalHeader('Please Sign in!');
      setokurl('/auth?prev_url=/imagetool');
      onOpen();
      return;
    }
    message('Uploading...');
    getLocalImage(
      async (dataurl, size) => {
        if (dataurl == null) {
          error('dataurl is null');
        }
        if (typeof dataurl === 'string') {
          setUploadImage(dataurl);
          success('Upload Successed');
          setShowUploadImage(true);
          if (taskStatus < 1) setTaskStatus(1);
        }
      },
      setWaitingModal,
      0.7
    );
  };

  const handleSelectModel = (
    model:
      | 'Female: Anime Basic'
      | 'Female: Anime Realistic'
      | 'Female: Anime Detailed'
      | 'Female: Anime HD'
  ) => {
    if (taskStatus < 1) {
      error('Please upload original image first!');
      return;
    }
    setCurrentModal(model);
    if (taskStatus < 2) setTaskStatus(2);
  };

  // handle fantasy Now!
  const handleSubmitTask = async () => {
    if (taskStatus < 2) {
      error('Please select a model first!');
      return;
    }
    if (uploadImage && currentModel) {
      setShowWaitingModal(true);
      setShowNewImage(false);
      setTaskStatus(2);
      await API.AnimateStyleServiceApi.getAnimateStyleImg({
        uiid: nanoid(),
        uid: userId,
        type: 'base64',
        data: uploadImage,
        model: currentModel,
        product: 'APP_IMAGE_GEN',
      })
        .then((res) => {
          console.log(res);
          if (res.data.code === 6200) {
            message(
              'You are running out of gems! Please purchase at the store'
            );
            setModalHeader(
              'You are running out of gems! Please purchase at the store'
            );
            setokurl('/store?utm_content=animate_style');
            onOpen();
          } else if (res.data.code === 6100) {
            success('Success');
            res.data.data && setNewImage(res.data.data);
            setShowNewImage(true);
            onMobileNewOpen();
            setTaskStatus(3);
          } else {
            error('Please Try Again');
          }
        })
        .catch((err) => {
          error('Please Try Again');
          console.log('err', err);
        })
        .finally(() => {
          setShowWaitingModal(false);
        });
    }
  };

  // handle reset
  const handleReset = () => {
    setUploadImage(null);
    setCurrentModal(null);
    setNewImage(null);
    setTaskStatus(0);

    setShowUploadImage(false);
    setShowNewImage(false);
  };

  const handleDownload = () => {
    downloadImgUsingUrl(newImage, 'ImageTool');
  };

  return (
    <div className=" mx-auto min-h-[calc(100vh-132px)] w-full max-w-7xl px-6 pt-6 lg:px-10">
      <div className="flex h-full w-full flex-col">
        <div className="flex flex-col gap-1 sm:flex-row sm:gap-10">
          <GemPanel className="h-10 sm:mb-2 lg:h-6" />
          {!isVip && (
            <div className="pl-2 text-sm font-bold sm:pl-0">
              YOU HAVE{' '}
              <span className=" px-3 text-xl text-[rgb(192,54,190)] ">1</span>{' '}
              FREE TRIAL
            </div>
          )}
        </div>
        {/* content */}
        <div className="mb-10 flex w-full flex-1 flex-col gap-6 sm:flex-row sm:gap-4 lg:gap-6">
          {/* left */}
          <div className="flex h-auto w-full flex-col">
            <div className="relative mb-[20px] h-full min-h-[300px] w-full rounded-xl border-1 sm:h-[400px] ">
              {/* origin upload */}
              {showUploadImage && (
                <Image
                  src={uploadImage ? uploadImage : ''}
                  height={400}
                  width={300}
                  alt=""
                  className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center object-contain"
                ></Image>
              )}
              <div
                onClick={handleOriginUpload}
                className={`flex h-full min-h-[300px] w-full
                        cursor-pointer flex-col items-center justify-center sm:min-h-[400px]
                        ${taskStatus >= 1 && 'opacity-0'}`}
              >
                <Image
                  src={uploadimg}
                  alt="scan"
                  height={60}
                  width={60}
                  className="my-2"
                />
                <div className="my-2 px-4 text-lg font-bold">
                  Upload original image
                </div>
              </div>
            </div>
            <Progress processValue={processValue} taskStatus={taskStatus} />
          </div>

          {/* center */}
          <div className="relative flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-6 rounded-xl sm:mb-[100px] sm:min-h-[400px] sm:border-1 ">
            <div className="w-full text-start sm:text-center">
              <div className="px-4 text-lg font-bold">Models:</div>
            </div>
            <div className="flex w-full flex-wrap justify-between gap-0 sm:h-[60%] sm:justify-center sm:gap-0 sm:px-6 ">
              {models.map((model) => {
                return (
                  <div
                    key={model.id}
                    className="flex h-[90%] w-[25%] flex-col items-center p-[2.5%] sm:h-[45%] sm:w-[45%]"
                    onClick={() => {
                      handleSelectModel(model.model);
                    }}
                  >
                    <Image
                      src={model.src}
                      height={100}
                      width={100}
                      alt=""
                      className={`${
                        currentModel === model.model
                          ? 'border-[rgb(194,106,192)]'
                          : 'border-transparent'
                      } rounded-sm border-2 sm:rounded-2xl`}
                    ></Image>
                    <div
                      className={`${
                        currentModel === model.model
                          ? 'text-[rgb(194,106,192)]'
                          : 'text-black'
                      } text-xs sm:text-sm`}
                    >
                      {model.id}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right */}
          <div className=" flex h-full w-full flex-col items-center rounded-xl  sm:min-h-[400px]">
            <div className="relative mx-6 mb-6 hidden h-full min-h-[400px] w-[calc(100%-48px)] flex-col items-center justify-center rounded-xl border-1 sm:flex">
              <div
                className={` flex h-full min-h-[400px] w-full flex-col items-center justify-center ${taskStatus <= 2 ? 'opacity-100' : 'opacity-0'}`}
              >
                <Image height={60} width={60} alt="" src={resultimg}></Image>
                <div className="mt-6 text-center">
                  <div className="text-xl font-bold">
                    Click &quot;Image Now!&quot;
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-row items-center gap-2 text-base">
                    <div className=" font-bold"> One Generation = </div>
                    <div>
                      <SapphireIcon className="h-6 w-6"></SapphireIcon>
                    </div>
                    <div>50</div>
                    <div>Gems</div>
                    <AddSapphire className="h-4 w-4"></AddSapphire>
                  </div>

                  <div className="my-2 text-center text-sm ">
                    Files supported .jpg .png .heic
                  </div>
                </div>
              </div>
              {/* new image */}
              {showNewImage && (
                <Image
                  src={newImage ? newImage : ''}
                  height={400}
                  width={300}
                  alt=""
                  className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center object-contain"
                  onClick={handleDownload}
                ></Image>
              )}
            </div>

            <div className="mb-[10px] flex flex-row justify-center gap-6 lg:h-[40px]">
              <Button
                className={`w-full rounded-md ${
                  taskStatus <= 1
                    ? 'text-black opacity-45'
                    : 'bg-fuchsia-500 text-white'
                } py-4 sm:w-[150px]`}
                aria-label="submit task"
                onClick={handleSubmitTask}
                disabled={taskStatus <= 1}
              >
                Image Now
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

        {/* footer */}
        {/* nothing now */}
      </div>

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
                {taskStatus >= 2 ? 'Processing...' : 'Uploading...'}
                <Spinner color="danger" />
              </ModalHeader>
              <ModalBody className="my-3">
                <p>
                  {taskStatus >= 2
                    ? 'Magic algorithm in progress!'
                    : 'Please wait...'}
                </p>
              </ModalBody>
            </div>
          </ModalContent>
        </Modal>
      )}

      {/* mobile show modal */}
      {showNewImage && isMobile && (
        <Modal
          backdrop="blur"
          isOpen={isMobileNewOpen}
          onOpenChange={onMobileNewOpenChange}
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
                <ModalBody className="mt-7 ">
                  <div className="flex w-full justify-center">
                    <Image
                      src={newImage ? newImage : ''}
                      height={400}
                      width={300}
                      alt=""
                      loading="eager"
                    ></Image>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={handleDownload}>
                    Download
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}

      {/* go login modal */}
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

export default ImageToolPage;
