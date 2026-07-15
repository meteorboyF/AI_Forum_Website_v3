<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import PageIntro from '$lib/components/PageIntro.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { img } from '$lib/img';
	import { advisors } from '$lib/data/advisors';
	import { team, leadTrainer, values, milestones } from '$lib/data/team';
	import Icons from '$lib/components/Icons.svelte';

	let expanded = $state<Record<string, boolean>>({});
	let activeMilestone = $state(0);
	let activeValue = $state(0);
	const journeyPhotos = [
		'hero/about',
		'events/galleries/aims-lab/1',
		'events/galleries/ogsb/3',
		'events/galleries/lankabangla/1',
		'events/galleries/pill/1'
	];

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
					innovation programmes and roadshows that activate innovators across the country, and career
					support that connects people to jobs and research placements. Independent, practical,
					and open to everyone.
				</p>
			</div>
		</Reveal>
	</div>

	<!-- Milestones: interactive journey -->
	<div class="mx-auto mt-24 max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<div>
				<p class="eyebrow">Our journey</p>
				<h3 class="mt-2 font-display text-2xl font-bold tracking-[-0.02em] text-ink-900 sm:text-3xl">Move through the moments that shaped us</h3>
			</div>
			<p class="text-sm text-slate-500">Select a milestone to explore</p>
		</div>
		<div class="mt-9 overflow-x-auto pb-3">
			<div class="relative flex min-w-[48rem] items-start justify-between before:absolute before:top-5 before:right-5 before:left-5 before:h-px before:bg-electric-600/20">
				{#each milestones as milestone, index (milestone.title)}
					<button type="button" class="relative z-10 flex w-32 flex-col items-center text-center" onclick={() => (activeMilestone = index)} aria-pressed={activeMilestone === index}>
						<span class="grid h-10 w-10 place-items-center rounded-full border-2 transition-all duration-300 {activeMilestone === index ? 'border-electric-600 bg-electric-600 text-white shadow-lg shadow-electric-600/30' : 'border-paper bg-white text-electric-600 hover:border-electric-600'}">{String(index + 1).padStart(2, '0')}</span>
						<span class="mt-3 text-[0.65rem] font-bold tracking-wide text-slate-500 uppercase">{milestone.dateLabel}</span>
					</button>
				{/each}
			</div>
		</div>
		<Reveal>
			<div class="mt-5 grid overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-card lg:grid-cols-[0.9fr_1.1fr]">
				<div class="photo min-h-64 bg-ink-950">
					<img src={img(journeyPhotos[activeMilestone])} alt="AI Forum Bangladesh journey milestone" class="h-full w-full object-cover" width="1200" height="800" loading="lazy" />
				</div>
				<div class="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
					<p class="font-display text-xs font-bold tracking-widest text-electric-600 uppercase">{milestones[activeMilestone].dateLabel}</p>
					<h4 class="mt-3 font-display text-3xl leading-tight font-bold tracking-[-0.025em] text-ink-900">{milestones[activeMilestone].title}</h4>
					<p class="mt-5 max-w-xl text-base leading-relaxed text-slate-600">{milestones[activeMilestone].detail}</p>
					<p class="mt-8 text-xs font-bold tracking-widest text-slate-400 uppercase">Milestone {String(activeMilestone + 1).padStart(2, '0')} of {String(milestones.length).padStart(2, '0')}</p>
				</div>
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ VALUES (before the people) ============ -->
<section class="border-t border-ink-900/8 bg-white py-24 lg:py-32 bg-jamdani-light">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="02"
			eyebrow="How we work"
			title="Six values that guide everything"
			lede="Our shared values keep us connected and guide us as one team."
		/>
		<div class="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
			<Reveal>
				<div class="sticky top-24 overflow-hidden rounded-2xl bg-ink-950 p-8 text-white shadow-card lg:p-10">
					<div class="flex h-14 w-14 items-center justify-center rounded-xl bg-aqua-400 text-ink-950">
						<svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={valueIcons[values[activeValue].icon]} /></svg>
					</div>
					<p class="mt-10 text-xs font-bold tracking-[0.16em] text-aqua-400 uppercase">Value {String(activeValue + 1).padStart(2, '0')} / {String(values.length).padStart(2, '0')}</p>
					<h3 class="mt-3 font-display text-4xl leading-[1.02] font-bold tracking-[-0.03em]">{values[activeValue].title}</h3>
					<p class="mt-6 text-lg leading-relaxed text-white/80">{values[activeValue].desc}</p>
				</div>
			</Reveal>
			<div class="grid gap-3 sm:grid-cols-2">
				{#each values as value, index (value.title)}
					<Reveal delay={(index % 2) * 80}>
						<button type="button" class="group flex h-full w-full items-center gap-4 rounded-xl border p-5 text-left transition-all duration-300 {activeValue === index ? 'border-electric-600 bg-electric-600 text-white shadow-lg shadow-electric-600/20' : 'border-ink-900/10 bg-white text-ink-900 hover:border-electric-600/35 hover:shadow-card'}" onclick={() => (activeValue = index)} aria-pressed={activeValue === index}>
							<span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg {activeValue === index ? 'bg-white/15 text-aqua-300' : 'bg-electric-50 text-electric-600'}">
								<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d={valueIcons[value.icon]} /></svg>
							</span>
							<span class="font-display text-lg leading-tight font-bold">{value.title}</span>
						</button>
					</Reveal>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============ LEAD TRAINER ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden py-24 text-white lg:py-32">
	<!-- Jamdani pattern overlay integrated into dark lead trainer band -->
	<div class="absolute inset-0 z-1 bg-jamdani-dark opacity-[0.06] pointer-events-none"></div>

	<div class="relative z-10 mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
		<Reveal>
			<div class="mx-auto max-w-sm">
				{#if leadTrainer.image}
					<div class="photo rounded-2xl shadow-card-lg">
						<img src={img(leadTrainer.image)} alt={leadTrainer.name} class="w-full rounded-2xl" width="640" height="640" loading="lazy" />
					</div>
				{:else}
					<div class="flex aspect-square w-full flex-col items-center justify-center rounded-2xl border border-dashed border-aqua-400/25 bg-ink-950/40 p-8 text-center bg-jamdani-dark shadow-card-lg">
						<span class="font-display text-8xl font-bold tracking-tight text-white/95">KM</span>
						<span class="mt-4 text-[10px] font-semibold tracking-widest text-aqua-400 uppercase">AI Forum Bangladesh</span>
					</div>
				{/if}
			</div>
		</Reveal>
		<Reveal delay={120}>
			<p class="eyebrow mb-4">Lead trainer & academic lead</p>
			<h2 class="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.02] font-bold tracking-[-0.03em] text-white">
				{leadTrainer.name}
			</h2>
			<ul class="mt-7 space-y-3">
				{#each leadTrainer.credentials as cred (cred)}
					<li class="flex items-start gap-3.5 text-white/85">
						<span class="mt-2.5 h-px w-6 shrink-0 bg-aqua-400" aria-hidden="true"></span>
						<span class="text-sm leading-relaxed sm:text-base">{cred}</span>
					</li>
				{/each}
			</ul>
			<p class="mt-6 max-w-2xl leading-relaxed text-white/80 text-sm sm:text-base">{leadTrainer.summary}</p>
			{#if leadTrainer.quote}
				<blockquote class="mt-8 max-w-2xl border-l-4 border-aqua-400 pl-6 font-display text-xl sm:text-2xl font-medium leading-relaxed text-white/95 italic">
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
		<div class="mt-14 grid gap-5 lg:grid-cols-2 lg:gap-7">
			{#each advisors as advisor, i (advisor.name)}
				<Reveal delay={(i % 2) * 110}>
					<article
						class="group h-full overflow-hidden rounded-[1.35rem] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card
							{advisor.featured ? 'border-electric-600/25 ring-1 ring-electric-600/10' : 'border-ink-900/8'}"
					>
						<div class="grid h-full grid-cols-[8.5rem_minmax(0,1fr)] sm:grid-cols-[10.5rem_minmax(0,1fr)]">
							<div class="relative min-h-full overflow-hidden bg-ink-100">
								<img
									src={img(advisor.image)}
									alt="Portrait of {advisor.name}"
									class="h-full min-h-[14rem] w-full object-cover transition-transform duration-500 group-hover:scale-105"
									width="640"
									height="640"
									loading="lazy"
								/>
								{#if advisor.featured}
									<span class="absolute bottom-3 left-3 rounded-full bg-ink-900/85 px-2.5 py-1 text-[0.58rem] font-bold tracking-[0.14em] text-white uppercase backdrop-blur-sm">Board lead</span>
								{/if}
							</div>
							<div class="flex min-w-0 flex-col p-5 sm:p-6">
								<p class="w-fit rounded-full bg-electric-50 px-2.5 py-1 text-[0.62rem] font-bold tracking-[0.08em] text-electric-700 uppercase">Advisory board</p>
								<h3 class="mt-3 font-display text-xl leading-[1.05] font-bold tracking-[-0.02em] text-ink-900 sm:text-2xl">{advisor.name}</h3>
								<p class="mt-2 text-sm leading-snug font-medium text-slate-500">{advisor.credential}</p>
							{#if advisor.callout}
								<p class="mt-4 rounded-lg bg-aqua-50 px-3 py-2 text-xs leading-relaxed font-semibold text-ink-900">
									{advisor.callout}
								</p>
							{/if}
							{#if expanded[advisor.name]}
								<p class="mt-4 border-t border-ink-900/8 pt-4 text-sm leading-relaxed text-slate-600">{advisor.bio}</p>
							{/if}
							<button
								class="mt-5 inline-flex w-fit items-center gap-2 text-left text-xs font-bold text-electric-600 transition-colors hover:text-ink-900"
								aria-expanded={!!expanded[advisor.name]}
								onclick={() => (expanded[advisor.name] = !expanded[advisor.name])}
							>
								{expanded[advisor.name] ? 'Hide profile' : 'Read profile'}
								<span aria-hidden="true">{expanded[advisor.name] ? '↑' : '→'}</span>
							</button>
							</div>
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
					<article class="card-hover-trigger flex h-full gap-5 rounded-2xl border border-ink-900/10 bg-paper p-6 shadow-sm">
						<div class="image-zoom-container h-24 w-24 shrink-0 rounded-xl bg-ink-950">
							<img
								src={img(member.image)}
								alt="Portrait of {member.name}"
								class="image-zoom-img h-24 w-24 rounded-xl object-cover"
								width="640"
								height="640"
								loading="lazy"
							/>
						</div>
						<div class="flex flex-col justify-between flex-1">
							<div>
								<h3 class="font-display font-bold text-ink-900 text-lg leading-snug text-underline-reveal">{member.name}</h3>
								<p class="font-display text-[0.68rem] font-bold tracking-widest text-electric-600 uppercase mt-0.5">
									{member.role}
								</p>
								<p class="mt-2.5 text-xs leading-relaxed text-slate-500 {expanded[member.name] ? '' : 'line-clamp-3'}">
									{member.bio}
								</p>
							</div>
							<button
								class="mt-3 text-[10px] font-bold tracking-widest text-slate-400 uppercase transition-colors hover:text-electric-600 self-start"
								aria-expanded={!!expanded[member.name]}
								onclick={() => (expanded[member.name] = !expanded[member.name])}
							>
								{expanded[member.name] ? 'Show less' : 'Read bio'}
							</button>
						</div>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</section>

<NewsletterForm />
