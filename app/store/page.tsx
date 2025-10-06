import serverGetUserInfo from '../utils/serverGetUserInfo';
import Panel from './component/Panel';
import serverGetPlans from './serverGetPlans';

export const runtime = 'edge';

const SubscribePage = async () => {
  const { plans, tokens, consumptions } = await serverGetPlans();
  const userInfo = await serverGetUserInfo();
  return (
    <Panel
      plans={plans}
      tokens={tokens}
      consumptions={consumptions}
      loginInfo={userInfo}
    />
  );
};

export default SubscribePage;
