<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import { img } from '$lib/img';

	const programmes = [
		{
			title: 'AI Academy',
			href: '/our-work/ai-academy/',
			image: 'events/lankabangla',
			alt: 'Capital market professionals at an AI Forum Bangladesh training session',
			description: 'Practical, sector-focused AI training for professionals and institutional teams.',
			link: 'Explore training programmes',
			icon: 'academy'
		},
		{
			title: 'Innovation Ecosystem',
			href: '/our-work/innovation-ecosystem/',
			image: 'events/galleries/unicef/11',
			alt: 'Participants collaborating during an AI Forum Bangladesh programme',
			description: 'Roadshows and collaborative programmes that introduce applied AI beyond the classroom.',
			link: 'See innovation programmes',
			icon: 'ecosystem'
		},
		{
			title: 'Career Care',
			href: '/our-work/career-care/',
			image: 'events/galleries/aims-lab/5',
			alt: 'Students and mentors at an AI Forum Bangladesh session',
			description: 'Mentoring and career sessions for people preparing to work and study in AI.',
			link: 'Explore career support',
			icon: 'careers'
		}
	];
</script>

<Seo title="Programmes" description="Explore AI Forum Bangladesh training, innovation, and career programmes." path="/our-work/" ogImage="events/lankabangla" />

<section class="on-dark mesh-dark grain relative overflow-hidden text-white">
	<div class="mx-auto max-w-[88rem] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
		<Reveal>
			<p class="eyebrow mb-5">Programmes</p>
			<h1 class="max-w-4xl font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.96] font-bold">Choose where you want to begin.</h1>
			<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">Training for professional teams, programmes for emerging innovators, and practical guidance for people building careers in AI.</p>
		</Reveal>
	</div>
</section>

<section class="bg-paper py-20 lg:py-28">
	<div class="mx-auto grid max-w-[88rem] gap-7 px-5 sm:px-8 lg:grid-cols-3 lg:px-12">
		{#each programmes as programme, index (programme.title)}
			<Reveal delay={index * 100}>
				<a href="{base}{programme.href}" class="card-hover-trigger group flex h-full flex-col overflow-hidden rounded-lg border border-ink-900/10 bg-white shadow-card">
					<div class="image-zoom-container aspect-[4/3] overflow-hidden">
						<img src={img(programme.image)} alt={programme.alt} class="image-zoom-img h-full w-full object-cover" width="960" height="720" loading={index === 0 ? 'eager' : 'lazy'} />
					</div>
					<div class="flex flex-1 flex-col p-6 lg:p-8">
						<Icons name={programme.icon} class="h-7 w-7 text-electric-600" />
						<h2 class="mt-5 font-display text-2xl font-bold">{programme.title}</h2>
						<p class="mt-3 leading-relaxed text-slate-600">{programme.description}</p>
						<span class="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-electric-600">{programme.link}<Icons name="arrow-right" class="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
					</div>
				</a>
			</Reveal>
		{/each}
	</div>
</section>
