'use client';

import { useEffect, useState } from 'react';
import useMetadata from './useMetadata';

export default function InWhiteList() {
  const metadata = useMetadata();
  const [undress, setUndress] = useState(false);

  const undressWhitelist: string[] = ['theresanaiforthat'];

  useEffect(() => {
    console.log(metadata);
    if (metadata.utm_source && undressWhitelist.includes(metadata.utm_source)) {
      setUndress(true);
    }
  }, [metadata.utm_source]);

  return undress;
}
