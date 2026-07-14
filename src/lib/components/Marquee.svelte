<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		/** Seconds for one full loop */
		speed?: number;
	}

	let { children, speed = 36 }: Props = $props();
</script>

<div class="marquee" style:--speed="{speed}s">
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
	.marquee:hover .marquee-track {
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
