import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

const NavBack = ({ callbackurl }: { callbackurl: string }) => {
  return (
    <div className="">
      <Link
        href={callbackurl}
        className="flex flex-row items-center font-normal"
      >
        <FaArrowLeft className="text-bold" />
        <div className="ml-2"> Back </div>
      </Link>
    </div>
  );
};

export default NavBack;
