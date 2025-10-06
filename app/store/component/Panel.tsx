'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const MonthCard = dynamic(() => import('./MonthCard'), {
  ssr: false,
});
const YearCard = dynamic(() => import('./YearCard'), { ssr: false });

import useMember from '@/app/hooks/useMember';
import { token } from '@/app/interfaces/pricing';
// @ts-ignore
import { UserInfo } from '@/app/interfaces/userInfo';
// @ts-ignore
import { SubscriptionUrlGenerator } from '../SubscriptionUrlGenerator';
import GemCard from './GemCard';
import GemPopularCard from './GemPopularCard';

interface Props {
  plans: any;
  tokens: any;
  consumptions: any;
  loginInfo: UserInfo;
}

const Panel = ({ plans, tokens, consumptions, loginInfo }: Props) => {
  const router = useParams();
  const { nextUrl } = router;

  let mostPopularToken: token = tokens[0];
  let otherTokens: token[] = [];

  for (let token of tokens) {
    if (token.tags === 'most_popular') {
      mostPopularToken = token;
    } else {
      otherTokens.push(token);
    }
  }

  const [successUrl, setSuccessUrl] = useState('');

  const { isMember } = useMember();

  const [showGems, setShowGems] = useState(true);
  const [showAnnual, setShowAnnual] = useState(true);

  useEffect(() => {
    // This code runs after the component has mounted, ensuring 'location' is defined
    const url = nextUrl
      ? location.origin + decodeURIComponent(nextUrl as string)
      : location.origin + '/profile';

    setSuccessUrl(url);
    setShowGems(true);
    // setShowAnnual(cookies.get('country') !== 'US');
  }, []);

  const isLogin = loginInfo.isLogin;

  const monthUrl = SubscriptionUrlGenerator('month', successUrl, loginInfo);
  const yearUrl = SubscriptionUrlGenerator('year', successUrl, loginInfo);

  const [selectedTab, setSelectedTab] = useState('subscribe');

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="mx-5 flex flex-col items-center justify-center gap-5 py-16">
        <div className="flex h-max flex-col items-center justify-center">
          <Tabs
            aria-label="Dynamic tabs"
            size="lg"
            radius="full"
            selectedKey={selectedTab}
            //@ts-ignore
            onSelectionChange={setSelectedTab}
          >
            <Tab key="subscribe" title="Subscription">
              <div className="mt-10">
                <div
                  className={`grid auto-cols-auto grid-flow-row items-stretch gap-10 ${showAnnual ? 'md:grid-cols-2' : ''}`}
                >
                  {showAnnual && (
                    <YearCard
                      isLogin={isLogin}
                      isMember={isMember}
                      link={yearUrl}
                      plan={plans.YEAR}
                    />
                  )}
                  <MonthCard
                    isLogin={isLogin}
                    isMember={isMember}
                    link={monthUrl}
                    plan={plans.MONTH}
                  />
                </div>
              </div>
            </Tab>
            {showGems && (
              <Tab key="gemsBundles" title="Gems Bundles">
                <div className="mt-10 grid auto-cols-auto grid-flow-row items-stretch gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                  <GemPopularCard
                    loginInfo={loginInfo}
                    token={mostPopularToken}
                    successUrl={successUrl}
                  />
                  {otherTokens.map((token, index) => (
                    <GemCard
                      key={index}
                      loginInfo={loginInfo}
                      token={token}
                      successUrl={successUrl}
                      index={index}
                    />
                  ))}
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
        {showGems && (
          <ul className="mx-5 mt-10 list-inside list-disc text-xs">
            <li> 1 use of Wardrobe = {consumptions.UNDRESS} Gems</li>
            <li> 1 use of Wardrobe Plus = {consumptions.UNDRESS_PRO} Gems</li>
            <li>
              Gems acquired through Gem Bundles never expire and you can use
              them whenever you want!
            </li>
            <li>
              Gems acquired through subscription will reset every 31 days and
              they DO NOT accumulate!
            </li>
          </ul>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="bg-[#ffcef1]"
        hideCloseButton={true}
        size={'2xl'}
      >
        <ModalContent>
          {(onClose) => (
            <div className="mx-4 my-4">
              <ModalHeader className="flex flex-col items-center justify-center gap-1">
                Your AI Girls are Sad to See You Go!
              </ModalHeader>
              <ModalBody className="my-3">
                <p>
                  {`We are sorry to hear that you are cancelling your subscription
              😭 Your feedback is valuable to us and we'd love to know if
              there's anything that I can do to make you happy. You can send
              an email to service@porngen.art with your account email to
              request a cancellation.`}
                </p>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
              Unsubscribe
            </Button> */}
                <Button color="secondary" onPress={onClose}>
                  Keep My Girls!
                </Button>
              </ModalFooter>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Panel;
