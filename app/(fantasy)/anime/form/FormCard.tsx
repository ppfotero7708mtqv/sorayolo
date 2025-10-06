'use client';

import { useEffect, useState } from 'react';
import { HiChevronDoubleDown } from 'react-icons/hi';
import { IoCaretBackOutline } from 'react-icons/io5';

import {
  Button,
  Chip,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
  useDisclosure,
} from '@nextui-org/react';

import { HENTAI_MODELS, HENTAI_TAGS } from '../varients';

import { cn } from '@/app/utils/cn';

import { useRouter } from 'next/navigation';

import useMetadata from '@/app/hooks/useMetadata';

import { message } from '@/app/utils/message';

import useUserInfo from '@/app/hooks/useUserInfo';

import { sensitiveWords } from '@/app/components/sensitiveWords';
import useWhiteList from '@/app/hooks/useWhiteList';
import useYellowList from '@/app/hooks/useYellowList';
import API from '@/app/utils/api';
import { nanoid } from 'nanoid';

const FormSelectTagsAndInput = ({
  seturl,
}: {
  seturl: (url: string | null) => void;
}) => {
  const router = useRouter();
  useMetadata();
  /** choose model */
  const [chooseModel, setChooseModel] = useState<string | null>(null);

  /** choose tag items */
  const [chooseTagItems, setChooseTagItems] = useState<string[]>([]);

  /** has choose tags */
  const [hasChooseTags, setHasChooseTags] = useState<string[]>([]);

  /** show all tags */
  const [showAllTags, setShowAllTags] = useState<boolean>(true);

  /** current choose tag */
  const [currTag, setCurrTag] = useState<string>('anime_base');

  /** process status
   * 0: not start
   * 1: has choose model
   * 2: processing
   * 3: regenerate
   */
  const [processStatus, setProcessStatus] = useState<number>(0);

  const [prompt, setPrompt] = useState<string>('');

  const userInfo = useUserInfo();

  let isLogin = false;
  let userId = '';

  if (userInfo && userInfo.userId) {
    isLogin = userInfo.isLogin;
    userId = userInfo.userId;
  }

  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalHeader, setModalHeader] = useState('');
  const [okurl, setokurl] = useState('');

  const undress = useWhiteList();
  const yellowundress = useYellowList();
  const [errorword, setErrorword] = useState('');

  /**
   * child component callback function
   * waring:
   *
   * @param tags choose tags
   * @param prompt user input prompt
   * @param model user choose model
   * @returns null
   */
  const handleGenerate = async (
    tags: string[],
    prompt: string,
    model: string
  ) => {
    setLoading(true);

    const replaced_tags = tags.map((val) => {
      return val;
    });

    seturl(null);

    let uiid = nanoid();

    return await new Promise((resolve, reject) => {
      const params = {
        model,
        prompt:
          prompt +
          (replaced_tags.length === 0 || prompt === '' ? '' : ',') +
          replaced_tags
            .map((val) => {
              const splitVal = val.split('.');
              if (splitVal.length >= 2) {
                return val.substring(val.indexOf('.') + 1);
              } else {
                return val;
              }
            })
            .join(','),
        uiid,
        uid: isLogin ? userId : '',
        product: 'APP_IMAGE_GEN',
      };

      /** add random prompt before choose tags */

      /** according model to add sex : female or male */
      params.prompt =
        (params.model.startsWith('Male') ? 'male,' : 'female,') + params.prompt;

      /** impl hentai request */
      API.hentaiServiceApi
        .fetch(API.HENTAI_API_URL!, params)
        .then((res) => {
          if (res.code === 6200) {
            message(
              'You are running out of gems! Please purchase at the store'
            );
            setModalHeader(
              'You are running out of gems! Please purchase at the store'
            );
            setokurl('/store?utm_content=anime');
            onOpen();
            // const intervalId = setInterval(() => {
            //   router.push('/store?utm_content=anime');
            //   clearInterval(intervalId);
            // }, 2000);
          } else if (res.code === 6100) {
            seturl(res.data);
            resolve(true);
          } else {
            reject(true);
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          reject(true);
        });
    });
  };

  /** user interaction to chooose tag items */
  const handleChooseTagItem = (val: string) => {
    if (chooseTagItems.includes(val)) {
      setChooseTagItems(chooseTagItems.filter((item) => item !== val));
    } else {
      let clonechooseTagItems = [...chooseTagItems];

      /** filter start with currTag */
      if (HENTAI_TAGS[currTag].type === 'radio') {
        clonechooseTagItems = clonechooseTagItems.filter((item) => {
          return !item.startsWith(currTag);
        });
      }
      setChooseTagItems([...clonechooseTagItems, val]);
    }
  };

  /** click reset button */
  const handleResetTagsClick = () => {
    setChooseTagItems([]);
    setProcessStatus(0);
    setCurrTag('anime_base');
    setChooseModel(null);
    setHasChooseTags([]);
    message('Reset Success');
    /** clear textera ... todo */
  };

  /** click generate button */
  const handleGenerateClick = async () => {
    /** validate login */
    if (!isLogin) {
      // error('Please Sign in to Generate');
      setModalHeader('Please Sign in to Generate');
      setokurl('/auth?prev_url=/anime');
      onOpen();
      // const intervalId = setInterval(() => {
      //   router.push('/auth?prev_url=/anime');
      //   clearInterval(intervalId);
      // }, 2000);
      return '';
    }

    if (undress || yellowundress) {
      setErrorword('');
    } else {
      for (let i = 0; i < sensitiveWords.length; i++) {
        if (prompt.toLowerCase().indexOf(sensitiveWords[i]) >= 0) {
          setErrorword(sensitiveWords[i]);
          return;
        }
      }
      setErrorword('');
    }

    if (processStatus === 2) {
      message('Your task is being processed, please wait patiently, about 10s');
      return;
    }

    setProcessStatus(2);

    const signal = await handleGenerate(chooseTagItems, prompt, chooseModel!);
    if (signal) {
      setProcessStatus(1);
    }
  };

  /** user interaction to update has choosed tags list */
  const updateChooseTags = () => {
    const updateHasChooseTags: string[] = [];
    const clonechooseTagItems = [...chooseTagItems];
    clonechooseTagItems.map((item) => {
      const items = item.split('.');
      updateHasChooseTags.push(items[0]);
    });

    console.log(updateHasChooseTags);
    setHasChooseTags(updateHasChooseTags);
  };

  /** montier user cacal prompt */
  useEffect(() => {
    console.log(chooseModel);
    if (
      chooseModel === '' ||
      chooseModel === undefined ||
      chooseModel === null
    ) {
      setProcessStatus(0);
    }
  }, [chooseModel]);

  return (
    <>
      {/* select model */}
      <Select
        label={'Select a model*'}
        className="z-0 mb-4 w-full lg:mb-0"
        onSelectionChange={(keys) => {
          const keyArray = Array.from(keys);
          setChooseModel(keyArray[0] as string);
          setProcessStatus(1);
        }}
      >
        {HENTAI_MODELS.map((_model) => (
          <SelectItem key={_model.label} value={_model.label}>
            {_model.label}
          </SelectItem>
        ))}
      </Select>

      <div className="text-sm text-primary-500 lg:my-4">
        Choose your tags (Optional)
      </div>

      {/* mobile */}
      <div className="flex items-center justify-center lg:hidden">
        {/* left arrow */}
        <div className={`w-[24px] ${showAllTags ? 'hidden' : 'block'} `}>
          <IoCaretBackOutline className="h-[24px] w-[24px] text-primary-500/50" />
        </div>

        {/* tags , slide */}
        <div
          className={`${
            showAllTags
              ? 'flex flex-row flex-wrap pt-4'
              : 'flex items-center space-x-4 overflow-y-auto py-4'
          } w-fit `}
        >
          {Object.keys(HENTAI_TAGS).map((tag) => {
            const cur_tag = HENTAI_TAGS[tag];
            return (
              <Button
                size="sm"
                key={tag}
                className={`max-w-48
                          ${
                            currTag !== tag && hasChooseTags.includes(tag)
                              ? 'bg-primary-500/10'
                              : ' '
                          }
                          ${showAllTags ? 'mb-2 mr-2 ' : 'mr-0'}
                          ${currTag === tag ? 'bg-primary-500/30' : ''}`}
                onClick={() => {
                  setCurrTag(tag);
                  updateChooseTags();
                }}
              >
                {cur_tag.label}
              </Button>
            );
          })}
        </div>

        {/* right arrow */}
        <div className={`w-[24px] ${showAllTags ? 'hidden' : 'block'} `}>
          <IoCaretBackOutline className="h-[24px] w-[24px] rotate-180 text-primary-500/50" />
        </div>

        {/* click icon to show all tags */}
        <div
          className=""
          onClick={() => {
            setShowAllTags(!showAllTags);
          }}
        >
          <HiChevronDoubleDown
            className={`h-[24px] w-[24px] text-primary-500/50 transition duration-150 ${
              showAllTags ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>

      {/* pc */}
      <div className="hidden lg:flex lg:items-center lg:justify-center">
        {/* tags , slide */}
        <div className={`flex w-fit flex-row flex-wrap `}>
          {Object.keys(HENTAI_TAGS).map((tag) => {
            const cur_tag = HENTAI_TAGS[tag];
            return (
              <Button
                size="sm"
                key={tag}
                className={`max-w-48
                          ${
                            currTag !== tag && hasChooseTags.includes(tag)
                              ? 'bg-primary-500/10'
                              : ' '
                          }
                          mb-2 mr-2
                          ${currTag === tag ? 'bg-primary-500/30' : ''}`}
                onClick={() => {
                  setCurrTag(tag);
                  updateChooseTags();
                }}
              >
                {cur_tag.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* tag options */}
      <div
        className={`rounded-lg bg-default-100 p-4  ${
          showAllTags ? '' : 'mt-4'
        }`}
      >
        <div
          className={` flex max-h-40 flex-wrap items-start justify-start gap-2 overflow-auto lg:h-auto lg:max-h-60`}
        >
          {currTag != '' &&
            HENTAI_TAGS[currTag].values.map((tag_item) => {
              return (
                <div
                  key={tag_item}
                  onClick={() => {
                    handleChooseTagItem(currTag + '.' + tag_item);
                  }}
                  className={`${
                    chooseTagItems.includes(currTag + '.' + tag_item)
                      ? '-order-1'
                      : ''
                  }`}
                >
                  <Chip
                    size="sm"
                    className={cn(
                      'cursor-pointer',
                      chooseTagItems.includes(currTag + '.' + tag_item)
                        ? 'bg-primary-500/10'
                        : ''
                    )}
                  >
                    {tag_item}
                  </Chip>
                </div>
              );
            })}
        </div>
      </div>

      <div className="mt-4 text-sm text-primary-500">
        Additional Prompt (Optional)
      </div>

      {/* prompt */}
      <Textarea
        isInvalid={errorword !== ''}
        value={prompt}
        type="prompt"
        color={'default'}
        label="Description Prompt"
        errorMessage={
          errorword === ''
            ? ''
            : `Illegal contents '${errorword}' detected! Please rephrase your prompts!`
        }
        placeholder="Enter more details of what you want"
        defaultValue=""
        className="mt-4 w-full"
        onValueChange={(val: string) => {
          setPrompt(val);
        }}
      />

      <div className="my-4 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6 lg:h-[72px]">
        <Button
          className="w-full rounded-md bg-fuchsia-500 py-4 text-white sm:w-[350px]"
          aria-label="submit task"
          onClick={handleGenerateClick}
          isDisabled={processStatus === 0}
          isLoading={loading}
        >
          {processStatus === 1 && chooseTagItems.length === 0 && prompt === ''
            ? 'Random generate'
            : processStatus === 0
              ? loading
                ? 'Loading'
                : 'Select a model to start'
              : 'Generate with tags'}
        </Button>
        <Button
          className={cn('w-full rounded-md py-4 sm:w-[150px]')}
          aria-label="submit task"
          onClick={handleResetTagsClick}
        >
          Reset
        </Button>
      </div>

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
    </>
  );
};

export default FormSelectTagsAndInput;
