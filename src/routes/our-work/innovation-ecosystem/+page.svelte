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
	ogImage="innovation/banner"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="max-w-2xl">
			<Reveal>
				<p class="eyebrow mb-4">Our work · Innovation Ecosystem</p>
				<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
					Activating the people who will build Bangladesh’s AI future
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-white/80">
					Hackathons, roadshows, and summits that turn bold ideas into working solutions, from
					university campuses to schools in every division of the country.
				</p>
			</Reveal>
		</div>
	</div>
</section>

<!-- ============ RECENT / ONGOING (replaces the expired countdown) ============ -->
<section class="border-b border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Recent events"
			title="What has been happening"
			lede="The latest ecosystem events, no countdowns, no stale dates. New events are announced on Facebook and the newsletter first."
		/>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each recentEvents as event, i (event.id)}
				<Reveal delay={i * 100}>
					<article class="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-paper shadow-card">
						<img
							src={img(event.image)}
							alt="Banner for {event.title}"
							class="aspect-[16/9] w-full object-cover"
							width="1200"
							height="675"
							loading="lazy"
						/>
						<div class="flex flex-1 flex-col p-5">
							<p class="text-xs font-bold tracking-wide text-slate-500 uppercase">
								{event.dateLabel} · {event.venue}
							</p>
							<h3 class="mt-2 flex-1 font-bold">{event.title}</h3>
							<a href="{base}/hackathon/" class="link-sweep mt-3 self-start text-sm font-semibold text-electric-600">
								Event details
							</a>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ AI ROADSHOW SPOTLIGHT ============ -->
{#if roadshow}
	<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
		<div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
			<Reveal>
				<p class="eyebrow mb-4">Spotlight</p>
				<h2 class="text-3xl font-bold text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
					Reaching students across all 8 divisions of Bangladesh
				</h2>
				<p class="mt-5 text-lg leading-relaxed text-white/80">{roadshow.detail}</p>
				<a href="{base}/contact-us/" class="btn btn-ghost-dark mt-7">Bring the Roadshow to your institution</a>
			</Reveal>
			<Reveal delay={150}>
				{#if roadshow.image}
					<img
						src={img(roadshow.image)}
						alt="Students at a divisional AI Roadshow session"
						class="w-full rounded-2xl border border-white/15 shadow-card-lg"
						width="1200"
						height="800"
						loading="lazy"
					/>
				{/if}
			</Reveal>
		</div>
	</section>
{/if}

<!-- ============ INITIATIVES ============ -->
<section class="mesh-light py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="The programmes"
			title="Eight initiatives, honestly labelled"
			lede="Initiatives marked as coming soon are in development; there is nothing behind those names to click yet, and we would rather say so than link you to an empty page."
		/>
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each initiatives as item, i (item.slug)}
				<Reveal delay={(i % 4) * 80}>
					<article class="flex h-full flex-col rounded-2xl border border-ink-900/8 bg-white p-6 shadow-card">
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
