<script lang="ts">
	import type { Snippet } from 'svelte';
	import { prefersReducedMotion } from '$lib/motion';

	interface Props {
		children: Snippet;
		/** Stagger delay in ms once visible */
		delay?: number;
		/** Extra classes on the wrapper */
		class?: string;
	}

	let { children, delay = 0, class: cls = '' }: Props = $props();

	let visible = $state(false);

	function observe(node: HTMLElement) {
		if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
			visible = true;
			return;
		}
		const io = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					visible = true;
					io.disconnect();
				}
			},
			{ rootMargin: '0px 0px -10% 0px' }
		);
		io.observe(node);
		return { destroy: () => io.disconnect() };
	}
</script>

<div use:observe class="reveal {cls}" class:is-visible={visible} style:transition-delay="{delay}ms">
	{@render children()}
</div>

<style>
	.reveal {
		opacity: 0;
		transform: translateY(24px);
		transition:
			opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
			transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.reveal.is-visible {
		opacity: 1;
		transform: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.reveal {
			opacity: 1;
			transform: none;
			transition: none;
		}
	}
</style>
