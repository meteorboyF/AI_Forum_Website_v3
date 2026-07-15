<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import { img } from '$lib/img';
	import { sectors } from '$lib/data/courses';
	import { trainingClients } from '$lib/data/partners';
	import { submitForm, isValidEmail, type FormStatus } from '$lib/forms';
	import { toast } from '$lib/toast';
	import { CONTACT_EMAIL } from '$lib/config';

	const trackRecord = [
		{
			org: 'Grameenphone',
			what: 'Corporate AI training for staff at Bangladesh’s largest telecom operator.'
		},
		{
			org: 'Dhaka Stock Exchange',
			what: 'Two-day specialist training for the Investigation & Enforcement Department.'
		},
		{
			org: 'LankaBangla Securities PLC',
			what: 'Two-day AI Essentials programme for 30 capital market officials, covered by the national press.'
		},
		{
			org: 'Sonali Intellect Limited',
			what: 'AI Essentials for Banking & FinTech professionals.'
		},
		{
			org: 'Hospitals & medical societies',
			what: 'Programmes at OGSB Hospital & IRCH and with the Bangladesh Society of Physiologists, plus an international delivery with PILL Pakistan.'
		},
		{
			org: 'Government & development',
			what: 'BEPRC productivity training and a crash course on AI for officials of UNICEF.'
		}
	];

	let name = $state('');
	let organisation = $state('');
	let email = $state('');
	let sector = $state('');
	let message = $state('');
	let honeypot = $state('');
	let status = $state<FormStatus>('idle');
	let errors = $state<Record<string, string>>({});

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		errors = {};
		if (!name.trim()) errors.name = 'Please tell us your name.';
		if (!organisation.trim()) errors.organisation = 'Please tell us your organisation.';
		if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
		if (!message.trim()) errors.message = 'A sentence or two about your team helps us respond well.';
		if (Object.keys(errors).length > 0) return;

		status = 'submitting';
		const ok = await submitForm(
			'Training proposal request',
			{ name, organisation, email, sector, message, form: 'corporate-training' },
			honeypot
		);
		status = ok ? 'success' : 'error';
		if (ok) toast('success', 'Request received. We will come back to you shortly.');
		else toast('error', 'Sending failed. Please try again or email us directly.');
	}
</script>

<Seo
	title="Corporate & B2B Training"
	description="Book hands-on AI training for your team. AI Forum Bangladesh has trained Grameenphone, the Dhaka Stock Exchange, LankaBangla Securities, banks, hospitals, and government departments."
	path="/corporate-training/"
	ogImage="events/lankabangla"
/>

<!-- ============ PITCH ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-20 text-white lg:pb-28">
	<div class="relative mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
		<Reveal>
			<p class="eyebrow mb-5">Corporate & institutional training</p>
			<h1 class="font-display text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.0] font-bold tracking-[-0.03em] text-balance">
				<span class="line-mask"><span>We have trained teams at Grameenphone and the Dhaka Stock Exchange.</span></span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-white/80">
				Here is what a programme for your organisation would look like: a hands-on curriculum
				scoped to your sector, led by Professor Khondaker A. Mamun, delivered in your offices, at
				the UIU Innovation Hub, or online.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a href="#proposal" class="btn btn-primary">Request a Proposal</a>
				<a href="{base}/events/" class="btn btn-ghost-dark">See delivered programmes</a>
			</div>
		</Reveal>
		<Reveal delay={150}>
			<div class="photo rounded-xl">
				<img
					src={img('events/sonali-intellect')}
					alt="Banking and FinTech professionals during a hands-on AI training session"
					class="w-full rounded-xl"
					width="1400"
					height="1050"
				/>
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ TRACK RECORD ============ -->
<section class="bg-paper py-24 lg:py-28">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Track record"
			title="Organisations that have already done this with us"
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each trackRecord as item, i (item.org)}
				<Reveal delay={(i % 3) * 100}>
					<article class="h-full rounded-xl border border-ink-900/10 bg-white p-6 shadow-card">
						<h3 class="font-display text-lg font-bold text-electric-600">{item.org}</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600">{item.what}</p>
					</article>
				</Reveal>
			{/each}
		</div>
		<div class="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
			{#each trainingClients as client (client.name)}
				<span class="wordmark text-lg text-slate-500" title={client.name}>{client.lockup}</span>
			{/each}
		</div>
	</div>
</section>

<!-- ============ HOW IT WORKS ============ -->
<section class="border-y border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="02" eyebrow="How it works" title="From enquiry to delivery in four steps" />
		<ol class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ n: '01', t: 'Scoping call', d: 'We learn what your team does, their current AI exposure, and what you want them to be able to do afterwards.' },
				{ n: '02', t: 'Tailored proposal', d: 'A curriculum built for your sector, with duration, delivery mode, and outcomes set out clearly.' },
				{ n: '03', t: 'Hands-on delivery', d: 'Practical sessions with real tools and your own working context, not slideware. On site, at the UIU Innovation Hub, or online.' },
				{ n: '04', t: 'Certification & follow-up', d: 'Participants receive certificates, and we stay available for follow-up questions as your team applies what they learned.' }
			] as step, i (step.n)}
				<li>
					<Reveal delay={i * 100}>
						<span class="font-display text-4xl font-bold text-electric-100">{step.n}</span>
						<h3 class="mt-3 font-bold">{step.t}</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</p>
					</Reveal>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- ============ PROPOSAL FORM ============ -->
