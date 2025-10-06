'use client';

import useWhiteList from '@/app/hooks/useWhiteList';
import useYellowList from '@/app/hooks/useYellowList';
import { cn } from '@/app/utils/cn';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Tab,
  Tabs,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useDressher } from '../dressher';

interface FormProps {
  tabchange: (key: string) => void;
  currentTab: string;
  errorword: string;
  taskStatus: number;
  setTaskStatusCallback: (status: number) => void;
}

const Tags = [
  { key: 'bath_towel', label: 'Bath Towel' },
  { key: 'bikini', label: 'Bikini' },
  { key: 'bunny_suit', label: 'Bunny Suit' },
  { key: 'chain_leash', label: 'Chain leash' },
  { key: 'chinese_dress', label: 'Chinese Dress' },
  { key: 'leopard_bikini', label: 'Leopard Bikini' },
  { key: 'lingerie', label: 'Lingerie' },
  { key: 'school_swimsuit', label: 'Swimming' },
];

const DressHerForm = ({
  tabchange,
  currentTab,
  errorword,
  taskStatus,
  setTaskStatusCallback,
}: FormProps) => {
  const { prompt, tags, setPrompt, setSelectedTags } = useDressher((state) => {
    return {
      prompt: state.prompt,
      tags: state.selectedTags,
      setPrompt: state.setPrompt,
      setSelectedTags: state.setSelectedTags,
    };
  });

  const undress = useWhiteList();
  const yellowundress = useYellowList();

  const {
    isOpen: isReloadOpen,
    onOpen: onReloadOpen,
    onOpenChange: onReloadOpenChange,
  } = useDisclosure();
  const [currentTag, setCurrentTag] = useState('');

  // handle select tags
  const handleSelectTag = (val: string) => {
    if (taskStatus >= 3) {
      setCurrentTag(val);
      onReloadOpen();
      return;
    }
    handleModalSelectTag(val);
  };

  const handleModalSelectTag = (val: string) => {
    const selectTags = tags;
    if (selectTags.includes(val)) {
      setSelectedTags(selectTags.filter((item) => item !== val));
    } else {
      // setSelectTags(selectTags.concat(val));
      setSelectedTags([val]);
    }
  };

  useEffect(() => {
    if (currentTab !== 'wardrobe' && prompt === '' && tags.length === 0) {
      setTaskStatusCallback(0);
    } else {
      setTaskStatusCallback(1);
    }
  }, [prompt, tags, setTaskStatusCallback, currentTab]);

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <Tabs
        aria-label="Tabs colors"
        color="primary"
        radius="full"
        onSelectionChange={(key) => {
          if (tabchange) {
            if (typeof key === 'string') {
              setPrompt('');
              setSelectedTags([]);
              tabchange(key);
            }
          }
        }}
      >
        <Tab key="wardrobeplus" title="Wardrobe Plus">
          <div className="mb-4 text-base font-semibold">Wardrobe:</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {(undress || yellowundress) && (
              <Button
                key="undress"
                size="sm"
                className={cn(
                  'hover:bg-primary-400',
                  tags.includes('undress') && 'bg-primary-200'
                )}
                aria-label="select tag"
                onClick={() => {
                  handleSelectTag('undress');
                }}
              >
                Remove Object
              </Button>
            )}
            {(undress || yellowundress) && (
              <Button
                key="tattoo"
                size="sm"
                className={cn(
                  'hover:bg-primary-400',
                  tags.includes('tattoo') && 'bg-primary-200'
                )}
                aria-label="select tag"
                onClick={() => {
                  handleSelectTag('tattoo');
                }}
              >
                Tattoo
              </Button>
            )}
            {Tags.map((item) => {
              return (
                <Button
                  key={item.label}
                  size="sm"
                  className={cn(
                    'hover:bg-primary-400',
                    tags.includes(item.key) && 'bg-primary-200'
                  )}
                  aria-label="select tag"
                  onClick={() => {
                    handleSelectTag(item.key);
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </Tab>
        <Tab key="wardrobe" title="Wardrobe"></Tab>
      </Tabs>
      <div className="flex-1">
        <div className="mb-4 text-base font-semibold lg:hidden">Prompt:</div>
        <Textarea
          isInvalid={errorword !== ''}
          value={prompt}
          type="prompt"
          onValueChange={(val: string) => {
            setPrompt(val);
          }}
          errorMessage={
            errorword === ''
              ? ''
              : `Illegal contents '${errorword}' detected! Please rephrase your prompts!`
          }
          variant="bordered"
          placeholder="Enter more details of what you want"
          className="h-[100px] w-full lg:h-full"
          color="primary"
          maxRows={4}
          classNames={{
            inputWrapper: 'border-1 h-full flex-1',
            input: 'h-full',
          }}
        />
      </div>

      <Modal isOpen={isReloadOpen} onOpenChange={onReloadOpenChange} size="xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="mt-6">
                <p>
                  Switching tags may cause the Automask tool to select an
                  unmatched area. You&apos;ll reupload the image for better
                  results.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  onPress={() => {
                    handleModalSelectTag(currentTag);
                    onClose();
                  }}
                >
                  Switch
                </Button>
                <Button color="danger" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DressHerForm;
