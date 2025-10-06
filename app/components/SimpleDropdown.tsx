'use client';

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';

import React from 'react';

import {
  FaBars,
  FaChevronDown,
  HiOutlineLogin,
  LuSettings,
  MdNightlight,
  MdOutlineLightMode,
} from '@/app/components/Icon';

import { useTheme } from 'next-themes';
import { logoutClicked } from '../utils/auth';
import { cn } from '../utils/cn';

function SimpleDropdown({ children }: { children?: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-wrap gap-4">
      <Dropdown
        onOpenChange={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <DropdownTrigger>
          <Button color="primary" variant="flat" className="capitalize">
            <FaBars className="mr-2" />
            <FaChevronDown
              className={cn(
                'transition-transform duration-200',
                open ? 'rotate-180' : 'rotate-0'
              )}
            />
          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Dropdown Variants"
          color="primary"
          variant="flat"
        >
          {/* light or dark mode */}
          <DropdownItem
            key="mode"
            textValue="Mode"
            startContent={
              theme === 'dark' ? (
                <MdNightlight className="mr-2" />
              ) : (
                <MdOutlineLightMode className="mr-2" />
              )
            }
            onPress={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
          >
            {theme}
          </DropdownItem>

          {/* setting handle */}
          <DropdownItem
            textValue="Setting"
            key="setting"
            startContent={<LuSettings className="mr-2" />}
            showDivider
            href="/apps/settings"
          >
            Setting
          </DropdownItem>

          {/* login */}

          {true ? (
            <DropdownItem
              textValue="Login"
              key="login"
              startContent={<HiOutlineLogin className="mr-2 rotate-180" />}
              href="/auth"
            >
              login
            </DropdownItem>
          ) : (
            <DropdownItem
              textValue="Logout"
              key="logout"
              startContent={<HiOutlineLogin className="mr-2" />}
              onPress={() => {
                logoutClicked();
                setOpen(false);
              }}
            >
              Exit
            </DropdownItem>
          )}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default SimpleDropdown;
