<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import HeroCanvas from '$lib/components/HeroCanvas.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import Token from '$lib/components/Token.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img, imgSet } from '$lib/img';
	import { stats } from '$lib/data/stats';
	import { partners } from '$lib/data/partners';
	import { press } from '$lib/data/press';
	import { upcomingEvents, pastEvents } from '$lib/data/events';

	const heroImg = imgSet('events/lankabangla', 1400);
	const homePress = press.filter((p) => p.language === 'English').slice(0, 4);
	const latestEvent = pastEvents[0];

	const programmes = [
		{
			title: 'AI Academy',
			href: '/our-work/ai-academy/',
			image: 'home/ai-academy',
			desc: 'Practical AI training, sector-focused workshops, and global-standard curricula for students, professionals, and institutions.',
			proof: 'Delivered AI training for Grameenphone, the Dhaka Stock Exchange, LankaBangla Securities, and healthcare professionals across multiple institutions.',
			latest: { label: 'Latest: AI Essentials for Capital Market Professionals', href: '/events/#lankabangla-capital-markets' }
		},
		{
			title: 'Innovation Ecosystem',
			href: '/our-work/innovation-ecosystem/',
			image: 'home/innovation',
			desc: 'Hackathons, summits, and roadshows that turn bold ideas into impactful solutions for Bangladesh.',
			proof: 'Ran the CodeCure hackathon series at Rajshahi University, University of Dhaka, BUET, BRAC University, and North South University.',
			latest: { label: 'Latest: CodeCure 2025 at Rajshahi University', href: '/hackathon/' }
		},
		{
			title: 'Career Care',
			href: '/our-work/career-care/',
			image: 'home/career-care',
			desc: 'Mentorship, career guidance, and skill-building that link talent to jobs, internships, and research placements.',
			proof: 'Guiding graduates and professionals into AI roles and international research placements.',
			latest: { label: 'Latest: career support programmes', href: '/our-work/career-care/' }
		}
	];
</script>

<Seo
	title="Responsible AI for All"
	description="Bangladesh's AI training and innovation organisation. Hands-on AI programmes for industry, government, healthcare, and academia, hackathons across the country, and career support for the AI generation."
	path="/"
/>

<!-- ============ HERO ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden text-white">
	<HeroCanvas />
	<div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
		<div>
			<Reveal>
				<p class="eyebrow mb-5">Training · Innovation · Careers</p>
				<h1 class="text-5xl font-bold text-balance sm:text-6xl lg:text-7xl lg:leading-[1.05]">
					Responsible AI <span class="bg-gradient-to-r from-aqua-400 to-electric-400 bg-clip-text text-transparent">for All</span>
				</h1>
				<p class="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
					Bangladesh’s independent AI training and innovation organisation.
					<Token value={'{{PROFESSIONALS_TRAINED}}'} /> professionals trained. Working with industry,
					government, healthcare, and academia.
				</p>
				<div class="mt-9 flex flex-wrap gap-4">
					<a href="{base}/events/" class="btn btn-primary">
						See Our Training Programmes
						<svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>
					</a>
					<a href="{base}/about-us/" class="btn btn-ghost-dark">Explore Our Team</a>
				</div>
			</Reveal>
		</div>

		<Reveal delay={150}>
			<figure class="group relative">
				<div class="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-electric-600/40 to-aqua-500/30 blur-xl" aria-hidden="true"></div>
				<img
					src={heroImg.src}
					srcset={heroImg.srcset}
					sizes="(min-width: 1024px) 44vw, 92vw"
					alt="LankaBangla Securities officials receiving certificates after AI training at the UIU Innovation Hub"
					class="relative w-full rounded-2xl border border-white/15 shadow-card-lg transition-transform duration-500 group-hover:scale-[1.015]"
					width="1400"
					height="1050"
					fetchpriority="high"
				/>
				<figcaption class="relative mt-3 text-sm text-white/60">
					Capital market professionals complete hands-on AI training at the UIU Innovation Hub, October 2025.
				</figcaption>
			</figure>
		</Reveal>
	</div>
</section>

