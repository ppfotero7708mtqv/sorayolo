import AddSapphire from '@/app/components/gem/AddSapphire';
import { SapphireIcon } from '@/app/components/gem/GemIcon';
import { cn } from '@/app/utils/cn';
import Image from 'next/image';
import scanAfter from './scanafter.svg';
import scanBefore from './scanbefore.svg';

export interface UploadImageProps {
  handleUpload: () => void;
  taskStatus: number;
  isLeft: boolean;
}

const FaceSwapUploadImage = ({
  taskStatus,
  handleUpload,
  isLeft,
}: UploadImageProps) => {
  return (
    <div
      onClick={handleUpload}
      className={cn(
        'h-full min-h-[240px] w-full',
        'flex cursor-pointer flex-col items-center justify-center ',
        (isLeft ? taskStatus >= 1 : taskStatus >= 2) && 'opacity-0'
      )}
    >
      <Image
        src={isLeft ? scanBefore : scanAfter}
        alt="scan"
        height={100}
        width={100}
        className="my-2 w-[20%] sm:w-[30%]"
      />
      <div className="my-2 px-4 text-lg font-bold">
        Upload {isLeft ? 'original' : 'face'} image
      </div>
      <div className="px-4">Files supported .jpg .png .heic</div>
      {!isLeft && (
        <div className="mt-8 sm:hidden">
          <div className="flex flex-row items-center gap-2 text-base">
            <div className=" font-bold"> One Generation = </div>
            <div>
              <SapphireIcon className="h-6 w-6"></SapphireIcon>
            </div>
            <div>50</div>
            <div>Gems</div>
            <AddSapphire className="h-4 w-4"></AddSapphire>
          </div>

          <div className="my-2 text-center text-sm ">
            Files supported .jpg .png .heic
          </div>
        </div>
      )}
    </div>
  );
};

export default FaceSwapUploadImage;
