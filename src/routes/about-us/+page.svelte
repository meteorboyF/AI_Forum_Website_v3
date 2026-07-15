<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import PageIntro from '$lib/components/PageIntro.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { advisors } from '$lib/data/advisors';
	import { team, leadTrainer, values, milestones } from '$lib/data/team';

	let expanded = $state<Record<string, boolean>>({});

	const valueIcons: Record<string, string> = {
		people: 'M17 20h5v-2a4 4 0 0 0-3-3.87M9 20H4v-2a4 4 0 0 1 3-3.87m6-1.13a4 4 0 1 0-4-6.9M16 3.13a4 4 0 0 1 0 7.75',
		heart: 'M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z',
		trend: 'M23 6l-9.5 9.5-5-5L1 18M17 6h6v6',
		flash: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
		smile: 'M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z',
		flag: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7'
	};
</script>

<Seo
	title="About Us"
	description="The story, values, advisors, lead trainer, and team behind AI Forum Bangladesh, an independent organisation building Bangladesh's AI generation."
	path="/about-us/"
	ogImage="hero/about"
/>

<PageIntro
	eyebrow="Our story"
	title="Building Bangladesh’s AI generation"
	lede="An independent organisation closing the gap between extraordinary AI talent and real opportunity."
	photo="hero/about"
	photoAlt="Participants collaborating at an AI Forum Bangladesh event"
/>

