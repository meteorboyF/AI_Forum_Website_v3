<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import Token from '$lib/components/Token.svelte';
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
	ogImage="about/banner"
/>

<!-- ============ ORIGIN STORY ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-28">
	<div class="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
		<Reveal>
			<p class="eyebrow mb-4">Our story</p>
			<h1 class="text-4xl font-bold text-balance sm:text-5xl lg:text-6xl lg:leading-[1.08]">
				We are here to build Bangladesh’s AI generation
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-white/80">
				AI Forum Bangladesh was founded in <Token value={'{{FOUNDING_YEAR}}'} /> by
				<Token value={'{{FOUNDERS}}'} /> who saw the same gap from different angles: Bangladesh has
				extraordinary AI talent and almost no structured path from that talent to real opportunity.
				Students were winning competitions with nowhere to take their ideas. Professionals were
				watching AI change their industries with no practical way to learn it.
			</p>
			<p class="mt-4 text-lg leading-relaxed text-white/80">
				So we built the missing infrastructure: hands-on training for working professionals,
				hackathons and roadshows that activate innovators across the country, and career support
				that connects people to jobs and research placements. Independent, practical, and open to
				everyone.
			</p>
		</Reveal>
		<Reveal delay={150}>
			<img
				src={img('about/our-journey')}
				alt="The AI Forum Bangladesh team at work"
				class="w-full rounded-2xl border border-white/15 shadow-card-lg"
				width="1200"
				height="800"
			/>
		</Reveal>
	</div>
</section>

