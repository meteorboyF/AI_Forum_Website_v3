<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import StatusTag from '$lib/components/StatusTag.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { courses, courseCategories, sectors } from '$lib/data/courses';
	import { caseStudyEvents } from '$lib/data/events';
	import { trainingClients } from '$lib/data/partners';
	import { testimonials } from '$lib/data/testimonials';

	const academyTestimonial = testimonials.find((t) => t.text.includes('Healthcare'));
	const eventBySlug = new Map(caseStudyEvents.map((e) => [e.slug, e]));
</script>

<Seo
	title="AI Academy"
	description="Hands-on AI training for professionals, institutions, and startups in Bangladesh: healthcare, business, capital markets, banking, education, and government programmes delivered by AI Forum Bangladesh."
	path="/our-work/ai-academy/"
	ogImage="events/bsp"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="max-w-2xl">
			<Reveal>
				<p class="eyebrow mb-4">Our work · AI Academy</p>
				<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
					Training that has already happened, for people who need it next
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-white/80">
					Practical, hands-on AI programmes designed and led by Professor Khondaker A. Mamun and
					delivered to professionals across finance, healthcare, banking, energy, and government.
				</p>
				<div class="mt-8 flex flex-wrap gap-4">
					<a href="{base}/corporate-training/" class="btn btn-primary">Request a Proposal</a>
					<a href="{base}/events/" class="btn btn-ghost-dark">See past deliveries</a>
				</div>
			</Reveal>
		</div>

		<!-- Real training photos, not stock -->
		<div class="mt-14 grid gap-4 sm:grid-cols-3">
			{#each ['events/lankabangla', 'events/bsp', 'events/ogsb'] as photo, i (photo)}
				<Reveal delay={i * 120}>
					<img
						src={img(photo + '-sm')}
						srcset="{img(photo + '-sm')} 700w, {img(photo)} 1400w"
						sizes="(min-width: 640px) 32vw, 92vw"
						alt={i === 0
							? 'Capital market professionals during hands-on AI training at the UIU Innovation Hub'
							: i === 1
								? 'Bangladesh Society of Physiologists members at a full-day AI workshop'
								: 'Doctors at OGSB Hospital & IRCH during AI training'}
						class="aspect-[4/3] w-full rounded-xl border border-white/15 object-cover"
						width="700"
						height="525"
						loading={i === 0 ? 'eager' : 'lazy'}
					/>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ SECTOR-SPECIFIC TRAINING ============ -->
<section class="mesh-light py-20 lg:py-28" id="sectors">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Corporate & institutional training"
			title="Sector-specific programmes with a real track record"
			lede="Every sector below has either a completed delivery behind it or a programme built for it. Your team gets training designed for the work they actually do."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each sectors as sector, i (sector.slug)}
				<Reveal delay={(i % 3) * 100}>
					<article class="flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
						<h3 class="text-lg font-bold">{sector.name}</h3>
						<p class="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{sector.blurb}</p>
						<div class="mt-5 flex items-center justify-between gap-3">
							<a href="{base}/corporate-training/#proposal" class="text-sm font-bold text-electric-600 link-sweep">
								Request a Proposal
							</a>
							{#if sector.caseStudies.length > 0 && eventBySlug.has(sector.caseStudies[0])}
								<a href="{base}/events/#{sector.caseStudies[0]}" class="text-xs font-semibold tracking-wide text-slate-500 uppercase hover:text-ink-900">
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
<section class="border-y border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Delivered programmes"
			title="Proof, not promises"
			lede="One-paragraph summaries of real programmes. Full recaps, photos, and press links live on the Events & Training page."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2">
			{#each caseStudyEvents as event, i (event.slug)}
				<Reveal delay={(i % 2) * 100}>
					<article class="flex h-full flex-col gap-5 rounded-2xl border border-ink-900/8 bg-paper p-6 sm:flex-row">
						{#if event.image}
							<img
								src={img(event.image + '-sm')}
								alt={event.imageAlt ?? ''}
								class="aspect-[4/3] w-full rounded-xl object-cover sm:w-44 sm:shrink-0"
								width="700"
								height="525"
								loading="lazy"
							/>
						{/if}
						<div>
							<p class="eyebrow !text-xs">{event.sector}</p>
							<h3 class="mt-1 font-bold">{event.client ?? event.title}</h3>
							<p class="mt-2 line-clamp-4 text-sm leading-relaxed text-slate-600">{event.summary}</p>
							<a href="{base}/events/#{event.slug}" class="link-sweep mt-3 inline-block text-sm font-semibold text-electric-600">
								Full recap
							</a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ COURSES ============ -->
<section class="mesh-light py-20 lg:py-28" id="courses">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Open programmes"
			title="Courses in the Academy"
			lede="Each course carries an honest status. If a course is available on request, we will scope a batch for your team or institution."
		/>
		{#each courseCategories as cat (cat.key)}
			<div class="mt-14">
				<Reveal>
					<h3 class="font-display text-sm font-bold tracking-widest text-slate-500 uppercase">
						{cat.label}
					</h3>
				</Reveal>
				<div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each courses.filter((c) => c.category === cat.key) as course, i (course.id)}
						<Reveal delay={(i % 3) * 100}>
							<article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
								<div class="relative overflow-hidden">
									<img
										src={img(course.image)}
										alt=""
										class="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
										width="1000"
										height="563"
										loading="lazy"
									/>
									<div class="absolute top-3 left-3">
										<StatusTag status={course.status} />
									</div>
								</div>
								<div class="flex flex-1 flex-col p-5">
									<h4 class="text-lg font-bold">{course.title}</h4>
									<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{course.description}</p>
									{#if course.deliveredTo}
										<p class="mt-3 border-l-2 border-aqua-500 pl-3 text-xs leading-relaxed font-medium text-ink-900">
											Delivered for {course.deliveredTo.join(', ')}
										</p>
									{/if}
									<a
										href="{base}/corporate-training/#proposal"
										class="link-sweep mt-4 inline-block text-sm font-semibold text-electric-600"
									>
										Enquire about this course
									</a>
								</div>
							</article>
						</Reveal>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- ============ TESTIMONIAL + TRUSTED BY ============ -->
<section class="border-t border-ink-900/8 bg-white py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-5">
		{#if academyTestimonial}
			<Reveal>
				<figure class="mx-auto max-w-3xl text-center">
					<blockquote class="text-xl leading-relaxed font-medium text-ink-900 sm:text-2xl">
						“{academyTestimonial.text}”
					</blockquote>
					<figcaption class="mt-5 text-sm text-slate-500">
						<span class="font-bold text-ink-900">{academyTestimonial.name}</span>
						· {academyTestimonial.role}
					</figcaption>
				</figure>
			</Reveal>
		{/if}
		<div class="mt-14">
			<p class="text-center font-display text-sm font-semibold tracking-widest text-slate-500 uppercase">
				Organisations trained by the Academy
			</p>
			<div class="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
				{#each trainingClients as client (client.name)}
					<span class="wordmark text-lg text-slate-500 transition-colors hover:text-ink-900" title={client.name}>
						{client.lockup}
					</span>
				{/each}
			</div>
		</div>
	</div>
</section>

<NewsletterForm />
