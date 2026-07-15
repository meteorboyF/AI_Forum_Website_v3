import { events } from './events';
import { press } from './press';
import { trainingClients } from './partners';
import { PROFESSIONALS_TRAINED } from '$lib/config';

/**
 * Impact numbers for the homepage bar.
 *
 * Every figure shown is derived from the documented datasets (events,
 * press, partners) and grows as items are added; nothing here is
 * invented or hand-typed. The professionals-trained figure appears
 * only once the team sets PROFESSIONALS_TRAINED in src/lib/config.ts;
 * until then it is omitted entirely, never shown as zero.
 */
export interface Stat {
	value: number;
	suffix?: string;
	label: string;
}

const derived: Stat[] = [
	{
		value: events.length,
		label: 'Programmes delivered'
	},
	{
		value: trainingClients.length,
		label: 'Client organisations trained'
	},
	{
		value: press.length,
		suffix: '+',
		label: 'National press features'
	},
];

export const stats: Stat[] =
	PROFESSIONALS_TRAINED !== null
		? [{ value: PROFESSIONALS_TRAINED, suffix: '+', label: 'Professionals trained' }, ...derived]
		: derived;
