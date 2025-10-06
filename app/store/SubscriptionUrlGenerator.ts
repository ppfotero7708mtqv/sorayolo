import useMetadata from '@/app/hooks/useMetadata';
import { UserInfo } from '../interfaces/userInfo';

const SubscriptionUrlGenerator = (
  interval: string | null,
  successUrl: string,
  userInfo: UserInfo
): string => {
  const baseURL = 'https://yolox.fun/pay/app_image_gen/' + interval;

  const metadata = useMetadata();

  if (userInfo && userInfo.userId) {
    const params = new URLSearchParams();
    params.append('user_id', userInfo.userId);
    params.append('success_url', successUrl);
    params.append('selector', '0');
    params.append('selected', 'card');

    Object.entries(metadata).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });

    const finalURL = `${baseURL}?${params.toString()}`;
    return finalURL;
  }
  return '';
};

// Use 'export' in front of the function you want to export
export { SubscriptionUrlGenerator };
