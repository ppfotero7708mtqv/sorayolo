import Image from 'next/image';
import Link from 'next/link';
import { cn } from '../utils/cn';
import logo from './logo.png';

const NameLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex h-[32px] items-center text-2xl font-semibold text-white">
      <div className="mr-2"> {name} </div>
    </div>
  );
};

const PornGenLogo = () => {
  <div className="flex h-[32px] items-center text-2xl font-semibold text-white">
    <div className="mr-2"> Porn </div>
    <div className="rounded-md bg-lime-500 px-2 py-1"> Gen</div>
  </div>;
};

const OverlayLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn('relative h-[32px] w-[32px] scale-75', className)}>
      <Image src={logo} alt="Logo" height={32} width={32} />
    </div>
  );
};

const FontLogo = ({
  l_str = 'Pron',
  r_str = 'Gen',
  link = '/',
}: {
  l_str: string;
  r_str: string;
  link?: string;
}) => {
  return (
    <Link href={link}>
      <div className="flex h-[32px] items-center text-2xl font-semibold">
        <div className="mr-2"> {l_str} </div>
        <div className="rounded-md bg-primary-300 px-2 py-1">{r_str}</div>
      </div>
    </Link>
  );
};

export { FontLogo, NameLogo, OverlayLogo, PornGenLogo };
