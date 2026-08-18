<script lang="ts">
	import { SITE_NAME, SITE_URL } from '$lib/config';

	interface Props {
		/** Page-specific part of the title */
		title: string;
		description: string;
		/** Route path beginning with /, e.g. '/about-us/' */
		path: string;
		/** Logical image name under static/images, without extension */
		ogImage?: string;
		type?: 'website' | 'article';
		/** Ask search engines not to index this page (e.g. the 404 page) */
		noindex?: boolean;
	}

	let { title, description, path, ogImage = 'events/lankabangla', type = 'website', noindex = false }: Props = $props();

	const fullTitle = $derived(`${title} | ${SITE_NAME}`);
	const url = $derived(`${SITE_URL}${path}`);
	const image = $derived(`${SITE_URL}/images/${ogImage}.webp`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{:else}
		<link rel="canonical" href={url} />
	{/if}

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
