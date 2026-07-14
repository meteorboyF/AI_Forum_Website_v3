<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalShell from '$lib/components/LegalShell.svelte';
	import { CONTACT_EMAIL } from '$lib/config';
</script>

<Seo
	title="Cookie Policy"
	description="How the AI Forum Bangladesh website uses cookies: briefly, it sets none of its own."
	path="/cookies/"
/>

<LegalShell title="Cookie Policy" updated="July 2026">
	<p>
		This site is a static website and sets no cookies of its own. There are no advertising
		cookies, no analytics cookies, and no tracking pixels.
	</p>

	<h2>What this means in practice</h2>
	<ul>
		<li>We do not track you across the web.</li>
		<li>We do not build profiles of visitors.</li>
		<li>There is no cookie consent banner because there is nothing to consent to.</li>
	</ul>

	<h2>Third-party links</h2>
	<p>
		Pages on this site link to external services such as Facebook, LinkedIn, and news publications.
		If you follow those links, the destination sites apply their own cookie policies, which are
		outside our control.
	</p>

	<h2>If this changes</h2>
	<p>
		If we ever introduce analytics or embedded content that uses cookies, this page will be updated
		first and a consent mechanism added where required. Questions are welcome at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>
</LegalShell>
