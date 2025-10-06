import { cn } from '@/app/utils/cn';
import { Progress } from '@nextui-org/react';

/**
 * this component is used to show the process of the dressher
 */

interface ProcessProps extends React.HTMLAttributes<HTMLDivElement> {
  processValue: number;
  taskStatus: number;
}

const DressHerProcess = ({ processValue, taskStatus }: ProcessProps) => {
  return (
    <div className="w-full lg:h-20">
      <Progress
        aria-label="task process"
        value={processValue}
        size="sm"
        className="w-full"
        classNames={{
          indicator: 'bg-gradient-to-r from-primary-500 to-primary-500',
        }}
      />

      <div className="relative -mt-[6px]">
        <div
          className={cn(
            'absolute left-0 h-2 w-2 rounded-full',
            taskStatus >= 0 ? 'bg-primary-500' : 'border-2 border-primary-500'
          )}
        />
        <div
          className={cn(
            'absolute left-1/2 h-2 w-2 rounded-full',
            taskStatus >= 1 ? 'bg-primary-500' : 'border-2 border-primary-500'
          )}
        />
        <div
          className={cn(
            'absolute right-0 h-2 w-2 rounded-full',
            taskStatus >= 2 ? 'bg-primary-500' : 'border-2 border-primary-500'
          )}
        ></div>
      </div>

      <div className="mt-4 flex flex-row justify-between text-sm lg:text-base">
        <div className="flex flex-col  items-center first:items-start last:items-end">
          <div className="text-primary-500">STEP 1</div>
          <div className="text-xs lg:text-sm"> Choose any wardrobe </div>
          <div className="text-xs lg:text-sm">
            {' '}
            or input your words to start
          </div>
        </div>
        <div className="flex flex-col  items-center first:items-start last:items-end">
          <div className="text-primary-500">STEP 2</div>
          <div className="text-xs lg:text-sm">Upload your images</div>
        </div>
        <div className="flex flex-col items-center first:items-start last:items-end">
          <div className="text-primary-500">STEP 3</div>
          <div className="text-xs lg:text-sm">
            <span className=" invisible">rmtyyds!!!!!!!!</span>Processing
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressHerProcess;
