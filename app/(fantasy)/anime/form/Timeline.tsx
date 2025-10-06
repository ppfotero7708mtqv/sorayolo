'use client';

import AddSapphire from '@/app/components/gem/AddSapphire';
import { SapphireIcon } from '@/app/components/gem/GemIcon';
// @ts-ignore

const Timeline = () => {
  const showGems = true;

  return (
    <div className="text-sm sm:text-base">
      {showGems && (
        <div className="flex flex-row items-center gap-2 text-base">
          <div className=" text-md font-bold"> One Generation = </div>
          <div>
            <SapphireIcon className="h-6 w-6"></SapphireIcon>
          </div>
          <div> 25</div>
          <div>Gems</div>
          <AddSapphire className="h-4 w-4"></AddSapphire>
        </div>
      )}
      <ul className=" mt-5 list-inside list-disc">
        <li>
          Step 1: Choose an Anime model <span className="text-red-500">*</span>{' '}
        </li>
        <li> Step 2: Select different tags </li>
        <li> Step 3: You can write your own prompt </li>
      </ul>
    </div>
  );
};

export default Timeline;
