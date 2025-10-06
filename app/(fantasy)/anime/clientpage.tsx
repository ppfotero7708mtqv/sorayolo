'use client';

import { Suspense, useCallback, useState } from 'react';

import FunctionalTemplate from '../FunctionalTemplate';

import { downloadImgUsingUrl } from '@/app/utils/image';
import GemPanel from '../wardrobe/components/GemPanel';

import Timeline from './form/Timeline';

import { cn } from '@/app/utils/cn';
import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import FormCard from './form/FormCard';

export const runtime = 'edge';

const AnimePage = () => {
  /** task status */

  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(
    null
  );

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const seturl = useCallback((url: string | null) => {
    setGeneratedImageUrl(url);
  }, []);

  return (
    <>
      {FunctionalTemplate({
        leftHeader: <GemPanel className="mb-4" />,
        leftMain: (
          <div className="h-full min-h-[200px] rounded-md border border-zinc-100">
            <div className="flex h-full min-h-[200px] w-full items-center justify-center">
              {generatedImageUrl ? (
                <Button
                  variant="light"
                  onPress={onOpen}
                  className="flex h-full w-full"
                >
                  <Image
                    src={generatedImageUrl}
                    alt="Generated Image"
                    loading="eager"
                  />
                </Button>
              ) : (
                <Timeline />
              )}
            </div>
          </div>
        ),
        rightMain: (
          <div className={cn('my-2')}>
            <Suspense fallback={<div>Loading...</div>}>
              <FormCard seturl={seturl}></FormCard>
            </Suspense>
          </div>
        ),
        rightFooter: null,
        footer: <div></div>,
      })}
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
                  src={generatedImageUrl}
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
                    downloadImgUsingUrl(generatedImageUrl, 'Anime');
                  }}
                >
                  Download
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AnimePage;
