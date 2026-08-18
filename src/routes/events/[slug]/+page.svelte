<script lang="ts">
	import { tick } from 'svelte';
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { img } from '$lib/img';

	let { data } = $props();
	const event = $derived(data.event);

	const PREVIEW_COUNT = 12;
	let lightboxIndex = $state<number | null>(null);
	let showAllPhotos = $state(false);
	const galleryPhotos = $derived(
		event.gallery
			? Array.from({ length: event.gallery.count }, (_, index) => ({
					src: img(`events/galleries/${event.gallery!.folder}/${index + 1}`),
					alt: `${event.gallery!.label}, photograph ${index + 1}`
				}))
			: []
	);
	const visiblePhotos = $derived(showAllPhotos ? galleryPhotos : galleryPhotos.slice(0, PREVIEW_COUNT));

	let galleryGrid: HTMLElement | undefined = $state();

	async function showAll() {
		showAllPhotos = true;
		// The "Show all" button unmounts; keep keyboard users anchored by
		// moving focus to the first newly revealed photograph.
		await tick();
		galleryGrid?.querySelectorAll<HTMLElement>('button')[PREVIEW_COUNT]?.focus();
	}
</script>

<Seo title={event.title} description={event.summary} path={`/events/${event.slug}/`} ogImage={event.image} />

<section class="on-dark relative flex min-h-[68svh] items-end overflow-hidden text-white">
	{#if event.image}<img src={img(event.image)} srcset="{img(event.image + '-sm')} 800w, {img(event.image)} 1600w" sizes="100vw" alt={event.imageAlt ?? event.title} class="absolute inset-0 h-full w-full object-cover" width="1920" height="1280" fetchpriority="high" />{/if}
	<div class="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/25"></div>
	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
		<Reveal>
			<a href="{base}/events/" class="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">← All past work</a>
			<p class="eyebrow">{event.sector}{event.dateLabel ? ` · ${event.dateLabel}` : ''}</p>
			<h1 class="mt-4 max-w-5xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.98] font-bold">{event.title}</h1>
			{#if event.client}<p class="mt-5 text-xl font-medium text-aqua-300">{event.client}</p>{/if}
		</Reveal>
	</div>
</section>

<section class="bg-paper py-16 lg:py-24">
	<div class="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
		<Reveal>
			<dl class="grid gap-5 rounded-lg border border-ink-900/10 bg-white p-6 shadow-sm">
				<div><dt class="eyebrow">Format</dt><dd class="mt-2 font-semibold">{event.format}</dd></div>
				{#if event.venue}<div class="border-t border-ink-900/8 pt-5"><dt class="eyebrow">Venue</dt><dd class="mt-2 font-semibold">{event.venue}</dd></div>{/if}
				{#if event.dateLabel}<div class="border-t border-ink-900/8 pt-5"><dt class="eyebrow">Date</dt><dd class="mt-2 font-semibold">{event.dateLabel}</dd></div>{/if}
			</dl>
		</Reveal>
		<Reveal delay={100}>
			<p class="text-lg leading-relaxed text-slate-600">{event.summary}</p>
			{#if event.highlights}
				<h2 class="mt-10 font-display text-2xl font-bold">Programme focus</h2>
				<ul class="mt-5 grid gap-3">
					{#each event.highlights as highlight}<li class="flex gap-3"><Icons name="check" class="mt-0.5 h-5 w-5 shrink-0 text-electric-600" /><span class="leading-relaxed text-slate-600">{highlight}</span></li>{/each}
				</ul>
			{/if}
			{#if event.attendees}<h2 class="mt-10 font-display text-2xl font-bold">Participants and speakers</h2><p class="mt-4 leading-relaxed text-slate-600">{event.attendees}</p>{/if}
		</Reveal>
	</div>
</section>

{#if event.gallery}
	<section class="border-y border-ink-900/8 bg-white py-16 lg:py-24">
		<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
			<Reveal><p class="eyebrow">Photo archive</p><h2 class="mt-3 font-display text-3xl font-bold">Inside the programme</h2><p class="mt-3 text-slate-600">{event.gallery.count} photographs from the delivered session.</p></Reveal>
			<div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4" bind:this={galleryGrid}>
				{#each visiblePhotos as photo, index (photo.src)}
					<Reveal delay={(index % 4) * 60}>
						<button
							type="button"
							class="image-zoom-container block w-full cursor-zoom-in overflow-hidden rounded-lg focus:outline-2 focus:outline-offset-2 focus:outline-electric-600"
							onclick={() => (lightboxIndex = index)}
							aria-label={`Open photograph ${index + 1} of ${galleryPhotos.length}`}
						>
							<img src={photo.src} alt="" class="image-zoom-img aspect-[4/3] w-full object-cover" width="700" height="525" loading="lazy" />
						</button>
					</Reveal>
				{/each}
			</div>
			{#if event.gallery.count > PREVIEW_COUNT && !showAllPhotos}
				<button type="button" class="btn btn-electric mt-8" onclick={showAll}>
					Show all {event.gallery.count} photographs
				</button>
			{/if}
		</div>
	</section>
{/if}

{#if lightboxIndex !== null && galleryPhotos.length}
	<Lightbox photos={galleryPhotos} bind:index={lightboxIndex} title={event.title} onclose={() => (lightboxIndex = null)} />
{/if}

{#if data.coverage.length || event.links.length}
	<section class="bg-paper py-16 lg:py-20">
		<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
			<h2 class="font-display text-2xl font-bold">Coverage and official updates</h2>
			{#if data.coverage.length}
				<div class="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
					{#each data.coverage as item (item.slug)}
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group rounded-xl border border-ink-900/10 bg-white p-5 shadow-card transition-colors hover:border-electric-600/40"
						>
							<p class="wordmark text-base text-ink-900">{item.publication} <span class="text-slate-400">↗</span></p>
							<p class="mt-1 text-sm leading-snug text-slate-600 group-hover:text-ink-900">{item.headline}</p>
							<p class="mt-2 text-xs text-slate-500">{item.dateLabel ? `${item.dateLabel} · ` : ''}{item.language}</p>
						</a>
					{/each}
				</div>
			{/if}
			{#if event.links.length}
				<div class="mt-6 flex flex-wrap gap-3">
					{#each event.links as link (link.url)}
						<a href={link.url} target="_blank" rel="noopener noreferrer" class="btn btn-ghost-light">{link.label} ↗</a>
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}
