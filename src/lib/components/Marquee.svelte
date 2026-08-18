<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		/** Seconds for one full loop */
		speed?: number;
	}

	let { children, speed = 36 }: Props = $props();
</script>

<!-- Focusable so keyboard users can pause the motion, matching the hover
     behaviour (WCAG 2.2.2); the tabindex is deliberate. -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div class="marquee" style:--speed="{speed}s" tabindex="0" role="marquee" aria-label="Partner logos; the strip pauses while hovered or focused">
	<div class="marquee-track">
		{@render children()}
	</div>
	<div class="marquee-track" aria-hidden="true">
		{@render children()}
	</div>
</div>

<style>
	.marquee {
		display: flex;
		overflow: hidden;
		user-select: none;
		gap: 3rem;
		mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
	}
	.marquee-track {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		gap: 3rem;
		min-width: 100%;
		justify-content: space-around;
		animation: scroll var(--speed) linear infinite;
	}
	.marquee:hover .marquee-track,
	.marquee:focus-within .marquee-track,
	.marquee:focus .marquee-track {
		animation-play-state: paused;
	}
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 3rem));
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.marquee {
			flex-wrap: wrap;
			mask-image: none;
		}
		.marquee-track {
			animation: none;
			flex-wrap: wrap;
			min-width: 0;
		}
		.marquee-track[aria-hidden='true'] {
			display: none;
		}
	}
</style>
