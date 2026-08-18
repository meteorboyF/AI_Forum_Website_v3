import type { Partner } from './types';

/**
 * Organisations AI Forum Bangladesh has trained, partnered with, or
 * been hosted by. All are documented via events, the redesign brief,
 * or the official Facebook page. Logo files are normalised to the same
 * square canvas so the strip renders with consistent sizing.
 */
export const partners: Partner[] = [
	{ name: 'LankaBangla Securities PLC', lockup: 'LankaBangla', logo: 'lankabangla.webp', kind: 'client' },
	{ name: 'Sonali Intellect Limited', lockup: 'Sonali Intellect', logo: 'sonali-intellect.webp', kind: 'client' },
	{ name: 'OGSB Hospital & IRCH', lockup: 'OGSB & IRCH', logo: 'ogsb-irch.webp', kind: 'client' },
	{ name: 'Bangladesh Society of Physiologists', lockup: 'BSP', logo: 'bsp.webp', kind: 'client' },
	{ name: 'Pakistan Institute of Living and Learning', lockup: 'PILL', logo: 'pill.webp', kind: 'client' },
	{ name: 'Bangladesh Energy and Power Research Council', lockup: 'BEPRC', logo: 'beprc.webp', kind: 'client' },
	{ name: 'UNICEF', lockup: 'UNICEF', logo: 'unicef.webp', kind: 'client' },
	{ name: 'United International University', lockup: 'UIU', logo: 'uiu.webp', kind: 'partner' },
	{ name: 'IRIIC', lockup: 'IRIIC', logo: 'iriic.webp', kind: 'partner' },
	{ name: 'AIMS Lab, UIU', lockup: 'AIMS Lab', logo: 'aims-lab.webp', kind: 'partner' },
];

export const trainingClients = partners.filter((p) => p.kind === 'client');
