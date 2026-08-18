/**
 * Ref-counted body scroll lock. Overlays can stack (gallery modal +
 * lightbox, mobile menu): the body unlocks only when the last holder
 * releases, regardless of release order.
 */
let locks = 0;

export function lockScroll(): () => void {
	if (typeof document === 'undefined') return () => {};
	locks++;
	document.body.style.overflow = 'hidden';
	let released = false;
	return () => {
		if (released) return;
		released = true;
		locks = Math.max(0, locks - 1);
		if (locks === 0) document.body.style.overflow = '';
	};
}
