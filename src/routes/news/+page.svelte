<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Token from '$lib/components/Token.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { press, publications } from '$lib/data/press';
	import { events } from '$lib/data/events';

	const eventBySlug = new Map(events.map((e) => [e.slug, e]));
</script>

<Seo
	title="News & Media"
	description="National press coverage of AI Forum Bangladesh: The Daily Star, The Business Standard, New Age, Daily Sun, The Financial Express, Bonik Barta, Kalbela, and more."
	path="/news/"
	ogImage="events/business-excellence-press"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="max-w-2xl">
			<Reveal>
				<p class="eyebrow mb-4">News & Media</p>
				<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
					What the national press says about our work
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-white/80">
					A chronological archive of coverage in Bangladeshi newspapers and business media. Every
					item links to the original article.
				</p>
			</Reveal>
		</div>
		<Reveal delay={120}>
			<div class="mt-10 flex flex-wrap gap-x-8 gap-y-3">
				{#each publications as pub (pub)}
					<span class="wordmark text-lg text-white/50">{pub}</span>
				{/each}
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ FEATURED CLIPPINGS IMAGE ============ -->
<section class="border-b border-ink-900/8 bg-white py-16">
	<div class="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
		<Reveal>
			<img
				src={img('events/business-excellence-press')}
				alt="Collage of newspaper clippings covering the AI for Business Excellence seminar"
				class="w-full rounded-2xl border border-ink-900/8 shadow-card"
				width="1400"
				height="1050"
				loading="lazy"
			/>
		</Reveal>
		<Reveal delay={120}>
			<SectionHead
				eyebrow="Featured"
				title="One seminar, a wall of coverage"
				lede="The AI for Business Excellence seminar at UIU was reported across major outlets including The Daily Star and The Business Standard, covering AI's role in decision-making, automation, forecasting, and business growth."
			/>
			<a href="{base}/events/#ai-for-business-excellence" class="link-sweep mt-5 inline-block font-semibold text-electric-600">
				Read the event recap
			</a>
		</Reveal>
	</div>
</section>

<!-- ============ ARCHIVE ============ -->
<section class="mesh-light py-20 lg:py-24">
	<div class="mx-auto max-w-5xl px-5">
		<SectionHead eyebrow="Archive" title="All coverage, newest first" />
		<ol class="mt-10 divide-y divide-ink-900/8 rounded-2xl border border-ink-900/8 bg-white shadow-card">
			{#each press as item, i (item.slug)}
				<Reveal delay={Math.min(i, 3) * 60}>
					<li>
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group flex flex-col gap-2 p-6 transition-colors hover:bg-ink-50/50 sm:flex-row sm:items-center sm:gap-6"
						>
							<div class="sm:w-48 sm:shrink-0">
								<span class="wordmark text-base text-ink-900">{item.publication}</span>
								<p class="mt-0.5 text-xs text-slate-500">
									<Token value={item.dateLabel} /> · {item.language}
								</p>
							</div>
							<p class="flex-1 font-medium text-slate-700 group-hover:text-ink-900">
								{item.headline}
							</p>
							<span class="text-xs font-bold tracking-wide text-slate-400 uppercase group-hover:text-electric-600">
								Read the article ↗
							</span>
						</a>
						{#if item.about && eventBySlug.has(item.about)}
							<p class="px-6 pb-4 -mt-2 text-xs text-slate-400">
								Related programme:
								<a href="{base}/events/#{item.about}" class="font-semibold text-slate-500 hover:text-electric-600">
									{eventBySlug.get(item.about)?.title}
								</a>
							</p>
						{/if}
					</li>
				</Reveal>
			{/each}
		</ol>
		<p class="mt-6 text-sm text-slate-500">
			Headlines are short descriptions written by us; follow each link for the original reporting.
			Know of coverage we have missed? <a href="{base}/contact-us/" class="link-sweep font-semibold text-electric-600">Tell us</a>.
		</p>
	</div>
</section>

<NewsletterForm />
