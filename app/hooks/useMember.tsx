import { get } from 'lodash';
import useSWR from 'swr';
import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

import API from '../utils/api';
import useUserInfo from './useUserInfo';

/** update : server api only need uid */
const fetchVipStatus = async (uid: string) => {
  return await API.checkUserSubscriptionStatus(uid).catch((error) => {
    if (error instanceof Error) {
      console.error(error.name + ':' + error.message);
    }
  });
};

/** use zustand store */
type VipProps = {
  isMember: boolean;
  userId?: string;
  updateAt?: number; // date timestamp
};

type VipStore = {
  vipInfo: VipProps;
  setVipInfo: (vipInfo: VipProps) => void;
  clearVipInfo: () => void;
};

const useVipStore = create<VipStore>()(
  devtools(
    persist(
      (set) => ({
        vipInfo: { isMember: false },
        setVipInfo: (vipInfo: VipProps) => set(() => ({ vipInfo })),
        clearVipInfo: () => set(() => ({ vipInfo: { isMember: false } })),
      }),
      { name: 'vipInfo', storage: createJSONStorage(() => sessionStorage) }
    )
  )
);

export { useVipStore };

/**
 * multi page/file use this hook
 * so we useMember call useVipStore to follow previous logic
 */
export const useMember = () => {
  const userInfo = useUserInfo();

  let userId = '';
  if (userInfo && userInfo.userId) {
    userId = userInfo.userId;
  }

  const storedVipInfo = useVipStore.getState().vipInfo;

  let withinTTLAndSameUser = false;
  // Set default value to true since storedVipInfo may doesn't have userId in the beginning.
  let isSameUser = true;
  if (storedVipInfo && storedVipInfo.updateAt && storedVipInfo.userId) {
    const diffInMilliseconds = Math.abs(
      new Date().getTime() - storedVipInfo.updateAt
    );
    isSameUser = storedVipInfo.userId == userId;
    withinTTLAndSameUser =
      diffInMilliseconds / (1000 * 60 * 60 * 60) < 10 && isSameUser;
  }
  // Use a key that includes the userId for uniqueness
  const swrKey = userId ? `checkUserSubscriptionStatus/${userId}` : null;

  // If withinTTL is true, useSWR will not fetch data as the key is null.
  const { data: vipInfo, isLoading } = useSWR(
    withinTTLAndSameUser ? null : swrKey,
    () => fetchVipStatus(userId)
  );

  if (vipInfo) {
    const isMember = get(vipInfo, 'data.active');
    if (isMember && isSameUser) {
      useVipStore.getState().setVipInfo({
        isMember: isMember,
        userId: userId,
        updateAt: new Date().getTime(),
      });
    }
  }

  if (withinTTLAndSameUser) {
    return {
      isMember: storedVipInfo.isMember,
      loading: false,
    };
  } else {
    return {
      isMember: vipInfo ? get(vipInfo, 'data.active') : false,
      loading: isLoading,
    };
  }
};

export default useMember;
