import type { EventItem } from './types';

/**
 * Real, documented training programmes and events. Sourced from the
 * AI Forum Bangladesh newsletter and the official Facebook page.
 * Unconfirmed dates are omitted, never faked; see CONTENT-TODO.md.
 */
export const events: EventItem[] = [
	{
		slug: 'lankabangla-capital-markets',
		title: 'AI Essentials for Capital Market Professionals',
		client: 'LankaBangla Securities PLC',
		sector: 'Capital Markets',
		format: 'Two-day hands-on training',
		venue: 'UIU Innovation Hub, Dhaka',
		dateLabel: 'October 2025',
		sortKey: 20251005,
		summary:
			'A two-day hands-on programme at the UIU Innovation Hub, organised by IRIIC-UIU with AI Forum Bangladesh. Thirty LankaBangla Securities officials trained on applying AI to financial operations, risk management, trade execution, capital market research, and strategy. The programme was covered by more than eight national news outlets.',
		highlights: [
			'Practical AI applications for financial operations and risk management',
			'Trade execution, capital-market research, and strategic decision-making',
			'Hands-on exercises, demonstrations, and cross-functional discussion'
		],
		attendees:
			'Mohammed Nasir Uddin Chowdhury, Managing Director; Khandoker Saffat Reza, CEO; S.A.R. Md. Muinul Islam, CTO; Senior General Manager Mohammad Amir Hossain; AGM Md. Jahangir Hossain; and officials from management, digital transformation, finance, trade, risk, operations, and research.',
		image: 'events/lankabangla',
		imageAlt: 'LankaBangla Securities officials receiving certificates at the UIU Innovation Hub',
		links: [
			{ label: 'Facebook: training in progress', url: 'https://www.facebook.com/share/p/1RCs2zLJp5/' },
			{ label: 'Facebook: programme recap', url: 'https://www.facebook.com/share/p/1CkZhCWzd6/' }
		],
		pressSlugs: [
			'tbs-lankabangla',
			'newage-lankabangla',
			'dailysun-lankabangla',
			'fe-lankabangla',
			'bonikbarta-lankabangla',
			'amadershomoy-lankabangla',
			'ajkerpatrika-lankabangla',
			'protidiner-lankabangla',
			'kalbela-lankabangla'
		],
		caseStudy: true
	},
	{
		slug: 'ogsb-irch-healthcare',
		title: 'AI Essentials for Healthcare Professionals',
		client: 'OGSB Hospital & IRCH',
		sector: 'Healthcare',
		format: 'Hands-on training for doctors and clinical staff',
		venue: 'OGSB Hospital & IRCH, Dhaka',
		sortKey: 20250701,
		summary:
			'A hands-on AI training programme for healthcare professionals at OGSB Hospital & IRCH. Doctors and clinical professionals worked with practical AI tools for improving healthcare workflows and professional efficiency.',
		image: 'events/ogsb',
		imageAlt: 'Doctors and clinical professionals with training certificates at OGSB Hospital',
		links: [
			{ label: 'Facebook: doctors training', url: 'https://www.facebook.com/share/p/1DFhJErHes/' },
			{ label: 'Facebook: programme photos', url: 'https://www.facebook.com/share/p/1BMzVxsVii/' }
		],
		caseStudy: true
	},
	{
		slug: 'pill-pakistan-healthcare',
		title: 'AI Essentials for Healthcare Professionals in Pakistan',
		client: 'Pakistan Institute of Living and Learning (PILL)',
		sector: 'Healthcare',
		format: 'Two-day online training, delivered internationally',
		venue: 'Online',
		dateLabel: 'October 2025',
		sortKey: 20251025,
		summary:
			'AI Forum Bangladesh collaborated with the Pakistan Institute of Living and Learning, IRIIC, and United International University on a two-day online programme for healthcare professionals in Pakistan: the organisation’s first sector-focused AI capacity building delivered beyond Bangladesh.',
		image: 'events/pill',
		imageAlt: 'Online session of AI Essentials for Healthcare Professionals in Pakistan',
		links: [
			{ label: 'Facebook: day one recap', url: 'https://www.facebook.com/share/p/1BJL3a6Qcf/' },
			{ label: 'Facebook: programme post', url: 'https://www.facebook.com/share/p/1GJPaB45hG/' }
		],
		caseStudy: true
	},
	{
		slug: 'sonali-intellect-banking',
		title: 'AI Essentials for Banking & FinTech Professionals',
		client: 'Sonali Intellect Limited',
		sector: 'Banking & FinTech',
		format: 'Hands-on training',
		venue: 'UIU Innovation Hub, Dhaka',
		dateLabel: 'October 2025',
		sortKey: 20251024,
		summary:
			'A focused AI training programme for officials of Sonali Intellect Limited, designed for professionals working in digital finance, financial operations, and technology-enabled banking services.',
		image: 'events/sonali-intellect',
		imageAlt: 'Banking and FinTech professionals during an AI training session',
		links: [
			{ label: 'Facebook: announcement', url: 'https://www.facebook.com/share/p/17z9hhUwGj/' },
			{ label: 'Facebook: training in progress', url: 'https://www.facebook.com/share/p/1FUawMEHiJ/' },
			{ label: 'Facebook: programme recap', url: 'https://www.facebook.com/share/p/18726TLCSM/' }
		],
		caseStudy: true
	},
	{
		slug: 'bsp-physiology',
		title: 'AI Essentials for Healthcare & Physiology Professionals',
		client: 'Bangladesh Society of Physiologists (BSP)',
		sector: 'Healthcare',
		format: 'Full-day hands-on workshop',
		venue: 'UIU Innovation Hub, Dhaka',
		sortKey: 20251101,
		summary:
			'A full-day hands-on workshop with the Bangladesh Society of Physiologists at the UIU Innovation Hub, focused on practical AI applications for healthcare and physiology professionals.',
		image: 'events/bsp',
		imageAlt: 'Bangladesh Society of Physiologists workshop at the UIU Innovation Hub',
		links: [
			{ label: 'Facebook: workshop recap', url: 'https://www.facebook.com/share/p/1J9LeGkznG/' },
			{ label: 'Facebook: programme photos', url: 'https://www.facebook.com/share/p/1NpvRW54jV/' }
		],
		caseStudy: true
	},
	{
		slug: 'ai-for-business-excellence',
		title: 'AI for Business Excellence Seminar',
		sector: 'Business',
		format: 'Seminar with national media coverage',
		venue: 'United International University, Dhaka',
		dateLabel: '7 February 2026',
		sortKey: 20260207,
		highlights: [
			'AI-driven decision-making, management efficiency, and customer engagement',
			'Emerging AI trends, policy considerations, and human resource management',
			'Skills and strategic planning for sustainable business growth'
		],
		attendees:
			'Prof. Dr Md Abul Kashem Mia, Vice-Chancellor of UIU, attended as chief guest. Prof. Dr Hasan Sarwar and Prof. Dr Khondaker Abdullah Al Mamun were keynote speakers, and Professor Emeritus Dr M Rezwan Khan delivered the vote of thanks.',
		summary:
			'A seminar at UIU on AI’s role in decision-making, management efficiency, customer engagement, automation, supply chain optimisation, financial forecasting, HR, policy, and business growth. The event received coverage across major Bangladeshi media outlets including The Daily Star and The Business Standard.',
		image: 'events/business-excellence-press',
		imageAlt: 'Newspaper clippings covering the AI for Business Excellence seminar',
		links: [],
		pressSlugs: ['dailystar-business-excellence', 'tbs-business-excellence', 'tbsgraduates-business-excellence']
	},
	{
		slug: 'beprc-productivity',
		title: 'Utilisation of AI Tools for Improving Productivity and Employee Performance',
		client: 'Bangladesh Energy and Power Research Council (BEPRC)',
		sector: 'Energy & Infrastructure',
		format: 'Professional training',
		sortKey: 0,
		summary:
			'A training programme for BEPRC on using AI tools to improve productivity and employee performance, part of AI Forum Bangladesh’s work with government and public sector institutions.',
		image: 'events/beprc',
		imageAlt: 'BEPRC professionals taking part in an AI productivity training session',
		links: [
			{ label: 'Facebook: programme post', url: 'https://www.facebook.com/share/p/1Abo3wTFpT/' },
			{ label: 'Facebook: programme photos', url: 'https://www.facebook.com/share/p/1Bq4axhYKi/' }
		]
	},
	{
		slug: 'unicef-crash-course',
		title: 'Crash Course on AI for Officials of UNICEF',
		client: 'UNICEF',
		sector: 'Development',
		format: 'Crash course',
		sortKey: 0,
		summary:
			'A crash course on AI delivered to officials of UNICEF, introducing practical AI tools and workflows for development sector professionals.',
		image: 'events/unicef',
		imageAlt: 'UNICEF officials participating in an AI training session',
		links: [
			{ label: 'Facebook: programme post', url: 'https://www.facebook.com/share/p/18wAkpwfTH/' },
			{ label: 'Facebook: programme photos', url: 'https://www.facebook.com/share/p/1DgthBBpvi/' }
		]
	},
	{
		slug: 'aims-lab-research-engineers',
		title: 'Essential AI Training for Research Engineers of AIMS Lab',
		client: 'AIMS Lab, UIU',
		sector: 'Research & Academia',
		format: 'Hands-on training',
		sortKey: 0,
		summary:
			'Hands-on essential AI training with the research engineers of the Advanced Intelligent Multidisciplinary Systems (AIMS) Lab at UIU.',
		image: 'events/aims-lab',
		imageAlt: 'AIMS Lab research engineers during an essential AI training session',
		links: [{ label: 'Facebook: programme post', url: 'https://www.facebook.com/share/p/1EsFSsZMqL/' }]
	}
];

export const pastEvents = [...events].sort((a, b) => b.sortKey - a.sortKey);

export const caseStudyEvents = events.filter((e) => e.caseStudy);

/**
 * Upcoming programmes. Empty right now: the UI must show a
 * "get notified" state rather than an empty section.
 */
export const upcomingEvents: EventItem[] = [];
