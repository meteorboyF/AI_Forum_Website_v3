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
<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-20 text-white lg:pb-24">
	<div class="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div class="max-w-4xl">
			<Reveal>
				<p class="eyebrow mb-5">Our work · Career Care</p>
				<h1 class="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
					<span class="line-mask"><span>From talent to opportunity, at home and abroad</span></span>
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
<section class="bg-paper py-24 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="01" eyebrow="Global track" title="Launch your global career" />
		<div class="mt-10 grid gap-6 lg:grid-cols-3">
			{#each globalTrack as item, i (item.id)}
				<Reveal delay={i * 100} class={item.size === 'large' ? 'lg:col-span-1' : ''}>
					<article class="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-900/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
						<div class="photo">
							<img
								src={img(item.image)}
								alt=""
								class="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								width="1000"
								height="563"
								loading="lazy"
							/>
						</div>
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
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="02" eyebrow="Bangladesh track" title="Excel your career at home" />
		<div class="mt-10 grid gap-6 lg:grid-cols-3">
			{#each localTrack as item, i (item.id)}
				<Reveal delay={i * 100}>
					<article class="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-900/10 bg-paper shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
						<div class="photo">
							<img
								src={img(item.image)}
								alt=""
								class="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
								width="1000"
								height="563"
								loading="lazy"
							/>
						</div>
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
	<section class="bg-paper py-16 lg:py-20">
		<div class="mx-auto grid max-w-[88rem] gap-6 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
			{#each careerQuotes as q, i (q.name)}
				<Reveal delay={i * 100}>
					<figure class="h-full rounded-xl border border-ink-900/10 bg-white p-6 shadow-card">
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
