<script lang="ts">
	import { toasts } from '$lib/toast';
	import { fly, fade } from 'svelte/transition';
</script>

<div class="pointer-events-none fixed inset-x-0 top-20 z-[90] flex flex-col items-center gap-2 px-4" role="status" aria-live="polite">
	{#each $toasts as t (t.id)}
		<div
			in:fly={{ y: -16, duration: 250 }}
			out:fade={{ duration: 200 }}
			class="pointer-events-auto flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium shadow-card-lg
				{t.kind === 'success' ? 'bg-ink-900 text-white' : 'bg-red-600 text-white'}"
		>
			{#if t.kind === 'success'}
				<svg class="h-5 w-5 shrink-0 text-aqua-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
				</svg>
			{:else}
				<svg class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M18 10A8 8 0 112 10a8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
				</svg>
			{/if}
			{t.message}
		</div>
	{/each}
</div>
