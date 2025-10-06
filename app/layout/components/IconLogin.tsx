import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';

// @ts-ignore
import ProfileAvatar from '../../components/ProfileAvatar';
import SignInUpOut from '../../components/SignInUpOut';

const IconLogin = ({
  isLogin,
  handleLogout,
  newonOpen,
}: {
  isLogin: boolean;
  handleLogout: () => void;
  newonOpen: (op: string) => void;
}) => {
  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <button className="w-5 bg-transparent p-0 text-white data-[hover=true]:bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M3,6H21a1,1,0,0,1,0,2H3A1,1,0,0,1,3,6Z" />
              <path d="M3,11H21a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z" />
              <path d="M3,16H21a1,1,0,0,1,0,2H3a1,1,0,0,1,0-2Z" />
            </svg>
          </button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu>
        <DropdownItem>
          <ProfileAvatar className="flex items-center justify-center" />
        </DropdownItem>
        <DropdownItem>
          <div className="flex flex-row justify-around">
            {/* right icons */}
            {/* <div
                onClick={() => newonOpen('mobile')}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 p-2"
              >
                <CiMobile3 />
              </div> */}
            {/* <div
                onClick={() => newonOpen('share')}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 p-2"
              >
                <IoShareSocialOutline />
              </div> */}
          </div>
        </DropdownItem>

        <DropdownItem className="">
          <SignInUpOut isLogin={isLogin} handleLogout={handleLogout} />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default IconLogin;
