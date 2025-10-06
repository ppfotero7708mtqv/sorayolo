'use client';

import AddSapphire from '@/app/components/gem/AddSapphire';
import { RubineIcon, SapphireIcon } from '@/app/components/gem/GemIcon';
import useGemData from '@/app/hooks/useGems';
import { cn } from '@/app/utils/cn';
import { Tooltip } from 'antd/lib';
import { useEffect, useState } from 'react';
// @ts-ignore

const GemPanel = ({ className }: { className: string }) => {
  const { gemData } = useGemData();
  const getRemainingDays = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // 获取下个月的第一天
    const nextMonth = new Date(currentYear, currentMonth + 1, 1);

    // 计算剩余天数
    const remainingDays = Math.floor(
      (nextMonth.valueOf() - currentDate.valueOf()) / (1000 * 60 * 60 * 24)
    );

    return remainingDays;
  };

  const [remainDay, setRemainDay] = useState(0);
  useEffect(() => {
    setRemainDay(getRemainingDays());
  });

  const showGems = true;
  if (!showGems) {
    return null;
  }

  return (
    <div
      className={cn(
        'flex min-w-[240px] flex-row items-end justify-between text-xs font-bold lg:text-base',
        className
      )}
    >
      <Tooltip
        title={`${gemData.PG_GEM_EPHEMERAL} Gems will expire in ${remainDay} days. `}
      >
        <div className="flex flex-row gap-4 ">
          {/* rubine */}
          <div className="flex flex-row items-center gap-2">
            <RubineIcon className="h-6 w-6" />
            <div className="min-w-6 text-center text-sm font-semibold text-primary-400">
              {gemData.PG_GEM_EPHEMERAL > 999999 ? (
                <div className="flex items-center justify-center">
                  <span className="pr-1 text-2xl">≈</span> Infinite
                </div>
              ) : (
                gemData.PG_GEM_EPHEMERAL
              )}
            </div>
          </div>

          {/* sapphire */}
          <div className="flex flex-row items-center gap-2">
            <SapphireIcon className="h-6 w-6" />
            <div className="min-w-6 text-center text-sm font-semibold text-primary-400">
              {gemData.PG_GEM_PERMANENT > 999999 ? (
                <div className="flex items-center justify-center">
                  <span className="pr-1 text-2xl">≈</span> Infinite
                </div>
              ) : (
                gemData.PG_GEM_PERMANENT
              )}
            </div>
            <AddSapphire className="h-4 w-4" />
          </div>
        </div>
      </Tooltip>
    </div>
  );
};

export default GemPanel;
