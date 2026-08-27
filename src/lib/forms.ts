import {
	CONTACT_EMAIL,
	EMAILJS_ENDPOINT,
	EMAILJS_PUBLIC_KEY,
	EMAILJS_SERVICE_ID,
	EMAILJS_TEMPLATE_ID
} from '$lib/config';

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/** A labelled line in the enquiry body, e.g. ['Organisation', 'UIU'] */
export type EnquiryField = [label: string, value: string];

/**
 * Deliver an enquiry to the AI Forum inbox through EmailJS.
 *
 * The account's template renders `from_name`, `from_email`, `phone` and
 * `message`, so every extra field is also folded into the `message`
 * body: the email is complete even if the template is never updated.
 * Extra params are still sent individually so a richer template can
 * pick them up without a code change.
 *
 * A filled honeypot resolves successfully without sending anything.
 */
export async function sendEnquiry(options: {
	subject: string;
	name: string;
	email: string;
	phone?: string;
	fields: EnquiryField[];
	honeypot: string;
}): Promise<boolean> {
	const { subject, name, email, phone = '', fields, honeypot } = options;
	if (honeypot) return true;

	/** Body text: newlines are meaningful, so only trim and cap. */
	const clean = (value: string) => value.trim().slice(0, 4000);
	/**
	 * Anything a template might drop into a mail header (name, subject,
	 * phone, address) is flattened to one line. Header injection is not
	 * reachable today — isValidEmail rejects whitespace and the subjects
	 * are literals — but this keeps it unreachable if a template is ever
	 * rewired to use these params as From/Subject.
	 */
	const cleanLine = (value: string) =>
		clean(value)
			.replace(/[\u0000-\u001F\u007F]+/g, ' ')
			.trim();
	const present = fields.filter(([, value]) => value.trim().length > 0);

	const body = [
		`${subject}`,
		'',
		`Name: ${cleanLine(name)}`,
		`Email: ${cleanLine(email)}`,
		...(phone.trim() ? [`Phone: ${cleanLine(phone)}`] : []),
		...present.map(([label, value]) => `${label}: ${clean(value)}`),
		'',
		'Sent from the AI Forum Bangladesh website.'
	].join('\n');

	const templateParams: Record<string, string> = {
		subject: cleanLine(subject),
		title: cleanLine(subject),
		from_name: cleanLine(name),
		from_email: cleanLine(email),
		reply_to: cleanLine(email),
		to_email: CONTACT_EMAIL,
		phone: cleanLine(phone),
		message: body
	};
	for (const [label, value] of present) {
		// e.g. "Work email" -> work_email, so templates can use {{work_email}}.
		// Never let a field label overwrite a reserved param: a field called
		// "Message" must not replace the composed body the template renders.
		// `in` walks the prototype chain, so __proto__/constructor are skipped too.
		const key = label.toLowerCase().replace(/[^a-z0-9]+/g, '_');
		if (!(key in templateParams)) templateParams[key] = clean(value);
	}

	try {
		const res = await fetch(EMAILJS_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				service_id: EMAILJS_SERVICE_ID,
				template_id: EMAILJS_TEMPLATE_ID,
				user_id: EMAILJS_PUBLIC_KEY,
				template_params: templateParams
			})
		});
		return res.ok;
	} catch {
		return false;
	}
}

export function isValidEmail(email: string): boolean {
	return /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/.test(email.trim());
}

/** Optional field: empty passes, otherwise 6-20 digits with common separators. */
export function isValidPhone(phone: string): boolean {
	const value = phone.trim();
	if (!value) return true;
	return /^[+()\d][\d\s()+-]{5,19}$/.test(value);
}
