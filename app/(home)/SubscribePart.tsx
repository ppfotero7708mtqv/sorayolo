'use client';

import { token } from '@/app/interfaces/pricing';
import { Button } from '@nextui-org/react';
// @ts-ignore
import cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import homeGemsSVG from './component/homegem.svg';
import homeSubscribeSVG from './component/homesub.svg';

interface Props {
  tokens: any;
  plans: any;
}

const SubscribePart = ({ tokens, plans }: Props) => {
  const [showGems, setShowGems] = useState(true);
  const [showAnnual, setShowAnnual] = useState(false);
  let mostPopularToken: token = tokens[0];

  useEffect(() => {
    setShowGems(true);
    setShowAnnual(cookies.get('country') !== 'US');
  }, []);

  for (let token of tokens) {
    if (token.tags === 'most_popular') {
      mostPopularToken = token;
    }
  }
  const plan = plans.YEAR;
  const monthplan = plans.MONTH;

  const monthPrice = parseFloat((parseFloat(plan.usd_amount) / 12).toFixed(2));
  const baseAmount = parseFloat(mostPopularToken.token_amount);

  return (
    <div className="relative overflow-hidden bg-primary-500/10 pb-14">
      <div className="pointer-events-none absolute  h-full w-full bg-gradient-to-t from-[#BA00BA]/10 to-[#F1F1F1] opacity-60 blur-sm">
        <div
          className="
              absolute left-[-25vmax] top-[-25vmax] h-[50vmax]
              w-[50vmax] rounded-full bg-[#FB4AFF] blur-[100px]"
        />
        <div
          className="
              absolute bottom-[-25vmax] right-[-25vmax] h-[50vmax]
              w-[50vmax] rounded-full bg-[#737CE6] blur-[100px]"
        />
      </div>
      <div className="h-12 w-full text-center text-2xl font-bold text-primary-500"></div>
      <div className="flex h-fit flex-col justify-center gap-6 p-2 sm:flex-row xl:gap-16">
        <div className=" relative mx-6 sm:w-[400px] 2xl:w-[600px]">
          <div className="relative h-full rounded-xl bg-gradient-to-br from-[#3000BA] to-[#8E6CF1] px-10 py-9 text-white">
            <div className="my-4">
              <Image
                src={homeSubscribeSVG}
                alt="sub"
                width={40}
                height={40}
              ></Image>
            </div>
            <div>
              <span className=" mr-4 text-4xl font-semibold">
                ${showAnnual ? monthPrice : monthplan.usd_amount}
              </span>
              <span className="text-base">/mon</span>
            </div>
            {showAnnual && (
              <div className="mt-4 text-sm font-medium">
                ${plan.usd_amount} billed yearly only charge
              </div>
            )}

            <div className="mb-12 mt-4 flex flex-col items-start justify-start gap-2">
              {showGems && (
                <div className="inline-flex items-center justify-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    height="14"
                    className="text-fuchsia-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                    {showAnnual
                      ? plan.recurring_token.token_amount
                      : monthplan.recurring_token.token_amount}{' '}
                    instant Gems (refills monthly)
                  </div>
                </div>
              )}
              {showGems && showAnnual && (
                <div className="inline-flex items-center justify-start gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    height="14"
                    className="text-fuchsia-700"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                    Extra {plan.new_subscription_token.token_amount} Gems Upon
                    First Payment
                  </div>
                </div>
              )}

              <div className="inline-flex items-center justify-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="14"
                  className="text-fuchsia-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                  {showGems && 'Use Gems to '}Unlock Wardrobe / Wardrobe Plus
                  Feature
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="14"
                  className="text-fuchsia-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                  {showGems && 'Use Gems to '}Unlock Anime Feature
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="14"
                  className="text-fuchsia-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                  {showAnnual ? 4 : 2}K HD image quality
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="14"
                  className="text-fuchsia-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                  {showAnnual ? 'Much faster' : 'Fast'} speed for our services
                </div>
              </div>
              <div className="inline-flex items-center justify-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  height="14"
                  className="text-fuchsia-700"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="font-['Noto Sans SC'] text-xs font-medium text-white">
                  Priority in Queue
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full text-center">
              <Link href="/store">
                <Button
                  className="bg-white px-12 py-6 text-base font-bold text-[#3101BA]"
                  variant="shadow"
                  radius="full"
                >
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {showGems && (
          <div className=" relative mx-6 sm:w-[400px] 2xl:w-[600px]">
            <div className=" relative h-full rounded-xl bg-gradient-to-br from-[#BA00BA] to-[#8E6CF1]/25 px-10 py-9 text-white">
              <div className="my-4">
                <Image
                  src={homeGemsSVG}
                  alt="sub"
                  width={50}
                  height={50}
                ></Image>
              </div>
              <div>
                <span className=" mr-4 text-4xl font-semibold">
                  ${mostPopularToken.usd_amount}
                </span>
              </div>
              <div className="my-4 font-medium">
                <span>{baseAmount}</span>
                <span>Gems</span>
              </div>
              <div className="font-['Noto Sans SC'] mb-12 font-medium text-white">
                <p className="text-xs">Not enough gems?</p>
                <p className="text-xs">
                  Feeling a bit limited in choices?No problem! Gem Bundles get
                  you covered! You can get as many gems as you want right here
                  right now! Explore your fantasies and unleash your desires!
                </p>
              </div>
              <div className="absolute bottom-4 left-0 w-full text-center">
                <Link href={'/store'}>
                  <Button
                    className="bg-white px-12 py-6 text-base font-bold text-primary-500"
                    variant="shadow"
                    radius="full"
                  >
                    Gem Bundles
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscribePart;
