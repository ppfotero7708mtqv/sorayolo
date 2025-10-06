'use client';

import { useEffect, useState } from 'react';
import useMetadata from './useMetadata';

export default function InYellowList() {
  const metadata = useMetadata();
  const [yellowUndress, setYellowUndress] = useState(false);

  const undressYellowlist: string[] = [
    'porndudepornsite',
    'porndudeundress',
    'mly',
    'thepornator',
    'theporndude_vip',
  ];

  useEffect(() => {
    console.log(metadata);
    if (
      metadata.utm_source &&
      undressYellowlist.includes(metadata.utm_source)
    ) {
      setYellowUndress(true);
    }
  }, [metadata.utm_source]);

  return yellowUndress;
}
