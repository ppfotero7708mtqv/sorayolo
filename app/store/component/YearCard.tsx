import { plan } from '@/app/interfaces/pricing';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@nextui-org/react';
// @ts-ignore
import { CheckSvg } from './StoreSvgs';

interface Props {
  isLogin: boolean;
  isMember: boolean;
  link: string;
  plan: plan;
}

const YearCard = ({ isLogin, isMember, link, plan }: Props) => {
  const monthPrice = parseFloat((parseFloat(plan.usd_amount) / 12).toFixed(2));
  const showGems = true;

  return (
    <div className="relative max-w-screen-md">
      <div className="absolute left-1/2 top-0 flex h-10 w-full -translate-x-1/2 -translate-y-[60%] transform items-start justify-center rounded-xl bg-teal-400 pt-2 shadow">
        <div className="animate-bounce whitespace-nowrap font-['Poppins'] text-[0.8rem] font-bold text-black">
          MOST POPULAR
        </div>
      </div>
      <Card className="max-w-screen-md justify-between overflow-visible bg-gradient-to-t from-fuchsia-200 to-white p-5">
        <CardHeader className="mt-5">
          <div className="flex items-end justify-start gap-3">
            <div className="text-4xl font-bold leading-normal text-black">
              ${monthPrice}
            </div>
            <div className="text-md font-medium text-fuchsia-700">/ month</div>
          </div>
        </CardHeader>
        <div className="my-2 ml-3 text-sm font-medium text-black">
          Billed Yearly
        </div>
        <CardBody className="flex flex-col items-start justify-start gap-2">
          <div className="inline-flex items-center justify-start gap-4">
            <CheckSvg />
            <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
              ${plan.usd_amount} per Year
            </div>
          </div>
          {showGems && (
            <div className="inline-flex items-center justify-start gap-4">
              <CheckSvg />
              <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
                {plan.recurring_token.token_amount} Instant Gems (Refills
                Monthly)
              </div>
            </div>
          )}
          {showGems && (
            <div className="inline-flex items-center justify-start gap-4">
              <CheckSvg />
              <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
                Extra {plan.new_subscription_token.token_amount} Gems Upon First
                Payment
              </div>
            </div>
          )}
          <div className="inline-flex items-center justify-start gap-4">
            <CheckSvg />
            <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
              {showGems && 'Use Gems to '}Unlock Wardrobe / Wardrobe Plus
              Feature
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
              4K HD image quality
            </div>
          </div>
          <div className="inline-flex items-center justify-start gap-4">
            <CheckSvg />
            <div className="font-['Noto Sans SC'] text-xs font-medium text-black">
              Much faster speed for our services
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
    </div>
  );
};

export default YearCard;
