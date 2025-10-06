import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const PageConfig = {
  title: 'Realistic',
  subtitle:
    'Realistic-Create Your Realistic Girls in just a few words. Design the character of your fantasy.',
  try: 'Try now',
  subscribe: 'Subscribe',
  img1: {
    src: 'https://ifantasy.s3.amazonaws.com/iFantasy/Home+Page/homepage_0125_4_1.png',
  },
  img2: {
    src: 'https://ifantasy.s3.amazonaws.com/iFantasy/Home+Page/homepage_0125_4_2.png',
  },
};

const RealisticPart = () => {
  return (
    <div className=" overflow-hidden bg-gradient-to-t from-[#BA00BA]/10  via-[#BA00BA]/5 to-[#BA00BA]/10 sm:min-h-adapt-screen ">
      <div className="flex w-full justify-start pr-6 pt-[88px]">
        <div className="flex w-full flex-col items-end gap-4">
          <h1 className="text-3xl font-semibold text-primary-500">
            {PageConfig.title}
          </h1>
          <h2 className="text-right text-sm text-primary-500">
            {PageConfig.subtitle}
          </h2>
          <div className="flex w-[175px] flex-col gap-4">
            <Link href={'/realistic'}>
              <Button
                className=" w-full bg-primary-500 px-12 py-2 text-background"
                radius="full"
              >
                {PageConfig.try}
              </Button>
            </Link>
            <Link href={'/store'}>
              <Button
                className=" w-full bg-primary-500/10 px-12 py-2 text-primary-500"
                radius="full"
              >
                {PageConfig.subscribe}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none z-10 flex h-[550px] w-full flex-row flex-nowrap overflow-clip">
        <div className=" relative">
          <div
            key={PageConfig.img2.src}
            className=" scale-115 absolute bottom-0 right-0 z-10"
          >
            <Image
              src={PageConfig.img2.src}
              alt="homepage"
              width={250}
              height={400}
            />
          </div>

          <div
            key={PageConfig.img1.src}
            className=" scale-115 relative -ml-12 w-full"
          >
            <Image
              src={PageConfig.img1.src}
              alt="homepage"
              width={450}
              height={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisticPart;
