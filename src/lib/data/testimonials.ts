import type { Testimonial } from './types';

/**
 * Participant testimonials, ported from the previous site's dataset
 * (duplicates removed, template dates dropped). Flagged in
 * CONTENT-TODO.md for verification before wide use; the pages surface
 * a small selection.
 */
export const testimonials: Testimonial[] = [
	{
		text: 'We were stuck between concept and execution. The Founders Masterclass helped us structure our idea, build a pitch, and get seed funding, all within two months. It fast-tracked our journey.',
		name: 'Rifat Hossain',
		role: 'Co-founder, AgroSense AI'
	},
	{
		text: 'Participating in the National AI Olympiad gave me the confidence to pursue AI research and land a research internship abroad.',
		name: 'Samiha Rahman',
		role: 'Final-year Student, CSE, University of Dhaka'
	},
	{
		text: 'The Skill-Up programme helped me land my first data role. I now work in AI full-time.',
		name: 'Mahfuz Anwar',
		role: 'Junior Data Analyst, Datasoft Systems'
	},
	{
		text: 'Lab 2 Market support helped me test my AI-driven health tool in clinics. That transition from lab to real life was game-changing.',
		name: 'Tanima Islam',
		role: 'Founder, HealthHive BD'
	},
	{
		text: 'Completing the AI in Healthcare course gave me hands-on skills that I now use in my startup.',
		name: 'Mehedi Hasan',
		role: 'Co-founder, HealthVision AI'
	},
	{
		text: 'The mentoring programme helped me publish my first AI research paper at an international conference.',
		name: 'Farhan Hossain',
		role: 'Master’s Student, University of Toronto'
	}
];
