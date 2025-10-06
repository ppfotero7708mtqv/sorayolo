'use server';
import { headers } from 'next/headers';

export async function getHost() {
  const forwardedHost = headers().get('x-forwarded-host')!;
  return forwardedHost;
}

export async function country() {
  const country = headers().get('CF-IPCountry') || 'US';
  return country;
}

export async function company() {
  const h = await getHost();
  if (h?.includes('sorapix')) {
    const c = await country();
    return c === 'US' ? 'Encoda AI' : 'Fantase AI Limited';
  } else {
    return 'Pear Soup Limited';
  }
}

export async function companyAddress() {
  const h = await getHost();
  if (h?.includes('sorapix')) {
    const c = await country();
    return c === 'US'
      ? '8 The Green,SuiteB, Dover, DE 19901'
      : 'No. 191, 1st floor, Tonle Sap(Rd.)Village 1, Sangkat ChroyChangva, Khan ChroyChangva, Phnom Penh,12110 Cambodia';
  } else {
    return " RM A, 19/F MAX SHARE CTR 367-373 KING'S RD NORTH POINT, HONG KONG";
  }
}

export async function companyCountry() {
  const h = await getHost();
  if (h?.includes('sorapix')) {
    const c = await country();
    return c === 'US'
      ? 'States if Delaware, United States'
      : 'Hong Kong SAR, China';
  } else {
    return 'Hong Kong SAR, China';
  }
}
