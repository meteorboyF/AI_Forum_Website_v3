<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Token from '$lib/components/Token.svelte';
	import StatusTag from '$lib/components/StatusTag.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img, imgSet } from '$lib/img';
	import { hackathons, hackathonGallery, hostUniversities } from '$lib/data/hackathons';

	const banner = imgSet('hackathon/banner', 1600);
</script>

<Seo
	title="Hackathons"
	description="The CodeCure series and other AI Forum Bangladesh hackathons, hosted with the University of Dhaka, BUET, BRAC University, North South University, and Rajshahi University."
	path="/hackathon/"
	ogImage="hackathon/banner"
/>

<!-- ============ HEADER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden text-white">
	<img
		src={banner.src}
		srcset={banner.srcset}
		sizes="100vw"
		alt=""
		class="absolute inset-0 h-full w-full object-cover opacity-25"
		width="1600"
		height="700"
	/>
	<div class="relative mx-auto max-w-7xl px-5 py-20 lg:py-28">
		<div class="max-w-2xl">
			<Reveal>
				<p class="eyebrow mb-4">Hackathons</p>
				<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl">
					Where Bangladesh’s builders solve real problems
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-white/80">
					The CodeCure series and sector hackathons have run at
					{hostUniversities.join(', ')}, putting student teams to work on healthcare, agriculture,
					education, and financial inclusion.
				</p>
			</Reveal>
		</div>
	</div>
</section>

<!-- ============ STAY NOTIFIED (no upcoming events right now) ============ -->
<section class="border-b border-ink-900/8 bg-white py-14">
	<div class="mx-auto max-w-7xl px-5">
		<Reveal>
			<div class="flex flex-col items-start gap-5 rounded-2xl border border-dashed border-ink-900/15 bg-paper p-8 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h2 class="text-lg font-bold">No hackathon is currently open for registration</h2>
					<p class="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-600">
						The next edition is announced on our Facebook page and newsletter first. Subscribe and
						you will have time to build your team before registration opens.
					</p>
				</div>
				<a href="#newsletter" class="btn btn-electric shrink-0">Stay notified</a>
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ PAST HACKATHONS ============ -->
<section class="mesh-light py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Past events"
			title="Five hackathons, five campuses"
			lede="Winner names and participation figures are being confirmed with each host university and will appear here as they arrive."
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each hackathons as hack, i (hack.id)}
				<Reveal delay={(i % 3) * 100}>
					<article class="flex h-full flex-col overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
						<div class="relative">
							<img
								src={img(hack.image)}
								alt="Banner for {hack.title}"
								class="aspect-[16/9] w-full object-cover"
								width="1200"
								height="675"
								loading="lazy"
							/>
							<div class="absolute top-3 left-3"><StatusTag status="Past" /></div>
						</div>
						<div class="flex flex-1 flex-col p-5">
							<p class="text-xs font-bold tracking-wide text-slate-500 uppercase">
								{hack.dateLabel} · {hack.venue}
							</p>
							<h3 class="mt-2 text-lg font-bold">{hack.title}</h3>
							<p class="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{hack.subtitle}</p>
							{#if hack.recap}
								<dl class="mt-4 space-y-1.5 border-t border-ink-900/8 pt-4 text-sm">
									{#if hack.recap.winner}
										<div class="flex gap-2">
											<dt class="font-semibold text-ink-900">Winner:</dt>
											<dd class="text-slate-600"><Token value={hack.recap.winner} /></dd>
										</div>
									{/if}
									{#if hack.recap.teams}
										<div class="flex gap-2">
											<dt class="font-semibold text-ink-900">Teams:</dt>
											<dd class="text-slate-600"><Token value={hack.recap.teams} /></dd>
										</div>
									{/if}
									{#if hack.recap.problems}
										<div class="flex gap-2">
											<dt class="font-semibold text-ink-900">Problems solved:</dt>
											<dd class="text-slate-600"><Token value={hack.recap.problems} /></dd>
										</div>
									{/if}
								</dl>
							{/if}
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ GALLERY ============ -->
<section class="border-t border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead eyebrow="Gallery" title="Rooms full of people building things" />
		<div class="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
			{#each hackathonGallery as photo, i (photo.src)}
				<Reveal delay={(i % 4) * 60}>
					<img
						src={img(photo.src)}
						alt={photo.alt}
						class="w-full rounded-xl border border-ink-900/8"
						width="1000"
						height="700"
						loading="lazy"
					/>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<div id="newsletter">
	<NewsletterForm />
</div>
