import { prefersReducedMotion } from '$lib/motion';

/**
 * Kinetic-type enhancement: nudges a variable font's weight axis as the
 * element scrolls through the top of the viewport. Subtle by design
 * (default 700 -> 560), rAF-throttled, disabled under reduced motion.
 */
export function weightShift(
	node: HTMLElement,
	opts: { from?: number; to?: number; range?: number } = {}
) {
	if (prefersReducedMotion()) return;

	const { from = 700, to = 560, range = 480 } = opts;
	let raf = 0;

	const update = () => {
		raf = 0;
		const t = Math.min(1, Math.max(0, -node.getBoundingClientRect().top / range));
		const wght = Math.round(from + (to - from) * t);
		node.style.fontVariationSettings = `'wght' ${wght}`;
	};

	const onScroll = () => {
		if (!raf) raf = requestAnimationFrame(update);
	};

	update();
	window.addEventListener('scroll', onScroll, { passive: true });

	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
			cancelAnimationFrame(raf);
		}
	};
}
