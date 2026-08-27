<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import { img } from '$lib/img';
	import { sectors } from '$lib/data/courses';
	import { trainingClients } from '$lib/data/partners';
	import PartnerLogo from '$lib/components/PartnerLogo.svelte';
	import { sendEnquiry, isValidEmail, isValidPhone, type FormStatus } from '$lib/forms';
	import { toast } from '$lib/toast';
	import { CONTACT_EMAIL, FORMS_ENABLED } from '$lib/config';
	import Icons from '$lib/components/Icons.svelte';

	const trackRecord = [
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
			what: 'Programmes at OGSB Hospital & IRCH and with the Bangladesh Society of Physiologists, plus an international delivery with the Pakistan Institute of Living and Learning (PILL).'
		},
		{
			org: 'Government & development',
			what: 'BEPRC productivity training and a crash course on AI for UNICEF officials.'
		}
	];

	let name = $state('');
	let organisation = $state('');
	let email = $state('');
	let phone = $state('');
	let sector = $state('');
	let teamSize = $state('');
	let message = $state('');
	let honeypot = $state('');
	let status = $state<FormStatus>('idle');
	let errors = $state<Record<string, string>>({});

	function resetForm() {
		name = '';
		organisation = '';
		email = '';
		phone = '';
		sector = '';
		teamSize = '';
		message = '';
		errors = {};
		status = 'idle';
	}

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		errors = {};
		if (!name.trim()) errors.name = 'Please tell us your name.';
		if (!organisation.trim()) errors.organisation = 'Please tell us your organisation.';
		if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
		if (!isValidPhone(phone)) errors.phone = 'Please enter a valid phone number, or leave it blank.';
		if (!message.trim()) errors.message = 'A sentence or two about your team helps us respond well.';
		if (Object.keys(errors).length > 0) {
			const idByKey: Record<string, string> = {
				name: 'ct-name',
				organisation: 'ct-org',
				email: 'ct-email',
				phone: 'ct-phone',
				message: 'ct-message'
			};
			const first = ['name', 'organisation', 'email', 'phone', 'message'].find((k) => errors[k]);
			if (first) document.getElementById(idByKey[first])?.focus();
			return;
		}

		status = 'submitting';
		const ok = await sendEnquiry({
			subject: 'Training request from the website',
			name,
			email,
			phone,
			fields: [
				['Organisation', organisation],
				['Sector', sector],
				['Approximate team size', teamSize],
				['What the team needs', message]
			],
			honeypot
		});
		status = ok ? 'success' : 'error';
		if (ok) toast('success', 'Request received. We will come back to you shortly.');
		else toast('error', 'Sending failed. Please try again or email us directly.');
	}
</script>

<Seo
	title="Corporate & Institutional Training"
	description="Book hands-on AI training for your team. AI Forum Bangladesh has trained teams at the Dhaka Stock Exchange, LankaBangla Securities, Sonali Intellect, hospitals, and public institutions."
	path="/corporate-training/"
	ogImage="events/lankabangla"
/>

<!-- ============ PITCH ============ -->
<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-20 text-white lg:pb-28">
	<!-- Jamdani pattern overlay integrated into dark hero band -->
	<div class="absolute inset-0 z-5 bg-jamdani-dark opacity-[0.08] pointer-events-none"></div>

	<div class="relative z-10 mx-auto grid max-w-[88rem] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
		<Reveal>
			<p class="eyebrow mb-5">Corporate & institutional training</p>
			<h1 class="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em] text-balance">
				<span class="line-mask"><span>Training built</span></span>
				<span class="line-mask" style="--line-delay: 140ms"><span class="text-aqua-400">for your sector.</span></span>
			</h1>
			<p class="mt-6 text-lg leading-relaxed text-white/80">
				We have trained teams at the Dhaka Stock Exchange, LankaBangla Securities, and hospitals
				across the country. A programme for your organisation is a hands-on curriculum scoped to
				your sector, led by Professor Khondaker A. Mamun — in your offices, at the UIU Innovation
				Hub, or online.
			</p>
			<div class="mt-8 flex flex-wrap gap-4">
				<a href="#proposal" class="btn btn-primary">Discuss training</a>
				<a href="{base}/events/" class="btn btn-ghost-dark">See past work</a>
			</div>
		</Reveal>
		<Reveal delay={150}>
			<div class="overflow-hidden rounded-2xl border border-white/10 shadow-card-lg">
				<img
					src={img('events/sonali-intellect')}
					alt="Banking and FinTech professionals during a hands-on AI training session"
					class="image-zoom-img w-full rounded-2xl"
					width="1400"
					height="1050"
				/>
			</div>
		</Reveal>
	</div>
