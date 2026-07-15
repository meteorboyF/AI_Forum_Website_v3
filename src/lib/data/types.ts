export interface Advisor {
	name: string;
	/** Punchy one-line credential shown in large type on the card */
	credential: string;
	/** Extra highlighted fact rendered as a callout, if any */
	callout?: string;
	image: string;
	bio: string;
	/** Visually prominent card treatment */
	featured?: boolean;
}

export interface TeamMember {
	name: string;
	role: string;
	image: string;
	bio: string;
}

export type CourseStatus =
	| 'Now Enrolling'
	| 'Upcoming'
	| 'Completed, next batch TBC'
	| 'Available on Request';

export interface CourseModule {
	module: string;
	title: string;
	topics: string[];
}

export interface Course {
	id: string;
	title: string;
	description: string;
	image: string;
	category: 'professional' | 'skills' | 'startup';
	status: CourseStatus;
	/** Real, documented deliveries under this course, if any */
	deliveredTo?: string[];
	outline?: CourseModule[];
}

export interface Sector {
	slug: string;
	name: string;
	blurb: string;
	/** Slugs of events that serve as case studies for this sector */
	caseStudies: string[];
}

export interface EventItem {
	slug: string;
	title: string;
	client?: string;
	sector: string;
	format: string;
	venue?: string;
	/**
	 * Human-readable date. OMIT when unconfirmed: the UI drops the date
	 * clause entirely. Never put a placeholder string here.
	 */
	dateLabel?: string;
	/** Rough sort key, newest first. 0 = unknown, sinks to the end. */
	sortKey: number;
	summary: string;
	/** Confirmed programme topics, rendered only when documented. */
	highlights?: string[];
	/** Confirmed attendee or speaker detail, rendered only when documented. */
	attendees?: string;
	image?: string;
	imageAlt?: string;
	/** Local photo set supplied for this documented programme. */
	gallery?: {
		folder: string;
		count: number;
		label: string;
	};
	links: { label: string; url: string }[];
	/** Slugs into the press dataset for coverage of this event */
	pressSlugs?: string[];
	caseStudy?: boolean;
}

export interface PressItem {
	slug: string;
	publication: string;
	headline: string;
	/** Omit when unconfirmed; the UI drops the date clause */
	dateLabel?: string;
	url: string;
	language: 'English' | 'Bangla';
	/** Event slug this coverage relates to */
	about?: string;
}

export interface Partner {
	name: string;
	/** Short text lockup used until a real logo file is supplied */
	lockup: string;
	kind: 'client' | 'partner' | 'host-university';
}

export interface Milestone {
	dateLabel: string;
	title: string;
	detail: string;
}

export interface Testimonial {
	text: string;
	name: string;
	role: string;
}

export interface Initiative {
	slug: string;
	name: string;
	desc: string;
	status: 'active' | 'coming-soon';
	/** Longer on-page detail; present only where real material exists */
	detail?: string;
	image?: string;
}
