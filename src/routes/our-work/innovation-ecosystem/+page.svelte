<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import Icons from '$lib/components/Icons.svelte';
	import { img } from '$lib/img';

	const format = [
		{ step: '01', title: 'Set the question', text: 'The host institution identifies the audience and the problem the programme should examine.' },
		{ step: '02', title: 'Build the room', text: 'Educators, practitioners, and participants work through demonstrations, discussion, and sector examples.' },
		{ step: '03', title: 'Document the work', text: 'Outputs, questions, and follow-up opportunities are recorded so the programme has a life beyond the event.' }
	];

	const fieldPhotos = [
		{ src: 'events/galleries/unicef/1', alt: 'Participants at an AI Forum Bangladesh programme' },
		{ src: 'events/galleries/sonali-intellect/12', alt: 'Professionals in a collaborative AI session' },
		{ src: 'events/galleries/aims-lab/1', alt: 'Researchers working together during a programme' }
	];
</script>

<Seo title="Innovation Ecosystem" description="Collaborative AI programmes for campuses, institutions, and professional communities in Bangladesh." path="/our-work/innovation-ecosystem/" ogImage="events/galleries/unicef/1" />

<section class="on-dark relative flex min-h-[72svh] items-end overflow-hidden text-white">
	<img src={img('events/galleries/unicef/1')} alt="Participants gathered for an AI Forum Bangladesh programme" class="absolute inset-0 h-full w-full object-cover" width="1920" height="1280" fetchpriority="high" />
	<div class="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/25"></div>
	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
		<Reveal>
			<p class="eyebrow mb-5">Our work · Innovation Ecosystem</p>
			<h1 class="max-w-5xl font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.96] font-bold">Put people, problems, and AI in the same room.</h1>
			<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">We work with universities and institutions to create practical spaces for learning, discussion, and collaboration around applied AI.</p>
			<a href="{base}/contact-us/" class="btn btn-primary mt-8">Host a programme</a>
		</Reveal>
	</div>
</section>

<section class="on-dark mesh-dark grain overflow-hidden py-20 text-white lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<Reveal>
			<p class="eyebrow">Programme format</p>
			<h2 class="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[1] font-bold">Designed with the host, not dropped in from a template.</h2>
		</Reveal>
		<div class="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12 lg:grid-cols-3">
			{#each format as item, index (item.step)}
				<Reveal delay={index * 100}>
					<article class="h-full bg-ink-950/70 p-7 backdrop-blur-sm lg:p-9">
						<p class="font-display text-5xl font-bold text-aqua-400/55">{item.step}</p>
						<h3 class="mt-7 font-display text-xl font-bold">{item.title}</h3>
						<p class="mt-3 leading-relaxed text-white/70">{item.text}</p>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<section class="bg-paper py-20 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="02" eyebrow="From the archive" title="Learning happens around a table" lede="These photographs come from programmes delivered with participating organisations and research communities." />
		<div class="mt-12 grid auto-rows-[15rem] gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[19rem]">
			{#each fieldPhotos as photo, index (photo.src)}
				<Reveal delay={index * 90} class={index === 0 ? 'sm:col-span-2 lg:col-span-7 lg:row-span-2' : 'lg:col-span-5'}>
					<div class="image-zoom-container h-full overflow-hidden rounded-lg">
						<img src={img(photo.src)} alt={photo.alt} class="image-zoom-img h-full w-full object-cover" width="1200" height="800" loading={index === 0 ? 'eager' : 'lazy'} />
					</div>
				</Reveal>
			{/each}
		</div>
		<Reveal>
			<div class="mt-12 grid gap-6 border-t border-ink-900/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-center">
				<div><h2 class="font-display text-2xl font-bold">See what has already been delivered.</h2><p class="mt-2 text-slate-600">Browse programme summaries, participating organisations, press links, and complete photo galleries.</p></div>
				<a href="{base}/events/" class="btn btn-electric">Browse past work<Icons name="arrow-right" class="h-4 w-4" /></a>
			</div>
		</Reveal>
	</div>
</section>
