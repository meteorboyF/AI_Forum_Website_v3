<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { weightShift } from '$lib/actions/weightShift';
	import { img } from '$lib/img';
	import { stats } from '$lib/data/stats';
	import { partners } from '$lib/data/partners';
	import { press } from '$lib/data/press';
	import { upcomingEvents, pastEvents } from '$lib/data/events';
	import { PROFESSIONALS_TRAINED } from '$lib/config';

	const homePress = press.filter((p) => p.language === 'English').slice(0, 5);
	const latestEvent = pastEvents[0];

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
			image: 'hero/innovation',
			imageAlt: 'A packed auditorium of students at an AI Forum Bangladesh hackathon',
			desc: 'Hackathons, roadshows, and summits that turn bold ideas into working solutions.',
			proof: 'Ran the CodeCure hackathon series at Rajshahi University, University of Dhaka, BUET, BRAC University, and North South University.',
			latest: { label: 'Latest: CodeCure 2025 at Rajshahi University', href: '/hackathon/' }
		},
		{
			title: 'Career Care',
			href: '/our-work/career-care/',
			image: 'hero/about',
			imageAlt: 'Participants working together at an AI Forum Bangladesh event',
			desc: 'Mentorship and placement support that link talent to jobs, internships, and research degrees.',
			proof: 'Guiding graduates and professionals into AI roles and international research placements.',
			latest: { label: 'Career support programmes', href: '/our-work/career-care/' }
		}
	];
</script>

<Seo
	title="Responsible AI for All"
	description="Bangladesh's AI training and innovation organisation. Hands-on AI programmes for industry, government, healthcare, and academia, hackathons across the country, and career support for the AI generation."
	path="/"
	ogImage="hero/home"
/>

