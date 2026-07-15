<script lang="ts">
	interface Props {
		name: string;
		class?: string;
		strokeWidth?: number;
	}
	let { name, class: className = 'h-6 w-6', strokeWidth = 1.75 }: Props = $props();
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={strokeWidth}
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if name === 'capital-markets'}
		<!-- Line chart + trend line + vertical lines -->
		<path d="M3 3v18h18" />
		<path d="M18.7 8l-5.1 5.2-2.8-2.7-4.8 4.8" />
		<path d="M14 8h5v5" />
	{:else if name === 'banking' || name === 'banking-fintech'}
		<!-- Bank pillars + fintech lattice -->
		<path d="M3 21h18M3 10h18M5 6l7-4 7 4" />
		<path d="M5 10v11M9 10v11M15 10v11M19 10v11" />
	{:else if name === 'healthcare'}
		<!-- Stethoscope/heart/medical cross in flat editorial line style -->
		<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z" />
		<path d="M12 8v6M9 11h6" />
	{:else if name === 'energy'}
		<!-- High-voltage bolt -->
		<path d="M13 2L3 14h9l-1 8 10-12h-9z" />
	{:else if name === 'education'}
		<!-- Graduation cap + open book -->
		<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
		<path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
	{:else if name === 'government'}
		<!-- Dome building or columned courthouse -->
		<path d="M12 2L2 7h20zM4 21h16M4 11v10M8 11v10M12 11v10M16 11v10M20 11v10" />
	{:else if name === 'academy'}
		<!-- Book / Certificate -->
		<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
		<path d="M6 6h10M6 10h10M6 14h6" />
	{:else if name === 'ecosystem'}
		<!-- Network nodes lattice -->
		<circle cx="12" cy="12" r="3" />
		<circle cx="19" cy="5" r="2" />
		<circle cx="5" cy="19" r="2" />
		<circle cx="19" cy="19" r="2" />
		<circle cx="5" cy="5" r="2" />
		<path d="M17 6.5l-3.5 3.5M7 17.5l3.5-3.5M17 17.5l-3.5-3.5M7 6.5l3.5 3.5" />
	{:else if name === 'careers'}
		<!-- Pathway / compass -->
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
		<path d="M12 8v8M8 12h8" />
	{:else if name === 'calendar'}
		<!-- Calendar icon -->
		<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
		<line x1="16" y1="2" x2="16" y2="6" />
		<line x1="8" y1="2" x2="8" y2="6" />
		<line x1="3" y1="10" x2="21" y2="10" />
	{:else if name === 'map-pin'}
		<!-- Map pin icon -->
		<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
		<circle cx="12" cy="10" r="3" />
	{:else if name === 'arrow-right'}
		<!-- Arrow right icon -->
		<path d="M5 12h14M12 5l7 7-7 7" />
	{:else if name === 'arrow-left'}
		<!-- Arrow left icon -->
		<path d="M19 12H5M12 19l-7-7 7-7" />
	{:else if name === 'check'}
		<!-- Success check -->
		<path d="M20 6L9 17l-5-5" />
	{:else}
		<!-- Default fallback search/magnifier -->
		<circle cx="11" cy="11" r="8" />
		<path d="M21 21l-4.3-4.3" />
	{/if}
</svg>
