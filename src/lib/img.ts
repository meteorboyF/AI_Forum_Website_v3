import { base } from '$app/paths';

/**
 * Resolve an optimised image by its logical name, e.g.
 * img('events/lankabangla') -> '{base}/images/events/lankabangla.webp'
 */
export function img(name: string): string {
	return `${base}/images/${name}.webp`;
}

/**
 * srcset for images that were exported with a -sm (half-width) variant:
 * hero banners, section banners, and event photos.
 */
export function imgSet(name: string, fullWidth: number): { src: string; srcset: string; sizes: string } {
	const small = Math.max(640, Math.round(fullWidth / 2));
	return {
		src: img(name),
		srcset: `${img(name + '-sm')} ${small}w, ${img(name)} ${fullWidth}w`,
		sizes: '100vw'
	};
}

export function brand(name: string): string {
	return `${base}/images/brand/${name}`;
}
