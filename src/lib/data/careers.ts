/**
 * Career Care offerings, ported from the previous site.
 */
export interface CareerOffering {
	id: string;
	size: 'large' | 'small';
	image: string;
	title: string;
	description: string;
}

export const globalTrack: CareerOffering[] = [
	{
		id: 'global-career',
		size: 'large',
		image: 'career/car1',
		title: 'Launch Your Global Career',
		description:
			'If you dream of studying or researching abroad, we are here to make it possible, with personalised support every step of the way.'
	},
	{
		id: 'research-placement',
		size: 'small',
		image: 'career/car2',
		title: 'Global Research Placement',
		description:
			'For graduates and professionals ready to pursue international research degrees, with the right guidance, strategy, and global network.'
	},
	{
		id: 'relocation',
		size: 'small',
		image: 'career/car3',
		title: 'Global Relocation Services',
		description:
			'We help you manage the move, from visas to accommodation, so you can focus on what matters: your academic journey.'
	}
];

export const localTrack: CareerOffering[] = [
	{
		id: 'standard-package',
		size: 'small',
		image: 'career/car4',
		title: 'Standard Package: Candidate Perfection',
		description:
			'For professionals seeking full career profiling, real-world simulation, and access to top-tier workshops.'
	},
	{
		id: 'gold-package',
		size: 'small',
		image: 'career/car5',
		title: 'Gold Package: Career Consultation',
		description:
			'For job-ready graduates who want a polished CV, better interview prep, and sharper career direction.'
	},
	{
		id: 'excel-bangladesh',
		size: 'large',
		image: 'career/car6',
		title: 'Excel Your Career in Bangladesh',
		description:
			'We help you launch or restart your career through mentoring, skills, and smart job market navigation.'
	}
];
