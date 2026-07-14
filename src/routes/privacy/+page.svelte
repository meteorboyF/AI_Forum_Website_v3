<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import LegalShell from '$lib/components/LegalShell.svelte';
	import { CONTACT_EMAIL } from '$lib/config';
</script>

<Seo
	title="Privacy Policy"
	description="How AI Forum Bangladesh handles the personal information you share through this website."
	path="/privacy/"
/>

<LegalShell title="Privacy Policy" updated="July 2026">
	<p>
		This policy explains what personal information this website collects, why, and what happens to
		it. The short version: we collect only what you type into our forms, we use it only to respond
		to you, and we do not sell or share it.
	</p>

	<h2>What we collect</h2>
	<ul>
		<li>
			<strong>Newsletter signups:</strong> your email address, used solely to send you updates about
			our events and programmes.
		</li>
		<li>
			<strong>Contact and training requests:</strong> the name, email address, organisation, and
			message you provide, used solely to respond to your enquiry.
		</li>
	</ul>

	<h2>What we do not collect</h2>
	<p>
		This site does not use advertising trackers and does not run third-party analytics scripts. We
		do not collect payment information through this site.
	</p>

	<h2>How form data is processed</h2>
	<p>
		Form submissions are delivered to our inbox through Web3Forms, a form processing service. Your
		submission passes through their infrastructure in order to reach us; it is not used by them for
		any other purpose. See the Web3Forms privacy policy for details of their handling.
	</p>

	<h2>How long we keep it</h2>
	<p>
		We keep enquiry emails for as long as needed to handle your request and maintain a record of
		our correspondence. You can ask us to delete your information at any time.
	</p>

	<h2>Your choices</h2>
	<ul>
		<li>Every newsletter email includes a way to unsubscribe.</li>
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
