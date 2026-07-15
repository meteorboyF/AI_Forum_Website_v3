<script lang="ts">
	import { prefersReducedMotion } from '$lib/motion';

	interface Props {
		value: number;
		suffix?: string;
		duration?: number;
	}

	let { value, suffix = '', duration = 1600 }: Props = $props();

	// SSR and no-JS views render the final value; the count-up is a
	// client-side enhancement that animates 0 -> value on scroll-in.
	// svelte-ignore state_referenced_locally
	let display = $state(value);

	function run(node: HTMLElement) {
		if (prefersReducedMotion() || !('IntersectionObserver' in window)) return;
		display = 0;
		const io = new IntersectionObserver((entries) => {
			if (!entries[0].isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const tick = (now: number) => {
				const t = Math.min(1, (now - start) / duration);
				// ease-out cubic
				const eased = 1 - Math.pow(1 - t, 3);
				display = Math.round(value * eased);
				if (t < 1) requestAnimationFrame(tick);
			};
			requestAnimationFrame(tick);
		});
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}
</script>

<span use:run aria-label="{value}{suffix}">{display.toLocaleString('en-GB')}{suffix}</span>
