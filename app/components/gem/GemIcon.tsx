import Image from 'next/image';

import RubineSVG from '@/app/styles/svg/rubine.svg';
import SapphireSVG from '@/app/styles/svg/sapphire.svg';

export interface GemIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RubineIcon = (props: GemIconProps) => (
  <Image src={RubineSVG} alt="Rubine" width={32} height={32} {...props} />
);

export const SapphireIcon = (props: GemIconProps) => (
  <Image src={SapphireSVG} alt="Sapphire" width={32} height={32} {...props} />
);
