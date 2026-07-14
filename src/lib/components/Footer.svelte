<script lang="ts">
	import { base } from '$app/paths';
	import { brand } from '$lib/img';
	import { CONTACT_EMAIL, SOCIALS } from '$lib/config';

	const year = new Date().getFullYear();

	const columns = [
		{
			heading: 'Organisation',
			links: [
				{ href: '/about-us/', label: 'About us' },
				{ href: '/news/', label: 'News & Media' },
				{ href: '/contact-us/', label: 'Contact us' }
			]
		},
		{
			heading: 'Our Work',
			links: [
				{ href: '/our-work/ai-academy/', label: 'AI Academy' },
				{ href: '/our-work/innovation-ecosystem/', label: 'Innovation Ecosystem' },
				{ href: '/our-work/career-care/', label: 'Career Care' },
				{ href: '/hackathon/', label: 'Hackathons' }
			]
		},
		{
			heading: 'Training',
			links: [
				{ href: '/events/', label: 'Events & Training' },
				{ href: '/corporate-training/', label: 'Corporate Training' }
			]
		},
		{
			heading: 'Legal',
			links: [
				{ href: '/terms/', label: 'Terms' },
				{ href: '/privacy/', label: 'Privacy' },
				{ href: '/cookies/', label: 'Cookies' }
			]
		}
	];
</script>

<footer class="on-dark mesh-dark grain relative overflow-hidden text-white">
	<div class="relative mx-auto max-w-7xl px-5 py-16">
		<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
			<div class="lg:col-span-2">
				<img src={brand('aifb-logo-white.svg')} alt="AI Forum Bangladesh" class="h-10 w-auto" width="160" height="60" loading="lazy" />
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
					An independent organisation promoting responsible AI for everyone: training professionals,
					activating innovation, and building Bangladesh’s AI generation.
				</p>
				<a href="mailto:{CONTACT_EMAIL}" class="link-sweep mt-4 inline-block text-sm font-medium text-aqua-400">
					{CONTACT_EMAIL}
				</a>
			</div>

			{#each columns as col (col.heading)}
				<nav aria-label={col.heading}>
					<h3 class="font-display text-xs font-semibold tracking-widest text-white/50 uppercase">
						{col.heading}
					</h3>
					<ul class="mt-4 space-y-2.5">
						{#each col.links as link (link.href)}
							<li>
								<a href="{base}{link.href}" class="text-sm font-medium text-white/80 transition-colors hover:text-white">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			{/each}
		</div>

		<div class="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
			<p class="text-sm text-white/60">© {year} AI Forum Bangladesh. All rights reserved.</p>
			<div class="flex gap-3">
				<a
					href={SOCIALS.facebook}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-aqua-400 hover:text-aqua-400"
					aria-label="AI Forum Bangladesh on Facebook"
				>
					<svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
					</svg>
				</a>
				<a
					href={SOCIALS.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-aqua-400 hover:text-aqua-400"
					aria-label="AI Forum Bangladesh on LinkedIn"
				>
					<svg class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
						<rect x="2" y="9" width="4" height="12" />
						<circle cx="4" cy="4" r="2" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>
