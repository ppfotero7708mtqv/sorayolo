import Image from 'next/image';
import Link from 'next/link';
import animewebp from './component/anime.webp';

const PageConfig = {
  title: 'Anime',
  subtitle: 'Create your Anime girl with stunning features!',
  try: 'Try now',
  subscribe: 'Subscribe',
  img1: {
    src: animewebp,
    key: 'animewebp',
  },
};

const AnimePart = () => {
  return (
    <div className="relative flex h-adapt-screen items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute  h-full w-full bg-gradient-to-t from-[#BA00BA]/10 to-[#F1F1F1] opacity-60 blur-sm">
        <div
          className="
              absolute right-[-25vmax] top-[-25vmax] h-[50vmax]
              w-[50vmax] rounded-full bg-[#737CE6] blur-[100px]"
        />
        <div
          className="
              absolute bottom-[-25vmax] left-[-25vmax] h-[50vmax]
              w-[50vmax] rounded-full bg-[#FB4AFF] blur-[100px]"
        />
      </div>

      <div className="relative flex h-[94%] w-[94%] justify-center overflow-hidden rounded-xl shadow-[0_35px_60px_-15px_#999]">
        <div className="relative h-full w-full 2xl:w-[70%]">
          <div className="relative z-[2] flex w-full justify-start pl-16 pt-[88px]">
            <div className="flex w-[240px] flex-col items-start gap-4 xl:w-[40vw] xl:gap-10">
              <div className="text-3xl font-semibold text-primary-500 xl:mb-4 xl:text-[5vw]">
                {PageConfig.title}
              </div>
              <div className="text-left text-sm text-primary-500 xl:text-3xl">
                {PageConfig.subtitle}
              </div>
              <div className="flex w-[175px] flex-col gap-4 xl:w-[220px]">
                <Link href="/anime">
                  <button className=" w-full bg-primary-500 px-12 py-2 text-background">
                    {PageConfig.try}
                  </button>
                </Link>
                <Link href="/store">
                  <button className=" w-full bg-[white] px-12 py-2 text-primary-500">
                    {PageConfig.subscribe}
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="pointer-events-none z-[1] w-full">
            <div
              key={PageConfig.img1.key}
              className=" absolute bottom-[0px] right-0  2xl:scale-110"
            >
              <Image
                src={PageConfig.img1.src}
                alt="homepage"
                width={861}
                height={508}
                className="min-w-[760px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimePart;
