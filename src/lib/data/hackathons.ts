import type { Hackathon } from './types';

/**
 * Hackathon archive. All listed events have run; there is nothing
 * currently upcoming, so the page shows a "stay notified" prompt
 * instead of an empty upcoming section.
 *
 * The previous site listed prize pools and organisers that could not be
 * verified against public sources; those fields are omitted here rather
 * than repeated. Winner and participation figures are placeholder
 * tokens awaiting confirmation (see CONTENT-TODO.md).
 */
export const hackathons: Hackathon[] = [
	{
		id: 'codecure-2025',
		title: 'CodeCure 2025: Innovating Digital Health',
		subtitle: 'Tackling pressing challenges in healthcare with tech-driven solutions that make an impact.',
		dateLabel: 'May 2025',
		venue: 'Rajshahi University, Rajshahi',
		image: 'hackathon/h1',
		status: 'past',
		organiser: 'AI Forum Bangladesh',
		recap: {
			teams: '{{CODECURE_2025_TEAMS}}',
			winner: '{{CODECURE_2025_WINNER}}',
			problems: '{{CODECURE_2025_PROBLEMS}}'
		}
	},
	{
		id: 'codecure-2024',
		title: 'CodeCure 2024: AI in Diagnostics',
		subtitle: 'Exploring AI’s role in revolutionising diagnostic accuracy and speed in hospitals.',
		dateLabel: 'November 2024',
		venue: 'University of Dhaka, Dhaka',
		image: 'hackathon/h3',
		status: 'past',
		organiser: 'AI Forum Bangladesh',
		recap: {
			teams: '{{CODECURE_2024_TEAMS}}',
			winner: '{{CODECURE_2024_WINNER}}',
			problems: '{{CODECURE_2024_PROBLEMS}}'
		}
	},
	{
		id: 'agrohack-2024',
		title: 'AgroHack 2024: Smart Farming Solutions',
		subtitle: 'Accelerating agri-tech innovations for sustainability and efficiency.',
		dateLabel: 'October 2024',
		venue: 'BUET, Dhaka',
		image: 'hackathon/h4',
		status: 'past',
		organiser: 'AI Forum Bangladesh',
		recap: { teams: '{{AGROHACK_TEAMS}}', winner: '{{AGROHACK_WINNER}}' }
	},
	{
		id: 'edutech-sprint-2024',
		title: 'EduTech Sprint: Shaping Future Classrooms',
		subtitle: 'Creating solutions to transform education through adaptive learning and gamification.',
		dateLabel: 'September 2024',
		venue: 'BRAC University, Dhaka',
		image: 'hackathon/h5',
		status: 'past',
		organiser: 'AI Forum Bangladesh',
		recap: { teams: '{{EDUTECH_TEAMS}}', winner: '{{EDUTECH_WINNER}}' }
	},
	{
		id: 'finhack-2024',
		title: 'FinHack 2024: Disrupting Financial Inclusion',
		subtitle: 'Innovating fintech solutions to reach underbanked communities in Bangladesh.',
		dateLabel: 'August 2024',
		venue: 'North South University, Dhaka',
		image: 'hackathon/h6',
		status: 'past',
		organiser: 'AI Forum Bangladesh',
		recap: { teams: '{{FINHACK_TEAMS}}', winner: '{{FINHACK_WINNER}}' }
	}
];

/** Gallery images from past hackathons */
export const hackathonGallery = Array.from({ length: 12 }, (_, i) => ({
	src: `hackathon/gallery/g${i + 1}`,
	alt: `Participants at an AI Forum Bangladesh hackathon, photo ${i + 1}`
}));

export const hostUniversities = [
	'University of Dhaka',
	'BUET',
	'BRAC University',
	'North South University',
	'Rajshahi University'
];
