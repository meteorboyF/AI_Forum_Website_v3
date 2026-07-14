import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from '$lib/config';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Submit a record to Web3Forms. All values are plain strings; the
 * caller is responsible for validation. A filled honeypot resolves
 * successfully without sending anything (silently drops bots).
 */
export async function submitForm(
	subject: string,
	fields: Record<string, string>,
	honeypot: string
): Promise<boolean> {
	if (honeypot) return true;

	// Trim and cap every value defensively, whatever the caller did.
	const clean: Record<string, string> = {};
	for (const [k, v] of Object.entries(fields)) {
		clean[k] = v.trim().slice(0, 4000);
	}

	try {
		const res = await fetch(WEB3FORMS_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify({
				access_key: WEB3FORMS_ACCESS_KEY,
				subject,
				from_name: 'aiforumbd.org website',
				...clean
			})
		});
		const data = await res.json();
		return res.ok && data.success === true;
	} catch {
		return false;
	}
}

export function isValidEmail(email: string): boolean {
	return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(email.trim());
}
