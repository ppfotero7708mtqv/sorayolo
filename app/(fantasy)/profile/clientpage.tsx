import serverGetUserInfo from '@/app/utils/serverGetUserInfo';
import Account from './components/Account';
import LoginModal from './components/LoginModal';
import UnsubscribeModal from './components/UnsubscribeModal';

export const runtime = 'edge';

async function Profile() {
  const userInfo = await serverGetUserInfo();

  return (
    <div>
      <Account loginInfo={userInfo} />

      {/* <div className="w-full px-[5vw] font-medium">
        <div className="text-start text-3xl text-black lg:text-4xl">
          Get More
        </div>
        <div className="mt-[2.2vh] flex w-full flex-row rounded-2xl border-2 border-[#c3c3c3] px-[1.4vw] py-[30px] text-sm lg:mt-[5vh]">
          <div className="flex w-[40%] flex-col pr-[20px] text-[14px] text-black lg:pr-[40px] lg:text-[20px]">
            <div className="w-full text-right">
              Invite friends to earn Gems!
            </div>
            <div className="mt-[3.4vh] w-full text-right md:mt-[3.1vh]">
              url
            </div>
          </div>
          <div className="flex w-[60%] flex-col text-[14px] font-normal">
            friends num
          </div>
        </div>
      </div> */}

      <LoginModal isLogin={userInfo.isLogin} />
      <UnsubscribeModal />
    </div>
  );
}

export default Profile;
