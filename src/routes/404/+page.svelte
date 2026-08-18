<script lang="ts">
	import { base } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';
	import Icons from '$lib/components/Icons.svelte';
</script>

<Seo title="Page Not Found" description="The page you were looking for does not exist." path="/404/" noindex />

<div class="bg-paper flex min-h-[75vh] items-center bg-jamdani-light">
	<div class="mx-auto max-w-2xl px-5 py-20 text-center flex flex-col items-center justify-center">
		<!-- Spot illustration -->
		<img src="{base}/images/illustrations/404-error.svg" alt="" class="h-52 w-auto mb-6 filter drop-shadow-md" loading="eager" width="240" height="200" />

		<p class="eyebrow mb-2">404 error</p>
		<h1 class="font-display text-4xl font-bold text-ink-900 sm:text-5xl tracking-tight leading-tight">This page does not exist</h1>
		<p class="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-slate-600">
			The link may be out of date. These pages cover most of what people come here for:
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<a href="{base}/" class="btn btn-electric btn-sm shadow-md">Homepage</a>
			<a href="{base}/our-work/" class="btn btn-ghost-light btn-sm">Programmes</a>
			<a href="{base}/events/" class="btn btn-ghost-light btn-sm">Past work</a>
			<a href="{base}/contact-us/" class="btn btn-ghost-light btn-sm">Contact us</a>
		</div>
	</div>
</div>
