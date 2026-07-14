<script lang="ts">
	import { base } from '$app/paths';
	import { submitForm, isValidEmail, type FormStatus } from '$lib/forms';
	import { toast } from '$lib/toast';

	let email = $state('');
	let honeypot = $state('');
	let status = $state<FormStatus>('idle');
	let emailError = $state('');

	async function subscribe(e: SubmitEvent) {
		e.preventDefault();
		emailError = '';
		if (!isValidEmail(email)) {
			emailError = 'Please enter a valid email address.';
			return;
		}
		status = 'submitting';
		const ok = await submitForm('Newsletter signup', { email, form: 'newsletter' }, honeypot);
		status = ok ? 'success' : 'error';
		if (ok) {
			toast('success', 'Thanks for subscribing. You are on the list.');
			email = '';
		} else {
			toast('error', 'Subscription failed. Please try again or email us directly.');
		}
	}
</script>

<section class="mesh-light relative overflow-hidden py-16 sm:py-24">
	<div class="mx-auto max-w-xl px-5 text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Stay in the Loop</h2>
		<p class="mt-4 text-slate-600">
			Get updates on upcoming events, new programmes, and inspiring stories from Bangladesh’s AI
			future.
		</p>

		{#if status === 'success'}
			<div
				class="mt-8 flex items-center justify-center gap-3 rounded-lg border border-aqua-400/40 bg-aqua-100/60 px-5 py-4 text-left"
				role="status"
			>
				<svg class="h-6 w-6 shrink-0 text-aqua-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
				</svg>
				<p class="text-sm font-medium text-ink-900">
					You are subscribed. Watch your inbox for the next update.
				</p>
			</div>
		{:else}
			<form class="mt-8" onsubmit={subscribe} novalidate>
				<div class="flex flex-col gap-3 sm:flex-row">
					<label class="sr-only" for="newsletter-email">Email address</label>
					<input
						id="newsletter-email"
						type="email"
						name="email"
						autocomplete="email"
						required
						maxlength="254"
						placeholder="Enter your email"
						class="field flex-1"
						bind:value={email}
						aria-invalid={emailError ? 'true' : undefined}
						aria-describedby={emailError ? 'newsletter-email-error' : undefined}
					/>
					<!-- Honeypot: hidden from real users, bots fill it in -->
					<input
						type="text"
						name="website"
						tabindex="-1"
						autocomplete="off"
						bind:value={honeypot}
						class="absolute -left-[9999px] h-0 w-0 opacity-0"
						aria-hidden="true"
					/>
					<button type="submit" class="btn btn-electric" disabled={status === 'submitting'}>
						{status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
					</button>
				</div>
				{#if emailError}
					<p id="newsletter-email-error" class="mt-2 text-left text-sm font-medium text-red-600">
						{emailError}
					</p>
				{/if}
				{#if status === 'error'}
					<p class="mt-3 text-sm font-medium text-red-600" role="alert">
						Something went wrong on our side. Please try again in a moment, or write to us via the
						<a href="{base}/contact-us/" class="underline">contact page</a>.
					</p>
				{/if}
				<p class="mt-3 text-sm text-slate-500">
					We care about your data. Read our
					<a href="{base}/privacy/" class="link-sweep font-medium text-ink-900">privacy policy</a>.
				</p>
			</form>
		{/if}
	</div>
</section>