</section>

<!-- ============ TRACK RECORD ============ -->
<section class="bg-paper py-24 lg:py-32 bg-jamdani-light">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead
			number="01"
			eyebrow="Track record"
			title="Organisations that have already done this with us"
		/>
		<div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each trackRecord as item, i (item.org)}
				<Reveal delay={(i % 3) * 100}>
					<article class="h-full rounded-2xl border border-ink-900/10 bg-white p-7 shadow-card">
						<h3 class="font-display text-lg font-bold text-ink-900">{item.org}</h3>
						<p class="mt-2.5 text-sm leading-relaxed text-slate-600">{item.what}</p>
					</article>
				</Reveal>
			{/each}
		</div>
		<div class="mt-14 border-t border-ink-900/5 pt-8">
			<h3 class="font-display text-sm font-semibold tracking-widest text-slate-500 uppercase">Organisations we have trained</h3>
			<div class="mt-5 flex flex-wrap items-center gap-x-10 gap-y-6 justify-center lg:justify-start">
				{#each trainingClients as client (client.name)}
					<PartnerLogo partner={client} compact />
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- ============ HOW IT WORKS ============ -->
<section class="border-y border-ink-900/8 bg-white py-20 lg:py-24">
	<div class="mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<SectionHead number="02" eyebrow="How it works" title="From enquiry to delivery in four steps" />
		<ol class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ n: '01', t: 'Scoping call', d: 'We learn what your team does, their current AI exposure, and what you want them to be able to do afterwards.' },
				{ n: '02', t: 'Tailored proposal', d: 'A curriculum built for your sector, with duration, delivery mode, and outcomes set out clearly.' },
				{ n: '03', t: 'Hands-on delivery', d: 'Practical sessions with real tools and your own working context, not slide decks. On site, at the UIU Innovation Hub, or online.' },
				{ n: '04', t: 'Certification & follow-up', d: 'Participants receive certificates, and we stay available for follow-up questions as your team applies what they learned.' }
			] as step, i (step.n)}
				<li>
					<Reveal delay={i * 100}>
						<div class="h-full rounded-2xl border border-ink-900/10 bg-paper-deep/20 p-6 shadow-card">
							<span class="font-display text-5xl font-bold text-transparent" style="-webkit-text-stroke: 1.5px var(--color-electric-400)">{step.n}</span>
							<h3 class="mt-4 font-display font-bold text-ink-900 text-base leading-snug">{step.t}</h3>
							<p class="mt-2 text-sm leading-relaxed text-slate-600">{step.d}</p>
						</div>
					</Reveal>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- ============ PROPOSAL FORM ============ -->
