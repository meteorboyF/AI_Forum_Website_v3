<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { brand } from '$lib/img';

	const ourWork = [
		{ href: '/our-work/ai-academy/', label: 'AI Academy' },
		{ href: '/our-work/innovation-ecosystem/', label: 'Innovation Ecosystem' },
		{ href: '/our-work/career-care/', label: 'Career Care' }
	];

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/about-us/', label: 'About Us' },
		{ href: '/events/', label: 'Events & Training' },
		{ href: '/news/', label: 'News & Media' },
		{ href: '/contact-us/', label: 'Contact' }
	];

	let mobileOpen = $state(false);
	let workOpen = $state(false);
	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 20);

	const path = $derived(page.url.pathname.replace(base, '') || '/');

	function isActive(href: string): boolean {
		return href === '/' ? path === '/' : path.startsWith(href.replace(/\/$/, ''));
	}

	function closeAll() {
		mobileOpen = false;
		workOpen = false;
	}
</script>


<header class="sticky top-0 z-50 border-b transition-all duration-300 {isScrolled ? 'border-ink-900/12 bg-paper/95 shadow-sm' : 'border-ink-900/6 bg-paper/80 backdrop-blur-md'}">
	<nav class="mx-auto flex max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12 transition-all duration-300 {isScrolled ? 'h-14' : 'h-16'}" aria-label="Main">
		<a href="{base}/" class="flex items-center" onclick={closeAll}>
			<img src={brand('aifb-logo-blue.svg')} alt="AI Forum Bangladesh" class="h-10 w-auto sm:h-11" width="176" height="66" />
		</a>

		<!-- Desktop nav -->
		<div class="hidden items-center gap-1 lg:flex">
			{#each links.slice(0, 2) as link (link.href)}
				<a
					href="{base}{link.href}"
					class="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-50 hover:text-ink-900
						{isActive(link.href) ? 'text-electric-600' : 'text-slate-600'}"
					aria-current={isActive(link.href) ? 'page' : undefined}>{link.label}</a
				>
			{/each}

			<!-- Our Work dropdown -->
			<div class="relative">
				<button
					class="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-50 hover:text-ink-900
						{path.startsWith('/our-work') ? 'text-electric-600' : 'text-slate-600'}"
					aria-expanded={workOpen}
					aria-haspopup="true"
					onclick={() => (workOpen = !workOpen)}
				>
					Our Work
					<svg class="h-4 w-4 transition-transform {workOpen ? 'rotate-180' : ''}" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z" clip-rule="evenodd" />
					</svg>
				</button>
				{#if workOpen}
					<div class="absolute left-0 mt-2 w-60 rounded-xl border border-ink-900/8 bg-white p-2 shadow-card-lg">
						{#each ourWork as item (item.href)}
							<a
								href="{base}{item.href}"
								class="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-ink-50 hover:text-ink-900"
								onclick={closeAll}>{item.label}</a
							>
						{/each}
					</div>
				{/if}
			</div>

			{#each links.slice(2) as link (link.href)}
				<a
					href="{base}{link.href}"
					class="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-ink-50 hover:text-ink-900
						{isActive(link.href) ? 'text-electric-600' : 'text-slate-600'}"
					aria-current={isActive(link.href) ? 'page' : undefined}>{link.label}</a
				>
			{/each}

			<a href="{base}/corporate-training/" class="btn btn-primary ml-3 !px-4 !py-2 text-sm">
				Request a Training
			</a>
		</div>

		<!-- Mobile toggle -->
		<button
			class="rounded-md p-2 text-ink-900 lg:hidden"
			aria-expanded={mobileOpen}
			aria-controls="mobile-menu"
			aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
			onclick={() => (mobileOpen = !mobileOpen)}
		>
			{#if mobileOpen}
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
				</svg>
			{:else}
				<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
				</svg>
			{/if}
		</button>
	</nav>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<div id="mobile-menu" class="border-t border-ink-900/8 bg-paper px-5 pt-2 pb-6 lg:hidden">
			{#each links.slice(0, 2) as link (link.href)}
				<a href="{base}{link.href}" class="block rounded-lg px-3 py-3 text-base font-medium text-ink-900" onclick={closeAll}>{link.label}</a>
			{/each}
			<p class="px-3 pt-3 pb-1 font-display text-xs font-semibold tracking-widest text-slate-500 uppercase">Our Work</p>
			{#each ourWork as item (item.href)}
				<a href="{base}{item.href}" class="block rounded-lg px-6 py-2.5 text-base font-medium text-slate-600" onclick={closeAll}>{item.label}</a>
			{/each}
			{#each links.slice(2) as link (link.href)}
				<a href="{base}{link.href}" class="block rounded-lg px-3 py-3 text-base font-medium text-ink-900" onclick={closeAll}>{link.label}</a>
			{/each}
			<a href="{base}/corporate-training/" class="btn btn-primary mt-4 w-full" onclick={closeAll}>Request a Training</a>
		</div>
	{/if}
</header>

<svelte:window
	bind:scrollY
	onclick={(e) => {
		if (workOpen && !(e.target as HTMLElement).closest('header')) workOpen = false;
	}}
	onkeydown={(e) => {
		if (e.key === 'Escape') closeAll();
	}}
/>
