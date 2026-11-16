const GRIX_LEGAL_URL = 'https://aimytech.notion.site/privacy-policy-en';

type TwentyWebsitePage = 'terms' | 'privacy-policy';

export const getTwentyWebsiteUrl = (
  _locale: string,
  _page: TwentyWebsitePage,
): string => GRIX_LEGAL_URL;
