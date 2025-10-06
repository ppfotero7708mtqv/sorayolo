'server only';
import { cookies } from 'next/headers';
import { UserInfo } from '../interfaces/userInfo';

export async function serverGetUserInfo() {
  const cookie = cookies();

  let userInfoValue = cookie.get('userInfo')?.value;

  if (!userInfoValue) {
    return {
      isLogin: false,
      userId: undefined,
      firstName: undefined,
      lastName: undefined,
      userEmail: undefined,
    };
  } else {
    const userInfo: UserInfo = JSON.parse(userInfoValue);
    return userInfo;
  }
}

export default serverGetUserInfo;
