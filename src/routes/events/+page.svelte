<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import PageIntro from '$lib/components/PageIntro.svelte';
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
	ogImage="hero/events"
/>

<PageIntro
	eyebrow="Events & Training"
	title="Delivered, documented, covered by the press"
	lede="Every programme here actually happened: real rooms, real professionals, with photos, official posts, and national press coverage to show for it."
	photo="hero/events"
	photoAlt="An online session of AI Essentials for Healthcare Professionals in Pakistan"
>
	<a href="{base}/corporate-training/" class="btn btn-primary">Request a Training</a>
</PageIntro>

<!-- ============ UPCOMING ============ -->
<section class="bg-paper py-20 lg:py-24">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="01" eyebrow="Upcoming" title="What’s next" />
		{#if upcomingEvents.length > 0}
			<div class="mt-12 grid gap-6 md:grid-cols-2">
				{#each upcomingEvents as event (event.slug)}
					<Reveal>
						<article class="rounded-xl border border-ink-900/10 bg-white p-7">
							{#if event.dateLabel}
								<p class="eyebrow">{event.dateLabel}</p>
							{/if}
							<h3 class="mt-2 font-display text-xl font-bold">{event.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">{event.summary}</p>
						</article>
					</Reveal>
				{/each}
			</div>
		{:else}
			<Reveal>
				<div class="mt-12 flex flex-col items-start gap-5 rounded-xl border border-dashed border-ink-900/20 bg-white/70 p-8 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h3 class="font-display text-lg font-bold">The next public programme is being scheduled</h3>
						<p class="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-600">
							Institutional trainings run year-round on request. Public programmes and events are
							announced on our Facebook page and newsletter first.
						</p>
					</div>
					<a href="#newsletter" class="btn btn-electric shrink-0">Get notified</a>
				</div>
			</Reveal>
		{/if}

		<!-- Sector chips -->
		<div class="mt-14">
			<p class="font-display text-xs font-semibold tracking-widest text-slate-500 uppercase">
				Training by sector
			</p>
			<div class="mt-4 flex flex-wrap gap-3">
				{#each sectors as sector (sector.slug)}
					<a
						href="{base}/our-work/ai-academy/#sectors"
						class="rounded-full border border-ink-900/15 bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition-colors hover:border-electric-600 hover:text-electric-600"
					>
						{sector.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============ PAST PROGRAMMES ============ -->
<section class="border-t border-ink-900/8 bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="02"
			eyebrow="Delivered"
			title="Past programmes and recaps"
			lede="Newest first. Follow the official posts for photo albums, and the press links for third-party coverage."
		/>
		<div class="mt-14 space-y-10">
			{#each pastEvents as event, i (event.slug)}
				<Reveal delay={Math.min(i, 2) * 80}>
					<article
						id={event.slug}
						class="scroll-mt-24 overflow-hidden rounded-xl border border-ink-900/10 bg-paper lg:grid lg:grid-cols-[1fr_1.1fr] {i % 2 === 1 ? 'lg:[direction:rtl]' : ''}"
					>
						{#if event.image}
							<div class="photo min-h-64 lg:min-h-full" style="direction: ltr">
								<img
									src={img(event.image)}
									alt={event.imageAlt ?? event.title}
									class="h-full max-h-96 w-full object-cover lg:absolute lg:inset-0 lg:max-h-none"
									width="1400"
									height="1050"
									loading="lazy"
								/>
							</div>
						{:else}
							<div class="hidden items-center justify-center bg-ink-50 lg:flex" style="direction: ltr">
								<span class="font-display text-6xl font-bold text-ink-100">AIFB</span>
							</div>
						{/if}
						<div class="p-7 lg:p-11" style="direction: ltr">
							<div class="flex flex-wrap items-center gap-3">
								<span class="rounded-sm bg-electric-600 px-2.5 py-1 font-display text-[0.65rem] font-bold tracking-widest text-white uppercase">
									{event.sector}
								</span>
								{#if event.dateLabel}
									<span class="text-sm font-medium text-slate-500">{event.dateLabel}</span>
								{/if}
							</div>
							<h3 class="mt-4 font-display text-2xl leading-tight font-bold tracking-[-0.015em] text-balance lg:text-3xl">
								{event.title}
							</h3>
							{#if event.client}
								<p class="mt-2 font-display text-sm font-semibold text-slate-500">
									{event.client}{event.venue ? ` · ${event.venue}` : ''}
								</p>
							{/if}
							<p class="mt-4 leading-relaxed text-slate-600">{event.summary}</p>

							{#if event.links.length > 0}
								<div class="mt-6">
									<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">Official updates</p>
									<div class="mt-2 flex flex-wrap gap-2">
										{#each event.links as link (link.url)}
											<a
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												class="rounded-md border border-ink-900/12 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 transition-colors hover:border-electric-600 hover:text-electric-600"
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
													class="rounded-md bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-900 transition-colors hover:bg-electric-600 hover:text-white"
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
<section class="bg-paper py-20 lg:py-24">
	<div class="mx-auto grid max-w-[88rem] gap-8 px-5 sm:px-8 md:grid-cols-2 lg:px-12">
		{#each quotes as q, i (q.name)}
			<Reveal delay={i * 120}>
				<figure class="rule-tick h-full pt-6">
					<blockquote class="font-display text-xl leading-snug font-medium text-ink-900 lg:text-2xl">
						“{q.text}”
					</blockquote>
					<figcaption class="mt-5 text-sm text-slate-500">
						<span class="font-bold text-ink-900">{q.name}</span> · {q.role}
					</figcaption>
				</figure>
			</Reveal>
		{/each}
	</div>
</section>

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
			<a href="{base}/corporate-training/" class="btn btn-primary mt-9">Request a Training</a>
		</Reveal>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
