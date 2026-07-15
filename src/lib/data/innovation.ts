import type { Initiative } from './types';

/**
 * Innovation Ecosystem initiatives. The previous site rendered
 * "Learn more" links for all eight with only two working; here,
 * initiatives without real sub-content carry an honest status
 * and no dead link.
 */
export const initiatives: Initiative[] = [
	{
		slug: 'lab-2-market',
		name: 'Lab 2 Market',
		desc: 'Supporting lab-driven solutions for innovation, transformation, and growth.',
		status: 'active'
	},
	{
		slug: 'ai-roadshow',
		name: 'Innovation & AI Roadshow',
		desc: 'Taking AI awareness to schools and colleges through divisional workshops across Bangladesh, reaching students across all 8 divisions.',
		status: 'active',
		detail:
			'The Roadshow takes AI out of Dhaka and into classrooms across the country: hands-on demonstrations, career sessions, and awareness workshops for school and college students in every division of Bangladesh.'
	},
	{
		slug: 'innovation-challenge',
		name: 'Innovation Challenge',
		desc: 'AI festivals where ideas solve real problems and shape an innovative Bangladesh.',
		status: 'active'
	},
	{
		slug: 'innovation-direct',
		name: 'Innovation Direct',
		desc: 'Delivering tailored solutions, innovation audits, and policy support for sector-specific challenges.',
		status: 'coming-soon'
	},
	{
		slug: 'innovation-index',
		name: 'Innovation Index',
		desc: 'Benchmarking innovation performance through structured surveys, sectoral insights, and public reporting.',
		status: 'coming-soon'
	},
	{
		slug: 'innovation-awards',
		name: 'Innovation Awards',
		desc: 'Celebrating impactful innovators and connecting them with forward-thinking investors.',
		status: 'coming-soon'
	},
	{
		slug: 'future-of-ai-summit',
		name: 'Future of AI Summit',
		desc: 'Uniting leaders, academia, and policymakers to shape the national AI dialogue.',
		status: 'coming-soon'
	},
	{
		slug: 'start',
		name: 'START',
		desc: 'Stories, wins, and bold ideas that are driving Bangladesh’s AI movement.',
		status: 'coming-soon'
	}
];
