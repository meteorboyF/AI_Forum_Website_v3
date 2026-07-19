<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import { img } from '$lib/img';
	import { sectors } from '$lib/data/courses';
	import { caseStudyEvents } from '$lib/data/events';
	import { trainingClients } from '$lib/data/partners';
	import PartnerLogo from '$lib/components/PartnerLogo.svelte';
	import Icons from '$lib/components/Icons.svelte';

	const eventBySlug = new Map(caseStudyEvents.map((e) => [e.slug, e]));
</script>

<Seo
	title="AI Academy"
	description="Hands-on AI training for professionals, institutions, and startups in Bangladesh: healthcare, business, capital markets, banking, education, and government programmes delivered by AI Forum Bangladesh."
	path="/our-work/ai-academy/"
	ogImage="events/bsp"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-20 text-white lg:pb-24">
	<!-- Jamdani pattern overlay integrated into dark header band -->
	<div class="absolute inset-0 z-1 bg-jamdani-dark opacity-[0.06] pointer-events-none"></div>

	<div class="relative z-10 mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div class="max-w-4xl">
			<p class="eyebrow mb-5">Our work · AI Academy</p>
			<h1 class="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
				<span class="line-mask"><span>AI training shaped around</span></span>
				<span class="line-mask" style="--line-delay: 140ms"><span class="text-aqua-400">the work your team does.</span></span>
			</h1>
			<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
				Programmes designed and led by Professor Khondaker A. Mamun for professionals in finance,
				healthcare, banking, energy, research, and public institutions.
			</p>
			<div class="mt-9 flex flex-wrap gap-4">
				<a href="{base}/corporate-training/" class="btn btn-primary">Train your team</a>
				<a href="{base}/events/" class="btn btn-ghost-dark">See past deliveries</a>
			</div>
		</div>

		<!-- Real training photos, not stock -->
		<div class="mt-16 grid gap-6 sm:grid-cols-3">
			{#each ['events/lankabangla', 'events/bsp', 'events/ogsb'] as photo, i (photo)}
				<Reveal delay={i * 120}>
					<div class="image-zoom-container rounded-2xl shadow-card-lg border border-white/10 {i === 1 ? 'sm:-mt-6' : ''}">
						<img
							src={img(photo + '-sm')}
							srcset="{img(photo + '-sm')} 700w, {img(photo)} 1400w"
							sizes="(min-width: 640px) 32vw, 92vw"
							alt={i === 0
								? 'Capital market professionals during hands-on AI training at the UIU Innovation Hub'
								: i === 1
									? 'Bangladesh Society of Physiologists members at a full-day AI workshop'
									: 'Doctors at OGSB Hospital & IRCH during AI training'}
							class="image-zoom-img aspect-[4/3] w-full rounded-2xl object-cover"
							width="700"
							height="525"
							loading={i === 0 ? 'eager' : 'lazy'}
						/>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ SECTOR-SPECIFIC TRAINING ============ -->
<section class="bg-paper py-24 lg:py-32 bg-jamdani-light" id="sectors">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Corporate & institutional training"
			title="Start with the sector"
			lede="The examples below are tied to completed programmes in the archive. A new engagement is scoped around the participating team, its tools, and its responsibilities."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each sectors as sector, i (sector.slug)}
				<Reveal delay={(i % 3) * 100}>
					<article class="card-hover-trigger flex h-full flex-col rounded-lg border border-ink-900/10 bg-white p-7 shadow-sm">
						<div class="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-electric-50 text-electric-600">
							<Icons name={sector.slug} class="h-6 w-6" />
						</div>
						<h3 class="font-display text-lg font-bold text-ink-900 text-underline-reveal">{sector.name}</h3>
						<p class="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{sector.blurb}</p>
						<div class="mt-6 flex items-center justify-between gap-3 border-t border-ink-900/5 pt-4">
							<a href="{base}/corporate-training/#proposal" class="text-xs font-bold tracking-wider text-electric-600 uppercase inline-flex items-center gap-1 hover:text-electric-700">
								Discuss training <Icons name="arrow-right" class="h-3.5 w-3.5" />
							</a>
							{#if sector.caseStudies.length > 0 && eventBySlug.has(sector.caseStudies[0])}
								<a href="{base}/events/{sector.caseStudies[0]}/" class="text-[10px] font-bold tracking-widest text-slate-400 uppercase hover:text-ink-900">
									Case study →
								</a>
							{/if}
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ CASE STUDIES ============ -->
<section class="border-y border-ink-900/8 bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="02"
			eyebrow="Delivered programmes"
			title="Programmes already delivered"
			lede="Each summary links to the programme archive, including photographs and available press or partner coverage."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2">
			{#each caseStudyEvents as event, i (event.slug)}
				<Reveal delay={(i % 2) * 100}>
					<article class="card-hover-trigger flex h-full flex-col gap-6 rounded-lg border border-ink-900/10 bg-paper p-6 sm:flex-row shadow-sm">
						{#if event.image}
							<div class="image-zoom-container aspect-[4/3] w-full rounded-xl sm:w-44 sm:shrink-0 bg-ink-950">
								<img
									src={img(event.image + '-sm')}
									alt={event.imageAlt ?? ''}
									class="image-zoom-img h-full w-full object-cover"
									width="700"
									height="525"
									loading="lazy"
								/>
							</div>
						{/if}
						<div class="flex flex-col justify-center flex-1">
							<p class="eyebrow !text-[0.65rem]">{event.sector}</p>
							<h3 class="mt-1.5 font-display text-lg font-bold text-ink-900 text-underline-reveal">{event.client ?? event.title}</h3>
							<p class="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-500">{event.summary}</p>
							<a href="{base}/events/{event.slug}/" class="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-electric-600 hover:text-electric-700">
								Full recap <Icons name="arrow-right" class="h-3.5 w-3.5" />
							</a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ TRUSTED BY ============ -->
<section class="border-t border-ink-900/8 bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div>
			<p class="text-center font-display text-sm font-semibold tracking-widest text-slate-500 uppercase">
				Organisations trained by the Academy
			</p>
			<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
				{#each trainingClients as client (client.name)}
					<PartnerLogo partner={client} compact />
				{/each}
			</div>
		</div>
		<div class="mt-12 flex justify-center"><a href="{base}/corporate-training/" class="btn btn-electric">Plan a programme<Icons name="arrow-right" class="h-4 w-4" /></a></div>
	</div>
</section>
