<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		updated: string;
		children: Snippet;
	}

	let { title, updated, children }: Props = $props();
</script>

<div class="bg-paper">
	<div class="mx-auto max-w-3xl px-5 py-16 sm:py-24">
		<p class="eyebrow mb-3">Legal</p>
		<h1 class="text-4xl font-bold sm:text-5xl">{title}</h1>
		<p class="mt-3 text-sm text-slate-500">Last updated: {updated}</p>

		<div class="legal-prose mt-10">
			{@render children()}
		</div>
	</div>
</div>

<style>
	.legal-prose :global(h2) {
		font-size: 1.35rem;
		font-weight: 700;
		margin-top: 2.25rem;
		margin-bottom: 0.75rem;
	}
	.legal-prose :global(p),
	.legal-prose :global(li) {
		color: var(--color-slate-450);
		line-height: 1.75;
		margin-bottom: 0.9rem;
	}
	.legal-prose :global(ul) {
		list-style: disc;
		padding-left: 1.4rem;
		margin-bottom: 1rem;
	}
	.legal-prose :global(a) {
		color: var(--color-electric-600);
		font-weight: 500;
		text-decoration: underline;
	}
</style>
