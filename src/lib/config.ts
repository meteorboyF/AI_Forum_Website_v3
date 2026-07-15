/**
 * Site-wide configuration.
 *
 * SITE_URL is used for canonical URLs, Open Graph tags and the sitemap.
 * It should include the base path when deployed under one.
 * Swap to https://aiforumbd.org when the custom domain points here.
 */
export const SITE_URL = 'https://meteorboyf.github.io/AI_Forum_Website_v3';

export const SITE_NAME = 'AI Forum Bangladesh';

export const CONTACT_EMAIL = 'aiforumbd@gmail.com';

/**
 * Total professionals trained across all programmes. Set this to the
 * real figure supplied by the team (e.g. 500) and it appears in the
 * homepage hero and impact bar. While null, the site simply omits the
 * figure; it is never rendered as a zero or a placeholder.
 */
export const PROFESSIONALS_TRAINED: number | null = null;

export const SOCIALS = {
	facebook: 'https://www.facebook.com/aiforumbd.official',
	linkedin: 'https://www.linkedin.com/company/aiforumbd'
} as const;

/**
 * Web3Forms access key. This key is public-by-design (it routes
 * submissions to an inbox; it grants no account access). Restrict it to
 * the production domain in the Web3Forms dashboard: Settings -> Domain
 * restriction. See CONTENT-TODO.md.
 */
export const WEB3FORMS_ACCESS_KEY = '{{WEB3FORMS_ACCESS_KEY}}';

export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
