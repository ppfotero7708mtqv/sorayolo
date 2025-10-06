import { Image } from '@nextui-org/react';

interface ImageSlideProps {
  background_url: string;
  foreground_url: string;
}

const ImageSlide = ({ background_url, foreground_url }: ImageSlideProps) => {
  return (
    <div
      className="
          relative
          block
          h-[360px]
          w-[492px]
        "
    >
      <Image
        alt="处理后"
        draggable="false"
        className="h-full w-full"
        src={background_url}
      />
      <span
        className="
          absolute
          bottom-4
          right-4
          z-10
          flex
          w-[62px]
          items-center
          justify-center
          rounded-md
          bg-zinc-500
          text-sm
          text-white
        "
      >
        Undress
      </span>

      <div
        className="
            absolute
            left-0
            top-0
            z-10
            h-full
            w-full
            overflow-hidden
            rounded-md
        "
      >
        <div
          className="
              relative
              h-full
              w-full
              "
        >
          <div
            className="
              absolute
              left-0
              top-0
              h-full
              animate-wmove
              overflow-hidden
              "
            id="ImagBox"
            style={{ width: '50%' }}
          >
            <Image
              alt="原图"
              src={foreground_url}
              className="
                  -z-10
                  h-[360px]
                  w-[492px]
                "
              style={{
                objectFit: 'cover',
                objectPosition: 'left top',
              }}
            />
            <span
              className="
              absolute
              bottom-4
              left-4
              flex
              w-[62px]
              items-center
              justify-center
              rounded-md
              bg-zinc-500
              text-sm
              text-white
              "
            >
              Original
            </span>
          </div>
          <div
            className="z-100 absolute top-0 -ml-[28px] h-full w-[56px]
              animate-lrmove
              before:absolute
              before:left-[50%]
              before:top-0
              before:-ml-px
              before:h-full
              before:w-[2px]
              before:bg-white
              before:content-['']
              "
            id="balHandle"
            style={{
              left: '50%',
              background:
                'url(https://tools.kuque.com/static/img/icon/icon_comparison.png) 50% no-repeat',
              backgroundSize: '56px 56px',
              opacity: 1,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
