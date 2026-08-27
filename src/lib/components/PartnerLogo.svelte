<script lang="ts">
	import { base } from '$app/paths';
	import type { Partner } from '$lib/data/types';

	interface Props {
		partner: Partner;
		compact?: boolean;
	}

	let { partner, compact = false }: Props = $props();
</script>

<!-- Logos are transparent WebP trimmed to their artwork, so they sit directly
     on the section surface. The landscape box plus object-contain keeps their
     optical weight even: wide wordmarks use the width, round seals the height. -->
<div class:compact class="partner-logo flex shrink-0 items-center justify-center" title={partner.name}>
	{#if partner.logo}
		<img
			src={`${base}/images/brand/partners/${partner.logo}`}
			alt={partner.name}
			class="partner-logo-img max-h-full max-w-full object-contain"
			loading="lazy"
		/>
	{:else}
		<span class="font-display text-base font-bold text-ink-800">{partner.lockup}</span>
	{/if}
</div>

<style>
	.partner-logo {
		width: 10rem;
		height: 5rem;
	}

	.partner-logo.compact {
		width: 8rem;
		height: 4rem;
	}

	.partner-logo-img {
		transition: opacity 0.3s ease;
	}

	@media (prefers-reduced-motion: reduce) {
		.partner-logo-img {
			transition: none;
		}
	}
</style>
