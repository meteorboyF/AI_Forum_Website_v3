<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Reveal from '$lib/components/Reveal.svelte';
	import SectionHead from '$lib/components/SectionHead.svelte';
	import NewsletterForm from '$lib/components/NewsletterForm.svelte';
	import { submitForm, isValidEmail, type FormStatus } from '$lib/forms';
	import { toast } from '$lib/toast';
	import { CONTACT_EMAIL, SOCIALS } from '$lib/config';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let honeypot = $state('');
	let status = $state<FormStatus>('idle');
	let errors = $state<Record<string, string>>({});

	async function submit(e: SubmitEvent) {
		e.preventDefault();
		errors = {};
		if (!name.trim()) errors.name = 'Please tell us your name.';
		if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
		if (!message.trim()) errors.message = 'Please write a message.';
		if (Object.keys(errors).length > 0) return;

		status = 'submitting';
		const ok = await submitForm('Website contact message', { name, email, message, form: 'contact' }, honeypot);
		status = ok ? 'success' : 'error';
		if (ok) toast('success', 'Message sent. We will reply by email.');
		else toast('error', 'Sending failed. Please try again or email us directly.');
	}
</script>

<Seo
	title="Contact Us"
	description="Get in touch with AI Forum Bangladesh about training, partnerships, the AI Roadshow, or anything else."
	path="/contact-us/"
	ogImage="contact/banner"
/>

<section class="on-dark mesh-dark grain relative overflow-hidden pt-36 pb-16 text-white lg:pb-20">
	<div class="relative mx-auto max-w-[88rem] px-5 sm:px-8 lg:px-12">
		<div class="max-w-3xl">
			<Reveal>
				<p class="eyebrow mb-5">Contact</p>
				<h1 class="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] font-bold tracking-[-0.03em]">
					<span class="line-mask"><span>Talk to us.</span></span>
				</h1>
				<p class="mt-6 text-lg leading-relaxed text-white/80">
					Training enquiries, partnership ideas, Roadshow visits, press questions: all of it lands
					in the same inbox and gets read.
				</p>
			</Reveal>
		</div>
	</div>
</section>

<section class="bg-paper py-24 lg:py-28">
	<div class="mx-auto grid max-w-[88rem] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
		<Reveal>
			<SectionHead eyebrow="Direct" title="Reach us anywhere" />
			<div class="mt-8 space-y-5">
				<a href="mailto:{CONTACT_EMAIL}" class="block rounded-xl border border-ink-900/10 bg-white p-5 shadow-card transition-colors hover:border-electric-400">
					<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">Email</p>
					<p class="mt-1 font-display font-bold text-electric-600">{CONTACT_EMAIL}</p>
				</a>
				<a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" class="block rounded-xl border border-ink-900/10 bg-white p-5 shadow-card transition-colors hover:border-electric-400">
					<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">Facebook</p>
					<p class="mt-1 font-display font-bold text-ink-900">aiforumbd.official ↗</p>
					<p class="mt-1 text-sm text-slate-500">Where events and programmes are announced first.</p>
				</a>
				<a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" class="block rounded-xl border border-ink-900/10 bg-white p-5 shadow-card transition-colors hover:border-electric-400">
					<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">LinkedIn</p>
					<p class="mt-1 font-display font-bold text-ink-900">AI Forum Bangladesh ↗</p>
				</a>
				<div class="rounded-xl border border-ink-900/10 bg-white p-5 shadow-card">
					<p class="text-xs font-bold tracking-widest text-slate-500 uppercase">Booking a training?</p>
					<p class="mt-1 text-sm leading-relaxed text-slate-600">
						Use the dedicated
						<a href="{base}/corporate-training/#proposal" class="link-sweep font-semibold text-electric-600">proposal request form</a>
						so we can scope it properly from the first message.
					</p>
				</div>
			</div>
		</Reveal>

		<Reveal delay={120}>
			{#if status === 'success'}
				<div class="rounded-xl border border-aqua-400/40 bg-aqua-100/50 p-8" role="status">
					<h3 class="text-xl font-bold text-ink-900">Message sent</h3>
					<p class="mt-2 leading-relaxed text-slate-600">
						Thanks, {name.split(' ')[0]}. Your message is in our inbox and we will reply to
						{email} as soon as we can.
					</p>
				</div>
			{:else}
				<form class="rounded-xl border border-ink-900/10 bg-white p-7 shadow-card" onsubmit={submit} novalidate>
					<div class="grid gap-5 sm:grid-cols-2">
						<div>
							<label for="c-name" class="mb-1.5 block text-sm font-semibold">Your name</label>
							<input id="c-name" class="field" type="text" maxlength="120" autocomplete="name" bind:value={name}
								aria-invalid={errors.name ? 'true' : undefined} aria-describedby={errors.name ? 'c-name-err' : undefined} />
							{#if errors.name}<p id="c-name-err" class="mt-1 text-xs font-medium text-red-600">{errors.name}</p>{/if}
						</div>
						<div>
							<label for="c-email" class="mb-1.5 block text-sm font-semibold">Email</label>
							<input id="c-email" class="field" type="email" maxlength="254" autocomplete="email" bind:value={email}
								aria-invalid={errors.email ? 'true' : undefined} aria-describedby={errors.email ? 'c-email-err' : undefined} />
							{#if errors.email}<p id="c-email-err" class="mt-1 text-xs font-medium text-red-600">{errors.email}</p>{/if}
						</div>
					</div>
					<div class="mt-5">
						<label for="c-message" class="mb-1.5 block text-sm font-semibold">Message</label>
						<textarea id="c-message" class="field min-h-36" maxlength="3000" bind:value={message}
							aria-invalid={errors.message ? 'true' : undefined} aria-describedby={errors.message ? 'c-msg-err' : undefined}></textarea>
						{#if errors.message}<p id="c-msg-err" class="mt-1 text-xs font-medium text-red-600">{errors.message}</p>{/if}
					</div>
					<input type="text" name="website" tabindex="-1" autocomplete="off" bind:value={honeypot}
						class="absolute -left-[9999px] h-0 w-0 opacity-0" aria-hidden="true" />
					<button type="submit" class="btn btn-electric mt-6 w-full" disabled={status === 'submitting'}>
						{status === 'submitting' ? 'Sending…' : 'Send message'}
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

<NewsletterForm />
