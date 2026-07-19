<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import { img } from '$lib/img';

	const topics = [
		{
			title: 'Understanding AI roles',
			description: 'A practical look at technical, research, product, and domain-specialist roles, including what each path asks you to learn.',
			icon: 'careers'
		},
		{
			title: 'Planning the next step',
			description: 'Structured conversations about skills, portfolios, further study, and the evidence employers or research supervisors expect.',
			icon: 'academy'
		},
		{
			title: 'Learning from practitioners',
			description: 'Sessions with researchers and professionals who can explain how their work differs from the simplified version seen online.',
			icon: 'ecosystem'
		}
	];

	const photos = [
		{ src: 'events/galleries/aims-lab/5', alt: 'Students listening during an AI Forum Bangladesh session' },
		{ src: 'events/galleries/unicef/11', alt: 'Participants working together at an AI Forum Bangladesh programme' },
		{ src: 'events/galleries/beprc/20', alt: 'Professionals gathered after an AI Forum Bangladesh programme' }
	];
</script>

<Seo title="Career Care" description="Career conversations and mentoring sessions for students and professionals exploring work and research in AI." path="/our-work/career-care/" ogImage="events/galleries/aims-lab/5" />

<section class="on-dark mesh-dark grain relative overflow-hidden text-white">
	<div class="mx-auto grid min-h-[70svh] max-w-[88rem] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
		<Reveal>
			<p class="eyebrow mb-5">Our work · Career Care</p>
			<h1 class="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.96] font-bold">Make the next move with better information.</h1>
			<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">Career Care brings students and professionals into direct conversations about AI roles, research, further study, and the skills behind them.</p>
			<a href="{base}/contact-us/" class="btn btn-primary mt-8">Ask about a career session</a>
		</Reveal>
		<Reveal delay={140}>
			<div class="relative mx-auto max-w-xl overflow-hidden rounded-lg border border-white/15 bg-white/5 p-2 shadow-card-lg">
				<img src={img('events/galleries/aims-lab/5')} alt="Students and mentors during an AI Forum Bangladesh session" class="aspect-[4/3] w-full rounded-md object-cover" width="1000" height="750" loading="eager" />
				<p class="absolute bottom-5 left-5 rounded-md bg-ink-950/85 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm">AIMS Lab programme</p>
			</div>
		</Reveal>
	</div>
</section>

<section class="bg-paper py-20 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="01" eyebrow="What we cover" title="Specific questions, not career promises" lede="The format is educational and advisory. It does not guarantee admission, employment, visas, or placement." />
		<div class="mt-12 grid gap-5 lg:grid-cols-3">
			{#each topics as topic, index (topic.title)}
				<Reveal delay={index * 100}>
					<article class="h-full rounded-lg border border-ink-900/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-electric-600/30 hover:shadow-card">
						<Icons name={topic.icon} class="h-7 w-7 text-electric-600" />
						<h2 class="mt-6 font-display text-xl font-bold">{topic.title}</h2>
						<p class="mt-3 leading-relaxed text-slate-600">{topic.description}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<section class="border-y border-ink-900/8 bg-white py-20 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div class="grid items-end gap-8 lg:grid-cols-2">
			<Reveal>
				<p class="eyebrow">The format</p>
				<h2 class="mt-4 max-w-xl font-display text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.03] font-bold">Bring Career Care to a campus or professional community.</h2>
			</Reveal>
			<Reveal delay={100}>
				<p class="max-w-xl text-lg leading-relaxed text-slate-600">Sessions can combine a practitioner talk, moderated questions, and focused discussion around the audience’s stage of study or work. Scope and speakers are agreed with the host institution.</p>
			</Reveal>
		</div>
		<div class="mt-12 grid gap-4 sm:grid-cols-3">
			{#each photos as photo, index (photo.src)}
				<Reveal delay={index * 80}>
					<div class="image-zoom-container overflow-hidden rounded-lg">
						<img src={img(photo.src)} alt={photo.alt} class="image-zoom-img aspect-[4/3] w-full object-cover" width="800" height="600" loading="lazy" />
					</div>
				</Reveal>
			{/each}
		</div>
		<Reveal>
			<div class="mt-12 flex flex-col items-start justify-between gap-5 rounded-lg bg-ink-950 p-7 text-white sm:flex-row sm:items-center lg:p-9">
				<div><h2 class="font-display text-2xl font-bold">Start with the audience.</h2><p class="mt-2 text-white/70">Tell us who the session is for and what decisions they are trying to make.</p></div>
				<a href="{base}/contact-us/" class="btn btn-primary shrink-0">Contact the team<Icons name="arrow-right" class="h-4 w-4" /></a>
			</div>
		</Reveal>
	</div>
</section>
