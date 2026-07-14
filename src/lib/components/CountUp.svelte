<script lang="ts">
	import { prefersReducedMotion } from '$lib/motion';

	interface Props {
		value: number;
		suffix?: string;
		duration?: number;
	}

	let { value, suffix = '', duration = 1600 }: Props = $props();

	let display = $state(0);
	let done = $state(false);

	function run(node: HTMLElement) {
		if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
			display = value;
			done = true;
			return;
		}
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
				else done = true;
			};
			requestAnimationFrame(tick);
		});
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}
</script>

<span use:run aria-label="{value}{suffix}">{display.toLocaleString('en-GB')}{done ? suffix : ''}</span>
