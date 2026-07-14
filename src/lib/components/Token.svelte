<script lang="ts">
	/**
	 * Renders content that may contain a {{PLACEHOLDER}} token.
	 * Tokens are shown with a visible dashed marker so they cannot be
	 * mistaken for real content; the full list lives in CONTENT-TODO.md.
	 */
	interface Props {
		value: string;
	}

	let { value }: Props = $props();
	const isToken = $derived(value.startsWith('{{') && value.endsWith('}}'));
</script>

{#if isToken}
	<span
		class="inline rounded border border-dashed border-gold-500/70 bg-gold-100/60 box-decoration-clone px-1.5 py-0.5 font-mono text-[0.8em] break-all text-gold-600"
		title="Awaiting real content, see CONTENT-TODO.md">{value}</span
	>
{:else}
	{value}
{/if}
