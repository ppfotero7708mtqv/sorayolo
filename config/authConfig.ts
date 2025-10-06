import SessionWebJs from 'supertokens-web-js/recipe/session';
import ThirdPartyEmailPasswordWebJs from 'supertokens-web-js/recipe/thirdpartyemailpassword';
import { SuperTokensConfig } from 'supertokens-web-js/types';

const info =
  process.env.NODE_ENV === 'production'
    ? {
        appName: 'imagegen',
        apiDomain: process.env.NEXT_PUBLIC_USERBILLING_SERVICE,
        apiBasePath: '/auth',
      }
    : {
        appName: 'imagegen',
        apiDomain: process.env.NEXT_PUBLIC_USERBILLING_CANARY,
        apiBasePath: '/auth',
      };

export const appInfo = info;

export const frontendConfig = (): SuperTokensConfig => {
  return {
    // @ts-ignore
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordWebJs.init({
        preAPIHook: async (context) => {
          let url = context.url;
          let requestInit = context.requestInit;

          let action = context.action;
          if (action === 'EMAIL_PASSWORD_SIGN_UP') {
            requestInit = {
              ...requestInit,
              headers: {
                ...requestInit.headers,
                'Product-Enum': 'APP_IMAGE_GEN',
                'Decoda-Client': 'WEB',
              },
            };
          } else if (action === 'THIRD_PARTY_SIGN_IN_UP') {
            requestInit = {
              ...requestInit,
              headers: {
                ...requestInit.headers,
                'Product-Enum': 'APP_IMAGE_GEN',
                'Decoda-Client': 'WEB',
              },
            };
          }

          return {
            requestInit,
            url,
          };
        },
      }),
      SessionWebJs.init(),
    ],
  };
};