<!-- ============ IMPACT NUMBERS ============ -->
<section class="border-b border-ink-900/8 bg-white" aria-label="Impact in numbers">
	<div class="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:py-16">
		{#each stats as stat, i (stat.label)}
			<Reveal delay={i * 90} class="text-center">
				<p class="font-display text-4xl font-bold text-ink-900 lg:text-5xl">
					{#if stat.value !== null}
						<CountUp value={stat.value} suffix={stat.suffix ?? ''} />
					{:else}
						<Token value={stat.token ?? ''} />
					{/if}
				</p>
				<p class="mt-2 text-sm font-medium text-slate-500">{stat.label}</p>
			</Reveal>
		{/each}
	</div>
</section>

<!-- ============ PROGRAMMES ============ -->
<section class="mesh-light py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="What we do"
			title="Three programmes, one mission"
			lede="Every programme is built to move Bangladesh’s AI capability forward: skills for professionals, momentum for innovators, and pathways for the next generation."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-3">
			{#each programmes as prog, i (prog.title)}
				<Reveal delay={i * 120}>
					<article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-lg">
						<div class="overflow-hidden">
							<img
								src={img(prog.image + '-sm')}
								srcset="{img(prog.image + '-sm')} 640w, {img(prog.image)} 1200w"
								sizes="(min-width: 768px) 30vw, 92vw"
								alt=""
								class="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								width="640"
								height="400"
								loading="lazy"
							/>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="text-xl font-bold">{prog.title}</h3>
							<p class="mt-2.5 text-sm leading-relaxed text-slate-600">{prog.desc}</p>
							<p class="mt-4 border-l-2 border-aqua-500 pl-3 text-sm leading-relaxed font-medium text-ink-900">
								{prog.proof}
							</p>
							<div class="mt-auto pt-5">
								<a href="{base}{prog.latest.href}" class="block text-xs font-semibold tracking-wide text-electric-600 uppercase">
									{prog.latest.label} →
								</a>
								<a href="{base}{prog.href}" class="btn btn-ghost-light mt-4 w-full !py-2.5 text-sm">
									Learn more
								</a>
							</div>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ PARTNERS ============ -->
<section class="border-y border-ink-900/8 bg-white py-14" aria-label="Partners and clients">
	<div class="mx-auto max-w-7xl px-5">
		<p class="text-center font-display text-sm font-semibold tracking-widest text-slate-500 uppercase">
			Trusted by organisations across Bangladesh
		</p>
		<div class="mt-8">
			<Marquee speed={42}>
				{#each partners as partner (partner.name)}
					<span
						class="wordmark text-xl whitespace-nowrap text-slate-500 grayscale transition-colors hover:text-ink-900 sm:text-2xl"
						title={partner.name}>{partner.lockup}</span
					>
				{/each}
			</Marquee>
		</div>
		<p class="mt-6 text-center text-xs text-slate-500">
			Text lockups shown until official logo files are supplied by each organisation.
		</p>
	</div>
</section>

<!-- ============ IN THE NEWS ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="flex flex-wrap items-end justify-between gap-6">
			<SectionHead
				eyebrow="In the news"
				title="Covered by the national press"
				lede="Our training programmes have been reported by newspapers and business media across Bangladesh."
			/>
			<Reveal delay={100}>
				<a href="{base}/news/" class="btn btn-ghost-dark shrink-0">All press coverage</a>
			</Reveal>
		</div>
		<div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{#each homePress as item, i (item.slug)}
				<Reveal delay={i * 100}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-full flex-col rounded-xl border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-aqua-400/50 hover:bg-white/[0.08]"
					>
						<span class="wordmark text-lg text-aqua-400">{item.publication}</span>
						<p class="mt-3 flex-1 text-sm leading-relaxed text-white/85">{item.headline}</p>
						<span class="mt-4 text-xs font-semibold tracking-wide text-white/50 uppercase group-hover:text-aqua-400">
							Read the article ↗
						</span>
					</a>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ WHAT'S COMING UP ============ -->
<section class="mesh-light py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="What’s coming up"
			title="Upcoming events and training"
		/>
		<div class="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
			{#if upcomingEvents.length > 0}
				{#each upcomingEvents as event (event.slug)}
					<Reveal>
						<article class="rounded-2xl border border-ink-900/8 bg-white p-6 shadow-card">
							<p class="eyebrow">{event.dateLabel}</p>
							<h3 class="mt-2 text-xl font-bold">{event.title}</h3>
							<p class="mt-2 text-sm text-slate-600">{event.summary}</p>
						</article>
					</Reveal>
				{/each}
			{:else}
				<Reveal>
					<div class="flex h-full flex-col justify-center rounded-2xl border border-dashed border-ink-900/15 bg-white/60 p-8">
						<h3 class="text-xl font-bold">The next programme is being scheduled</h3>
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
					<article class="group overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card">
						{#if latestEvent.image}
							<img
								src={img(latestEvent.image + '-sm')}
								alt={latestEvent.imageAlt ?? latestEvent.title}
								class="aspect-[16/8] w-full object-cover"
								width="1400"
								height="700"
								loading="lazy"
							/>
						{/if}
						<div class="p-6">
							<p class="eyebrow">Most recent · <Token value={latestEvent.dateLabel} /></p>
							<h3 class="mt-2 text-xl font-bold">{latestEvent.title}</h3>
							<a href="{base}/events/#{latestEvent.slug}" class="link-sweep mt-3 inline-block text-sm font-semibold text-electric-600">
								Read the recap
							</a>
						</div>
					</article>
				</Reveal>
			{/if}
		</div>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
