import type { Hackathon } from './types';

/**
 * Hackathon archive. All listed events have run; there is nothing
 * currently upcoming, so the page shows a "stay notified" prompt
 * instead of an empty upcoming section.
 *
 * The previous site listed prize pools and organisers that could not
 * be verified against public sources; those fields were not carried
 * over. Winner and participation figures are added to `recap` only
 * once the team confirms them (see CONTENT-TODO.md); cards omit the
 * recap block entirely while it is absent.
 */
export const hackathons: Hackathon[] = [
	{
		id: 'codecure-2025',
		title: 'CodeCure 2025: Innovating Digital Health',
		subtitle: 'Tackling pressing challenges in healthcare with tech-driven solutions that make an impact.',
		dateLabel: 'May 2025',
		venue: 'Rajshahi University, Rajshahi',
		status: 'past',
		organiser: 'AI Forum Bangladesh'
	},
	{
		id: 'codecure-2024',
		title: 'CodeCure 2024: AI in Diagnostics',
		subtitle: 'Exploring AI’s role in revolutionising diagnostic accuracy and speed in hospitals.',
		dateLabel: 'November 2024',
		venue: 'University of Dhaka, Dhaka',
		status: 'past',
		organiser: 'AI Forum Bangladesh'
	},
	{
		id: 'agrohack-2024',
		title: 'AgroHack 2024: Smart Farming Solutions',
		subtitle: 'Accelerating agri-tech innovations for sustainability and efficiency.',
		dateLabel: 'October 2024',
		venue: 'BUET, Dhaka',
		status: 'past',
		organiser: 'AI Forum Bangladesh'
	},
	{
		id: 'edutech-sprint-2024',
		title: 'EduTech Sprint: Shaping Future Classrooms',
		subtitle: 'Creating solutions to transform education through adaptive learning and gamification.',
		dateLabel: 'September 2024',
		venue: 'BRAC University, Dhaka',
		status: 'past',
		organiser: 'AI Forum Bangladesh'
	},
	{
		id: 'finhack-2024',
		title: 'FinHack 2024: Disrupting Financial Inclusion',
		subtitle: 'Innovating fintech solutions to reach underbanked communities in Bangladesh.',
		dateLabel: 'August 2024',
		venue: 'North South University, Dhaka',
		status: 'past',
		organiser: 'AI Forum Bangladesh'
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
