'use client';
// @ts-ignore
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { UserInfo } from '../interfaces/userInfo';

export function useUserInfo() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    isLogin: false,
    userId: undefined,
    firstName: undefined,
    lastName: undefined,
    userEmail: undefined,
  });

  useEffect(() => {
    async function fetchUserInfo() {
      const cachedData = Cookies.get('userInfo');

      if (cachedData) {
        try {
          const cachedUserInfo = JSON.parse(cachedData);
          setUserInfo(cachedUserInfo);
          return;
        } catch (error) {
          console.error('Error parsing userInfo cookie:', error);
        }
      } else {
        return;
      }
    }

    fetchUserInfo();
  }, []);

  return userInfo;
}

export default useUserInfo;
