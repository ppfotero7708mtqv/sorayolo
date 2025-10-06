'use client';
import useWhiteList from '@/app/hooks/useWhiteList';
import useYellowList from '@/app/hooks/useYellowList';
import { cn } from '@/app/utils/cn';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { host } from '../layout/ClientHost';
import bg_url from './component/green_bg.webp';
import wl_url from './component/yellow_bg.webp';
import ylmask from './component/ylmask.png';
import ylnaked from './component/ylnaked.png';
import ylori from './component/ylori.png';

const IFantasyPart = () => {
  const whitelist = useWhiteList();
  const yellowlist = useYellowList();
  const name = host?.includes('sorapix') ? 'SoraPix' : 'iFantasy';

  const ButtonLinks = () => {
    const links = [
      {
        label: whitelist || yellowlist ? 'Remove Object' : 'Dress Girl',
        href: '/wardrobe',
        isDisable: false,
        isHighlight: true,
      },
      { label: 'Anime Girl', href: '/anime', isDisable: false },
    ];

    return (
      <div className="flex w-[175px] flex-col gap-4">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            <Button
              className={cn(
                'flex w-[175px] cursor-pointer flex-row items-center rounded-full',
                'text-md px-8 py-2 text-left font-semibold',
                link.isHighlight ? ' bg-background shadow' : 'bg-[#c6c6c6af]'
              )}
            >
              <span className="w-[100px] text-primary-500"> {link.label}</span>
              {link.isHighlight && (
                <FaArrowRight className="ml-2 text-primary-500"></FaArrowRight>
              )}
            </Button>
          </Link>
        ))}
      </div>
    );
  };
  return (
    <div className="relative">
      {/* mobile */}
      <div className="relative h-adapt-screen overflow-hidden p-4 sm:hidden">
        <div className="relative h-[150px] w-full">
          <div
            className="left-0 top-0 h-[120px]  text-[86px] font-semibold text-transparent"
            style={{
              WebkitTextStroke: '2px #F9B2FF',
            }}
          >
            {name}
          </div>
          <div className="absolute left-0 top-[40px] z-20 h-[40px] text-[45px] text-primary-500">
            {name}
          </div>
        </div>

        <div className="pr-4 text-sm text-primary-500">
          {name}, a next-level, AI-powered picture generator tool with various
          distinctive built-in models. avigate through several simple steps, you
          can create your dream Anime girl!
        </div>

        <div className="relative z-20 mt-8">
          <ButtonLinks />
        </div>

        <div className="pointer-events-none absolute bottom-0 z-10">
          <div className="relative bottom-0 h-[444px] w-[1068px]">
            {yellowlist ? (
              <>
                <Image
                  src={ylori}
                  alt="bg"
                  loading="eager"
                  width={1068}
                  height={444}
                  className="object-cover object-left-top"
                />
                <Image
                  src={ylmask}
                  alt="bg"
                  loading="eager"
                  width={1068}
                  height={444}
                  className="absolute left-0 top-0 animate-ylshinem object-cover object-left-top"
                />
                <Image
                  src={ylnaked}
                  alt="bg"
                  loading="eager"
                  width={1068}
                  height={444}
                  className="absolute left-0 top-0 animate-ylshinen object-cover object-left-top"
                />
              </>
            ) : (
              <Image
                src={whitelist ? wl_url : bg_url}
                alt="bg"
                loading="eager"
                width={868}
                height={444}
                className="-translate-x-[185px] object-cover object-left-top sm:translate-x-0"
              />
            )}
          </div>
        </div>

        <div className="pointer-events-none absolute -right-[2px] bottom-0 z-[5] h-full w-full overflow-hidden">
          <div
            className="
              absolute -left-[80px] bottom-[-80px] h-[250px]
              w-[250px] rounded-full bg-[#FB4AFF77] blur-[100px]"
          />

          <div
            className="
              absolute bottom-[-200px] right-0 h-[350px]
              w-[350px] rounded-full bg-[#FB4AFF77] blur-[40px]"
          />

          <div
            className="
              absolute bottom-[-100px] right-[-100px] h-[350px]
              w-[350px] rounded-full bg-[#FB4AFF77] blur-[100px]"
          />
        </div>
      </div>

      {/* desktop */}
      <div
        className="hidden h-adapt-screen overflow-clip
          bg-zinc-200 pt-16
            transition-all
            sm:block"
      >
        <div className="relative mx-auto h-full w-full max-w-7xl p-4">
          <div className="mt-600px relative z-10 w-1/2">
            <div className="relative flex h-[200px] w-full flex-col justify-center">
              <div
                className=" absolute left-0 top-0 flex h-[200px] items-center text-[140px] font-semibold text-transparent"
                style={{
                  WebkitTextStroke: '2px #F9B2FF',
                }}
              >
                {name}
              </div>
              <div className="relative z-20 text-[68px] font-semibold text-primary-500">
                {name}
              </div>
            </div>

            <div className="pr-4 text-base text-primary-500 [text-shadow:_1px_1px_0_rgb(255_255_255_/_40%)]">
              {name}, a next-level, AI-powered picture generator tool with
              various distinctive built-in models. avigate through several
              simple steps, you can create your dream Anime girl!
            </div>

            <div className="mt-8">
              <ButtonLinks />
            </div>
          </div>

          {/* image */}
          <div className="pointer-events-none absolute -right-[220px] bottom-0">
            <div
              className="
              absolute -left-[80px] top-[380px] h-[250px]
              w-[250px] rounded-full bg-[#FB4AFF99] blur-3xl"
            />

            <div
              className="
              absolute left-[120px] top-[220px] h-[350px]
              w-[250px] rounded-full bg-[#FB4AFF99] blur-3xl"
            />

            <div
              className="
              absolute left-[400px] top-[120px] h-[450px]
              w-[450px] rounded-full bg-[#FB4AFF99] blur-3xl"
            />

            <div
              className="
              absolute left-[400px] top-[140px] h-[450px]
              w-[450px] rounded-full bg-[#FB4AFF99] blur-3xl"
            />

            <div
              className="
              absolute right-[100px] top-[200px] h-[450px]
              w-[450px] rounded-full bg-[#737CE688] blur-3xl"
            />
            <div
              className="
              absolute right-0 top-[200px] h-[350px]
              w-[350px] rounded-full bg-[#737CE688] blur-3xl"
            />
            {/* <LightBlurPoint top="300px" left="60px" size="50px" color="#FB4AFF99" /> */}

            <div
              className="before:scale-70 h-[650px]
             w-[1291px]
             sm:scale-85 lg:scale-90 2xl:h-[700px] 2xl:scale-95
             "
            >
              {yellowlist ? (
                <>
                  <Image
                    src={ylori}
                    alt="bg"
                    loading="eager"
                    width={1291}
                    height={650}
                    className="object-cover object-left-top"
                  />
                  <Image
                    src={ylmask}
                    alt="bg"
                    loading="eager"
                    width={1291}
                    height={650}
                    className="absolute left-0 top-0 animate-ylshinem object-cover object-left-top"
                  />
                  <Image
                    src={ylnaked}
                    alt="bg"
                    loading="eager"
                    width={1291}
                    height={650}
                    className="absolute left-0 top-0 animate-ylshinen object-cover object-left-top"
                  />
                </>
              ) : (
                <Image
                  src={whitelist ? wl_url : bg_url}
                  alt="bg"
                  loading="eager"
                  width={1291}
                  height={650}
                  className="object-cover object-left-top"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IFantasyPart;
