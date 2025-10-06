import { FontLogo } from './Logo';
import SimpleDropdown from './SimpleDropdown';

const DefaultNavBar = () => {
  return (
    <div className="w-full">
      <div className=" z-[60] flex flex-1 items-center justify-between px-7 py-5">
        <div className="ssm:space-x-3 pointer-events-auto flex items-center space-x-1.5">
          <FontLogo l_str="Pron" r_str="Gen" link="/" />
        </div>

        <div className="pointer-events-auto relative">
          <SimpleDropdown />
        </div>
      </div>
    </div>
  );
};

export default DefaultNavBar;
