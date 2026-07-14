<script lang="ts">
	import '@fontsource-variable/inter';
	import '@fontsource-variable/space-grotesk';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Toasts from '$lib/components/Toasts.svelte';

	let { children } = $props();
</script>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-electric-600 focus:px-4 focus:py-2 focus:text-white"
>
	Skip to content
</a>

<Toasts />
<Navbar />

<main id="main">
	{@render children()}
</main>

<Footer />