<!-- ============ HERO: kinetic type over full-bleed graded photograph ============ -->
<section class="on-dark photo-duo scrim-b relative flex min-h-[92svh] items-end overflow-hidden text-white">
	<img
		src={img('hero/home-sm')}
		srcset="{img('hero/home-sm')} 960w, {img('hero/home')} 1920w"
		sizes="100vw"
		alt="A hall of healthcare professionals at an AI Forum Bangladesh hands-on training at the UIU Innovation Hub"
		class="absolute inset-0 h-full w-full object-cover"
		width="1920"
		height="1121"
		fetchpriority="high"
	/>
	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 pt-40 pb-12 sm:px-8 lg:px-12 lg:pb-16">
		<p class="eyebrow mb-6" style="--line-delay: 0ms">Training · Innovation · Careers</p>
		<h1
			use:weightShift
			class="font-display text-[clamp(3.2rem,10vw,8.5rem)] leading-[0.92] font-bold tracking-[-0.04em]"
		>
			<span class="line-mask" style="--line-delay: 80ms"><span>Responsible AI</span></span>
			<span class="line-mask" style="--line-delay: 220ms"><span class="text-aqua-400">for All.</span></span>
		</h1>
		<div class="mt-9 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
			<p class="max-w-xl text-lg leading-relaxed text-white/85">
				Bangladesh’s independent AI training and innovation organisation, working hands-on with
				industry, government, healthcare, and academia.
				{#if PROFESSIONALS_TRAINED !== null}
					More than {PROFESSIONALS_TRAINED.toLocaleString('en-GB')} professionals trained.
				{/if}
			</p>
			<div class="flex flex-wrap gap-4">
				<a href="{base}/events/" class="btn btn-primary">
					See Our Training Programmes
					<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</a>
				<a href="{base}/about-us/" class="btn btn-ghost-dark">Explore Our Team</a>
			</div>
		</div>
		<p class="mt-10 border-t border-white/15 pt-4 text-xs tracking-wide text-white/55 uppercase">
			Photograph: AI Essentials workshop with the Bangladesh Society of Physiologists, UIU Innovation Hub, Dhaka
		</p>
	</div>
</section>

<!-- ============ IMPACT: documented numbers only ============ -->
<section class="bg-paper" aria-label="Impact in numbers">
	<div class="mx-auto grid max-w-[88rem] grid-cols-2 gap-y-12 px-5 py-16 sm:px-8 lg:grid-cols-4 lg:py-20 lg:px-12">
		{#each stats as stat, i (stat.label)}
			<Reveal delay={i * 90} class="border-l border-ink-900/10 pl-6 lg:pl-8 {i === 0 ? 'border-l-0 pl-0 lg:pl-0' : ''}">
				<p class="font-display text-5xl font-bold tracking-[-0.03em] text-ink-900 lg:text-6xl">
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
			title="Three programmes, one mission"
			lede="Skills for professionals, momentum for innovators, and pathways for the next generation."
		/>

		<div class="mt-14 grid gap-6 lg:grid-cols-12">
			<!-- Feature: AI Academy -->
			<Reveal class="lg:col-span-7">
				<a
					href="{base}{programmes[0].href}"
					class="group photo relative block h-full min-h-[30rem] overflow-hidden rounded-xl bg-ink-950"
				>
					<img
						src={img(programmes[0].image)}
						alt={programmes[0].imageAlt}
						class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
						width="1400"
						height="1050"
						loading="lazy"
					/>
					<div class="absolute inset-0 z-10 bg-gradient-to-t from-ink-950/90 via-ink-950/25 to-transparent"></div>
					<div class="absolute inset-x-0 bottom-0 z-20 p-7 text-white lg:p-9">
						<p class="eyebrow !text-aqua-400">Flagship programme</p>
						<h3 class="mt-2 font-display text-3xl font-bold tracking-[-0.02em] lg:text-4xl">
							{programmes[0].title}
						</h3>
						<p class="mt-3 max-w-lg leading-relaxed text-white/85">{programmes[0].desc}</p>
						<p class="mt-4 max-w-lg border-l-2 border-aqua-400 pl-4 text-sm leading-relaxed text-white/75">
							{programmes[0].proof}
						</p>
						<span class="link-sweep mt-5 inline-block text-sm font-semibold text-aqua-400">
							{programmes[0].latest.label}
						</span>
					</div>
				</a>
			</Reveal>

			<!-- Two stacked -->
			<div class="grid gap-6 lg:col-span-5">
				{#each programmes.slice(1) as prog, i (prog.title)}
					<Reveal delay={(i + 1) * 120}>
						<a
							href="{base}{prog.href}"
							class="group grid h-full overflow-hidden rounded-xl border border-ink-900/10 bg-white sm:grid-cols-[0.85fr_1.15fr]"
						>
							<div class="photo relative min-h-44">
								<img
									src={img(prog.image + '-sm')}
									alt={prog.imageAlt}
									class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
									width="960"
									height="640"
									loading="lazy"
								/>
							</div>
							<div class="flex flex-col p-6 lg:p-7">
								<h3 class="font-display text-xl font-bold tracking-[-0.01em]">{prog.title}</h3>
								<p class="mt-2 text-sm leading-relaxed text-slate-600">{prog.desc}</p>
								<p class="mt-3 border-l-2 border-electric-600 pl-3 text-xs leading-relaxed font-medium text-ink-900">
									{prog.proof}
								</p>
								<span class="link-sweep mt-auto pt-4 text-sm font-semibold text-electric-600">
									{prog.latest.label}
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
		alt="Students collaborating at an AI Forum Bangladesh hackathon"
		class="absolute inset-0 h-full w-full object-cover"
		width="1920"
		height="1280"
		loading="lazy"
	/>
	<div class="relative z-10 mx-auto max-w-[88rem] px-5 py-28 sm:px-8 lg:px-12 lg:py-40">
		<Reveal>
			<p class="eyebrow mb-5">On the ground</p>
			<p class="max-w-4xl font-display text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.08] font-bold tracking-[-0.025em] text-balance">
				Real rooms, real professionals: from trading floors and hospital wards to student halls
				across the divisions of Bangladesh.
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
			{#each partners as partner (partner.name)}
				<span
					class="wordmark text-3xl whitespace-nowrap text-ink-900/50 transition-colors hover:text-electric-600 sm:text-4xl"
					title={partner.name}>{partner.lockup}</span
				>
			{/each}
		</Marquee>
	</div>
</section>

<!-- ============ WHAT'S COMING UP ============ -->
<section class="bg-paper py-24 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead eyebrow="What’s coming up" title="Upcoming events and training" />
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
					<div class="flex h-full flex-col justify-center rounded-xl border border-dashed border-ink-900/20 bg-white/60 p-8">
						<h3 class="font-display text-xl font-bold">The next programme is being scheduled</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600">
							New trainings and events are announced first on our Facebook page and newsletter.
							Subscribe below and you will hear about the next one before anyone else.
						</p>
						<a href="#newsletter" class="btn btn-electric mt-6 self-start">Get notified</a>
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

<div id="newsletter">
	<NewsletterForm />
</div>
