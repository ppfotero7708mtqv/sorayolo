// @ts-ignore
import Cookies from 'js-cookie';
import {
  getAuthorisationURLWithQueryParamsAndSetState,
  sendPasswordResetEmail,
} from 'supertokens-web-js/recipe/thirdpartyemailpassword';

import { UserInfo } from '../interfaces/userInfo';

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const app = initializeApp({
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

export const auth = getAuth(app);

const info =
  process.env.NODE_ENV === 'production'
    ? {
        redirect: process.env.NEXT_PUBLIC_REDIRECT_PROD,
        apiDomain: process.env.NEXT_PUBLIC_USERBILLING_SERVICE,
        apiBasePath: '/auth',
      }
    : {
        redirect: 'http://localhost:3000',
        apiDomain: process.env.NEXT_PUBLIC_USERBILLING_SERVICE,
        apiBasePath: '/auth',
      };

const generateEmailPasswordFormFields = (
  email: string,
  password: string
): { id: string; value: string }[] => {
  const formFields: { id: string; value: string }[] = [
    {
      id: 'email',
      value: email,
    },
    {
      id: 'password',
      value: password,
    },
  ];

  return formFields;
};

async function logoutClicked() {
  Cookies.remove('userInfo');
  window.location.href = '/';
}

async function sendEmailClicked(email: string) {
  try {
    const response = await sendPasswordResetEmail({
      formFields: [
        {
          id: 'email',
          value: email,
        },
      ],
    });

    if (response.status === 'FIELD_ERROR') {
      // one of the input formFields failed validaiton
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error);
        }
      });
    } else if (response.status === 'PASSWORD_RESET_NOT_ALLOWED') {
      // this can happen due to automatic account linking. Please read our account linking docs
    } else {
      // reset password email sent.
      window.alert('Please check your email for the password reset link');
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert('Oops! Something went wrong.');
    }
  }
}

async function googleSignInUp() {
  try {
    const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
      thirdPartyId: 'google',
      frontendRedirectURI: `${info.redirect}/auth/callback/google`,
    });

    window.location.assign(authUrl);
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert('Oops! Something went wrong.');
    }
  }
}

async function facebookSignInUp() {
  try {
    const authUrl = await getAuthorisationURLWithQueryParamsAndSetState({
      thirdPartyId: 'facebook',
      frontendRedirectURI: `${info.redirect}/auth/callback/facebook`,
    });

    window.location.assign(authUrl);
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert('Oops! Something went wrong.');
    }
  }
}

async function setUserInfo(userInfo: UserInfo) {
  userInfo.isLogin = true;
  Cookies.set('userInfo', JSON.stringify(userInfo), { expires: 90 });
  return userInfo;
}

export {
  facebookSignInUp,
  googleSignInUp,
  logoutClicked,
  sendEmailClicked,
  setUserInfo,
};
