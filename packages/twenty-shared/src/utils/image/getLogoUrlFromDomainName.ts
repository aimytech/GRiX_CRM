const GRIX_LOGO_PATH = '/images/grix/logo.png';

export const sanitizeURL = (link: string | null | undefined) => {
  return link
    ? link
        .replace(/(^https?:\/\/)/i, '')
        .replace(/(^www\.)/i, '')
        .replace(/\/$/, '')
    : '';
};

const isGrixSalesDomain = (domain: string) => {
  const host = domain.toLowerCase();

  return host === 'grixsales.com' || host.endsWith('.grixsales.com');
};

export const getLogoUrlFromDomainName = (
  domainName?: string,
): string | undefined => {
  const sanitizedDomain = sanitizeURL(domainName);

  if (!sanitizedDomain) {
    return undefined;
  }

  if (isGrixSalesDomain(sanitizedDomain)) {
    return GRIX_LOGO_PATH;
  }

  return `https://twenty-icons.com/${sanitizedDomain}`;
};
