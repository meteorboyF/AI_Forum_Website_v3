<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import PageIntro from '$lib/components/PageIntro.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import { img } from '$lib/img';
	import { pastEvents } from '$lib/data/events';
	import { pressBySlug } from '$lib/data/press';
	import type { EventItem } from '$lib/data/types';
	import Icons from '$lib/components/Icons.svelte';
	import Lightbox from '$lib/components/Lightbox.svelte';
	import { lockScroll } from '$lib/scrollLock';

	let selectedEvent = $state<EventItem | null>(null);
	let modalEl: HTMLDivElement | undefined = $state();
	let lightboxIndex = $state<number | null>(null);
	let galleryPhotos = $derived(
		selectedEvent?.gallery
			? Array.from({ length: selectedEvent.gallery.count }, (_, index) => ({
					src: img(`events/galleries/${selectedEvent!.gallery!.folder}/${index + 1}`),
					alt: `${selectedEvent!.gallery!.label}, photograph ${index + 1}`
				}))
			: []
	);

	function closeGallery() {
		lightboxIndex = null;
		selectedEvent = null;
	}

	// Esc closes the top-most layer only: the lightbox handles its own
	// Escape, so this ignores the key while the lightbox is open.
	function onModalKeydown(keyEvent: KeyboardEvent) {
		if (keyEvent.key === 'Escape' && selectedEvent && lightboxIndex === null) closeGallery();
	}

	// Lock scroll, focus the dialog, and restore focus to the card
	// button that opened it when it closes.
	$effect(() => {
		if (!selectedEvent) return;
		const opener = document.activeElement as HTMLElement | null;
		const unlock = lockScroll();
		modalEl?.querySelector<HTMLElement>('button[aria-label="Close photo gallery"]')?.focus();
		return () => {
			unlock();
			opener?.focus?.();
		};
	});

	// Keep Tab inside the dialog while it is open.
	function trapTab(keyEvent: KeyboardEvent) {
		if (keyEvent.key !== 'Tab' || !modalEl) return;
		const focusables = [...modalEl.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')];
		if (focusables.length === 0) return;
		const first = focusables[0];
		const last = focusables[focusables.length - 1];
		if (keyEvent.shiftKey && document.activeElement === first) {
			keyEvent.preventDefault();
			last.focus();
		} else if (!keyEvent.shiftKey && document.activeElement === last) {
			keyEvent.preventDefault();
			first.focus();
		}
	}
	let eventSearch = $state('');
	let eventSort = $state<'newest' | 'oldest' | 'az'>('newest');
	let sectorFilter = $state<string | null>(null);
	const eventSectors = [...new Set(pastEvents.map((event) => event.sector))];
	let filteredPastEvents = $derived.by(() => {
		const query = eventSearch.trim().toLocaleLowerCase();
		const matching = pastEvents.filter((event) =>
			(sectorFilter === null || event.sector === sectorFilter) &&
			[event.title, event.client, event.sector, event.format, event.venue, event.dateLabel, event.summary]
				.filter(Boolean)
				.join(' ')
				.toLocaleLowerCase()
				.includes(query)
		);

		return matching.sort((a, b) => {
			if (eventSort === 'az') return a.title.localeCompare(b.title);
			if (a.sortKey === 0 && b.sortKey === 0) return a.title.localeCompare(b.title);
			if (a.sortKey === 0) return 1;
			if (b.sortKey === 0) return -1;
			return eventSort === 'newest' ? b.sortKey - a.sortKey : a.sortKey - b.sortKey;
		});
	});
</script>

<svelte:window onkeydown={onModalKeydown} />

<Seo
	title="Past Work"
	description="Delivered AI training programmes by AI Forum Bangladesh across capital markets, healthcare, banking and FinTech, energy, research, and development, with recaps, photos, and press coverage."
	path="/events/"
	ogImage="hero/events"
/>

<PageIntro
	eyebrow="Past work"
	title="Programmes, documented"
	lede="Browse programme summaries, participating organisations, session photographs, official updates, and press coverage."
	photo="hero/events"
	photoAlt="Healthcare professionals taking part in an AI Forum Bangladesh training session"
>
	<a href="{base}/corporate-training/" class="btn btn-primary">Train your team</a>
</PageIntro>

<!-- ============ PAST PROGRAMMES ============ -->
<section class="bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Delivered"
			title="Past programmes and recaps"
			lede="Browse programme highlights, photo galleries, official updates, and media coverage."
		/>
		<div class="mt-10 flex flex-col gap-3 rounded-xl border border-ink-900/8 bg-paper p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
			<label class="relative block w-full sm:max-w-md">
				<span class="sr-only">Search delivered programmes</span>
				<input
					type="search"
					bind:value={eventSearch}
					placeholder="Search programmes, organisations, or sectors"
					class="w-full rounded-lg border border-ink-900/12 bg-white px-4 py-3 pr-10 text-sm text-ink-900 outline-none transition-colors placeholder:text-slate-400 focus:border-electric-600 focus:ring-2 focus:ring-electric-600/15"
				/>
				<span class="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400" aria-hidden="true">
					<Icons name="search" class="h-4 w-4" />
				</span>
			</label>
			<label class="flex shrink-0 items-center gap-3 text-sm font-semibold text-slate-600">
				<span>Sort</span>
				<select bind:value={eventSort} class="rounded-lg border border-ink-900/12 bg-white px-3 py-3 text-sm font-semibold text-ink-900 outline-none transition-colors focus:border-electric-600 focus:ring-2 focus:ring-electric-600/15">
					<option value="newest">Newest first</option>
					<option value="oldest">Oldest first</option>
					<option value="az">A–Z</option>
				</select>
			</label>
		</div>
		<!-- Sector filters -->
		<div class="mt-5 flex flex-wrap items-center gap-2.5">
			<button
				type="button"
				class="rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 {sectorFilter === null ? 'border-electric-600 bg-electric-600 text-white shadow-sm' : 'border-ink-900/10 bg-white text-ink-900 hover:border-electric-600/40 hover:text-electric-600'}"
				aria-pressed={sectorFilter === null}
				onclick={() => (sectorFilter = null)}
			>
				All sectors
			</button>
			{#each eventSectors as sector (sector)}
				<button
					type="button"
					class="rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-300 {sectorFilter === sector ? 'border-electric-600 bg-electric-600 text-white shadow-sm' : 'border-ink-900/10 bg-white text-ink-900 hover:border-electric-600/40 hover:text-electric-600'}"
					aria-pressed={sectorFilter === sector}
					onclick={() => (sectorFilter = sectorFilter === sector ? null : sector)}
				>
					{sector}
				</button>
			{/each}
		</div>
		<p class="mt-4 text-xs font-medium text-slate-500" aria-live="polite">{filteredPastEvents.length} {filteredPastEvents.length === 1 ? 'programme' : 'programmes'}</p>
		<div class="mt-14 space-y-12">
			{#each filteredPastEvents as event, i (event.slug)}
				<Reveal delay={Math.min(i, 2) * 80}>
					<article
						class="card-hover-trigger overflow-hidden rounded-2xl border border-ink-900/10 bg-paper lg:grid lg:grid-cols-[1fr_1.1fr] shadow-card {i % 2 === 1 ? 'lg:[direction:rtl]' : ''}"
					>
						{#if event.image}
							<button
								type="button"
								class="image-zoom-container group relative block min-h-64 w-full overflow-hidden text-left lg:min-h-full"
								style="direction: ltr"
								onclick={() => event.gallery && (selectedEvent = event)}
								aria-label={event.gallery ? `Open ${event.title} photo gallery` : undefined}
								disabled={!event.gallery}
							>
								<img
									src={img(event.image)}
									alt={event.imageAlt ?? event.title}
									class="image-zoom-img h-full max-h-96 w-full object-cover lg:absolute lg:inset-0 lg:max-h-none"
									width="1400"
									height="1050"
									loading="lazy"
								/>
								{#if event.gallery}
									<span class="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-lg bg-ink-900/80 px-4 py-3 text-left text-xs font-bold tracking-wide text-white opacity-100 backdrop-blur-sm transition-all sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
										<span>View session gallery</span>
										<span class="text-aqua-300">{event.gallery.count} photos →</span>
									</span>
								{/if}
							</button>
						{:else}
							<div class="hidden items-center justify-center bg-ink-50 lg:flex" style="direction: ltr">
								<span class="font-display text-6xl font-bold text-ink-100">AIFB</span>
							</div>
						{/if}
						<div class="p-8 lg:p-12 flex flex-col justify-center" style="direction: ltr">
							<div class="flex flex-wrap items-center gap-4">
								<span class="rounded-full bg-electric-600 px-3 py-1 font-display text-[0.7rem] font-bold tracking-widest text-white uppercase shadow-sm">
									{event.sector}
								</span>
								{#if event.dateLabel}
									<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
										<Icons name="calendar" class="h-4 w-4" strokeWidth={2} />
										{event.dateLabel}
									</span>
								{/if}
							</div>
							<h3 class="mt-4 font-display text-2xl leading-tight font-bold tracking-[-0.015em] text-balance lg:text-3xl text-ink-900 text-underline-reveal">
								{event.title}
							</h3>
							{#if event.client || event.venue}
								<p class="mt-2.5 font-display text-xs font-bold tracking-wide text-slate-400 inline-flex items-center gap-1.5 uppercase">
									<Icons name="map-pin" class="h-3.5 w-3.5" strokeWidth={2} />
									{[event.client, event.venue].filter(Boolean).join(' · ')}
								</p>
							{/if}
							<p class="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">{event.summary}</p>
							<a href="{base}/events/{event.slug}/" class="btn btn-electric mt-6 self-start">Read programme recap<Icons name="arrow-right" class="h-4 w-4" /></a>

							{#if event.highlights && event.highlights.length > 0}
								<div class="mt-6 border-l-2 border-aqua-500 pl-4">
									<p class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">What the programme covered</p>
									<ul class="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-600">
										{#each event.highlights as highlight (highlight)}
											<li>{highlight}</li>
										{/each}
									</ul>
								</div>
							{/if}

							{#if event.attendees}
								<div class="mt-5 rounded-xl bg-white/70 p-4">
									<p class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Who was there</p>
									<p class="mt-2 text-sm leading-relaxed text-slate-600">{event.attendees}</p>
								</div>
							{/if}
 
							{#if event.links.length > 0}
								<div class="mt-6">
									<p class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Official updates</p>
									<div class="mt-2.5 flex flex-wrap gap-2">
										{#each event.links as link (link.url)}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="rounded-md border border-ink-900/12 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 transition-all hover:border-electric-600 hover:text-electric-600 hover:shadow-sm"
											>
												{link.label} ↗
											</a>
										{/each}
									</div>
								</div>
							{/if}
 
							{#if event.pressSlugs && event.pressSlugs.length > 0}
								<div class="mt-5">
									<p class="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Press coverage</p>
									<div class="mt-2.5 flex flex-wrap gap-2">
										{#each event.pressSlugs as slug (slug)}
											{@const p = pressBySlug.get(slug)}
											{#if p}
												<a
													href={p.url}
													target="_blank"
													rel="noopener noreferrer"
													class="rounded-md bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-900 transition-all hover:bg-electric-600 hover:text-white"
												>
													{p.publication} ↗
												</a>
											{/if}
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</article>
				</Reveal>
			{/each}
			{#if filteredPastEvents.length === 0}
				<div class="rounded-2xl border border-dashed border-ink-900/20 bg-paper p-10 text-center">
					<p class="font-display text-xl font-bold text-ink-900">No programmes found</p>
					<p class="mt-2 text-sm text-slate-600">Try a different organisation, sector, or programme name.</p>
					<button type="button" class="mt-5 text-sm font-bold text-electric-600 hover:text-ink-900" onclick={() => { eventSearch = ''; sectorFilter = null; }}>Clear filters</button>
				</div>
			{/if}
		</div>
	</div>
</section>

{#if selectedEvent?.gallery}
	<div
		class="fixed inset-0 z-[100] flex items-end bg-ink-900/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
		role="presentation"
		onclick={(event) => event.target === event.currentTarget && closeGallery()}
	>
		<div
			bind:this={modalEl}
			class="max-h-[92vh] w-full overflow-y-auto rounded-t-2xl bg-paper shadow-2xl sm:mx-auto sm:max-w-6xl sm:rounded-2xl"
			role="dialog"
			aria-modal="true"
			aria-labelledby="gallery-title"
			tabindex="-1"
			onkeydown={trapTab}
		>
			<div class="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-ink-900/10 bg-paper/95 px-6 py-5 backdrop-blur sm:px-9">
				<div>
					<p class="eyebrow">Photo gallery · {selectedEvent.gallery.count} photographs</p>
					<h2 id="gallery-title" class="mt-2 font-display text-2xl font-bold text-ink-900 sm:text-3xl">{selectedEvent.title}</h2>
				</div>
				<button type="button" class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-900/15 bg-white text-xl font-medium text-ink-900 transition-colors hover:bg-ink-900 hover:text-white" onclick={closeGallery} aria-label="Close photo gallery"><Icons name="close" class="h-5 w-5" /></button>
			</div>
			<div class="px-6 py-7 sm:px-9 sm:py-9">
				<div class="max-w-3xl border-l-2 border-aqua-500 pl-4">
					<p class="text-sm font-bold text-ink-900">{selectedEvent.client ?? selectedEvent.format}{selectedEvent.dateLabel ? ` · ${selectedEvent.dateLabel}` : ''}</p>
					<p class="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{selectedEvent.summary}</p>
				</div>
				<div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
					{#each galleryPhotos.slice(0, 12) as photo, photoIndex (photo.src)}
						<button
							type="button"
							class="group block cursor-zoom-in overflow-hidden rounded-lg bg-ink-100 focus:outline-2 focus:outline-offset-2 focus:outline-electric-600"
							onclick={() => (lightboxIndex = photoIndex)}
							aria-label={`Open photograph ${photoIndex + 1} of ${galleryPhotos.length}`}
						>
							<img src={photo.src} alt="" class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
						</button>
					{/each}
				</div>
				<div class="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-ink-900/8 pt-6">
					{#if galleryPhotos.length > 12}
						<p class="text-sm text-slate-600">Showing 12 of {galleryPhotos.length} photographs — the full gallery is on the recap page.</p>
					{:else}
						<p class="text-sm text-slate-600">Programme details, updates, and press coverage are on the recap page.</p>
					{/if}
					<a href="{base}/events/{selectedEvent.slug}/" class="btn btn-electric shrink-0">
						Read the full recap <Icons name="arrow-right" class="h-4 w-4" />
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

{#if selectedEvent && lightboxIndex !== null}
	<Lightbox
		photos={galleryPhotos}
		bind:index={lightboxIndex}
		title={selectedEvent.title}
		onclose={() => (lightboxIndex = null)}
	/>
{/if}

<!-- ============ CTA ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-4xl px-5 text-center">
		<Reveal>
			<h2 class="font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em]">
				Bring practical AI training to your organisation
			</h2>
			<p class="mx-auto mt-5 max-w-2xl leading-relaxed text-white/80">
				We design hands-on programmes for corporate teams, sector professionals, and institutions,
				scoped to the work your people actually do.
			</p>
			<a href="{base}/corporate-training/" class="btn btn-primary mt-9">Train your team</a>
		</Reveal>
	</div>
</section>
