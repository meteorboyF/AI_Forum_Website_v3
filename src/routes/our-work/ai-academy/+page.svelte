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
	import PartnerLogo from '$lib/components/PartnerLogo.svelte';
	import { testimonials } from '$lib/data/testimonials';
	import Icons from '$lib/components/Icons.svelte';

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
<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-20 text-white lg:pb-24">
	<!-- Jamdani pattern overlay integrated into dark header band -->
	<div class="absolute inset-0 z-1 bg-jamdani-dark opacity-[0.06] pointer-events-none"></div>

	<div class="relative z-10 mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div class="max-w-4xl">
			<p class="eyebrow mb-5">Our work · AI Academy</p>
			<h1 class="font-display text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
				<span class="line-mask"><span>Training that has already happened,</span></span>
				<span class="line-mask" style="--line-delay: 140ms"><span class="text-aqua-400">for people who need it next.</span></span>
			</h1>
			<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
				Practical, hands-on AI programmes designed and led by Professor Khondaker A. Mamun and
				delivered to professionals across finance, healthcare, banking, energy, and government.
			</p>
			<div class="mt-9 flex flex-wrap gap-4">
				<a href="{base}/corporate-training/" class="btn btn-primary">Request a Proposal</a>
				<a href="{base}/events/" class="btn btn-ghost-dark">See past deliveries</a>
			</div>
		</div>

		<!-- Real training photos, not stock -->
		<div class="mt-16 grid gap-6 sm:grid-cols-3">
			{#each ['events/lankabangla', 'events/bsp', 'events/ogsb'] as photo, i (photo)}
				<Reveal delay={i * 120}>
					<div class="image-zoom-container rounded-2xl shadow-card-lg border border-white/10 {i === 1 ? 'sm:-mt-6' : ''}">
						<img
							src={img(photo + '-sm')}
							srcset="{img(photo + '-sm')} 700w, {img(photo)} 1400w"
							sizes="(min-width: 640px) 32vw, 92vw"
							alt={i === 0
								? 'Capital market professionals during hands-on AI training at the UIU Innovation Hub'
								: i === 1
									? 'Bangladesh Society of Physiologists members at a full-day AI workshop'
									: 'Doctors at OGSB Hospital & IRCH during AI training'}
							class="image-zoom-img aspect-[4/3] w-full rounded-2xl object-cover"
							width="700"
							height="525"
							loading={i === 0 ? 'eager' : 'lazy'}
						/>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ SECTOR-SPECIFIC TRAINING ============ -->
<section class="bg-paper py-24 lg:py-32 bg-jamdani-light" id="sectors">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Corporate & institutional training"
			title="Sector-specific programmes with a real track record"
			lede="Every sector below has either a completed delivery behind it or a programme built for it. Your team gets training designed for the work they actually do."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each sectors as sector, i (sector.slug)}
				<Reveal delay={(i % 3) * 100}>
					<article class="card-hover-trigger flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-7 shadow-sm">
						<div class="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-electric-50 text-electric-600">
							<Icons name={sector.slug} class="h-6 w-6" />
						</div>
						<h3 class="font-display text-lg font-bold text-ink-900 text-underline-reveal">{sector.name}</h3>
						<p class="mt-2.5 flex-1 text-sm leading-relaxed text-slate-500">{sector.blurb}</p>
						<div class="mt-6 flex items-center justify-between gap-3 border-t border-ink-900/5 pt-4">
							<a href="{base}/corporate-training/#proposal" class="text-xs font-bold tracking-wider text-electric-600 uppercase inline-flex items-center gap-1 hover:text-electric-700">
								Request Proposal <Icons name="arrow-right" class="h-3.5 w-3.5" />
							</a>
							{#if sector.caseStudies.length > 0 && eventBySlug.has(sector.caseStudies[0])}
								<a href="{base}/events/#{sector.caseStudies[0]}" class="text-[10px] font-bold tracking-widest text-slate-400 uppercase hover:text-ink-900">
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
<section class="border-y border-ink-900/8 bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="02"
			eyebrow="Delivered programmes"
			title="Proof, not promises"
			lede="One-paragraph summaries of real programmes. Full recaps, photos, and press links live on the Events & Training page."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2">
			{#each caseStudyEvents as event, i (event.slug)}
				<Reveal delay={(i % 2) * 100}>
					<article class="card-hover-trigger flex h-full flex-col gap-6 rounded-2xl border border-ink-900/10 bg-paper p-6 sm:flex-row shadow-sm">
						{#if event.image}
							<div class="image-zoom-container aspect-[4/3] w-full rounded-xl sm:w-44 sm:shrink-0 bg-ink-950">
								<img
									src={img(event.image + '-sm')}
									alt={event.imageAlt ?? ''}
									class="image-zoom-img h-full w-full object-cover"
									width="700"
									height="525"
									loading="lazy"
								/>
							</div>
						{/if}
						<div class="flex flex-col justify-center flex-1">
							<p class="eyebrow !text-[0.65rem]">{event.sector}</p>
							<h3 class="mt-1.5 font-display text-lg font-bold text-ink-900 text-underline-reveal">{event.client ?? event.title}</h3>
							<p class="mt-2 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-500">{event.summary}</p>
							<a href="{base}/events/#{event.slug}" class="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-electric-600 hover:text-electric-700">
								Full recap <Icons name="arrow-right" class="h-3.5 w-3.5" />
							</a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ COURSES ============ -->
<section class="bg-paper py-24 lg:py-32" id="courses">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="03"
			eyebrow="Open programmes"
			title="Courses in the Academy"
			lede="Each course carries an honest status. If a course is available on request, we will scope a batch for your team or institution."
		/>
		{#each courseCategories as cat (cat.key)}
			<div class="mt-16">
				<Reveal>
					<h3 class="font-display text-sm font-bold tracking-widest text-slate-400 uppercase">
						{cat.label}
					</h3>
				</Reveal>
				<div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{#each courses.filter((c) => c.category === cat.key) as course, i (course.id)}
						<Reveal delay={(i % 3) * 100}>
							<article class="card-hover-trigger group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/10 bg-white shadow-sm">
								<div class="image-zoom-container relative overflow-hidden">
									<img
										src={img(course.image)}
										alt=""
										class="image-zoom-img aspect-[16/9] w-full object-cover"
										width="1000"
										height="563"
										loading="lazy"
									/>
									<div class="absolute top-3 left-3 z-10">
										<StatusTag status={course.status} />
									</div>
								</div>
								<div class="flex flex-1 flex-col p-6">
									<h4 class="font-display text-lg font-bold text-ink-900 text-underline-reveal">{course.title}</h4>
									<p class="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-slate-500">{course.description}</p>
									{#if course.deliveredTo}
										<p class="mt-4 border-l-2 border-aqua-500 pl-3 text-xs leading-relaxed font-semibold text-ink-900 bg-paper/50 py-1 pr-2">
											Delivered for {course.deliveredTo.join(', ')}
										</p>
									{/if}
									<a
										href="{base}/corporate-training/#proposal"
										class="mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-wider text-electric-600 uppercase hover:text-electric-700"
									>
										Enquire about course <Icons name="arrow-right" class="h-3.5 w-3.5" />
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
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
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
			<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
				{#each trainingClients as client (client.name)}
					<PartnerLogo partner={client} compact />
				{/each}
			</div>
		</div>
	</div>
</section>

<NewsletterForm />
