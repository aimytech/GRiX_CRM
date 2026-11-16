import { type I18n } from '@lingui/core';
import { Img } from 'react-email';

const logoStyle = {
  marginBottom: '40px',
};

type LogoProps = {
  i18n: I18n;
};

const getEmailLogoUrl = () => {
  const serverUrl = (process.env.SERVER_URL ?? '').replace(/\/$/, '');

  if (serverUrl.length > 0) {
    return `${serverUrl}/images/grix/logo.png`;
  }

  return '/images/grix/logo.png';
};

export const Logo = ({ i18n }: LogoProps) => {
  return (
    <Img
      src={getEmailLogoUrl()}
      alt={i18n._('GRIX CRM logo')}
      width="40"
      height="40"
      style={logoStyle}
    />
  );
};
