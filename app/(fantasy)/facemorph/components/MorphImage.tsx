import AddSapphire from '@/app/components/gem/AddSapphire';
import { SapphireIcon } from '@/app/components/gem/GemIcon';

const MorphImage = () => {
  return (
    <div className=" flex h-full min-h-[400px] w-full flex-col items-center justify-center">
      <div className="mt-2 text-center">
        <div className="text-xl font-bold">Click &quot;Morph Now!&quot;</div>
      </div>

      <div className="mt-12">
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
    </div>
  );
};

export default MorphImage;