<section class="scroll-mt-24 bg-paper py-24 lg:py-32 outline-none" id="proposal" tabindex="-1">
	<div class="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
		<Reveal>
			<SectionHead
				number="03"
				eyebrow="Request a proposal"
				title="Tell us about your team"
				lede="Include the size of the group, its sector, current experience with AI, and what participants should be able to do after the programme."
			/>
			<a href="mailto:{CONTACT_EMAIL}" class="link-sweep mt-4 inline-block font-semibold text-electric-600 font-mono">
				{CONTACT_EMAIL}
			</a>
		</Reveal>

		<Reveal delay={120}>
			{#if !FORMS_ENABLED}
				<div class="rounded-lg border border-electric-600/20 bg-white p-8 shadow-card">
					<p class="eyebrow">Training enquiry</p>
					<h3 class="mt-3 font-display text-3xl font-bold">Send the brief by email.</h3>
					<p class="mt-4 leading-relaxed text-slate-600">Tell us about the organisation, audience, preferred format, and the work participants need help with. The link below opens a pre-addressed email.</p>
					<a href="mailto:{CONTACT_EMAIL}?subject=Training%20enquiry%20for%20AI%20Forum%20Bangladesh" class="btn btn-electric mt-7">Email the training team</a>
				</div>
			{:else if status === 'success'}
				{@const firstName = name.trim().split(/\s+/)[0]}
				{@const org = organisation.trim()}
				<div class="rounded-2xl border border-aqua-400/40 bg-aqua-100/50 p-8 shadow-card" role="status">
					<h3 class="text-xl font-bold text-ink-900 flex items-center gap-2">
						<Icons name="check" class="h-6 w-6 text-aqua-600" />
						Request received
					</h3>
					<p class="mt-3 leading-relaxed text-slate-600">
						Thank you, {firstName}. We will review what you have told us about
						{org} and come back to you with a scoping call slot and a first outline.
					</p>
					<button type="button" class="btn btn-ghost-light btn-sm mt-6" onclick={resetForm}>
						Send another request
					</button>
				</div>
			{:else}
				<form class="rounded-2xl border border-ink-900/10 bg-white p-8 shadow-card" onsubmit={submit} aria-labelledby="proposal-form-title" novalidate>
					<h3 id="proposal-form-title" class="font-display text-2xl font-bold text-ink-900">Request a proposal</h3>
					<p class="mt-1.5 mb-6 text-sm text-slate-600">Fields marked * are required.</p>
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="ct-name" class="mb-1.5 block text-sm font-semibold">Your name *</label>
							<input id="ct-name" class="field" type="text" maxlength="120" autocomplete="name" required aria-required="true" bind:value={name}
								aria-invalid={errors.name ? 'true' : undefined} aria-describedby={errors.name ? 'ct-name-err' : undefined} />
							{#if errors.name}<p id="ct-name-err" class="mt-1 text-xs font-medium text-red-600" role="alert">{errors.name}</p>{/if}
						</div>
						<div>
							<label for="ct-org" class="mb-1.5 block text-sm font-semibold">Organisation *</label>
							<input id="ct-org" class="field" type="text" maxlength="160" autocomplete="organization" required aria-required="true" bind:value={organisation}
								aria-invalid={errors.organisation ? 'true' : undefined} aria-describedby={errors.organisation ? 'ct-org-err' : undefined} />
							{#if errors.organisation}<p id="ct-org-err" class="mt-1 text-xs font-medium text-red-600" role="alert">{errors.organisation}</p>{/if}
						</div>
						<div>
							<label for="ct-email" class="mb-1.5 block text-sm font-semibold">Work email *</label>
							<input id="ct-email" class="field" type="email" maxlength="254" autocomplete="email" required aria-required="true" bind:value={email}
								aria-invalid={errors.email ? 'true' : undefined} aria-describedby={errors.email ? 'ct-email-err' : undefined} />
							{#if errors.email}<p id="ct-email-err" class="mt-1 text-xs font-medium text-red-600" role="alert">{errors.email}</p>{/if}
						</div>
						<div>
							<label for="ct-phone" class="mb-1.5 block text-sm font-semibold">Phone number</label>
							<input id="ct-phone" class="field" type="tel" maxlength="32" autocomplete="tel" placeholder="01912 123456" bind:value={phone}
								aria-invalid={errors.phone ? 'true' : undefined} aria-describedby={errors.phone ? 'ct-phone-err' : undefined} />
							{#if errors.phone}<p id="ct-phone-err" class="mt-1 text-xs font-medium text-red-600" role="alert">{errors.phone}</p>{/if}
						</div>
						<div>
							<label for="ct-sector" class="mb-1.5 block text-sm font-semibold">Sector</label>
							<select id="ct-sector" class="field" bind:value={sector}>
								<option value="">Select a sector — optional</option>
								{#each sectors as s (s.slug)}
									<option value={s.name}>{s.name}</option>
								{/each}
								<option value="Other">Other</option>
							</select>
						</div>
						<div>
							<label for="ct-size" class="mb-1.5 block text-sm font-semibold">Approximate team size</label>
							<select id="ct-size" class="field" bind:value={teamSize}>
								<option value="">Select a size — optional</option>
								<option value="Up to 15">Up to 15</option>
								<option value="15–30">15–30</option>
								<option value="30–60">30–60</option>
								<option value="More than 60">More than 60</option>
							</select>
						</div>
					</div>
					<div class="mt-5">
						<label for="ct-message" class="mb-1.5 block text-sm font-semibold">
							What would you like your team to be able to do? *
						</label>
						<textarea id="ct-message" class="field min-h-32" maxlength="3000" required aria-required="true" bind:value={message}
							aria-invalid={errors.message ? 'true' : undefined} aria-describedby={errors.message ? 'ct-msg-err' : undefined}></textarea>
						{#if errors.message}<p id="ct-msg-err" class="mt-1 text-xs font-medium text-red-600" role="alert">{errors.message}</p>{/if}
					</div>
					<!-- Honeypot -->
					<input type="text" name="_gotcha" inert tabindex="-1" autocomplete="off" bind:value={honeypot}
						class="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden="true" />
					<button type="submit" class="btn btn-electric mt-6 w-full" disabled={status === 'submitting'}>
						{status === 'submitting' ? 'Sending…' : 'Send proposal request'}
					</button>
					<p class="mt-4 text-xs leading-relaxed text-slate-500">
						We use what you send only to respond to you. See our
						<a href="{base}/privacy/" class="link-sweep font-medium text-ink-900">privacy policy</a>.
					</p>

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