<!-- ============ MILESTONES ============ -->
<section class="border-b border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead eyebrow="Milestones" title="A short history of momentum" />
		<ol class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
			{#each milestones as m, i (m.title)}
				<li>
					<Reveal delay={i * 100} class="relative border-l-2 border-electric-100 pl-5 lg:border-l-0 lg:border-t-2 lg:pt-5 lg:pl-0">
						<span class="absolute -left-[7px] top-0 h-3 w-3 rounded-full bg-electric-600 lg:-top-[7px] lg:left-0" aria-hidden="true"></span>
						<p class="font-display text-sm font-bold text-electric-600"><Token value={m.dateLabel} /></p>
						<h3 class="mt-1.5 font-bold">{m.title}</h3>
						<p class="mt-1.5 text-sm leading-relaxed text-slate-600">{m.detail}</p>
					</Reveal>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- ============ VALUES (before the people) ============ -->
<section class="mesh-light py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="How we work"
			title="Six values that guide everything"
			lede="Our shared values keep us connected and guide us as one team."
			align="center"
		/>
		<div class="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
			{#each values as v, i (v.title)}
				<Reveal delay={(i % 3) * 100}>
					<div class="text-center">
						<div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-card">
							<svg class="h-6 w-6 text-electric-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d={valueIcons[v.icon]} />
							</svg>
						</div>
						<h3 class="mt-5 text-lg font-bold">{v.title}</h3>
						<p class="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{v.desc}</p>
					</div>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<!-- ============ LEAD TRAINER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-20 text-white lg:py-24">
	<div class="relative mx-auto max-w-7xl px-5">
		<div class="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
			<Reveal>
				<div class="relative mx-auto max-w-sm">
					<div class="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-electric-600/40 to-aqua-500/30 blur-xl" aria-hidden="true"></div>
					{#if leadTrainer.image}
						<img src={img(leadTrainer.image)} alt={leadTrainer.name} class="relative w-full rounded-3xl border border-white/15" width="640" height="640" loading="lazy" />
					{:else}
						<div class="relative flex aspect-square w-full items-center justify-center rounded-3xl border border-white/15 bg-ink-800">
							<span class="font-display text-7xl font-bold text-aqua-400">KM</span>
							<span class="absolute bottom-4 rounded-full border border-dashed border-gold-500/70 bg-ink-900/80 px-3 py-1 font-mono text-xs text-gold-400">
								{'{{MAMUN_PHOTO}}'}
							</span>
						</div>
					{/if}
				</div>
			</Reveal>
			<Reveal delay={120}>
				<p class="eyebrow mb-4">Lead trainer & academic lead</p>
				<h2 class="text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
					{leadTrainer.name}
				</h2>
				<ul class="mt-6 space-y-2.5">
					{#each leadTrainer.credentials as cred (cred)}
						<li class="flex items-start gap-3 text-white/85">
							<svg class="mt-1 h-4 w-4 shrink-0 text-aqua-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
							</svg>
							<span class="text-sm leading-relaxed sm:text-base">{cred}</span>
						</li>
					{/each}
				</ul>
				<p class="mt-6 leading-relaxed text-white/80">{leadTrainer.summary}</p>
				<blockquote class="mt-7 border-l-2 border-aqua-400 pl-5 text-lg text-white/90 italic">
					<Token value={leadTrainer.quote} />
				</blockquote>
			</Reveal>
		</div>
	</div>
</section>

<!-- ============ ADVISORS ============ -->
<section class="mesh-light py-20 lg:py-28">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead
			eyebrow="Advisory board"
			title="Guided by people who have built world firsts"
			lede="From the founder and the CEO of Grameenphone to a Princeton physicist and the surgeon behind the world's first Google Glass operation."
		/>
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each advisors as advisor, i (advisor.name)}
				<Reveal delay={(i % 4) * 90}>
					<article
						class="flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg
							{advisor.featured ? 'border-electric-400/50 ring-1 ring-electric-400/30' : 'border-ink-900/8'}"
					>
						<div class="relative">
							<img
								src={img(advisor.image)}
								alt="Portrait of {advisor.name}"
								class="aspect-square w-full object-cover"
								width="640"
								height="640"
								loading="lazy"
							/>
							{#if advisor.featured}
								<span class="absolute top-3 left-3 rounded-full bg-electric-600 px-3 py-1 font-display text-[0.7rem] font-bold tracking-wider text-white uppercase">
									Featured advisor
								</span>
							{/if}
						</div>
						<div class="flex flex-1 flex-col p-5">
							<p class="font-display text-lg leading-snug font-bold text-electric-600">
								{advisor.credential}
							</p>
							<h3 class="mt-1.5 font-semibold text-ink-900">{advisor.name}</h3>
							{#if advisor.callout}
								<p class="mt-3 rounded-lg bg-aqua-100/60 px-3 py-2 text-xs leading-relaxed font-semibold text-aqua-600">
									{advisor.callout}
								</p>
							{/if}
							{#if expanded[advisor.name]}
								<p class="mt-3 text-sm leading-relaxed text-slate-600">{advisor.bio}</p>
							{/if}
							<button
								class="mt-auto pt-4 text-left text-xs font-bold tracking-wide text-slate-500 uppercase transition-colors hover:text-electric-600"
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
<section class="border-t border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-7xl px-5">
		<SectionHead eyebrow="Core team" title="The people doing the work" />
		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each team as member, i (member.name)}
				<Reveal delay={(i % 3) * 100}>
					<article class="flex h-full gap-5 rounded-2xl border border-ink-900/8 bg-paper p-5">
						<img
							src={img(member.image)}
							alt="Portrait of {member.name}"
							class="h-24 w-24 shrink-0 rounded-xl object-cover"
							width="640"
							height="640"
							loading="lazy"
						/>
						<div>
							<h3 class="font-bold">{member.name}</h3>
							<p class="font-display text-xs font-semibold tracking-wide text-electric-600 uppercase">
								{member.role}
							</p>
							{#if expanded[member.name]}
								<p class="mt-2 text-sm leading-relaxed text-slate-600">{member.bio}</p>
							{:else}
								<p class="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
							{/if}
							<button
								class="mt-2 text-xs font-bold tracking-wide text-slate-500 uppercase transition-colors hover:text-electric-600"
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
