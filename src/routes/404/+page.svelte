<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Icons from '$lib/components/Icons.svelte';
</script>

<Seo title="Page Not Found" description="The page you were looking for does not exist." path="/404/" />

<div class="bg-paper flex min-h-[75vh] items-center bg-jamdani-light">
	<div class="mx-auto max-w-2xl px-5 py-20 text-center flex flex-col items-center justify-center">
		<!-- Spot illustration -->
		<img src="{base}/images/illustrations/404-error.svg" alt="" class="h-52 w-auto mb-6 filter drop-shadow-md" loading="eager" width="240" height="200" />
		
		<p class="eyebrow mb-2">404 Error</p>
		<h1 class="font-display text-4xl font-bold text-ink-900 sm:text-5xl tracking-tight leading-tight">This page does not exist</h1>
		<p class="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-500">
			The link may be out of date, or the page may have moved during the site rebuild.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-4">
			<a href="{base}/" class="btn btn-electric !px-5 !py-2.5 text-sm inline-flex items-center gap-1.5 shadow-md">
				Back to homepage
			</a>
			<a href="{base}/events/" class="btn btn-ghost-light !px-5 !py-2.5 text-sm inline-flex items-center gap-1.5">
				See training and events
			</a>
		</div>
	</div>
</div>
