import { error } from '@sveltejs/kit';
import { events } from '$lib/data/events';
import { press } from '$lib/data/press';

export const prerender = true;

export function entries() {
	return events.map((event) => ({ slug: event.slug }));
}

export function load({ params }) {
	const event = events.find((item) => item.slug === params.slug);
	if (!event) error(404, 'Programme not found');

	return {
		event,
		coverage: press.filter((item) => item.about === event.slug)
	};
}
