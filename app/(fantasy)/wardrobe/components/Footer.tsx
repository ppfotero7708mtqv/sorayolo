import useWhiteList from '@/app/hooks/useWhiteList';
import useYellowList from '@/app/hooks/useYellowList';
import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import wardrobeFooterDesktop from './wardrobeFooterDesktop.png';
import wardrobeFooterMobile from './wardrobeFooterMobile.png';
import wlaft from './wlaft.png';
import wlaft2 from './wlaft2.png';
import wlmask from './wlmask.png';
import wlori from './wlori.png';
import wlyellow from './wlyellow.png';

const DressHerFooter = () => {
  const undress = useWhiteList();
  const yellowundress = useYellowList();
  return (
    <div className=" relative w-full ">
      <div className="mb-10 pt-6 text-xs text-primary-500 lg:text-base">
        <span className="text-red-500">*</span> By using our services, you
        automatically accept our terms of service
      </div>
      <div className="mb-6 flex items-center justify-center">
        <Divider className="w-[45%]" />
        <div className="mx-2">·</div>
        <Divider className="w-[45%]" />
      </div>
      {/* whitelist */}
      {(undress || yellowundress) && (
        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-10">
          <div className=" order-1 flex w-[100%] flex-col gap-10 sm:order-2 sm:w-[40%]">
            <div className="text-3xl font-bold text-[#371397]">
              Remove
              <br />
              Object
            </div>
            <div className=" sm:text-md flex w-[60%] flex-col gap-4 text-sm">
              <div>
                You can Remove any objects from the characters by simply
                inputing prompts like &quot;Remove jewleries&quot;.
              </div>
              <div>Try the new features out!</div>
            </div>
          </div>
          <div className="order-2 flex w-[100%] sm:order-1 sm:w-[60%]">
            <div className="flex w-full items-center justify-center gap-5">
              <div className="h-full w-[40%]">
                <div className="w-full text-center text-sm">STEP1</div>
                <div className="relative h-full w-full">
                  <Image
                    width={400}
                    height={600}
                    alt=""
                    src={wlmask}
                    className="invisible w-full"
                  ></Image>
                  <Image
                    width={400}
                    height={600}
                    alt=""
                    src={wlori}
                    className="absolute left-0 top-0 w-full"
                  ></Image>
                  <Image
                    width={400}
                    height={600}
                    alt=""
                    src={wlmask}
                    className="absolute left-0 top-0 w-full animate-wlshinel"
                  ></Image>
                </div>
              </div>
              <div className="h-full w-[40%]">
                <div className="w-full text-center text-sm">STEP2</div>
                <div className="relative h-full w-full">
                  <Image
                    width={400}
                    height={600}
                    alt=""
                    src={wlmask}
                    className=" invisible"
                  ></Image>
                  <Image
                    width={400}
                    height={600}
                    alt=""
                    src={yellowundress ? wlyellow : wlaft2}
                    className=" absolute left-0 top-0 w-full"
                  ></Image>
                  <Image
                    width={400}
                    height={600}
                    alt=""
                    src={wlaft}
                    className="absolute left-0 top-0 w-full animate-wlshiner"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center">
        <div className=" flex w-[50%] flex-col gap-10 sm:w-[35%]">
          <div className="text-3xl font-bold text-[#371397]">
            Wardrobe
            <br />
            Feature
          </div>
          <div className=" sm:text-md flex flex-col gap-4 text-sm sm:gap-10">
            <div>
              Wardrobe offers a cutting-edge algorithm that allows users to
              change the outfit of a chosen character.
            </div>
            <div>
              Also, many talented fashion designers have created digital works
              of fancy outfitsjust to cater to your{' '}
              <span className="font-bold">Fantasies</span> !
            </div>
          </div>
        </div>
        <div className="w-[50%] sm:w-[65%]">
          <Image
            width={500}
            height={350}
            alt=""
            src={wardrobeFooterDesktop}
            className="hidden h-full w-full p-10 sm:flex"
          ></Image>
        </div>
      </div>
      <div className="mt-[-200px] flex sm:hidden">
        <Image
          width={350}
          height={500}
          alt=""
          src={wardrobeFooterMobile}
          className=" h-full w-full p-10 pr-0"
        ></Image>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full  overflow-hidden opacity-60 blur-[30px]">
        <div
          className="
              absolute right-[-100px] top-[6vh] h-[200px] w-[200px]
              rounded-full bg-gradient-to-tr from-[#e2457e] to-[#f0ea4f] blur-[80px] sm:h-[23.44vw] sm:w-[23.44vw]  xl:h-[300px] xl:w-[300px]"
        />
        <div
          className="
              absolute bottom-[-6vh] left-[0px] h-[200px] w-[200px]
              rounded-full bg-gradient-to-tr from-[#e2457e] to-[#5a6aff] blur-[100px] sm:h-[23.44vw] sm:w-[23.44vw]  xl:h-[300px] xl:w-[300px]"
        />
      </div>
    </div>
  );
};

export default DressHerFooter;
