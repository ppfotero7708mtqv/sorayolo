import serverGetUserInfo from '@/app/utils/serverGetUserInfo';
import { getHost } from '../ServerHost';
import NavBarPage from './NavBarPage';

async function NavBar({ className }: { className?: string }) {
  const host = await getHost();
  const name = host.includes('sorapix') ? 'SoraPix' : 'iFantasy';
  const userInfo = await serverGetUserInfo();
  return (
    <NavBarPage isLogin={userInfo.isLogin} className={className} name={name} />
  );
}

export default NavBar;
