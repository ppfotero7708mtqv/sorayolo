'use client';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const LoginModal = ({ isLogin }: { isLogin: boolean }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    !isLogin && (
      <Modal isOpen={true} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Please Sign In!
              </ModalHeader>
              <ModalFooter>
                <Button
                  color="default"
                  onPress={() => {
                    onClose();
                    router.push('/auth?prev_url=/profile');
                  }}
                >
                  Bring me there!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
  );
};

export default LoginModal;
