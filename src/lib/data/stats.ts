import { events } from './events';
import { hackathons } from './hackathons';
import { press } from './press';
import { trainingClients } from './partners';
import { hostUniversities } from './hackathons';

/**
 * Impact numbers for the homepage bar.
 *
 * Wherever a real figure can be derived from the documented datasets
 * (events, press, partners) it is computed here, labelled honestly as
 * a "documented" count. Figures that only the team can supply are
 * placeholder tokens, rendered with a visible marker so they cannot be
 * mistaken for real numbers. Never replace a token with a guess:
 * see CONTENT-TODO.md.
 */
export interface Stat {
	/** Numeric value drives the count-up; null renders the token */
	value: number | null;
	token?: string;
	suffix?: string;
	label: string;
}

export const stats: Stat[] = [
	{
		value: null,
		token: '{{PROFESSIONALS_TRAINED}}',
		suffix: '+',
		label: 'Professionals trained'
	},
	{
		value: trainingClients.length,
		suffix: '+',
		label: 'Corporate & institutional clients'
	},
	{
		value: events.length + hackathons.length,
		suffix: '+',
		label: 'Trainings, events & hackathons'
	},
	{
		value: hostUniversities.length + 1, // host universities plus UIU
		label: 'University partners'
	},
	{
		value: press.length,
		suffix: '+',
		label: 'National media features'
	}
];
