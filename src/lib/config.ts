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
 * EmailJS delivers form submissions to the AI Forum inbox without a
 * backend. These three values are public-by-design: the public key
 * identifies the account for browser requests and grants no account
 * access. They match the account the previous aiforumbd.org site used,
 * so enquiries continue to arrive at CONTACT_EMAIL.
 *
 * Lock the account down in the EmailJS dashboard (Account -> Security):
 * add the production domains to "Allowed origins" so nobody else can
 * send through it. Override any value at build time with the matching
 * VITE_EMAILJS_* environment variable; if any is blank, the forms
 * render a mailto fallback instead. See CONTENT-TODO.md.
 */
/** CI sets unset secrets to an empty string, so blank means "use the default". */
function envOr(value: unknown, fallback: string): string {
	return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

export const EMAILJS_SERVICE_ID = envOr(import.meta.env.VITE_EMAILJS_SERVICE_ID, 'service_czczrwq');
export const EMAILJS_TEMPLATE_ID = envOr(import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 'template_lbdoy56');
export const EMAILJS_PUBLIC_KEY = envOr(import.meta.env.VITE_EMAILJS_PUBLIC_KEY, 'Yj2jipxpTQMZBo3k9');

export const FORMS_ENABLED =
	EMAILJS_SERVICE_ID.length > 0 && EMAILJS_TEMPLATE_ID.length > 0 && EMAILJS_PUBLIC_KEY.length > 0;

export const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

/** Shown as "Last updated" on the Terms, Privacy, and Cookies pages. */
export const LEGAL_UPDATED = 'August 2026';
