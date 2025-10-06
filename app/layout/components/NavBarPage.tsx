'use client';

import { cn } from '@/app/utils/cn';
import {
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Slider,
  useDisclosure,
} from '@nextui-org/react';
import { useEffect, useRef, useState } from 'react';

import RubineSVG from '@/app/styles/svg/rubine.svg';
import { success } from '@/app/utils/message';
import copy from 'copy-to-clipboard';
// @ts-ignore
import Image from 'next/image';
import GemPanel from '../../(fantasy)/wardrobe/components/GemPanel';
import { NameLogo, OverlayLogo } from '../../components/Logo';
import ProfileAvatar from '../../components/ProfileAvatar';
import SignInUpOut from '../../components/SignInUpOut';
import { logoutClicked } from '../../utils/auth';
import IconLogin from './IconLogin';
import NavLinks from './NavLinks';
import pasteSVG from './paste.svg';

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

const NavBarPage = ({
  isLogin,
  className,
  name,
}: {
  isLogin: boolean;
  className?: string;
  name: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const newonOpen = async (op: string = 'rmt') => {
    setModolContentType(op);
    onOpen();
    // await API.getInviteCode(userInfo.userId)
    //   .then((res) => {
    //     success('Successfully Get Invite Code!');
    //     if (res.data) {
    //
    //     }
    //   })
    //   .catch(() => {
    //     error('failed to get Invite Code');
    //   });
  };

  const [modolContentType, setModolContentType] = useState('desktop');

  const [shareurl, setShareurl] = useState('https://sorapix.ai');
  const copiedRef = useRef<HTMLDivElement>(null);
  const copyurl = () => {
    copy(shareurl);
    success('Copied');
  };

  const handleGetInviteGems = () => {};
  const [showGems, setShowGems] = useState(true);
  useEffect(() => {
    setShowGems(true);
  }, []);

  return (
    <div className={cn('flex flex-row items-center', 'h-18', className)}>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="xl"
        classNames={{
          base: ' bg-[#000] text-white',
          content: '',
          menu: '',
          menuItem: 'text-right',
        }}
      >
        {/* desktop show */}
        <NavbarContent>
          <NavbarBrand>
            <Link href="/" color="foreground" size="lg">
              <OverlayLogo className="mr-2" />
              <NameLogo name={name} />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* desktop nav item */}
        <NavbarContent className="hidden sm:flex" justify="center">
          <div
            className="
                flex h-[40px] flex-row items-center justify-center gap-4 rounded-full bg-white/15
                px-6 py-1 text-white
              "
          >
            {navItems.map((item) => {
              if (item.disable) {
                return null;
              }
              return (
                <Link
                  as="a"
                  key={item.name}
                  href={item.href}
                  size="lg"
                  className="text-md flex w-full items-center justify-center text-white/55"
                >
                  <div className="z-50 font-medium">{item.name}</div>
                </Link>
              );
            })}
          </div>
        </NavbarContent>

        <NavbarContent justify="end" className="">
          {/* profile */}
          <NavbarItem className="flex gap-4">
            {/* right icons */}
            {/* <div
              onClick={() => newonOpen('mobile')}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/20 p-2"
            >
              <CiMobile3 />
            </div> */}
            {/* <div
              onClick={() => {
                newonOpen('share');
              }}
              className="flex cursor-pointer items-center justify-center rounded-full bg-white/20 p-2"
            >
              <IoShareSocialOutline />
            </div> */}
          </NavbarItem>

          <NavbarItem className="hidden min-w-[40px] lg:flex">
            <ProfileAvatar className="flex items-center justify-center" />
          </NavbarItem>

          {showGems && (
            <NavbarItem className="hidden lg:flex">
              <GemPanel className={isLogin ? '' : 'hidden'} />
            </NavbarItem>
          )}

          <NavbarItem className="hidden lg:flex">
            <SignInUpOut isLogin={isLogin} handleLogout={logoutClicked} />
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="hidden sm:flex lg:hidden">
          {showGems && (
            <NavbarItem className="flex lg:hidden">
              <GemPanel className={isLogin ? '' : 'hidden'} />
            </NavbarItem>
          )}
          <IconLogin
            isLogin={isLogin}
            handleLogout={logoutClicked}
            newonOpen={newonOpen}
          />
        </NavbarContent>

        <NavbarItem className="sm:hidden">
          <ProfileAvatar className="flex items-center justify-center" />
        </NavbarItem>

        {/* toggle button */}
        <NavbarMenuToggle aria-label={'mobile'} className="sm:hidden" />

        {/* mobile show */}
        <NavbarMenu>
          <NavLinks
            isLogin={isLogin}
            handleLogout={logoutClicked}
            newonOpen={newonOpen}
          />
        </NavbarMenu>
      </Navbar>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="no-scrollbar h-auto max-w-[300px] translate-y-[-200px] overflow-y-scroll bg-[#eeeeee] sm:max-w-[500px] sm:translate-y-0"
        hideCloseButton={true}
        size={'lg'}
      >
        <ModalContent>
          {() => (
            <div className="mx-4 my-4 text-[#c26ac0]">
              <ModalHeader className="flex flex-col items-start justify-start gap-1 py-0 pl-2 text-3xl font-bold 2xl:pl-6 2xl:text-6xl">
                {modolContentType === 'mobile' ? 'mobile' : 'Invite Friends'}
              </ModalHeader>
              <ModalBody className="my-0 px-0 pl-2 sm:pl-6">
                {modolContentType === 'mobile' ? (
                  <div>
                    <div>ios</div>
                    <div>android</div>
                  </div>
                ) : (
                  <div className="text-2xl">
                    <div className="mt-2 text-lg sm:text-2xl">
                      Invite friends to earn Gems!
                    </div>
                    {/* desktop */}
                    <div className="hidden flex-row items-center justify-start sm:flex">
                      <div className="no-scrollbar mt-2 w-[90%] overflow-scroll rounded-2xl bg-gray-100 px-4 py-1 text-sm">
                        {shareurl}
                      </div>
                      <div className="mt-1 flex flex-row">
                        <div className="mx-2 cursor-pointer" onClick={copyurl}>
                          <Image
                            src={pasteSVG}
                            alt="paste"
                            height="24"
                            width="24"
                          />
                        </div>
                      </div>
                    </div>
                    {/* desktop */}
                    <div className="my-5 hidden flex-row items-center justify-start sm:flex">
                      <div className="mt-2 flex h-[20vh] w-[80%] min-w-[200px] items-center justify-start rounded-2xl bg-fuchsia-500 px-8 py-5 text-black">
                        <Slider
                          label="Current Progress"
                          color="foreground"
                          size="sm"
                          step={1}
                          maxValue={5}
                          minValue={0}
                          marks={[
                            {
                              value: 0,
                              label: '0friend',
                            },
                            {
                              value: 1,
                              label: '1friend',
                            },
                            {
                              value: 2,
                              label: '2friend',
                            },
                            {
                              value: 3,
                              label: '3friend',
                            },
                            {
                              value: 4,
                              label: '4friend',
                            },
                            {
                              value: 5,
                              label: '5friend',
                            },
                          ]}
                          defaultValue={0}
                          className="hidden max-w-md sm:block"
                          orientation="horizontal"
                        />
                      </div>
                      <div
                        className="mx-2 flex w-[100px] cursor-pointer justify-center sm:w-[15%]"
                        onClick={handleGetInviteGems}
                      >
                        <Image
                          src={RubineSVG}
                          alt="Gems"
                          height="44"
                          width="38"
                        />
                      </div>
                    </div>
                    {/* mobile */}
                    <div className="mt-3 flex flex-row sm:hidden">
                      <div
                        className="mx-2 flex cursor-pointer flex-row rounded-sm bg-[#fedefe] px-1 py-2 text-sm"
                        onClick={copyurl}
                      >
                        <div className="mx-2 cursor-pointer">
                          <Image
                            src={pasteSVG}
                            alt="paste"
                            height="24"
                            width="24"
                          />
                        </div>
                        <div>Copy Link</div>
                      </div>
                      <div
                        className="mx-2 flex cursor-pointer flex-row rounded-sm bg-[#fedefe] px-1 py-2 text-sm"
                        onClick={handleGetInviteGems}
                      >
                        <div className="mx-2 cursor-pointer">
                          <Image
                            src={RubineSVG}
                            alt="rubine"
                            height="24"
                            width="24"
                          />
                        </div>
                        <div>My Gems</div>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default NavBarPage;
