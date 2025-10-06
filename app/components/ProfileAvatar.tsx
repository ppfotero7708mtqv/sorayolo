import ProfileSVG from '@/app/styles/svg/avatar.svg';
import { Link } from '@nextui-org/react';
import Image from 'next/image';
import { ClassAttributes, HTMLAttributes, JSX } from 'react';

const ProfileAvatar = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div {...props}>
      <Link href="/profile">
        <Image src={ProfileSVG} alt="Profile" width={32} height={32} />
      </Link>
    </div>
  );
};

export default ProfileAvatar;
