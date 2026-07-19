<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import PartnerLogo from '$lib/components/PartnerLogo.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import { weightShift } from '$lib/actions/weightShift';
	import { img } from '$lib/img';
	import { stats } from '$lib/data/stats';
	import { partners } from '$lib/data/partners';
	import { press } from '$lib/data/press';
	import { upcomingEvents, pastEvents, events } from '$lib/data/events';
	import { PROFESSIONALS_TRAINED } from '$lib/config';

	const homePress = press.filter((p) => p.language === 'English').slice(0, 5);
	const latestEvent = pastEvents[0];
	const featuredStories = events.filter((event) => event.links.length > 0).slice(0, 3);
	const heroSlides = [
		{ image: 'hero/home', alt: 'Bangladesh Society of Physiologists participants with certificates after an AI Essentials workshop', caption: 'AI Essentials workshop · Bangladesh Society of Physiologists' },
		{ image: 'events/galleries/beprc/20', alt: 'BEPRC professionals gathered after an AI productivity training session', caption: 'AI productivity training · BEPRC' },
		{ image: 'events/galleries/sonali-intellect/12', alt: 'Banking and FinTech professionals taking part in an AI Forum Bangladesh session', caption: 'AI Essentials · Banking and FinTech professionals' }
	];
	let activeHeroSlide = $state(0);

	onMount(() => {
		const rotation = window.setInterval(() => {
			activeHeroSlide = (activeHeroSlide + 1) % heroSlides.length;
		}, 6500);
		return () => window.clearInterval(rotation);
	});

	const programmes = [
		{
			title: 'AI Academy',
			href: '/our-work/ai-academy/',
			image: 'events/lankabangla',
			imageAlt: 'Capital market professionals receiving certificates after AI training at the UIU Innovation Hub',
			desc: 'Hands-on AI training for working professionals: sector-focused, practical, and led by Professor Khondaker A. Mamun.',
			proof: 'Delivered for Grameenphone, the Dhaka Stock Exchange, LankaBangla Securities, and healthcare professionals across multiple institutions.',
			latest: { label: 'Latest: AI Essentials for Capital Market Professionals', href: '/events/#lankabangla-capital-markets' }
		},
		{
			title: 'Innovation Ecosystem',
			href: '/our-work/innovation-ecosystem/',
			image: 'events/galleries/unicef/11',
			imageAlt: 'Participants working together during an AI Forum Bangladesh programme',
			desc: 'Roadshows and collaborative sessions that introduce applied AI to students and institutions.',
			proof: 'See the programmes already delivered and the institutions that hosted them.',
			latest: { label: 'See the Roadshow', href: '/our-work/innovation-ecosystem/' }
		},
		{
			title: 'Career Care',
			href: '/our-work/career-care/',
			image: 'events/galleries/aims-lab/5',
			imageAlt: 'Students and mentors during an AI Forum Bangladesh session',
			desc: 'Mentoring and practical career sessions for people preparing to work and study in AI.',
			proof: 'Advice grounded in technical study, research, and the realities of entering the field.',
			latest: { label: 'See career support', href: '/our-work/career-care/' }
		}
	];
</script>

<Seo
	title="Responsible AI for All"
	description="AI Forum Bangladesh delivers practical AI training and programmes with businesses, public institutions, healthcare professionals, researchers, and students."
	path="/"
	ogImage="hero/home"
/>

