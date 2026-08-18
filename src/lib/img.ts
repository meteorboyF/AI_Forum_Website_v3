import { base } from '$app/paths';

/**
 * Resolve an optimised image by its logical name, e.g.
 * img('events/lankabangla') -> '{base}/images/events/lankabangla.webp'
 */
export function img(name: string): string {
	return `${base}/images/${name}.webp`;
}

export function brand(name: string): string {
	return `${base}/images/brand/${name}`;
}
