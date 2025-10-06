'use client';

import { useEffect, useState } from 'react';
import { metadata } from '../interfaces/metadata';

const useMetadata = (): metadata => {
  const [utmParams, setUTMParams] = useState<metadata>({});

  const getUTMParametersFromQueryString = (): metadata => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let params: Partial<metadata> = {};
    urlParams.forEach((value, key) => {
      if (key.startsWith('utm_') && value) {
        params[key as keyof metadata] = value;
      }
    });
    return params as metadata;
  };

  const saveUTMParamsToLocalStorage = (params: metadata) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        localStorage.setItem(key, value);
      }
    });
  };

  const getUTMParamsFromLocalStorage = (): metadata => {
    return {
      utm_source: localStorage.getItem('utm_source') || undefined,
      utm_medium: localStorage.getItem('utm_medium') || undefined,
      utm_campaign: localStorage.getItem('utm_campaign') || undefined,
      utm_content: localStorage.getItem('utm_content') || undefined,
    };
  };

  useEffect(() => {
    let queryParams: metadata = getUTMParametersFromQueryString();

    if (Object.keys(queryParams).length > 0) {
      setUTMParams(queryParams);
      saveUTMParamsToLocalStorage(queryParams);
    } else {
      queryParams = getUTMParamsFromLocalStorage();
      setUTMParams(queryParams);
    }
  }, []);

  return utmParams;
};

export default useMetadata;
