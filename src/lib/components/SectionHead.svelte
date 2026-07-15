<script lang="ts">
	import Reveal from './Reveal.svelte';

	interface Props {
		eyebrow?: string;
		title: string;
		lede?: string;
		align?: 'left' | 'center';
		/** Oversized ghost numeral, e.g. '01' */
		number?: string;
	}

	let { eyebrow, title, lede, align = 'left', number }: Props = $props();
</script>

<Reveal class={align === 'center' ? 'text-center' : ''}>
	{#if number}
		<div class="rule-tick flex items-start gap-6 pt-6 sm:gap-10">
			<span class="sec-num" aria-hidden="true">{number}</span>
			<div class="pt-2">
				{#if eyebrow}
					<p class="eyebrow mb-3">{eyebrow}</p>
				{/if}
				<h2 class="font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em] text-balance">
					{title}
				</h2>
				{#if lede}
					<p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">{lede}</p>
				{/if}
			</div>
		</div>
	{:else}
		{#if eyebrow}
			<p class="eyebrow mb-3">{eyebrow}</p>
		{/if}
		<h2 class="font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em] text-balance">
			{title}
		</h2>
		{#if lede}
			<p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 {align === 'center' ? 'mx-auto' : ''}">
				{lede}
			</p>
		{/if}
	{/if}
</Reveal>
