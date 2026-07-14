import { browser } from '$app/environment';

/** True when the user has asked for reduced motion. */
export function prefersReducedMotion(): boolean {
	return browser && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
