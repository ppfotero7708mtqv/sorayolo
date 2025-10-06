'use client';

import { useEffect, useState } from 'react';
import API from '../utils/api';
import useUserInfo from './useUserInfo';

// This function should be outside of the hook since it doesn't rely on React state or lifecycle
export const fetchGemData = async (uid: string) => {
  try {
    const data = await API.checkUserGem(uid);
    return data;
  } catch (error) {
    console.error('Error fetching gem data:', error);
    return { PG_GEM_EPHEMERAL: 0, PG_GEM_PERMANENT: 0 };
  }
};

export const useGemData = () => {
  let userId = '';
  const userInfo = useUserInfo();

  if (userInfo && userInfo.userId) {
    userId = userInfo.userId;
  }

  const [gemData, setGemData] = useState({
    PG_GEM_EPHEMERAL: 0,
    PG_GEM_PERMANENT: 0,
  });

  if (userId === 'None') {
    // @ts-ignore
    userId = null;
  }

  useEffect(() => {
    if (userId) {
      fetchGemData(userId).then(setGemData);
    }
  }, [userId]);

  // Correctly handle missing data
  const normalizedGemData = {
    PG_GEM_EPHEMERAL: gemData.PG_GEM_EPHEMERAL || 0,
    PG_GEM_PERMANENT: gemData.PG_GEM_PERMANENT || 0,
  };

  return { gemData: normalizedGemData };
};

export default useGemData;
