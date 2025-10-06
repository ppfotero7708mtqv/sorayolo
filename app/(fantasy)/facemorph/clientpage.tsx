'use client';

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
import { useCallback, useState } from 'react';

import { useIsMobile } from '@/app/hooks/useIsMobile';
import useUserInfo from '@/app/hooks/useUserInfo';
import API from '@/app/utils/api';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import GemPanel from '../wardrobe/components/GemPanel';
import FaceMorphFooter from './components/Footer';
import MorphImage from './components/MorphImage';
import FaceMorphProcess from './components/Process';
import FaceMorphUploadImage from './components/Upload';

export const runtime = 'edge';

const FaceMorphPage = () => {
  const [uploadOriginImage, setUploadOriginImage] = useState<string | null>(
    null
  );
  const [uploadFaceImage, setUploadFaceImage] = useState<string | null>(null);
  const [morphImage, setMorphImage] = useState<string | null>(null);
  const [showOriginImage, setShowOriginImage] = useState(false);
  const [showFaceImage, setShowFaceImage] = useState(false);
  const [showMorphImage, setShowMorphImage] = useState(false);

  /** task status */
  const [taskStatus, setTaskStatus] = useState<number>(0);

  const processValue = Math.round((taskStatus / 2) * 100);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalHeader, setModalHeader] = useState('');
  const [okurl, setokurl] = useState('');

  const {
    isOpen: isMobileMorphOpen,
    onOpen: onMobileMorphOpen,
    onOpenChange: onMobileMorphOpenChange,
  } = useDisclosure();

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
      setokurl('/auth?prev_url=/facemorph');
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
          setUploadOriginImage(dataurl);
          success('Upload Successed');
          setShowOriginImage(true);
          if (taskStatus < 1) setTaskStatus(1);
        }
      },
      setWaitingModal,
      0.5
    );
  };

  const handleFaceUpload = () => {
    if (taskStatus < 1) {
      error('Please upload original image first!');
      return;
    }
    message('Uploading...');
    getLocalImage(
      async (dataurl, size) => {
        if (dataurl == null) {
          error('dataurl is null');
        }
        if (typeof dataurl === 'string') {
          setUploadFaceImage(dataurl);
          success('Upload Successed');
          setShowFaceImage(true);
          if (taskStatus < 2) setTaskStatus(2);
        }
      },
      setWaitingModal,
      0.2
    );
  };

  // handle reset
  const handleReset = () => {
    setUploadOriginImage(null);
    setUploadFaceImage(null);
    setMorphImage(null);
    setTaskStatus(0);

    setShowOriginImage(false);
    setShowFaceImage(false);
    setShowMorphImage(false);
  };

  // handle fantasy Now!
  const handleSubmitTask = async () => {
    if (taskStatus < 2) {
      error('Please upload face image first!');
      return;
    }
    if (uploadFaceImage && uploadOriginImage) {
      setShowWaitingModal(true);
      setShowMorphImage(false);
      setTaskStatus(2);
      await API.FaceSwapServiceApi.getFaceSwapImg({
        uiid: nanoid(),
        uid: userId,
        type: 'base64',
        data: [uploadOriginImage, uploadFaceImage],
        operation: 'faceswap',
        product: 'APP_IMAGE_GEN',
      })
        .then((res) => {
          if (res.data.code === 6200) {
            message(
              'You are running out of gems! Please purchase at the store'
            );
            setModalHeader(
              'You are running out of gems! Please purchase at the store'
            );
            setokurl('/store?utm_content=face_morph');
            onOpen();
          } else if (res.data.code === 6100) {
            success('Success');
            res.data.data && setMorphImage(res.data.data);
            setShowMorphImage(true);
            onMobileMorphOpen();
            setTaskStatus(3);
          } else {
            error('Please Try Again');
          }
        })
        .catch(() => {
          error('Please Try Again');
        })
        .finally(() => {
          setShowWaitingModal(false);
        });
    }
  };

  const handleDownload = () => {
    downloadImgUsingUrl(morphImage, 'morphImage');
  };

  return (
    <div className=" mx-auto w-full max-w-7xl px-6 pt-6 lg:px-10">
      <div className="flex h-full w-full flex-col">
        {/* content */}
        <div className="flex w-full flex-1 flex-col gap-2 sm:flex-row sm:gap-4 lg:gap-6">
          {/* left */}
          <div className="flex h-auto w-full flex-col">
            <GemPanel className="mb-2 h-10 lg:h-6" />

            {/* two upload */}
            <div className="relative mb-4 flex h-full min-h-[500px] w-full flex-1 flex-col gap-4 sm:min-h-[400px] sm:flex-row sm:gap-6 lg:gap-6 ">
              <div className="relative h-full min-h-[240px] w-full rounded-xl border-1 ">
                {/* origin upload */}
                {showOriginImage && (
                  <Image
                    src={uploadOriginImage ? uploadOriginImage : ''}
                    height={400}
                    width={300}
                    alt=""
                    className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center object-contain"
                  ></Image>
                )}
                <FaceMorphUploadImage
                  taskStatus={taskStatus}
                  handleUpload={handleOriginUpload}
                  isLeft={true}
                />
              </div>
              <div className="relative h-full min-h-[240px] w-full rounded-xl border-1 ">
                {/* face upload */}
                {showFaceImage && (
                  <Image
                    src={uploadFaceImage ? uploadFaceImage : ''}
                    height={400}
                    width={300}
                    alt=""
                    className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center object-contain"
                  ></Image>
                )}
                <FaceMorphUploadImage
                  taskStatus={taskStatus}
                  handleUpload={handleFaceUpload}
                  isLeft={false}
                />
              </div>
            </div>

            <FaceMorphProcess
              processValue={processValue}
              taskStatus={taskStatus}
            />
          </div>

          {/* right */}
          <div className=" mt-4 flex h-auto w-full flex-col gap-4 sm:mt-0 lg:mt-8">
            <div className="relative hidden h-full min-h-[400px] w-full rounded-xl border-1 sm:block">
              <MorphImage></MorphImage>
              {/* morph image */}
              {showMorphImage && (
                <Image
                  src={morphImage ? morphImage : ''}
                  height={400}
                  width={300}
                  alt=""
                  className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center object-contain"
                  onClick={handleDownload}
                ></Image>
              )}
            </div>

            <div className="flex flex-row justify-center gap-6 lg:h-[72px]">
              <Button
                className={`w-full rounded-md ${taskStatus <= 1 ? 'text-black opacity-45' : 'bg-fuchsia-500 text-white'} py-4 sm:w-[150px]`}
                aria-label="submit task"
                onClick={handleSubmitTask}
                disabled={taskStatus <= 1}
              >
                Morph Now! →
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

        <FaceMorphFooter />
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
      {showMorphImage && isMobile && (
        <Modal
          backdrop="blur"
          isOpen={isMobileMorphOpen}
          onOpenChange={onMobileMorphOpenChange}
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
                      src={morphImage ? morphImage : ''}
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

export default FaceMorphPage;
