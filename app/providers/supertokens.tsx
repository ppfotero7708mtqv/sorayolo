'use client';

import { frontendConfig } from '@/config/authConfig';
import React from 'react';
import SuperTokensWebJs from 'supertokens-web-js';

if (typeof window !== 'undefined') {
  SuperTokensWebJs.init(frontendConfig());
}

export const SuperTokensInit: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return <>{children}</>;
};
