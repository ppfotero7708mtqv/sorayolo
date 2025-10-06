'use client';
import useGemData from '@/app/hooks/useGems';
import useMember from '@/app/hooks/useMember';
import { UserInfo } from '@/app/interfaces/userInfo';
import EphGemSVG from '@/app/styles/svg/rubine.svg';
import PerGemSVG from '@/app/styles/svg/sapphire.svg';
import { logoutClicked } from '@/app/utils/auth';
import { Button } from '@nextui-org/react';
import { get } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';

function Account({ loginInfo }: { loginInfo: UserInfo }) {
  const isMember = useMember();
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
  const remainDay = getRemainingDays();
  return (
    <div className="flex w-full flex-row flex-wrap px-[5vw] pt-[3vw] font-medium">
      <div className="mb-[5vw] mr-[5vw]  w-[320px] lg:w-[50vw]">
        <div className="text-start text-3xl text-black lg:text-4xl">
          My Account
        </div>
        <div className="mt-[2.2vh] flex w-full flex-row rounded-2xl border-2 border-[#c3c3c3] px-[1.4vw] py-[30px] text-sm lg:mt-[5vh]">
          <div className="flex w-[30%] flex-col pr-[20px] text-[14px] text-black lg:pr-[40px] lg:text-[20px]">
            <div className="w-full text-right">Name: </div>
            <div className="mt-[3.4vh] w-full text-right md:mt-[3.1vh]">
              Email:
            </div>
            {/* <div className="mt-[3.4vh] w-full text-right md:mt-[3.1vh]">
                Password
              </div> */}
            <div className="mt-[3.4vh] w-full text-right md:mt-[3.1vh]">
              Subscription:
            </div>
            <div className="mt-[3.4vh] w-full text-right md:mt-[3.1vh]">
              Actions:
            </div>
          </div>
          <div className="flex w-[70%] flex-col text-[14px] font-normal lg:w-[80%] lg:text-[14px]">
            <div className="">
              <span className="rounded-md p-1 text-black transition-colors">
                {loginInfo.firstName} {loginInfo.lastName}
              </span>
            </div>
            <div className="mt-[3.4vh] md:mt-[3.1vh]">
              <span className="rounded-md p-1 text-black transition-colors">
                {get(loginInfo, 'userEmail', '')}
              </span>
            </div>
            {/* TODO */}
            <div className="mt-[3.4vh] md:mt-[3.1vh]">
              <span className="z-[-1] animate-streamer rounded-lg bg-streamer-color bg-[length:400%] px-[16px] py-[4px] text-white">
                {isMember ? 'Active' : <Link href="/store">Get Sora Plus</Link>}
              </span>
            </div>
            {/* <div className="mt-[3.4vh] md:mt-[3.1vh]">
                <Link href="/findPassword" passHref legacyBehavior>
                  <a className="rounded-md bg-[#f9d8f9c7] p-1 text-black transition-colors hover:bg-[#ffb7fec7]">
                    Change Password
                  </a>
                </Link>
              </div> */}
            <div className="mt-[3.1vh] flex gap-3 md:mt-[2.5vh]">
              <Button
                className="bg-[#f9d8f9c7] hover:bg-[#ffb7fec7]"
                onClick={logoutClicked}
              >
                <span className="cursor-pointer rounded-md  p-1 text-black transition-colors ">
                  Sign Out
                </span>
              </Button>
              {/* <Button
                  className="bg-[#f9d8f9c7] hover:bg-[#ffb7fec7]"
                  onClick={handleReset}
                >
                  <span className="cursor-pointer rounded-md  p-1 text-black transition-colors ">
                    Reset Password
                  </span>
                </Button> */}
            </div>
          </div>
        </div>
      </div>
      {/* Gems */}
      <div className="w-[340px] font-medium lg:w-[30vw]">
        <div className="text-start text-3xl text-black lg:text-4xl">Gems</div>
        <div className="mt-[2.2vh] w-full rounded-2xl border-2 border-[#c3c3c3] px-[6px]  py-[30px] lg:mt-[5vh]">
          <div className="mb-4 flex flex-row pl-4">
            <Image
              src={EphGemSVG}
              alt="Permanent Gems"
              height="30"
              width="30"
            />
            <span className="mx-2 text-xl text-[#c261c0]">
              {' '}
              {gemData.PG_GEM_EPHEMERAL} Gems{' '}
            </span>
            <span className="ml-3">
              Expire in{' '}
              <span className="mx-2 text-xl text-[#c261c0]">{remainDay}</span>{' '}
              days
            </span>
          </div>
          <div className="flex flex-row pl-4">
            <Image
              src={PerGemSVG}
              alt="Permanent Gems"
              height="30"
              width="30"
            />
            <span className="mx-2 text-xl text-[#c261c0]">
              {' '}
              {gemData.PG_GEM_PERMANENT} Gems
            </span>
            <Link href="/store">
              <span className="z-[1] mx-3 animate-streamer cursor-pointer rounded-lg bg-streamer-color bg-[length:400%] px-[16px] py-[7px] text-white">
                PURCHASE
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
