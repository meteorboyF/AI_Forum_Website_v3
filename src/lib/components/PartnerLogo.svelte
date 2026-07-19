<script lang="ts">
	import { base } from '$app/paths';
	import type { Partner } from '$lib/data/types';

	interface Props {
		partner: Partner;
		compact?: boolean;
	}

	let { partner, compact = false }: Props = $props();
</script>

<div
	class:compact
	class="partner-logo flex shrink-0 items-center justify-center bg-white px-4"
	title={partner.name}
>
	{#if partner.logo}
		<img
			src={`${base}/images/brand/partners/${partner.logo}`}
			alt={partner.name}
			class="max-h-full max-w-full object-contain"
			loading="lazy"
			width="176"
			height="72"
		/>
	{:else}
		<span class="font-display text-base font-bold text-ink-800">{partner.lockup}</span>
	{/if}
</div>

<style>
	.partner-logo {
		width: 11rem;
		height: 4.5rem;
		border: 1px solid rgb(15 23 42 / 0.08);
		border-radius: 6px;
	}

	.partner-logo.compact {
		width: 9rem;
		height: 3.75rem;
		padding: 0.625rem 0.875rem;
	}
</style>
