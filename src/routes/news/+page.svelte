<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
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

<!-- ============ HEADER: typographic, publication-led ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-16 text-white lg:pb-20">
	<div class="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<p class="eyebrow mb-5">News & Media</p>
		<h1 class="max-w-5xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
			<span class="line-mask"><span>What the national press says</span></span>
		</h1>
		<p class="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
			A chronological archive of coverage in Bangladeshi newspapers and business media. Every item
			links to the original article.
		</p>
		<div class="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8">
			{#each publications as pub (pub)}
				<span class="wordmark text-xl text-white/40 sm:text-2xl">{pub}</span>
			{/each}
		</div>
	</div>
</section>

<!-- ============ FEATURED CLIPPINGS ============ -->
<section class="bg-paper py-24 lg:py-32">
	<div class="mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
		<Reveal>
			<div class="photo rounded-xl border border-ink-900/10">
				<img
					src={img('events/business-excellence-press')}
					alt="Collage of newspaper clippings covering the AI for Business Excellence seminar"
					class="w-full rounded-xl"
					width="1400"
					height="1050"
					loading="lazy"
				/>
			</div>
		</Reveal>
		<Reveal delay={120}>
			<SectionHead
				number="01"
				eyebrow="Featured"
				title="One seminar, a wall of coverage"
				lede="The AI for Business Excellence seminar at UIU was reported across major outlets including The Daily Star and The Business Standard, covering AI's role in decision-making, automation, forecasting, and business growth."
			/>
			<a href="{base}/events/#ai-for-business-excellence" class="link-sweep mt-6 inline-block font-semibold text-electric-600">
				Read the event recap
			</a>
		</Reveal>
	</div>
</section>

<!-- ============ ARCHIVE: typographic list ============ -->
<section class="border-t border-ink-900/8 bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="02" eyebrow="Archive" title="All coverage, newest first" />
		<ol class="mt-12">
			{#each press as item, i (item.slug)}
				<li>
					<Reveal delay={Math.min(i, 3) * 60}>
						<a
							href={item.url}
							target="_blank"
							rel="noopener noreferrer"
							class="group grid gap-1 border-b border-ink-900/10 py-6 transition-colors hover:bg-paper sm:grid-cols-[16rem_1fr_auto] sm:items-baseline sm:gap-8 sm:px-4"
						>
							<div>
								<span class="wordmark text-lg text-ink-900">{item.publication}</span>
								<p class="mt-0.5 text-xs text-slate-500">
									{item.dateLabel ? `${item.dateLabel} · ` : ''}{item.language}
								</p>
							</div>
							<span class="font-display text-lg leading-snug font-medium text-slate-600 group-hover:text-ink-900 lg:text-xl">
								{item.headline}
							</span>
							<span class="text-xs font-bold tracking-widest text-slate-500 uppercase group-hover:text-electric-600">
								Read ↗
							</span>
						</a>
						{#if item.about && eventBySlug.has(item.about)}
							<p class="-mt-1 px-4 pb-3 text-xs text-slate-500">
								Related programme:
								<a href="{base}/events/#{item.about}" class="font-semibold hover:text-electric-600">
									{eventBySlug.get(item.about)?.title}
								</a>
							</p>
						{/if}
					</Reveal>
				</li>
			{/each}
		</ol>
		<p class="mt-8 max-w-2xl text-sm leading-relaxed text-slate-500">
			Headlines are short descriptions written by us; follow each link for the original reporting.
			Know of coverage we have missed?
			<a href="{base}/contact-us/" class="link-sweep font-semibold text-electric-600">Tell us</a>.
		</p>
	</div>
</section>

<NewsletterForm />
