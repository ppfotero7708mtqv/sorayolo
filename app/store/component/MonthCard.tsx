import { plan } from '@/app/interfaces/pricing';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';
import { CheckSvg } from './StoreSvgs';
// @ts-ignore

interface Props {
  isLogin: boolean;
  isMember: boolean;
  link: string;
  plan: plan;
}

const MonthCard = ({ isLogin, isMember, link, plan }: Props) => {
  const yearPrice = parseFloat((parseFloat(plan.usd_amount) * 12).toFixed(2));
  const showGems = true;

  return (
    <Card
      fullWidth={true}
      isFooterBlurred={true}
      className="max-w-screen-md justify-between bg-gradient-to-t from-zinc-200 to-white p-5"
    >
      <CardHeader className="mt-5">
        <div className="flex items-end justify-start gap-3">
          <div className="text-4xl font-bold leading-normal text-black">
            ${plan.usd_amount}
          </div>
          <div className="text-md font-medium text-fuchsia-700">/ month</div>
        </div>
      </CardHeader>
      <div className="my-2 ml-3 text-sm font-medium text-black">
        Billed Monthly
      </div>
      <CardBody className="flex flex-col items-start justify-start gap-2">
        <div className="inline-flex items-center justify-start gap-4">
          <CheckSvg />
          <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
            ${yearPrice} per Year
          </div>
        </div>
        {showGems && (
          <div className="inline-flex items-center justify-start gap-4">
            <CheckSvg />
            <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
              {plan.recurring_token.token_amount} Instant Gems (Refills Monthly)
            </div>
          </div>
        )}
        <div className="inline-flex items-center justify-start gap-4">
          <CheckSvg />
          <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
            {showGems && 'Use Gems to '}Unlock Wardrobe / Wardrobe Plus Feature
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-4">
          <CheckSvg />
          <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
            {showGems && 'Use Gems to '}Unlock Anime Feature
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-4">
          <CheckSvg />
          <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
            2K HD image quality
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-4">
          <CheckSvg />
          <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
            Fast speed for our services
          </div>
        </div>
        <div className="inline-flex items-center justify-start gap-4">
          <CheckSvg />
          <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
            Priority in Queue
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-center">
        {isLogin ? (
          isMember ? (
            <div className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 bg-white px-14 py-3 shadow">
              <div className="font-['Noto Sans SC'] text-center text-base font-bold leading-none text-fuchsia-700">
                Current Plan
              </div>
            </div>
          ) : (
            <Link
              href={link}
              className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 bg-white px-14 py-3 shadow"
            >
              <div className="font-['Noto Sans SC'] text-center text-base font-bold leading-none text-fuchsia-700">
                Choose plan
              </div>
            </Link>
          )
        ) : (
          <Link
            href="/auth?prev_url=/store"
            className="inline-flex items-center justify-center gap-3 rounded-3xl border-2 bg-white px-14 py-3 shadow"
          >
            <div className="font-['Noto Sans SC'] text-center text-base font-bold leading-none text-fuchsia-700">
              Choose plan
            </div>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default MonthCard;
