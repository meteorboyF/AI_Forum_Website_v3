<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import PageIntro from '$lib/components/PageIntro.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { hackathons, hackathonGallery, hostUniversities } from '$lib/data/hackathons';
	import Icons from '$lib/components/Icons.svelte';
</script>

<Seo
	title="Hackathons"
	description="The CodeCure series and other AI Forum Bangladesh hackathons, hosted with the University of Dhaka, BUET, BRAC University, North South University, and Rajshahi University."
	path="/hackathon/"
	ogImage="hero/hackathon"
/>

<PageIntro
	eyebrow="Hackathons"
	title="Where Bangladesh’s builders solve real problems"
	lede="The CodeCure series and sector hackathons have run at {hostUniversities.join(', ')}, putting student teams to work on healthcare, agriculture, education, and financial inclusion."
	photo="hero/hackathon"
	photoAlt="Hackathon participants at work"
/>

<!-- ============ STAY NOTIFIED ============ -->
<section class="bg-paper py-16">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<Reveal>
			<div class="flex flex-col md:flex-row items-center gap-6 rounded-2xl border border-dashed border-ink-900/20 bg-white/70 p-8 shadow-sm">
				<img src="{base}/images/illustrations/empty-calendar.svg" alt="" class="h-28 w-28 shrink-0" loading="lazy" width="200" height="200" />
				<div>
					<h2 class="font-display text-lg font-bold text-ink-900">No hackathon is currently open for registration</h2>
					<p class="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-600">
						The next edition is announced on our Facebook page and newsletter first. Subscribe and
						you will have time to build your team before registration opens.
					</p>
					<a href="#newsletter" class="btn btn-electric mt-4 self-start !py-2 !px-4 text-sm">Stay notified</a>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ PAST HACKATHONS ============ -->
<section class="bg-paper pb-24 lg:pb-28 bg-jamdani-light">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Past events"
			title="Five hackathons, five campuses"
			lede="Recap details, winners, and participation figures are being confirmed with each host university and will appear here as they arrive."
		/>
		<div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each hackathons as hack, i (hack.id)}
				<Reveal delay={(i % 3) * 100}>
					<article class="card-hover-trigger flex h-full flex-col bg-white border border-ink-900/10 p-7 rounded-2xl shadow-sm">
						<div class="flex items-center gap-1.5 font-display text-2xl font-bold tracking-[-0.02em] text-electric-600 font-mono">
							<Icons name="calendar" class="h-5 w-5 text-electric-600/75" strokeWidth={2.2} />
							{hack.dateLabel}
						</div>
						<p class="mt-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase inline-flex items-center gap-1">
							<Icons name="map-pin" class="h-3.5 w-3.5" strokeWidth={2} />
							{hack.venue}
						</p>
						<h3 class="mt-4 font-display text-xl leading-snug font-bold text-ink-900 text-underline-reveal">{hack.title}</h3>
						<p class="mt-2.5 flex-1 text-xs sm:text-sm leading-relaxed text-slate-500">{hack.subtitle}</p>
						{#if hack.recap}
							<dl class="mt-5 space-y-2 border-t border-ink-900/5 pt-4 text-xs sm:text-sm">
								{#if hack.recap.winner}
									<div class="flex gap-2">
										<dt class="font-semibold text-ink-900">Winner:</dt>
										<dd class="text-slate-500">{hack.recap.winner}</dd>
									</div>
								{/if}
								{#if hack.recap.teams}
									<div class="flex gap-2">
										<dt class="font-semibold text-ink-900">Teams:</dt>
										<dd class="text-slate-500">{hack.recap.teams}</dd>
									</div>
								{/if}
								{#if hack.recap.problems}
									<div class="flex gap-2">
										<dt class="font-semibold text-ink-900">Problems solved:</dt>
										<dd class="text-slate-500">{hack.recap.problems}</dd>
									</div>
								{/if}
							</dl>
						{/if}
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ GALLERY: photo wall ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-24 text-white lg:py-28">
	<!-- Jamdani pattern overlay integrated into dark gallery band -->
	<div class="absolute inset-0 z-1 bg-jamdani-dark opacity-[0.06] pointer-events-none"></div>

	<div class="relative z-10 mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<Reveal>
			<div class="rule-tick flex items-start gap-6 pt-6 sm:gap-10">
				<span class="sec-num" aria-hidden="true">02</span>
				<div class="pt-2">
					<p class="eyebrow mb-3">Gallery</p>
					<h2 class="font-display text-[clamp(1.9rem,4vw,3.25rem)] leading-[1.05] font-bold tracking-[-0.025em] text-white">
						Rooms full of people building things
					</h2>
				</div>
			</div>
		</Reveal>
		<div class="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
			{#each hackathonGallery as photo, i (photo.src)}
				<Reveal delay={(i % 4) * 60}>
					<div class="image-zoom-container rounded-xl shadow-md border border-white/5">
						<img
							src={img(photo.src)}
							alt={photo.alt}
							class="image-zoom-img w-full rounded-xl"
							width="1000"
							height="700"
							loading="lazy"
						/>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
