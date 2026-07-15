<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { initiatives } from '$lib/data/innovation';

	const roadshow = initiatives.find((i) => i.slug === 'ai-roadshow');
</script>

<Seo
	title="Innovation Ecosystem"
	description="AI Forum Bangladesh's innovation programmes: the divisional AI Roadshow reaching all 8 divisions, Lab 2 Market, and initiatives in development."
	path="/our-work/innovation-ecosystem/"
	ogImage="hero/innovation"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark photo-duo scrim-b relative flex min-h-[56vh] items-end overflow-hidden text-white bg-jamdani-dark">
	<img
		src={img('hero/innovation-sm')}
		srcset="{img('hero/innovation-sm')} 960w, {img('hero/innovation')} 1920w"
		sizes="100vw"
		alt="A packed auditorium of students at an AI Forum Bangladesh event"
		class="absolute inset-0 h-full w-full object-cover"
		width="1920"
		height="1280"
		fetchpriority="high"
	/>
	<!-- Jamdani pattern overlay integrated into dark header band -->
	<div class="absolute inset-0 z-5 bg-jamdani-dark opacity-[0.08] pointer-events-none"></div>

	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 pt-36 pb-14 sm:px-8 lg:px-12 lg:pb-20">
		<p class="eyebrow mb-5">Our work · Innovation Ecosystem</p>
		<h1 class="max-w-5xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
			<span class="line-mask"><span>Activating the people who will build Bangladesh’s AI future</span></span>
		</h1>
		<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
			Roadshows, summits, and innovation programmes that turn bold ideas into working solutions, from
			university campuses to schools in every division of the country.
		</p>
	</div>
</section>

<!-- ============ AI ROADSHOW SPOTLIGHT ============ -->
{#if roadshow}
	<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
		<!-- Jamdani pattern overlay integrated into dark spotlight band -->
		<div class="absolute inset-0 z-1 bg-jamdani-dark opacity-[0.06] pointer-events-none"></div>

		<div class="relative z-10 mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
			<Reveal>
				<p class="eyebrow mb-4">Spotlight</p>
				<h2 class="text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
					Reaching students across all 8 divisions of Bangladesh
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-white/80">{roadshow.detail}</p>
				<a href="{base}/contact-us/" class="btn btn-ghost-dark mt-7">Bring the Roadshow to your institution</a>
			</Reveal>
			<Reveal delay={150}>
				<div class="flex items-center justify-center gap-6 lg:justify-end">
					<span
						class="font-display text-[clamp(9rem,22vw,17rem)] leading-none font-bold tracking-[-0.05em] text-transparent"
						style="-webkit-text-stroke: 2px rgb(34 211 238 / 0.6)"
						aria-hidden="true">8</span
					>
					<p class="max-w-[11ch] font-display text-xl leading-snug font-bold text-white/90">
						divisions of Bangladesh
					</p>
				</div>
			</Reveal>
		</div>
	</section>
{/if}

<!-- ============ INITIATIVES ============ -->
<section class="bg-paper py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="02"
			eyebrow="Coming soon"
			title="More ways to learn, build, and connect"
			lede="We are shaping the next set of AI Forum Bangladesh programmes now. When each one is ready, you will find the details here."
		/>
		<div class="mt-14 grid items-center gap-8 rounded-[1.5rem] border border-ink-900/8 bg-white p-5 shadow-card sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
			<Reveal>
				<div class="grid grid-cols-2 gap-3 sm:gap-4">
					<img src={img('events/galleries/sonali-intellect/12')} alt="Professionals taking part in an AI Forum Bangladesh training session" class="col-span-2 aspect-[16/8] w-full rounded-xl object-cover" loading="lazy" />
					<img src={img('events/galleries/unicef/1')} alt="Participants learning together during an AI Forum Bangladesh session" class="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
					<img src={img('events/galleries/aims-lab/1')} alt="Research engineers working together during an AI Forum Bangladesh training" class="aspect-[4/3] w-full rounded-xl object-cover" loading="lazy" />
				</div>
			</Reveal>
			<Reveal delay={120}>
				<div class="max-w-xl lg:pl-4">
					<p class="text-xs font-bold tracking-[0.14em] text-electric-600 uppercase">In the works</p>
					<h3 class="mt-3 font-display text-3xl leading-[1.05] font-bold tracking-[-0.025em] text-ink-900 sm:text-4xl">The next chapter is taking shape.</h3>
					<p class="mt-5 text-base leading-relaxed text-slate-600">We are developing new opportunities for students, professionals, and organisations to work with AI in practical ways. We will share the programmes, dates, and ways to take part here once they are confirmed.</p>
					<a href="#newsletter" class="btn btn-electric mt-7">Get programme updates</a>
				</div>
			</Reveal>
		</div>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
