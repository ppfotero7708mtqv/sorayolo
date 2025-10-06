'use client';

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import dressher1 from './component/dressher1.webp';
import dressher2 from './component/dressher2.webp';
import dressher3 from './component/dressher3.webp';
import dressher4 from './component/dressher4.webp';
import dressher5 from './component/dressher5.webp';
import dressher6 from './component/dressher6.webp';
import dressher7 from './component/dressher7.webp';
import dressher8 from './component/dressher8.webp';
import dressher9 from './component/dressher9.webp';

const PageConfig = {
  title: 'Wardrobe',
  subtitle: 'Select and dress up your Anime girlfriend with a single click!',
  try: 'Try now',
  subscribe: 'Subscribe',
  imgs: [
    {
      src: dressher1,
      key: 'dressher1',
    },
    {
      src: dressher2,
      key: 'dressher2',
    },
    {
      src: dressher4,
      key: 'dressher4',
    },
    {
      src: dressher3,
      key: 'dressher3',
    },
    {
      src: dressher5,
      key: 'dressher5',
    },
    {
      src: dressher6,
      key: 'dressher6',
    },
    {
      src: dressher7,
      key: 'dressher7',
    },
    {
      src: dressher8,
      key: 'dressher8',
    },
    {
      src: dressher9,
      key: 'dressher9',
    },
  ],
};

const DressHerPart = () => {
  const [currentHoverImage, setCurrentHoverImage] = useState('');

  return (
    <div className="relative flex h-adapt-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute  h-full w-full bg-gradient-to-t from-[#BA00BA]/10 to-[#F1F1F1] opacity-60 blur-sm">
        <div
          className="
              absolute left-[-25vmax] top-[-25vmax] h-[50vmax]
              w-[50vmax] rounded-full bg-[#FB4AFF] blur-[100px]"
        />
        <div
          className="
              absolute bottom-[-25vmax] right-[-25vmax] h-[50vmax]
              w-[50vmax] rounded-full bg-[#737CE6] blur-[100px]"
        />
      </div>
      <div className="relative flex h-[94%] w-[94%] justify-center overflow-hidden rounded-xl shadow-[0_35px_60px_-15px_#999]">
        <div className="relative h-full w-full 2xl:w-[70%]">
          <div className="relative z-[2] flex w-full justify-end pr-16 pt-[88px]">
            <div className="flex w-[240px] flex-col items-end gap-4 xl:w-[40vw] xl:gap-10">
              <div className="text-3xl font-semibold text-primary-500 xl:mb-4 xl:text-[5vw]">
                {PageConfig.title}
              </div>
              <div className="text-right text-sm text-primary-500 xl:text-3xl">
                {PageConfig.subtitle}
              </div>
              <div className="flex w-[175px] flex-col gap-4 xl:w-[220px]">
                <Link href="/wardrobe">
                  <Button
                    className=" w-full bg-primary-500 px-12 py-2 text-background"
                    radius="full"
                  >
                    {PageConfig.try}
                  </Button>
                </Link>
                <Link href="/store">
                  <Button
                    className=" w-full bg-[white] px-12 py-2 text-primary-500"
                    radius="full"
                  >
                    {PageConfig.subscribe}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 z-[1] flex flex-row flex-nowrap justify-around overflow-x-clip overflow-y-visible 2xl:bottom-20 2xl:scale-150">
            {PageConfig.imgs.map((img) => {
              return (
                <div
                  key={img.key}
                  className={`min-w-[150px] transition-all ${currentHoverImage === '' ? img.key === 'dressher2' && '-translate-y-[76px] scale-[1.5]' : img.key === currentHoverImage && '-translate-y-[76px] scale-[1.5]'}`}
                >
                  <Image
                    src={img.src}
                    alt="homepage"
                    width={150}
                    height={200}
                    onMouseEnter={() => {
                      setCurrentHoverImage(img.key);
                    }}
                    onMouseLeave={() => {
                      setCurrentHoverImage('');
                    }}
                  ></Image>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressHerPart;
