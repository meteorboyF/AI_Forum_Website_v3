<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { globalTrack, localTrack } from '$lib/data/careers';
	import { testimonials } from '$lib/data/testimonials';

	const careerQuotes = testimonials.filter(
		(t) => t.text.includes('placement') || t.text.includes('data role') || t.text.includes('research')
	).slice(0, 3);
</script>

<Seo
	title="Career Care"
	description="Mentorship, career guidance, global research placement, and job market support from AI Forum Bangladesh for Bangladesh's next generation of AI professionals."
	path="/our-work/career-care/"
	ogImage="career/banner"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="max-w-2xl">
			<Reveal>
				<p class="eyebrow mb-4">Our work · Career Care</p>
				<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
					From talent to opportunity, at home and abroad
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-white/80">
					Mentorship, career profiling, and placement support that link Bangladesh’s graduates and
					professionals to AI jobs, internships, and international research degrees.
				</p>
				<a href="{base}/contact-us/" class="btn btn-primary mt-8">Talk to a mentor</a>
			</Reveal>
		</div>
	</div>
</section>

<!-- ============ GLOBAL TRACK ============ -->
<section class="mesh-light py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead eyebrow="Global track" title="Launch your global career" />
		<div class="mt-10 grid gap-6 lg:grid-cols-3">
			{#each globalTrack as item, i (item.id)}
				<Reveal delay={i * 100} class={item.size === 'large' ? 'lg:col-span-1' : ''}>
					<article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
						<img
							src={img(item.image)}
							alt=""
							class="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
							width="1000"
							height="563"
							loading="lazy"
						/>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="text-lg font-bold">{item.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ LOCAL TRACK ============ -->
<section class="border-t border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead eyebrow="Bangladesh track" title="Excel your career at home" />
		<div class="mt-10 grid gap-6 lg:grid-cols-3">
			{#each localTrack as item, i (item.id)}
				<Reveal delay={i * 100}>
					<article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
						<img
							src={img(item.image)}
							alt=""
							class="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
							width="1000"
							height="563"
							loading="lazy"
						/>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="text-lg font-bold">{item.title}</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ TESTIMONIALS ============ -->
{#if careerQuotes.length > 0}
	<section class="mesh-light py-16 lg:py-20">
		<div class="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3">
			{#each careerQuotes as q, i (q.name)}
				<Reveal delay={i * 100}>
					<figure class="h-full rounded-2xl border border-ink-900/8 bg-white p-6 shadow-card">
						<blockquote class="text-sm leading-relaxed font-medium text-ink-900">“{q.text}”</blockquote>
						<figcaption class="mt-4 text-xs text-slate-500">
							<span class="font-bold text-ink-900">{q.name}</span> · {q.role}
						</figcaption>
					</figure>
				</Reveal>
			{/each}
		</div>
	</section>
{/if}

<NewsletterForm />
