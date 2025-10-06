import { Divider } from '@nextui-org/react';
import Image from 'next/image';
import appDriver from './appdriver.png';
import appfacemorph from './appfacemorph.png';
import genderswap from './genderswap.png';
import webDriver from './webdriver.png';
import webfacemorph from './webfacemorph.png';

const FaceMorphFooter = () => {
  return (
    <div className=" relative w-full p-6">
      <div className="mb-10 pt-6 text-xs text-primary-500 lg:text-base">
        <span className="text-red-500">*</span> By using our services, you
        automatically accept our terms of service
      </div>
      <div className="mb-6 flex items-center justify-center">
        <Divider className="w-[45%]" />
        <div className="mx-2">·</div>
        <Divider className="w-[45%]" />
      </div>

      <div className="flex flex-col gap-8 sm:flex-row">
        {/* face morph */}
        <div className="flex flex-col sm:w-[40%]">
          <div className=" order-1 flex flex-col gap-10 sm:order-2">
            <div className="text-3xl font-bold text-[#371397]">Face Morph</div>
            <div className=" sm:text-md flex flex-col gap-4 text-sm sm:gap-6">
              <div>
                With <span className="font-bold">FaceMorph</span>, you can morph
                your face into your friends&apos;, celebrities&apos;, or even
                historical figures&apos;.
              </div>
              <div>
                You can create funny videos, memes, and collages, or just have
                some fun experimenting with your appearance.
              </div>
            </div>
          </div>
          <div className="order-2 sm:order-1">
            <Image
              width={500}
              height={350}
              alt=""
              src={appfacemorph}
              className="flex h-full w-full pt-10 sm:hidden"
            ></Image>
            <Image
              width={500}
              height={350}
              alt=""
              src={webfacemorph}
              className="hidden h-full w-full pt-10 sm:flex"
            ></Image>
          </div>
        </div>

        {/* driver */}
        <Image
          src={appDriver}
          width={300}
          height={100}
          alt=""
          className="sm:hidden"
        ></Image>
        <Image
          src={webDriver}
          width={100}
          height={300}
          alt=""
          className="hidden sm:flex"
        ></Image>

        {/* gender swap */}
        <div className="flex h-full w-full flex-col sm:w-[40%]">
          <div className=" flex flex-col gap-10 ">
            <div className="text-3xl font-bold text-[#371397]">Gender Swap</div>
            <div className=" sm:text-md flex flex-col gap-4 text-sm sm:gap-6">
              <div>
                Explore a new side of yourself by envisioning the opposite
                gender. Imagine how good you would look in a totally opposite
                gender!
              </div>
              <div>
                Try out the new fun here at Gender Swap and see if you are
                attractive to other people.
              </div>
            </div>
          </div>
          <div className="">
            <Image
              width={500}
              height={350}
              alt=""
              src={genderswap}
              className="flex h-full w-full py-6 sm:p-10"
            ></Image>
          </div>
        </div>
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

export default FaceMorphFooter;