<section class="bg-paper py-24 lg:py-32" id="proposal">
	<div class="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
		<Reveal>
			<SectionHead
				number="03"
				eyebrow="Request a proposal"
				title="Tell us about your team"
				lede="Two working days is our usual turnaround for a first response. Prefer email? Write to us directly."
			/>
			<a href="mailto:{CONTACT_EMAIL}" class="link-sweep mt-4 inline-block font-semibold text-electric-600">
				{CONTACT_EMAIL}
			</a>
		</Reveal>

		<Reveal delay={120}>
			{#if status === 'success'}
				<div class="rounded-xl border border-aqua-400/40 bg-aqua-100/50 p-8" role="status">
					<h3 class="text-xl font-bold text-ink-900">Request received</h3>
					<p class="mt-2 leading-relaxed text-slate-600">
						Thank you, {name.split(' ')[0]}. We will review what you have told us about
						{organisation} and come back to you with a scoping call slot and a first outline.
					</p>
				</div>
			{:else}
				<form class="rounded-xl border border-ink-900/10 bg-white p-7 shadow-card" onsubmit={submit} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="ct-name" class="mb-1.5 block text-sm font-semibold">Your name</label>
							<input id="ct-name" class="field" type="text" maxlength="120" autocomplete="name" bind:value={name}
								aria-invalid={errors.name ? 'true' : undefined} aria-describedby={errors.name ? 'ct-name-err' : undefined} />
							{#if errors.name}<p id="ct-name-err" class="mt-1 text-xs font-medium text-red-600">{errors.name}</p>{/if}
						</div>
						<div>
							<label for="ct-org" class="mb-1.5 block text-sm font-semibold">Organisation</label>
							<input id="ct-org" class="field" type="text" maxlength="160" autocomplete="organization" bind:value={organisation}
								aria-invalid={errors.organisation ? 'true' : undefined} aria-describedby={errors.organisation ? 'ct-org-err' : undefined} />
							{#if errors.organisation}<p id="ct-org-err" class="mt-1 text-xs font-medium text-red-600">{errors.organisation}</p>{/if}
						</div>
						<div>
							<label for="ct-email" class="mb-1.5 block text-sm font-semibold">Work email</label>
							<input id="ct-email" class="field" type="email" maxlength="254" autocomplete="email" bind:value={email}
								aria-invalid={errors.email ? 'true' : undefined} aria-describedby={errors.email ? 'ct-email-err' : undefined} />
							{#if errors.email}<p id="ct-email-err" class="mt-1 text-xs font-medium text-red-600">{errors.email}</p>{/if}
						</div>
						<div>
							<label for="ct-sector" class="mb-1.5 block text-sm font-semibold">Sector</label>
							<select id="ct-sector" class="field" bind:value={sector}>
								<option value="">Select a sector (optional)</option>
								{#each sectors as s (s.slug)}
									<option value={s.name}>{s.name}</option>
								{/each}
								<option value="Other">Other</option>
							</select>
						</div>
					</div>
					<div class="mt-5">
						<label for="ct-message" class="mb-1.5 block text-sm font-semibold">
							What would you like your team to be able to do?
						</label>
						<textarea id="ct-message" class="field min-h-32" maxlength="3000" bind:value={message}
							aria-invalid={errors.message ? 'true' : undefined} aria-describedby={errors.message ? 'ct-msg-err' : undefined}></textarea>
						{#if errors.message}<p id="ct-msg-err" class="mt-1 text-xs font-medium text-red-600">{errors.message}</p>{/if}
					</div>
					<!-- Honeypot -->
					<input type="text" name="website" tabindex="-1" autocomplete="off" bind:value={honeypot}
						class="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden="true" />
					<button type="submit" class="btn btn-electric mt-6 w-full" disabled={status === 'submitting'}>
						{status === 'submitting' ? 'Sending…' : 'Send proposal request'}
					</button>
					{#if status === 'error'}
						<p class="mt-3 text-sm font-medium text-red-600" role="alert">
							Sending failed. Please try again in a moment, or email
							<a href="mailto:{CONTACT_EMAIL}" class="underline">{CONTACT_EMAIL}</a> directly.
						</p>
					{/if}
				</form>
			{/if}
		</Reveal>
	</div>
</section>
