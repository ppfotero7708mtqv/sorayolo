'use client';
import useMember from '@/app/hooks/useMember';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

function UnsubscribeModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const isMember = useMember();
  return (
    <>
      {isMember && (
        <div className={'w-full pr-[5vw] text-end'}>
          <span
            onClick={onOpen}
            className={' cursor-pointer text-[rgb(221,214,254)]'}
          >
            Unsubscribe
          </span>
        </div>
      )}

      <div className="h-[30vh]">
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="bg-[#e4edff]"
          hideCloseButton={true}
          size={'2xl'}
        >
          <ModalContent>
            {(onClose) => (
              <div className="mx-4 my-4">
                <ModalHeader className="flex flex-col items-center justify-center gap-1">
                  Your AI Girls are Sad to See You Go!
                </ModalHeader>
                <ModalBody className="my-3">
                  <p>
                    {`We are sorry to hear that you are cancelling your subscription 😭 Your feedback is valuable to us
                    and we'd love to know if there's anything that I can do to make you happy. You can send an email to
                    service@sorapix.ai with your account email to request a cancellation.`}
                  </p>
                </ModalBody>
                <ModalFooter>
                  {/* <Button color="danger" variant="light" onPress={onClose}>
                  Unsubscribe
                </Button> */}
                  <Button color="secondary" onPress={onClose}>
                    Keep My Girls!
                  </Button>
                </ModalFooter>
              </div>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
}

export default UnsubscribeModal;
