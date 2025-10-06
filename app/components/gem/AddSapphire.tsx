import { useGems } from '@/app/stores/gem';
import { Link } from '@nextui-org/react';
import React from 'react';

export interface AddSapphireProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const AddSapphire = (props: AddSapphireProps) => {
  const { sapphire, increaseSapphire } = useGems((s) => s);
  const pth = '/store?gem=true&nextUrl=dressher';

  return (
    <div {...props} className=" cursor-pointer">
      <Link
        href={pth}
        className=" flex h-4 w-4 items-center justify-center rounded-full bg-primary-100 text-center"
        aria-label="buy gems"
      >
        {/* plus svg */}
        <svg
          className=""
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.38462 0.384615C5.38462 0.172198 5.21242 0 5 0C4.78758 0 4.61538 0.172198 4.61538 0.384615V4.61538H0.384615C0.172198 4.61538 0 4.78758 0 5C0 5.21242 0.172198 5.38462 0.384615 5.38462H4.61538V9.61539C4.61538 9.8278 4.78758 10 5 10C5.21242 10 5.38461 9.8278 5.38461 9.61539V5.38462H9.61539C9.8278 5.38462 10 5.21242 10 5C10 4.78758 9.8278 4.61538 9.61539 4.61538H5.38462V0.384615Z"
            fill="#BA00BA"
          />
        </svg>
      </Link>
    </div>
  );
};

export default AddSapphire;
