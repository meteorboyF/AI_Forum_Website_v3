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
	/** Set to a real quote when the team supplies one; the page omits the block until then */
	quote: null as string | null,
	image: null as string | null
};

export const team: TeamMember[] = [
	{
		name: 'Sumaiya Mutiatur',
		role: 'Marketing & Partnerships',
		image: 'about/team/team1',
		bio: 'Sumaiya Mutiatur is a strategic leader with over 15 years of experience in brand communication, innovation management, and stakeholder engagement. She has led communications campaigns across industries, building strong brand identities and driving audience growth. At AI Forum Bangladesh, she oversees marketing strategy, partnership outreach, and public engagement initiatives, ensuring our mission resonates with key communities and stakeholders.'
	},
	{
		name: 'Sadik E Tawheed',
		role: 'Technology & Programmes',
		image: 'about/team/team2',
		bio: 'Sadik E Tawheed brings a rare combination of full-stack technical depth and programme management acumen to AI Forum Bangladesh. With a background in software architecture and agile methodologies, he has delivered scalable platforms in both startups and enterprise environments. He leads the design and execution of our tech initiatives, coordinating cross-functional teams for maximum impact.'
	},
	{
		name: 'Md. Shahriar Hasan',
		role: 'Content & Learning',
		image: 'about/team/team3',
		bio: 'Md. Shahriar Hasan is a thoughtful communicator with academic training in English and Applied Linguistics from the University of Dhaka. He specialises in crafting clear, impactful narratives and educational content. Within AI Forum Bangladesh, Shahriar develops programme materials, curates research summaries, and facilitates learning workshops to ensure effective knowledge transfer.'
	},
	{
		name: 'Md. Rasel Parvez',
		role: 'Design',
		image: 'about/team/team4',
		bio: 'Md. Rasel Parvez leads the design vision at AI Forum Bangladesh, bringing expertise in user experience, branding, and visual storytelling. A graduate of the National University in Graphic Design, he has created high-impact digital and print assets for NGOs and startups. His design leadership ensures our programmes are both functional and visually inspiring.'
	},
	{
		name: 'Abrar Hasin Kabbo',
		role: 'Operations',
		image: 'about/team/team5',
		bio: 'Abrar Hasin Kabbo brings a structured and strategic mindset to AI Forum Bangladesh, coordinating operations and programme delivery. With a background in project coordination and organisational development, he has implemented systems for event management, volunteer onboarding, and impact measurement. He ensures our initiatives run smoothly and achieve measurable results.'
	}
];

/** Six organisational values, ported from the previous site */
export const values = [
	{
		icon: 'people',
		title: 'Empower People First',
		desc: 'We champion youth, founders, and professionals with the support, resources, and belief they need to thrive in an AI-driven world.'
	},
	{
		icon: 'heart',
		title: 'Build with Purpose',
		desc: 'We create what matters: real-world solutions that solve deep challenges, spark inclusive innovation, and empower the people who need it most.'
	},
	{
		icon: 'trend',
		title: 'Impact Globally',
		desc: 'We connect grassroots innovation with global standards, blending context, creativity, and strategic reach.'
	},
	{
		icon: 'flash',
		title: 'Chase Curiosity',
		desc: 'We do not settle for answers, we chase questions. We test, tinker, and dive deep until something clicks. Curiosity is our method, discovery our habit.'
	},
	{
		icon: 'smile',
		title: 'Keep It Human',
		desc: 'Tech is only powerful when it is meaningful. We build solutions that respect ethics, reflect empathy, and serve people.'
	},
	{
		icon: 'flag',
		title: 'Collaborate Over Compete',
		desc: 'We do not gatekeep ideas. We share, co-create, and grow with partners, teams, and communities around us.'
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
		title: 'CodeCure hackathon series',
		detail: 'Hackathons hosted with universities including the University of Dhaka, BUET, BRAC University, North South University, and Rajshahi University.'
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
