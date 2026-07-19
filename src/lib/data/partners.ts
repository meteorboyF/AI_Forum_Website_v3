import type { Partner } from './types';

/**
 * Organisations AI Forum Bangladesh has trained, partnered with, or
 * been hosted by. All are documented via events, the redesign brief,
 * or the official Facebook page. Rendered as text lockups until real
 * logo files are supplied. Organisations without an official asset use
 * a restrained text fallback.
 */
export const partners: Partner[] = [
	{ name: 'Grameenphone', lockup: 'Grameenphone', kind: 'client' },
	{ name: 'Dhaka Stock Exchange', lockup: 'DSE', logo: 'dse.png', kind: 'client' },
	{ name: 'LankaBangla Securities PLC', lockup: 'LankaBangla', logo: 'lankabangla.png', kind: 'client' },
	{ name: 'Sonali Intellect Limited', lockup: 'Sonali Intellect', logo: 'sonali-intellect.png', kind: 'client' },
	{ name: 'OGSB Hospital & IRCH', lockup: 'OGSB & IRCH', logo: 'ogsb-irch.jpg', kind: 'client' },
	{ name: 'Bangladesh Society of Physiologists', lockup: 'BSP', logo: 'bsp.png', kind: 'client' },
	{ name: 'Pakistan Institute of Living and Learning', lockup: 'PILL', logo: 'pill.jpg', kind: 'client' },
	{ name: 'Bangladesh Energy and Power Research Council', lockup: 'BEPRC', logo: 'beprc.jpeg', kind: 'client' },
	{ name: 'UNICEF', lockup: 'UNICEF', logo: 'unicef.png', kind: 'client' },
	{ name: 'United International University', lockup: 'UIU', logo: 'uiu.webp', kind: 'partner' },
	{ name: 'IRIIC', lockup: 'IRIIC', logo: 'iriic.png', kind: 'partner' },
	{ name: 'AIMS Lab, UIU', lockup: 'AIMS Lab', logo: 'aims-lab.jpeg', kind: 'partner' },
	{ name: 'North South University', lockup: 'NSU', kind: 'host-university' },
];

export const trainingClients = partners.filter((p) => p.kind === 'client');
