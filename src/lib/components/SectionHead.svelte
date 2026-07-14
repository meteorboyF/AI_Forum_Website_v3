<script lang="ts">
	import Reveal from './Reveal.svelte';

	interface Props {
		eyebrow?: string;
		title: string;
		lede?: string;
		align?: 'left' | 'center';
	}

	let { eyebrow, title, lede, align = 'left' }: Props = $props();
</script>

<Reveal class={align === 'center' ? 'text-center' : ''}>
	{#if eyebrow}
		<p class="eyebrow mb-3">{eyebrow}</p>
	{/if}
	<h2 class="text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
		{title}
	</h2>
	{#if lede}
		<p class="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 {align === 'center' ? 'mx-auto' : ''}">
			{lede}
		</p>
	{/if}
</Reveal>
