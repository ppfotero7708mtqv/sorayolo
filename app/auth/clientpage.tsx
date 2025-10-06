'use client';

import API from '@/app/utils/api';
import { auth, setUserInfo } from '@/app/utils/auth';
import { error } from '@/app/utils/message';
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Link,
  Tab,
  Tabs,
} from '@nextui-org/react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';
import { EyeFilledIcon } from './components/EyeFilledIcon';
import { EyeSlashFilledIcon } from './components/EyeSlashFilledIcon';

export const runtime = 'edge';

const Auth = () => {
  const [selected, setSelected] = useState<string | number>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAgeSelected, setIsAgeSelected] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [prev_url, setPrevUrl] = useState('/');

  const validPrevUrl = ['/', '/wardrobe', '/anime', '/store', '/profile'];

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#signup') {
        setSelected('sign-up');
      } else {
        setSelected('login');
      }
    };
    const checkSearch = () => {
      let splitArray = window.location.search.split('&');
      for (let i = 0; i < splitArray.length; i++) {
        let pattern = /\w*prev_url\w*/g;
        if (pattern.test(splitArray[i])) {
          let pre = splitArray[i].split('=')[1];
          for (let j = 0; j < validPrevUrl.length; j++) {
            if (validPrevUrl[j] === pre) {
              setPrevUrl(pre);
              return;
            }
          }
        }
      }
    };
    if (typeof window !== 'undefined') {
      checkHash();
      checkSearch();
      // Add hash change event listener
      window.addEventListener('hashchange', checkHash);

      // Remove event listener on cleanup
      return () => window.removeEventListener('hashchange', checkHash);
    }
  }, []);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalidEmail = useMemo(() => {
    if (email === '') return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const validatePassword = (value: string) =>
    value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i);

  const isInvalidPassword = useMemo(() => {
    if (password === '') return false;
    return validatePassword(password) ? false : true;
  }, [password]);

  async function emailPasswordSignIn(email: string, password: string) {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential?.accessToken;
      // The signed-in user info.
      const user = credential.user;
      // console.log(result);
      const createdUser = await API.createUser({
        firebase_id: user.uid,
        email: user.email,
        product_enum: 'APP_IMAGE_GEN',
      });
      console.log(createdUser);
      setUserInfo({
        isLogin: true,
        userId: createdUser.user_id,
        userEmail: createdUser.email,
      });
      return true;
    } catch (firebaseError: any) {
      const errorCode = firebaseError.code;
      const errorMessage = firebaseError.message;
      console.log(errorCode, errorMessage);
      if (errorCode === 'auth/invalid-credential') {
        error('Email or password is incorrect.');
      } else {
        error(errorCode);
      }
      return false;
    }
  }

  async function submitSignin(event: any) {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    let success = await emailPasswordSignIn(email, password);
    if (success) {
      window.location.assign('/');
    }
    setIsLoading(false);
  }

  async function emailPasswordSignup(
    email: string,
    password: string,
    user_id?: string
  ) {
    try {
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential?.accessToken;
      // The signed-in user info.
      const user = credential.user;
      // console.log(result);
      const createdUser = await API.createUser({
        user_id,
        firebase_id: user.uid,
        email: user.email,
        product_enum: 'APP_IMAGE_GEN',
      });
      console.log(createdUser);
      setUserInfo({
        isLogin: true,
        userId: createdUser.user_id,
        userEmail: createdUser.email,
      });
      return true;
    } catch (firebaseError: any) {
      const errorCode = firebaseError.code;
      const errorMessage = firebaseError.message;
      if (errorCode === 'auth/email-already-in-use') {
        error('Email already in use.');
      } else {
        error(errorCode);
      }
      console.log(error);
      return false;
    }
  }

  async function submitSignup(event: any) {
    event.preventDefault();
    if (!email || !password || !isAgeSelected) {
      return;
    }
    setIsLoading(true);
    let success = await emailPasswordSignup(email, password);
    if (success) {
      window.location.assign('/');
    }
    setIsLoading(false);
  }

  return (
    <div className="flex w-full flex-col">
      <Card className="w-full self-center rounded-lg bg-opacity-50 p-8 sm:max-w-md lg:w-2/5">
        <CardBody className="gap-5 overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  isInvalid={isInvalidEmail}
                  errorMessage={isInvalidEmail && 'Please enter a valid email'}
                  onValueChange={setEmail}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type={isVisible ? 'text' : 'password'}
                  onValueChange={setPassword}
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                      ) : (
                        <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                      )}
                    </button>
                  }
                />
                <div className="mt-3 flex justify-end gap-2">
                  <Button
                    fullWidth
                    color="danger"
                    onClick={submitSignin}
                    isLoading={isLoading}
                  >
                    Login
                  </Button>
                </div>
                <p className="text-center text-small">
                  Need to create an account?{' '}
                  <Link
                    size="sm"
                    onPress={() => setSelected('sign-up')}
                    className=" text-blue-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </Tab>
            <Tab key="sign-up" title="Sign up">
              <form className="flex h-[300px] flex-col gap-4">
                {/* <Input
                  isRequired
                  label="Name"
                  placeholder="Enter your name"
                  type="name"
                  onValueChange={setUsername}
                /> */}
                <Input
                  isRequired
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  isInvalid={isInvalidEmail}
                  errorMessage={isInvalidEmail && 'Please enter a valid email'}
                  onValueChange={setEmail}
                />
                <Input
                  isRequired
                  label="Password"
                  placeholder="Enter your password"
                  type={isVisible ? 'text' : 'password'}
                  onValueChange={setPassword}
                  isInvalid={isInvalidPassword}
                  errorMessage={
                    isInvalidPassword &&
                    'Please create a password that includes a minimum of 8 characters, combining both letters and numbers.'
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
                      ) : (
                        <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
                      )}
                    </button>
                  }
                />
                <div className="">
                  <Checkbox
                    isSelected={isAgeSelected}
                    onValueChange={setIsAgeSelected}
                    defaultSelected
                    color="success"
                  >
                    <span
                      className={`text-[10px] ${isAgeSelected ? '' : 'text-[red]'}`}
                    >
                      By clicking the checkbox, you will verify that you are
                      above age 18.
                    </span>
                  </Checkbox>
                </div>
                <div className=" flex justify-end gap-2">
                  <Button
                    fullWidth
                    color="danger"
                    onClick={submitSignup}
                    isLoading={isLoading}
                  >
                    Sign up
                  </Button>
                </div>
                <p className="text-center text-small">
                  Already have an account?{' '}
                  <Link
                    size="sm"
                    onPress={() => setSelected('login')}
                    className=" text-blue-500"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </Tab>
          </Tabs>
          {/* <div className="flex w-full items-center justify-center">
            <div className="flex-1 border-b-1 border-foreground/40"></div>
            <div className="mx-2">or</div>
            <div className="flex-1 border-b-1 border-foreground/40"></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              onClick={async () => {
                await googleSignInUp();
              }}
              className="flex w-full"
              startContent={<FcGoogle size={28} />}
              color="default"
              variant="flat"
            >
              <div className="ml-2">Continue with Google</div>
            </Button>

            <Button
              onClick={async () => {
                await facebookSignInUp();
              }}
              className="flex w-full"
              startContent={<FaFacebook size={28} />}
              color="default"
              variant="flat"
            >
              <div className="ml-2 ">Continue with Facebook</div>
            </Button>
          </div> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Auth;
