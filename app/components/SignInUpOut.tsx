import { Button, Link } from '@nextui-org/react';

const SignInUpOut = ({
  isLogin,
  handleLogout,
}: {
  isLogin: boolean;
  handleLogout: () => void;
}) => {
  if (isLogin) {
    return (
      <div className="flex items-center justify-center">
        <Button
          color="primary"
          radius="sm"
          onClick={handleLogout}
          size="md"
          className="text-md mr-2 text-white"
        >
          Sign out
        </Button>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center">
        <Link href="/auth#signup">
          <Button
            color="primary"
            size="sm"
            radius="sm"
            className="text-md mr-2 text-white"
          >
            Sign up
          </Button>
        </Link>

        <Link href="/auth">
          <Button
            color="primary"
            radius="sm"
            size="sm"
            className="text-md h-[32px] bg-[#BA00BA]"
          >
            Sign in
          </Button>
        </Link>
      </div>
    );
  }
};

export default SignInUpOut;