<!-- ============ HERO: kinetic type over full-bleed graded photograph ============ -->
<section class="on-dark photo-duo scrim-hero relative flex min-h-[76svh] items-center overflow-hidden text-white bg-jamdani-dark sm:min-h-[78svh]">
	{#each heroSlides as slide, index (slide.image)}
		<img
			src={img(slide.image)}
			alt={slide.alt}
			class="absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1400ms] ease-out {index === activeHeroSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}"
			width="1920"
			height="1121"
			fetchpriority={index === 0 ? 'high' : undefined}
			loading={index === 0 ? 'eager' : 'lazy'}
			aria-hidden={index !== activeHeroSlide}
		/>
	{/each}
	<!-- Deepen the duotone so bright source photos retain the navy-blue grade. -->
	<div class="hero-legibility pointer-events-none absolute inset-0 z-5"></div>
	
	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 py-24 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
		<p class="eyebrow mb-6" style="--line-delay: 0ms">Training · Innovation · Careers</p>
		<h1
			use:weightShift
			class="font-display text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.92] font-bold tracking-[-0.04em]"
		>
			<span class="line-mask" style="--line-delay: 80ms"><span>Responsible AI</span></span>
			<span class="line-mask" style="--line-delay: 220ms"><span class="text-aqua-400">for All</span></span>
		</h1>
		<div class="mt-7 flex max-w-2xl flex-col gap-7">
				<p class="hero-support max-w-xl text-lg leading-relaxed text-white">
				We deliver practical AI programmes with businesses, public institutions, healthcare
				professionals, researchers, and students in Bangladesh.
				{#if PROFESSIONALS_TRAINED !== null}
					More than {PROFESSIONALS_TRAINED.toLocaleString('en-GB')} professionals trained.
				{/if}
			</p>
			<div class="flex flex-wrap gap-4">
				<a href="{base}/events/" class="btn btn-primary">
					See Delivered Programmes
					<Icons name="arrow-right" class="h-4.5 w-4.5" strokeWidth={2.5} />
				</a>
				<a href="{base}/our-work/" class="btn btn-ghost-dark">Explore Programmes</a>
			</div>
		</div>
			<p class="hero-support mt-8 border-t border-white/30 pt-4 text-xs tracking-wide text-white/85 uppercase">
			{heroSlides[activeHeroSlide].caption}
		</p>
	</div>

	<div class="absolute right-5 bottom-5 z-20 flex items-center gap-2 sm:right-8 lg:right-12">
		{#each heroSlides as slide, index (slide.image)}
			<button type="button" class="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-ink-950/35 text-xs font-bold text-white backdrop-blur-sm transition-all hover:border-aqua-300 hover:bg-electric-600 {index === activeHeroSlide ? 'border-aqua-300 bg-electric-600' : ''}" onclick={() => (activeHeroSlide = index)} aria-label={`Show hero photo ${index + 1}: ${slide.caption}`} aria-pressed={index === activeHeroSlide}>
				{String(index + 1).padStart(2, '0')}
			</button>
		{/each}
	</div>

	<!-- Scroll indicator cue -->
	<div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
		<div class="h-8 w-5 rounded-full border border-white/30 flex items-start justify-center p-1.5 opacity-60">
			<div class="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
		</div>
	</div>
</section>

<!-- ============ IMPACT: documented numbers only ============ -->
<section class="bg-paper" aria-label="Impact in numbers">
	<div class="mx-auto grid grid-cols-2 gap-y-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:py-20 lg:px-12 border-b border-ink-900/8">
		{#each stats as stat, i (stat.label)}
			<Reveal delay={i * 90} class="border-l border-ink-900/10 pl-6 lg:pl-8 {i === 0 ? 'border-l-0 pl-0 lg:pl-0' : ''}">
				<p class="font-display text-5xl font-bold tracking-[-0.03em] text-ink-900 lg:text-6xl font-mono">
					<CountUp value={stat.value} suffix={stat.suffix ?? ''} />
				</p>
				<p class="mt-3 max-w-[16ch] text-sm leading-snug font-medium text-slate-500">{stat.label}</p>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ============ 01 · PROGRAMMES: asymmetric, image-led ============ -->
<section class="bg-paper pb-24 lg:pb-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="What we do"
			title="Practical AI, built for the room"
			lede="Training for working teams, programmes for students and institutions, and guidance for people entering the field."
		/>

		<div class="mt-14 grid gap-8 lg:grid-cols-12">
			<!-- Feature: AI Academy -->
			<Reveal class="lg:col-span-7">
				<a
					href="{base}{programmes[0].href}"
					class="card-hover-trigger image-zoom-container relative block h-full min-h-[32rem] overflow-hidden rounded-2xl bg-ink-950 shadow-card"
				>
					<img
						src={img(programmes[0].image)}
						alt={programmes[0].imageAlt}
						class="image-zoom-img absolute inset-0 h-full w-full object-cover"
						width="1400"
						height="1050"
						loading="lazy"
					/>
					<div class="absolute inset-0 z-10 bg-gradient-to-t from-ink-950/95 via-ink-950/30 to-transparent"></div>
					<div class="absolute inset-x-0 bottom-0 z-20 p-8 text-white lg:p-10">
						<div class="flex items-center gap-3">
							<Icons name="academy" class="h-8 w-8 text-aqua-400" />
							<p class="eyebrow !text-aqua-400">Flagship programme</p>
						</div>
						<h3 class="mt-3 font-display text-3xl font-bold tracking-[-0.02em] lg:text-4xl text-underline-reveal">
							{programmes[0].title}
						</h3>
						<p class="mt-3 max-w-lg leading-relaxed text-white/85">{programmes[0].desc}</p>
						<p class="mt-4 max-w-lg border-l-2 border-aqua-400 pl-4 text-sm leading-relaxed text-white/75">
							{programmes[0].proof}
						</p>
						<span class="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-aqua-400">
							{programmes[0].latest.label}
							<Icons name="arrow-right" class="h-4 w-4" />
						</span>
					</div>
				</a>
			</Reveal>

			<!-- Two stacked -->
			<div class="grid gap-8 lg:col-span-5">
				{#each programmes.slice(1) as prog, i (prog.title)}
					<Reveal delay={(i + 1) * 120}>
						<a
							href="{base}{prog.href}"
							class="card-hover-trigger group grid h-full overflow-hidden rounded-2xl border border-ink-900/10 bg-white sm:grid-cols-[0.85fr_1.15fr] shadow-card"
						>
							<div class="image-zoom-container relative min-h-48">
								<img
									src={img(prog.image + '-sm')}
									alt={prog.imageAlt}
									class="image-zoom-img absolute inset-0 h-full w-full object-cover"
									width="960"
									height="640"
									loading="lazy"
								/>
							</div>
							<div class="flex flex-col p-6 lg:p-8">
								<div class="flex items-center gap-2.5">
									<Icons name={prog.title === 'Innovation Ecosystem' ? 'ecosystem' : 'careers'} class="h-5 w-5 text-electric-600" />
									<h3 class="font-display text-xl font-bold tracking-[-0.01em] text-underline-reveal">{prog.title}</h3>
								</div>
								<p class="mt-2 text-sm leading-relaxed text-slate-600">{prog.desc}</p>
								<p class="mt-3 border-l-2 border-electric-600 pl-3 text-xs leading-relaxed font-medium text-ink-900">
									{prog.proof}
								</p>
								<span class="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric-600">
									{prog.latest.label}
									<Icons name="arrow-right" class="h-4 w-4" />
								</span>
							</div>
						</a>
					</Reveal>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============ FULL-BLEED PHOTOGRAPHIC BAND ============ -->
<section class="on-dark photo-duo scrim-b relative overflow-hidden text-white">
	<img
		src={img('hero/band-sm')}
		srcset="{img('hero/band-sm')} 960w, {img('hero/band')} 1920w"
		sizes="100vw"
		alt="A facilitator leading an AI Forum Bangladesh healthcare training session"
		class="absolute inset-0 h-full w-full object-cover"
		width="1920"
		height="1280"
		loading="lazy"
	/>
	<div class="relative z-10 mx-auto max-w-[88rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
		<Reveal>
			<p class="eyebrow mb-5">On the ground</p>
			<p class="max-w-4xl font-display text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.08] font-bold tracking-[-0.025em] text-balance">
				From capital markets and public institutions to healthcare and university classrooms, every
				programme begins with the people who will use the technology.
			</p>
			<a href="{base}/events/" class="btn btn-ghost-dark mt-9">See the delivered programmes</a>
		</Reveal>
	</div>
</section>

<!-- ============ 02 · IN THE NEWS: typographic list ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-24 text-white lg:py-32">
	<div class="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<Reveal>
			<div class="rule-tick flex items-start gap-6 pt-6 sm:gap-10">
				<span class="sec-num" aria-hidden="true">02</span>
				<div class="pt-2">
					<p class="eyebrow mb-3">In the news</p>
					<h2 class="font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em]">
						Covered by the national press
					</h2>
				</div>
			</div>
		</Reveal>

		<div class="mt-12">
			{#each homePress as item, i (item.slug)}
				<Reveal delay={Math.min(i, 3) * 70}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group grid gap-1 border-b border-white/12 py-6 transition-colors hover:bg-white/[0.04] sm:grid-cols-[15rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-4"
					>
						<span class="wordmark text-lg text-aqua-400">{item.publication}</span>
						<span class="font-display text-lg leading-snug font-medium text-white/85 group-hover:text-white lg:text-xl">
							{item.headline}
						</span>
						<span class="text-xs font-bold tracking-widest text-white/45 uppercase group-hover:text-aqua-400">
							Read ↗
						</span>
					</a>
				</Reveal>
			{/each}
		</div>
		<Reveal delay={200}>
			<a href="{base}/news/" class="btn btn-ghost-dark mt-10">All press coverage</a>
		</Reveal>
	</div>
</section>

<!-- ============ 03 · PARTNERS: typographic marquee ============ -->
<section class="border-b border-ink-900/8 bg-paper py-20 lg:py-24" aria-label="Partners and clients">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="03" eyebrow="Partners & clients" title="Trusted by organisations across Bangladesh" />
	</div>
	<div class="mt-12">
		<Marquee speed={55}>
			<div class="flex items-center gap-16 py-2">
				{#each partners as partner (partner.name)}
					<div class="opacity-80 transition-all duration-350 hover:scale-[1.03] hover:opacity-100">
						<PartnerLogo {partner} />
					</div>
				{/each}
			</div>
		</Marquee>
	</div>
</section>

<!-- ============ WHAT'S COMING UP ============ -->
<section class="bg-paper py-24 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead eyebrow="Programmes" title="Recent work and new enquiries" />
		<div class="mt-12 grid gap-6 lg:grid-cols-2">
			{#if upcomingEvents.length > 0}
				{#each upcomingEvents as event (event.slug)}
					<Reveal>
						<article class="h-full rounded-xl border border-ink-900/10 bg-white p-7">
							{#if event.dateLabel}
								<p class="eyebrow">{event.dateLabel}</p>
							{/if}
							<h3 class="mt-2 font-display text-xl font-bold">{event.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">{event.summary}</p>
						</article>
					</Reveal>
				{/each}
			{:else}
				<Reveal>
					<div class="flex h-full flex-col md:flex-row items-center gap-6 rounded-2xl border border-dashed border-ink-900/20 bg-white/60 p-8 shadow-sm">
						<img src="{base}/images/illustrations/empty-calendar.svg" alt="" class="h-28 w-28 shrink-0" loading="lazy" width="200" height="200" />
						<div>
							<h3 class="font-display text-xl font-bold">Planning training for your organisation?</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">
								Tell us about your team, sector, and the problem you want the programme to address.
							</p>
							<a href="{base}/corporate-training/" class="btn btn-electric mt-4 self-start !py-2 !px-4 text-sm">Discuss a programme</a>
						</div>
					</div>
				</Reveal>
			{/if}
			{#if latestEvent}
				<Reveal delay={120}>
					<a href="{base}/events/#{latestEvent.slug}" class="group block h-full overflow-hidden rounded-xl border border-ink-900/10 bg-white">
						{#if latestEvent.image}
							<div class="photo">
								<img
									src={img(latestEvent.image + '-sm')}
									alt={latestEvent.imageAlt ?? latestEvent.title}
									class="aspect-[16/8] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
									width="960"
									height="480"
									loading="lazy"
								/>
							</div>
						{/if}
						<div class="p-7">
							<p class="eyebrow">Most recent{latestEvent.dateLabel ? ` · ${latestEvent.dateLabel}` : ''}</p>
							<h3 class="mt-2 font-display text-xl font-bold">{latestEvent.title}</h3>
							<span class="link-sweep mt-3 inline-block text-sm font-semibold text-electric-600">
								Read the recap
							</span>
						</div>
					</a>
				</Reveal>
			{/if}
		</div>
	</div>
</section>

<!-- ============ DOCUMENTED STORIES ============ -->
<section class="border-b border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			eyebrow="From the field"
			title="What happened in the room"
			lede="Programme notes, photographs, and official updates from sessions delivered with participating organisations."
		/>
		<div class="mt-12 grid gap-6 lg:grid-cols-3">
			{#each featuredStories as story, i (story.slug)}
				<Reveal delay={i * 90}>
					<article class="flex h-full flex-col rounded-2xl border border-ink-900/10 bg-paper p-7 shadow-card">
						<p class="eyebrow">{story.sector}</p>
						<h3 class="mt-3 font-display text-xl font-bold leading-snug text-ink-900">{story.title}</h3>
						{#if story.client}
							<p class="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">{story.client}</p>
						{/if}
						<p class="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{story.summary}</p>
						<div class="mt-6 flex flex-wrap gap-2">
							{#each story.links as link (link.url)}
								<a href={link.url} target="_blank" rel="noopener noreferrer" class="rounded-md border border-ink-900/12 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 hover:border-electric-600 hover:text-electric-600">
									{link.label} ↗
								</a>
							{/each}
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
