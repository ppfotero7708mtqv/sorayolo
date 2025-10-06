import { token } from '@/app/interfaces/pricing';
import { UserInfo } from '@/app/interfaces/userInfo';
import PerGemSVG from '@/app/styles/svg/sapphire.svg';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { SubscriptionUrlGenerator } from '../SubscriptionUrlGenerator';
import { OnSaleSvg } from './StoreSvgs';

interface Props {
  loginInfo: UserInfo;
  token: token;
  successUrl: string;
}

const GemPopularCard = (props: Props) => {
  const link = SubscriptionUrlGenerator(
    props.token.usd_amount,
    props.successUrl,
    props.loginInfo
  );

  const baseAmount = parseFloat(props.token.token_amount);

  return (
    <div className="relative order-1 md:order-2 xl:order-2">
      <div className="absolute left-1/2 top-0 flex h-10 w-full -translate-x-1/2 -translate-y-[60%] transform items-start justify-center rounded-xl bg-teal-400 pt-2 shadow">
        <div className="animate-bounce whitespace-nowrap font-['Poppins'] text-[0.8rem] font-bold text-black">
          MOST POPULAR
        </div>
      </div>
      <Card className="relative flex h-full max-w-screen-md flex-col items-center justify-start gap-9 rounded-xl bg-gradient-to-t from-fuchsia-300 to-white px-12 py-12 backdrop-blur-2xl sm:px-6">
        <div className="absolute left-[5px] top-[5px] h-[50px] w-[50px]">
          <OnSaleSvg />
        </div>
        <div className="relative h-12 w-12">
          <div className="absolute left-0 top-0 h-12 w-12" />
          <Image src={PerGemSVG} alt="Permanent Gems" height="44" width="38" />
        </div>
        <div className="flex h-[70%] flex-col items-center justify-end gap-5">
          <div className="inline-flex items-end justify-center gap-2 pb-[25%]">
            <div className="font-['Open Sans'] text-2xl font-normal leading-normal text-fuchsia-700">
              {baseAmount}
            </div>
            <div className="font-['Open Sans'] text-base font-light text-black">
              Gems
            </div>
          </div>
          {props.loginInfo.isLogin ? (
            <a
              href={link}
              className="inline-flex items-center justify-center gap-3 self-stretch rounded-3xl border-2 bg-white px-10 py-3 shadow"
            >
              <div className="font-['Noto Sans SC'] text-center text-base font-semibold leading-none text-fuchsia-700">
                PURCHASE
              </div>
            </a>
          ) : (
            <Link
              href="/auth?prev_url=/store"
              className="inline-flex items-center justify-center gap-3 self-stretch rounded-3xl border-2 bg-white px-14 py-3 shadow"
            >
              <div className="font-['Noto Sans SC'] text-center text-base font-semibold leading-none text-fuchsia-700">
                PURCHASE
              </div>
            </Link>
          )}
          <div className="font-['Open Sans'] text-base font-normal leading-none text-fuchsia-700">
            ${props.token.usd_amount}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default GemPopularCard;
