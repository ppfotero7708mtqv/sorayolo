'use client';

// @ts-ignore
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

const CustomerService = () => {
  const pathname = usePathname();
  const [isBugReportVisible, setIsBugReportVisible] = useState(true);

  const tawkMessengerRef = useRef();

  const handleCloseClick = () => {
    // @ts-ignore
    tawkMessengerRef.current.hideWidget();
    setIsBugReportVisible(false);
  };

  return (
      <>
        {isBugReportVisible && (
          <div
            className="
            fixed bottom-6 right-3 z-50
            h-[75px] w-[75px]
          "
          >
            <TawkMessengerReact
              propertyId="65f15f8f9131ed19d9795dae"
              widgetId="1hordqirv"
              ref={tawkMessengerRef}
            />
            <button
              onClick={handleCloseClick}
              className="absolute right-0 top-0"
              type="button"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        )}
      </>
  );
};

export default CustomerService;
