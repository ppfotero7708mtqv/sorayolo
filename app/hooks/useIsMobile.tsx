import { useMediaQuery } from 'react-responsive';

/** keep same with tailwindcss `sm` size */

export const useIsMobile = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' });
  return {
    isMobile,
  };
};
