import AddSapphire from '@/app/components/gem/AddSapphire';
import { SapphireIcon } from '@/app/components/gem/GemIcon';
import { cn } from '@/app/utils/cn';
import { Button } from '@nextui-org/react';
import { LuLogOut } from 'react-icons/lu';
// @ts-ignore

export interface UploadImageProps {
  handleUpload: () => void;
  taskStatus: number;
  currentTab: string;
}

const DressherUploadImage = ({
  taskStatus,
  handleUpload,
  currentTab,
}: UploadImageProps) => {
  const showGems = true;
  return (
    <div
      onClick={handleUpload}
      className={cn(
        'absolute h-full w-full',
        'z-30 flex-col items-center justify-center',
        taskStatus <= 1 ? 'flex' : 'hidden'
      )}
    >
      <Button
        radius="full"
        className="h-12 w-12 bg-primary/50"
        isIconOnly
        aria-label="upload image"
        onClick={handleUpload}
      >
        <LuLogOut className="h-8 w-8 -rotate-90 text-white" />
      </Button>

      <div className="mt-2 text-center">
        <div className="text-base font-bold">Upload images</div>
        {/* <div className="text-sm"> or drop your images here </div> */}
      </div>

      {showGems && (
        <div className="mt-12">
          <div className="flex flex-row items-center gap-2 text-base">
            <div className=" font-bold"> One Generation = </div>
            <div>
              <SapphireIcon className="h-6 w-6"></SapphireIcon>
            </div>
            <div> {currentTab == 'wardrobe' ? 50 : 100}</div>
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

export default DressherUploadImage;
