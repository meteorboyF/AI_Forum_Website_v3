<script lang="ts">
	import type { Snippet } from 'svelte';
	import { img } from '$lib/img';

	interface Props {
		eyebrow: string;
		title: string;
		lede?: string;
		/** Logical hero image name, e.g. 'hero/about'. A -sm variant must exist. */
		photo: string;
		photoAlt: string;
		children?: Snippet;
	}

	let { eyebrow, title, lede, photo, photoAlt, children }: Props = $props();
</script>

<section class="on-dark photo-duo scrim-b relative flex min-h-[56vh] items-end overflow-hidden text-white">
	<img
		src={img(photo + '-sm')}
		srcset="{img(photo + '-sm')} 960w, {img(photo)} 1920w"
		sizes="100vw"
		alt={photoAlt}
		class="absolute inset-0 h-full w-full object-cover"
		width="1920"
		height="1280"
		fetchpriority="high"
	/>
	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 pt-36 pb-14 sm:px-8 lg:px-12 lg:pb-20">
		<p class="eyebrow mb-5">{eyebrow}</p>
		<h1 class="max-w-5xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
			<span class="line-mask"><span>{title}</span></span>
		</h1>
		{#if lede}
			<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">{lede}</p>
		{/if}
		{#if children}
			<div class="mt-9 flex flex-wrap gap-4">
				{@render children()}
			</div>
		{/if}
	</div>
</section>
