import type { Partner } from './types';

/**
 * Organisations AI Forum Bangladesh has trained, partnered with, or
 * been hosted by. All are documented via events, the redesign brief,
 * or the official Facebook page. Rendered as text lockups until real
 * logo files are supplied (see CONTENT-TODO.md).
 */
export const partners: Partner[] = [
	{ name: 'Grameenphone', lockup: 'Grameenphone', kind: 'client' },
	{ name: 'Dhaka Stock Exchange', lockup: 'DSE', kind: 'client' },
	{ name: 'LankaBangla Securities PLC', lockup: 'LankaBangla', kind: 'client' },
	{ name: 'Sonali Intellect Limited', lockup: 'Sonali Intellect', kind: 'client' },
	{ name: 'OGSB Hospital & IRCH', lockup: 'OGSB & IRCH', kind: 'client' },
	{ name: 'Bangladesh Society of Physiologists', lockup: 'BSP', kind: 'client' },
	{ name: 'Pakistan Institute of Living and Learning', lockup: 'PILL', kind: 'client' },
	{ name: 'Bangladesh Energy and Power Research Council', lockup: 'BEPRC', kind: 'client' },
	{ name: 'UNICEF', lockup: 'UNICEF', kind: 'client' },
	{ name: 'United International University', lockup: 'UIU', kind: 'partner' },
	{ name: 'IRIIC', lockup: 'IRIIC', kind: 'partner' },
	{ name: 'AIMS Lab, UIU', lockup: 'AIMS Lab', kind: 'partner' },
	{ name: 'University of Dhaka', lockup: 'DU', kind: 'host-university' },
	{ name: 'BUET', lockup: 'BUET', kind: 'host-university' },
	{ name: 'BRAC University', lockup: 'BRAC University', kind: 'host-university' },
	{ name: 'North South University', lockup: 'NSU', kind: 'host-university' },
	{ name: 'Rajshahi University', lockup: 'RU', kind: 'host-university' }
];

export const trainingClients = partners.filter((p) => p.kind === 'client');
