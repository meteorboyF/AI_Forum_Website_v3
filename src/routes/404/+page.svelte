<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo title="Page Not Found" description="The page you were looking for does not exist." path="/404/" />

<div class="bg-paper flex min-h-[60vh] items-center">
	<div class="mx-auto max-w-xl px-5 py-24 text-center">
		<p class="eyebrow mb-3">404</p>
		<h1 class="text-4xl font-bold sm:text-5xl">This page does not exist</h1>
		<p class="mt-4 text-lg text-slate-600">
			The link may be out of date, or the page may have moved during the site rebuild.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<a href="{base}/" class="btn btn-electric">Back to the homepage</a>
			<a href="{base}/events/" class="btn btn-ghost-light">See our events and training</a>
		</div>
	</div>
</div>
