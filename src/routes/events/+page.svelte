<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Token from '$lib/components/Token.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { pastEvents, upcomingEvents } from '$lib/data/events';
	import { pressBySlug } from '$lib/data/press';
	import { sectors } from '$lib/data/courses';
	import { testimonials } from '$lib/data/testimonials';

	const quotes = testimonials.slice(0, 2);
</script>

<Seo
	title="Events & Training"
	description="Upcoming and delivered AI training programmes by AI Forum Bangladesh: capital markets, healthcare, banking and fintech, energy, education, and government, with recaps, photos, and press coverage."
	path="/events/"
	ogImage="events/bsp"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="flex flex-wrap items-end justify-between gap-8">
			<div class="max-w-2xl">
				<Reveal>
					<p class="eyebrow mb-4">Events & Training</p>
					<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
						Hands-on AI programmes, delivered and documented
					</h1>
					<p class="mt-6 text-lg leading-relaxed text-white/80">
						Every programme below actually happened: real rooms, real professionals, real outcomes,
						with photos, official posts, and national press coverage to show for it.
					</p>
				</Reveal>
			</div>
			<Reveal delay={120}>
				<a href="{base}/corporate-training/" class="btn btn-primary">Request a Training</a>
			</Reveal>
		</div>
	</div>
</section>

<!-- ============ UPCOMING ============ -->
<section class="border-b border-ink-900/8 bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead eyebrow="Upcoming" title="What’s next" />
		{#if upcomingEvents.length > 0}
			<div class="mt-10 grid gap-6 md:grid-cols-2">
				{#each upcomingEvents as event (event.slug)}
					<Reveal>
						<article class="rounded-2xl border border-ink-900/8 bg-paper p-6 shadow-card">
							<p class="eyebrow"><Token value={event.dateLabel} /></p>
							<h3 class="mt-2 text-xl font-bold">{event.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">{event.summary}</p>
						</article>
					</Reveal>
				{/each}
			</div>
		{:else}
			<Reveal>
				<div class="mt-10 flex flex-col items-start gap-5 rounded-2xl border border-dashed border-ink-900/15 bg-paper p-8 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 class="text-lg font-bold">The next public programme is being scheduled</h3>
						<p class="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-600">
							Institutional trainings run year-round on request. Public programmes and events are
							announced on our Facebook page and newsletter first.
						</p>
					</div>
					<a href="#newsletter" class="btn btn-electric shrink-0">Get notified</a>
				</div>
			</Reveal>
		{/if}
	</div>
</section>

<!-- ============ SECTORS STRIP ============ -->
<section class="mesh-light border-b border-ink-900/8 py-14">
	<div class="mx-auto max-w-7xl px-5">
		<p class="font-display text-sm font-semibold tracking-widest text-slate-500 uppercase">
			Training by sector
		</p>
		<div class="mt-5 flex flex-wrap gap-3">
			{#each sectors as sector (sector.slug)}
				<a
					href="{base}/our-work/ai-academy/#sectors"
					class="rounded-full border border-ink-900/12 bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition-colors hover:border-electric-600 hover:text-electric-600"
				>
					{sector.name}
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- ============ PAST PROGRAMMES ============ -->
<section class="mesh-light py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Delivered"
			title="Past programmes and recaps"
			lede="Newest first. Follow the official posts for photo albums, and the press links for third-party coverage."
		/>
		<div class="mt-12 space-y-8">
			{#each pastEvents as event, i (event.slug)}
				<Reveal delay={Math.min(i, 2) * 80}>
					<article
						id={event.slug}
						class="scroll-mt-24 overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card lg:grid lg:grid-cols-[0.9fr_1.1fr]"
					>
						{#if event.image}
							<img
								src={img(event.image)}
								alt={event.imageAlt ?? event.title}
								class="h-full max-h-80 w-full object-cover lg:max-h-none"
								width="1400"
								height="1050"
								loading="lazy"
							/>
						{:else}
							<div class="hidden items-center justify-center bg-ink-50 lg:flex">
								<span class="font-display text-5xl font-bold text-ink-100">AIFB</span>
							</div>
						{/if}
						<div class="p-7 lg:p-9">
							<div class="flex flex-wrap items-center gap-3">
								<span class="rounded-full bg-electric-50 px-3 py-1 font-display text-xs font-bold tracking-wide text-electric-600 uppercase">
									{event.sector}
								</span>
								<span class="text-sm font-medium text-slate-500"><Token value={event.dateLabel} /></span>
							</div>
							<h3 class="mt-3 text-2xl font-bold text-balance">{event.title}</h3>
							{#if event.client}
								<p class="mt-1 font-display text-sm font-semibold text-slate-500">
									{event.client}{event.venue ? ` · ${event.venue}` : ''}
								</p>
							{/if}
							<p class="mt-4 leading-relaxed text-slate-600">{event.summary}</p>

							{#if event.links.length > 0}
								<div class="mt-5">
									<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">Official updates</p>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each event.links as link (link.url)}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="rounded-lg border border-ink-900/10 bg-paper px-3 py-1.5 text-xs font-semibold text-ink-900 transition-colors hover:border-electric-600 hover:text-electric-600"
											>
												{link.label} ↗
											</a>
										{/each}
									</div>
								</div>
							{/if}

							{#if event.pressSlugs && event.pressSlugs.length > 0}
								<div class="mt-4">
									<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">Press coverage</p>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each event.pressSlugs as slug (slug)}
											{@const p = pressBySlug.get(slug)}
											{#if p}
												<a
													href={p.url}
													target="_blank"
													rel="noopener noreferrer"
													class="rounded-lg bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-900 transition-colors hover:bg-electric-600 hover:text-white"
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
		</div>
	</div>
</section>

<!-- ============ TESTIMONIALS ============ -->
<section class="border-t border-ink-900/8 bg-white py-16 lg:py-20">
	<div class="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2">
		{#each quotes as q, i (q.name)}
			<Reveal delay={i * 120}>
				<figure class="h-full rounded-2xl border border-ink-900/8 bg-paper p-7">
					<blockquote class="leading-relaxed font-medium text-ink-900">“{q.text}”</blockquote>
					<figcaption class="mt-4 text-sm text-slate-500">
						<span class="font-bold text-ink-900">{q.name}</span> · {q.role}
					</figcaption>
				</figure>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ============ CTA ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-16 text-white">
	<div class="relative mx-auto max-w-4xl px-5 text-center">
		<Reveal>
			<h2 class="text-3xl font-bold sm:text-4xl">Bring practical AI training to your organisation</h2>
			<p class="mx-auto mt-4 max-w-2xl text-white/80">
				We design hands-on programmes for corporate teams, sector professionals, and institutions,
				scoped to the work your people actually do.
			</p>
			<a href="{base}/corporate-training/" class="btn btn-primary mt-8">Request a Training</a>
		</Reveal>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
