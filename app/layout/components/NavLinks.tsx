import { Link, NavbarMenuItem } from '@nextui-org/react';

// @ts-ignore
import SignInUpOut from '../../components/SignInUpOut';

/** key: domain, val: nav link list */
const navItems = [
  { name: 'Home', href: '/', disable: false },
  { name: 'Wardrobe', href: '/wardrobe', disable: false },
  { name: 'FaceMorph', href: '/facemorph', disable: false },
  { name: 'ImageTool', href: '/imagetool', disable: false },
  { name: 'Anime', href: '/anime', disable: false },
  { name: 'Realistic', href: '/realistic', disable: true },
  { name: 'Store', href: '/store', disable: false },
  { name: 'Tutorial', href: '/tutorial', disable: true },
];

const NavLinks = ({
  isMobile = true,
  isLogin,
  handleLogout,
  newonOpen,
}: {
  isMobile?: boolean;
  isLogin: boolean;
  handleLogout: () => void;
  newonOpen: (op: string) => void;
}) => {
  // toto desktop
  if (!isMobile) {
    return null;
  }

  const NavItemsList = () =>
    navItems.map((item) => {
      if (item.disable) {
        return null;
      }
      return (
        <NavbarMenuItem
          key={item.href}
          className="mt-1 flex items-center justify-center"
        >
          <Link href={item.href} size="lg" color="foreground">
            <a className="p-2 text-2xl">{item.name}</a>
          </Link>
        </NavbarMenuItem>
      );
    });

  const ExtraInfo = () => (
    <NavbarMenuItem>
      <div className="mt-3 flex flex-row justify-center gap-4">
        {/* <div
            onClick={() => newonOpen('mobile')}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-200"
          >
            <CiMobile3 />
          </div> */}
        {/* <div
            onClick={() => newonOpen('share')}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary-200 p-2"
          >
            <IoShareSocialOutline />
          </div> */}
      </div>
    </NavbarMenuItem>
  );

  return (
    <>
      <NavItemsList />
      <SignInUpOut isLogin={isLogin} handleLogout={handleLogout} />
      <ExtraInfo />
    </>
  );
};

export default NavLinks;
