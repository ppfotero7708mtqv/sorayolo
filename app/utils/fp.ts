import fingerprintjs from '@fingerprintjs/fingerprintjs';

// get braowser fingerprint
const getFingerprintVisitorId = async () => {
  const fp = await fingerprintjs.load();
  const result = await fp.get();
  return result.visitorId;
};

export default getFingerprintVisitorId;
