import type { TeamMember } from './types';

/**
 * Lead trainer and academic lead. His photo is not yet available in the
 * asset library; the UI renders an initials mark until one is supplied.
 */
export const leadTrainer = {
	name: 'Professor Khondaker A. Mamun',
	role: 'Lead Trainer & Academic Lead',
	credentials: [
		'Professor of Artificial Intelligence, United International University (UIU)',
		'Founder and Director, Institute of Research, Innovation, Incubation and Commercialisation (IRIIC)',
		'Co-founder, CMED Health'
	],
	summary:
		'Professor Mamun leads the design and delivery of every AI Forum Bangladesh professional training programme, including engagements for Grameenphone, the Dhaka Stock Exchange, LankaBangla Securities, Sonali Intellect, and healthcare institutions across the country and abroad.',
	quote: 'We want to democratise artificial intelligence across Bangladesh, transforming theoretical potential into practical, industry-led value.',
	image: 'about/mamun'
};

export const team: TeamMember[] = [
	{
		name: 'Sumaiya Mutiatur',
		role: 'Marketing & Partnerships',
		image: 'about/team/team1',
		bio: 'Sumaiya Mutiatur leads partnership outreach, programme communications, and engagement with participating organisations.'
	},
	{
		name: 'Sadik E Tawheed',
		role: 'Technology & Programmes',
		image: 'about/team/team2',
		bio: 'Sadik E Tawheed works across programme delivery and technology, coordinating digital initiatives and the teams that support them.'
	},
	{
		name: 'Md. Rasel Parvez',
		role: 'Design',
		image: 'about/team/team4',
		bio: 'Md. Rasel Parvez is responsible for visual design across the Forum’s programmes, communications, and digital presence.'
	}
];

/** Six organisational values, ported from the previous site */
export const values = [
	{
		icon: 'people',
		title: 'Start with the people',
		desc: 'We begin with the work participants already do, then show where AI can help and where human judgement must remain in charge.'
	},
	{
		icon: 'heart',
		title: 'Teach through practice',
		desc: 'Sessions use relevant tools, exercises, and sector examples so participants leave with methods they can apply.'
	},
	{
		icon: 'trend',
		title: 'Design for context',
		desc: 'A programme for clinicians should not look like one for capital-market professionals. The audience shapes the curriculum.'
	},
	{
		icon: 'flash',
		title: 'Ask better questions',
		desc: 'We treat AI literacy as the ability to test outputs, examine assumptions, and recognise uncertainty, not simply operate a tool.'
	},
	{
		icon: 'smile',
		title: 'Use AI responsibly',
		desc: 'Privacy, accountability, bias, and professional responsibility are part of the work, not an optional final module.'
	},
	{
		icon: 'flag',
		title: 'Work with institutions',
		desc: 'We build programmes with host organisations and subject specialists so that the material reflects real needs.'
	}
] as const;

/**
 * Milestone timeline for the About page. Entries whose exact year the
 * team has not yet confirmed use a phase label instead of a date;
 * swap in real years via CONTENT-TODO.md. Never invent a date.
 */
export const milestones = [
	{
		dateLabel: 'The beginning',
		title: 'AI Forum Bangladesh founded',
		detail: 'An independent organisation set up to bridge the gap between Bangladesh’s AI talent and real opportunity.'
	},
	{
		dateLabel: '2024',
		title: 'Innovation programmes across Bangladesh',
		detail: 'Innovation programmes delivered with universities and communities across Bangladesh.'
	},
	{
		dateLabel: 'Early growth',
		title: 'First corporate training clients',
		detail: 'Professional AI training delivered for organisations including Grameenphone and the Dhaka Stock Exchange.'
	},
	{
		dateLabel: 'October 2025',
		title: 'National press coverage',
		detail: 'The LankaBangla Securities capital markets programme was covered by more than eight national news outlets.'
	},
	{
		dateLabel: 'October 2025',
		title: 'First international delivery',
		detail: 'AI Essentials for Healthcare Professionals delivered in Pakistan with PILL, IRIIC, and UIU.'
	}
];
