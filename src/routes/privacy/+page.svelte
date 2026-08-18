<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalShell from '$lib/components/LegalShell.svelte';
	import { CONTACT_EMAIL, LEGAL_UPDATED } from '$lib/config';
</script>

<Seo
	title="Privacy Policy"
	description="How AI Forum Bangladesh handles the personal information you share through this website."
	path="/privacy/"
/>

<LegalShell title="Privacy Policy" updated={LEGAL_UPDATED}>
	<p>
		This policy explains what personal information this website collects, why, and what happens to
		it. The short version: we collect only what you send us through our forms or by email, we use it
		only to respond to you, and we do not sell or share it.
	</p>

	<h2>What we collect</h2>
	<ul>
		<li>
			<strong>Contact and training requests:</strong> the name, email address, organisation, and
			message you provide, used solely to respond to your enquiry.
		</li>
		<li>
			<strong>Programme-update signups:</strong> your email address, used solely to tell you about
			new programmes and announcements. Every such email includes a way to opt out.
		</li>
	</ul>

	<h2>What we do not collect</h2>
	<p>
		This site does not use advertising trackers and does not run third-party analytics scripts. We
		do not collect payment information through this site.
	</p>

	<h2>Hosting</h2>
	<p>
		This site is served by GitHub Pages. Like most web hosts, GitHub may record standard access logs
		(such as the IP address of visitors) to operate and secure the service; we do not receive or use
		that data. See
		<a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">GitHub's privacy statement</a>
		for details.
	</p>

	<h2>How form data is processed</h2>
	<p>
		Form submissions are delivered to our inbox through Web3Forms, a form processing service. Your
		submission passes through their infrastructure in order to reach us; it is not used by them for
		any other purpose. See the
		<a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">Web3Forms privacy policy</a>
		for details of their handling. When forms are unavailable, enquiries arrive by ordinary email
		instead and no third-party processor is involved.
	</p>

	<h2>How long we keep it</h2>
	<p>
		We keep enquiry emails while we handle your request and for up to two years afterwards as a
		record of our correspondence, unless you ask us to delete them sooner.
	</p>

	<h2>Your choices</h2>
	<ul>
		<li>
			You can ask what information we hold about you, ask us to correct it, or ask us to delete it
			by writing to <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
		</li>
	</ul>

	<h2>Changes</h2>
	<p>
		If our data practices change, this page will be updated and the date at the top revised.
	</p>
</LegalShell>
