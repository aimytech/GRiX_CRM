import { getTwentyWebsiteUrl } from '@/auth/utils/getTwentyWebsiteUrl';

describe('getTwentyWebsiteUrl', () => {
  it('returns the GRIX Notion legal URL for terms and privacy policy', () => {
    expect(getTwentyWebsiteUrl('en', 'terms')).toBe(
      'https://aimytech.notion.site/privacy-policy-en',
    );
    expect(getTwentyWebsiteUrl('ja-JP', 'privacy-policy')).toBe(
      'https://aimytech.notion.site/privacy-policy-en',
    );
  });
});
