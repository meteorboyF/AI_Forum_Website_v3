<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import StatusTag from '$lib/components/StatusTag.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { initiatives } from '$lib/data/innovation';
	import { hackathons } from '$lib/data/hackathons';

	const roadshow = initiatives.find((i) => i.slug === 'ai-roadshow');
	const recentEvents = hackathons.slice(0, 3);
</script>

<Seo
	title="Innovation Ecosystem"
	description="AI Forum Bangladesh's innovation programmes: the CodeCure hackathons, the divisional AI Roadshow reaching all 8 divisions, Lab 2 Market, and initiatives in development."
	path="/our-work/innovation-ecosystem/"
	ogImage="hero/innovation"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark photo-duo scrim-b relative flex min-h-[56vh] items-end overflow-hidden text-white">
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
	<div class="relative z-10 mx-auto w-full max-w-[88rem] px-5 pt-36 pb-14 sm:px-8 lg:px-12 lg:pb-20">
		<p class="eyebrow mb-5">Our work · Innovation Ecosystem</p>
		<h1 class="max-w-5xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
			<span class="line-mask"><span>Activating the people who will build Bangladesh’s AI future</span></span>
		</h1>
		<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
			Hackathons, roadshows, and summits that turn bold ideas into working solutions, from
			university campuses to schools in every division of the country.
		</p>
	</div>
</section>

<!-- ============ RECENT / ONGOING (replaces the expired countdown) ============ -->
<section class="border-b border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Recent events"
			title="What has been happening"
			lede="The latest ecosystem events, no countdowns, no stale dates. New events are announced on Facebook and the newsletter first."
		/>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each recentEvents as event, i (event.id)}
				<Reveal delay={i * 100}>
					<article class="rule-tick flex h-full flex-col bg-paper p-7">
						<p class="font-display text-3xl font-bold tracking-[-0.02em] text-electric-600">
							{event.dateLabel}
						</p>
						<p class="mt-1 text-xs font-bold tracking-widest text-slate-500 uppercase">{event.venue}</p>
						<h3 class="mt-4 flex-1 font-display text-lg leading-snug font-bold">{event.title}</h3>
						<a href="{base}/hackathon/" class="link-sweep mt-3 self-start text-sm font-semibold text-electric-600">
							Event details
						</a>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ AI ROADSHOW SPOTLIGHT ============ -->
{#if roadshow}
	<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
		<div class="relative mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
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
			eyebrow="The programmes"
			title="Eight initiatives, honestly labelled"
			lede="Initiatives marked as coming soon are in development; there is nothing behind those names to click yet, and we would rather say so than link you to an empty page."
		/>
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each initiatives as item, i (item.slug)}
				<Reveal delay={(i % 4) * 80}>
					<article class="flex h-full flex-col rounded-xl border border-ink-900/10 bg-white p-6 shadow-card">
						<div class="flex items-start justify-between gap-3">
							<h3 class="font-bold">{item.name}</h3>
							<StatusTag status={item.status === 'active' ? 'Active' : 'Coming soon'} />
						</div>
						<p class="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
						{#if item.status === 'active'}
							{#if item.slug === 'innovation-challenge'}
								<a href="{base}/hackathon/" class="link-sweep mt-4 self-start text-sm font-semibold text-electric-600">
									See the hackathons
								</a>
							{:else if item.slug === 'ai-roadshow'}
								<a href="{base}/contact-us/" class="link-sweep mt-4 self-start text-sm font-semibold text-electric-600">
									Enquire about a visit
								</a>
							{:else}
								<a href="{base}/contact-us/" class="link-sweep mt-4 self-start text-sm font-semibold text-electric-600">
									Work with us
								</a>
							{/if}
						{/if}
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<NewsletterForm />
