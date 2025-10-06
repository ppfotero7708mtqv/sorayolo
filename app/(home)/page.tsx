import serverGetPlans from '../store/serverGetPlans';
import AnimePart from './AnimePart';
import DressHerPart from './DressHerPart';
import Faqs from './Faqs';
import Partner from './Partner';
import SubscribePart from './SubscribePart';
import IFantasyPart from './iFantasyPart';
export const runtime = 'edge';
const HomePage = async () => {
  const { plans, tokens } = await serverGetPlans();
  return (
    <div>
      <IFantasyPart />
      {/* <ThemeSwitcher></ThemeSwitcher> */}
      <DressHerPart />
      <AnimePart />
      <SubscribePart plans={plans} tokens={tokens} />
      <Faqs />
      <Partner />
    </div>
  );
};

export default HomePage;
