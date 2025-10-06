import { NameLogo, OverlayLogo } from '@/app/components/Logo';
import Link from 'next/link';
import { FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { company, getHost } from '../ServerHost';

const socialIcons = [
  {
    icon: FaXTwitter,
    label: 'Twitter',
    link: 'https://twitter.com/sorapixai',
  },
  { icon: FaDiscord, label: 'Discord', link: 'https://discord.gg/5DxbaQz5' },
];

const FooterPart = async () => {
  const host = await getHost();
  const domain = host.includes('sorapix') ? 'sorapix.ai' : 'ifantasy.ai';
  const name = host.includes('sorapix') ? 'SoraPix' : 'iFantasy';
  return (
    <footer className="bg-black p-6 text-white/90">
      <div className="mx-auto flex w-full max-w-[1280px] flex-wrap items-center justify-between">
        {' '}
        <div className="flex items-center">
          <OverlayLogo className="mr-2" />
          <NameLogo name={name} />
        </div>
        {host.includes('sorapix') && (
          <div className="flex items-center gap-2">
            <span className="whitespace-nowrap">Community</span>{' '}
            {socialIcons.map((social, index) => (
              <a
                key={index}
                aria-label={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary-500 p-1 hover:bg-primary-600 focus:outline-none focus:ring focus:ring-primary-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        )}
        <div className="flex items-center gap-2 py-3">
          <Link
            href={'mailto:customer@' + domain}
            target="_blank"
            className="text-xs font-semibold text-white/90 hover:text-white"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy-policy"
            target="_blank"
            className="text-xs font-semibold text-white/90 hover:text-white"
          >
            Privacy policy
          </Link>
          <Link
            href="/terms-of-service"
            target="_blank"
            className="text-xs font-semibold text-white/90 hover:text-white"
          >
            Terms of service
          </Link>
          <Link
            href="/refund-policy"
            target="_blank"
            className="text-xs font-semibold text-white/90 hover:text-white"
          >
            Refund Policy
          </Link>
          <Link
            href="/about-us"
            target="_blank"
            className="text-xs font-semibold text-white/90 hover:text-white"
          >
            About Us
          </Link>
        </div>
        <span className="whitespace-nowrap">@2023-2024 {await company()}</span>{' '}
      </div>
    </footer>
  );
};

export default FooterPart;
