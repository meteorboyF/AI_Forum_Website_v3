<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalShell from '$lib/components/LegalShell.svelte';
	import { CONTACT_EMAIL } from '$lib/config';
</script>

<Seo
	title="Terms of Use"
	description="The terms that govern your use of the AI Forum Bangladesh website and its content."
	path="/terms/"
/>

<LegalShell title="Terms of Use" updated="July 2026">
	<p>
		These terms govern your use of the AI Forum Bangladesh website. By using this site you accept
		these terms. If you do not agree with them, please do not use the site.
	</p>

	<h2>Who we are</h2>
	<p>
		AI Forum Bangladesh is an independent organisation that promotes responsible AI through
		training, innovation programmes, and career support. You can reach us at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>

	<h2>Use of this site</h2>
	<ul>
		<li>The content on this site is provided for general information about our work and programmes.</li>
		<li>You may not use this site in any way that is unlawful, fraudulent, or harmful.</li>
		<li>You may not attempt to gain unauthorised access to this site or the infrastructure that serves it.</li>
	</ul>

	<h2>Intellectual property</h2>
	<p>
		Unless stated otherwise, the content on this site, including text, graphics, logos, and
		photographs, belongs to AI Forum Bangladesh or is used with permission. You may share links to
		our pages freely. Reproduction of substantial parts of the site requires our written consent.
	</p>

	<h2>Programme information</h2>
	<p>
		Course listings, event dates, and programme details are provided in good faith and may change.
		Registration for any programme is confirmed only when we say so directly, not by the appearance
		of a listing on this site.
	</p>

	<h2>External links</h2>
	<p>
		This site links to external websites, including news publications and social media. We are not
		responsible for the content or privacy practices of those sites.
	</p>

	<h2>Liability</h2>
	<p>
		This site is provided on an "as is" basis. To the fullest extent permitted by law, AI Forum
		Bangladesh accepts no liability for any loss or damage arising from your use of the site or
		reliance on its content.
	</p>

	<h2>Changes</h2>
	<p>
		We may update these terms from time to time. The date at the top of this page shows when they
		were last revised.
	</p>
</LegalShell>