<!-- ============ ORIGIN STORY ============ -->
<section class="bg-paper py-24 lg:py-32">
	<div class="mx-auto grid max-w-[88rem] items-start gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-12">
		<Reveal class="lg:col-span-5">
			<SectionHead number="01" eyebrow="Why we exist" title="The gap we kept seeing" />
		</Reveal>
		<Reveal delay={120} class="lg:col-span-7">
			<div class="space-y-5 text-lg leading-relaxed text-slate-600 lg:pt-10">
				<p>
					AI Forum Bangladesh exists because its founders kept seeing the same gap from different
					angles: Bangladesh has extraordinary AI talent and almost no structured path from that
					talent to real opportunity. Students were winning competitions with nowhere to take
					their ideas. Professionals were watching AI change their industries with no practical
					way to learn it.
				</p>
				<p>
					So we built the missing infrastructure: hands-on training for working professionals,
					hackathons and roadshows that activate innovators across the country, and career
					support that connects people to jobs and research placements. Independent, practical,
					and open to everyone.
				</p>
			</div>
		</Reveal>
	</div>

	<!-- Milestones -->
	<div class="mx-auto mt-20 max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<ol class="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
			{#each milestones as m, i (m.title)}
				<li>
					<Reveal delay={i * 100} class="rule-tick relative pt-5">
						<p class="font-display text-sm font-bold tracking-wide text-electric-600 uppercase">{m.dateLabel}</p>
						<h3 class="mt-2 font-display font-bold">{m.title}</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600">{m.detail}</p>
					</Reveal>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- ============ VALUES (before the people) ============ -->
<section class="border-t border-ink-900/8 bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="02"
			eyebrow="How we work"
			title="Six values that guide everything"
			lede="Our shared values keep us connected and guide us as one team."
		/>
		<div class="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
			{#each values as v, i (v.title)}
				<Reveal delay={(i % 3) * 100}>
					<div class="rule-tick pt-5">
						<svg class="h-6 w-6 text-electric-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d={valueIcons[v.icon]} />
						</svg>
						<h3 class="mt-4 font-display text-lg font-bold">{v.title}</h3>
						<p class="mt-2 max-w-sm text-sm leading-relaxed text-slate-600">{v.desc}</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ LEAD TRAINER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-24 text-white lg:py-32">
	<div class="relative mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
		<Reveal>
			<div class="mx-auto max-w-sm">
				{#if leadTrainer.image}
					<div class="photo rounded-xl">
						<img src={img(leadTrainer.image)} alt={leadTrainer.name} class="w-full rounded-xl" width="640" height="640" loading="lazy" />
					</div>
				{:else}
					<div class="flex aspect-square w-full items-center justify-center rounded-xl border border-white/15 bg-ink-800">
						<span class="font-display text-8xl font-bold text-aqua-400/80">KM</span>
					</div>
				{/if}
			</div>
		</Reveal>
		<Reveal delay={120}>
			<p class="eyebrow mb-4">Lead trainer & academic lead</p>
			<h2 class="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.02] font-bold tracking-[-0.03em]">
				{leadTrainer.name}
			</h2>
			<ul class="mt-7 space-y-2.5">
				{#each leadTrainer.credentials as cred (cred)}
					<li class="flex items-start gap-3 text-white/85">
						<span class="mt-2.5 h-px w-6 shrink-0 bg-aqua-400" aria-hidden="true"></span>
						<span class="text-sm leading-relaxed sm:text-base">{cred}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-6 max-w-2xl leading-relaxed text-white/80">{leadTrainer.summary}</p>
			{#if leadTrainer.quote}
				<blockquote class="mt-8 max-w-2xl border-l-2 border-aqua-400 pl-6 font-display text-2xl leading-snug text-white/95">
					“{leadTrainer.quote}”
				</blockquote>
			{/if}
		</Reveal>
	</div>
</section>

<!-- ============ ADVISORS ============ -->
<section class="bg-paper py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="03"
			eyebrow="Advisory board"
			title="Guided by people who have built world firsts"
			lede="From the founder and the CEO of Grameenphone to a Princeton physicist and the surgeon behind the world's first Google Glass operation."
		/>
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each advisors as advisor, i (advisor.name)}
				<Reveal delay={(i % 4) * 90}>
					<article
						class="flex h-full flex-col overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg
							{advisor.featured ? 'border-electric-600/40 shadow-card' : 'border-ink-900/10'}"
					>
						<div class="photo relative">
							<img
								src={img(advisor.image)}
								alt="Portrait of {advisor.name}"
								class="aspect-square w-full object-cover"
								width="640"
								height="640"
								loading="lazy"
							/>
							{#if advisor.featured}
								<span class="absolute top-3 left-3 z-10 rounded-sm bg-electric-600 px-2.5 py-1 font-display text-[0.65rem] font-bold tracking-widest text-white uppercase">
									Featured
								</span>
							{/if}
						</div>
						<div class="flex flex-1 flex-col p-5">
							<p class="font-display text-lg leading-snug font-bold text-electric-600">
								{advisor.credential}
							</p>
							<h3 class="mt-1.5 font-semibold text-ink-900">{advisor.name}</h3>
							{#if advisor.callout}
								<p class="mt-3 border-l-2 border-aqua-500 pl-3 text-xs leading-relaxed font-semibold text-ink-900">
									{advisor.callout}
								</p>
							{/if}
							{#if expanded[advisor.name]}
								<p class="mt-3 text-sm leading-relaxed text-slate-600">{advisor.bio}</p>
							{/if}
							<button
								class="mt-auto pt-4 text-left text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-electric-600"
								aria-expanded={!!expanded[advisor.name]}
								onclick={() => (expanded[advisor.name] = !expanded[advisor.name])}
							>
								{expanded[advisor.name] ? 'Show less' : 'Continue reading'}
							</button>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ TEAM ============ -->
<section class="border-t border-ink-900/8 bg-white py-24 lg:py-32">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="04" eyebrow="Core team" title="The people doing the work" />
		<div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each team as member, i (member.name)}
				<Reveal delay={(i % 3) * 100}>
					<article class="flex h-full gap-5 rounded-xl border border-ink-900/10 bg-paper p-5">
						<div class="photo h-24 w-24 shrink-0 rounded-lg">
							<img
								src={img(member.image)}
								alt="Portrait of {member.name}"
								class="h-24 w-24 rounded-lg object-cover"
								width="640"
								height="640"
								loading="lazy"
							/>
						</div>
						<div>
							<h3 class="font-display font-bold">{member.name}</h3>
							<p class="font-display text-xs font-semibold tracking-widest text-electric-600 uppercase">
								{member.role}
							</p>
							<p class="mt-2 text-sm leading-relaxed text-slate-600 {expanded[member.name] ? '' : 'line-clamp-3'}">
								{member.bio}
							</p>
							<button
								class="mt-2 text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors hover:text-electric-600"
								aria-expanded={!!expanded[member.name]}
								onclick={() => (expanded[member.name] = !expanded[member.name])}
							>
								{expanded[member.name] ? 'Show less' : 'Read more'}
							</button>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<NewsletterForm />
