import type { Course, Sector } from './types';

/**
 * AI Academy courses, ported from the previous site. The old repo
 * attached one copy-pasted healthcare outline to every course; outlines
 * are kept only where they genuinely belong to the course. Statuses
 * need confirmation from the team (see CONTENT-TODO.md); "Available on
 * Request" is used as the honest default for institutional programmes.
 */
export const courses: Course[] = [
	{
		id: 'ai-for-healthcare-professionals',
		title: 'AI for Healthcare Professionals',
		description:
			'For doctors, medical researchers, public health strategists, pharmacists, and hospital managers ready to lead in digital health, AI-driven diagnostics, and smart healthcare systems.',
		image: 'events/ogsb',
		category: 'professional',
		status: 'Available on Request',
		deliveredTo: [
			'OGSB Hospital & IRCH',
			'Bangladesh Society of Physiologists',
			'Pakistan Institute of Living and Learning (delivered internationally)'
		],
		outline: [
			{
				module: 'Module 1',
				title: 'Introduction to AI in Healthcare',
				topics: [
					'What is AI? Key concepts (ML, NLP, Deep Learning)',
					'Overview of AI applications in healthcare',
					'Benefits and risks of AI in clinical practice'
				]
			},
			{
				module: 'Module 2',
				title: 'Data in Healthcare AI',
				topics: [
					'Types and sources of healthcare data',
					'Data quality and preprocessing',
					'Ethical issues around health data usage'
				]
			},
			{
				module: 'Module 3',
				title: 'Clinical Applications of AI',
				topics: [
					'Diagnostic tools (e.g. radiology, pathology)',
					'Predictive analytics in patient care',
					'AI in treatment personalisation'
				]
			},
			{
				module: 'Module 4',
				title: 'AI Tools & Techniques',
				topics: [
					'Overview of popular AI frameworks and libraries',
					'Introduction to building simple models',
					'Understanding model evaluation and metrics'
				]
			},
			{
				module: 'Module 5',
				title: 'Hands-On Practice',
				topics: [
					'Guided project using real-world datasets',
					'Model training and evaluation',
					'Interpreting AI outputs in a healthcare context'
				]
			},
			{
				module: 'Module 6',
				title: 'Future of AI in Healthcare',
				topics: [
					'Emerging trends and research areas',
					'Regulatory challenges and policies',
					'The evolving role of healthcare professionals with AI'
				]
			}
		]
	},
	{
		id: 'ai-for-business-professionals',
		title: 'AI for Business Professionals',
		description:
			'Built for C-suite leaders, innovation managers, operations heads, marketing directors, and tech-driven entrepreneurs ready to lead smarter, AI-powered organisations. Delivered to executives at leading Bangladeshi organisations.',
		image: 'events/lankabangla',
		category: 'professional',
		status: 'Available on Request',
		deliveredTo: ['Grameenphone', 'LankaBangla Securities PLC', 'Sonali Intellect Limited'],
		outline: [
			{
				module: 'Module 1',
				title: 'Introduction to AI in Business',
				topics: [
					'What is AI? Key concepts (ML, NLP, Deep Learning)',
					'Overview of AI applications in business',
					'Benefits and risks of AI in business operations'
				]
			},
			{
				module: 'Module 2',
				title: 'Data in Business AI',
				topics: [
					'Types and sources of business data',
					'Data quality and preprocessing',
					'Ethical issues around business data usage'
				]
			},
			{
				module: 'Module 3',
				title: 'Business Applications of AI',
				topics: [
					'Customer analytics and personalisation',
					'Predictive analytics for sales forecasting',
					'AI in supply chain optimisation'
				]
			},
			{
				module: 'Module 4',
				title: 'AI Tools & Techniques',
				topics: [
					'Overview of popular AI frameworks and libraries',
					'Introduction to building simple models',
					'Understanding model evaluation and metrics'
				]
			},
			{
				module: 'Module 5',
				title: 'Hands-On Practice',
				topics: [
					'Guided project using real-world datasets',
					'Model training and evaluation',
					'Interpreting AI outputs in a business context'
				]
			},
			{
				module: 'Module 6',
				title: 'Future of AI in Business',
				topics: [
					'Emerging trends and research areas',
					'Regulatory challenges and policies',
					'The evolving role of business professionals with AI'
				]
			}
		]
	},
	{
		id: 'ai-for-educators',
		title: 'AI for Educators',
		description:
			'Tailored for teachers, academic coordinators, curriculum designers, university faculty, and school leaders looking to bring AI into classrooms and education systems.',
		image: 'academy/professional3',
		category: 'professional',
		status: 'Available on Request'
	},
	{
		id: 'creative-ai-tools',
		title: 'Creative AI Tools',
		description:
			'For UI/UX designers, product developers, startup founders, and content creators who want to prototype, visualise, and pitch ideas using AI.',
		image: 'academy/skills1',
		category: 'skills',
		status: 'Available on Request'
	},
	{
		id: 'analytical-ai-tools',
		title: 'Analytical AI Tools',
		description:
			'Master data-driven AI applications such as machine learning, automation, and decision-support systems to strengthen strategic and operational insights.',
		image: 'academy/skills2',
		category: 'skills',
		status: 'Available on Request'
	},
	{
		id: 'research-on-ai',
		title: 'Research on AI',
		description:
			'For academic researchers, policy analysts, think tank contributors, and postgraduate students working on AI, strategy, and future foresight.',
		image: 'academy/skills3',
		category: 'skills',
		status: 'Available on Request'
	},
	{
		id: 'launchpad-mentorship',
		title: 'Launchpad Mentorship',
		description:
			'For university innovators, early-stage founders, and problem-solving teams ready to turn bold ideas into real ventures, with global startup tools and mentorship.',
		image: 'academy/startup1',
		category: 'startup',
		status: 'Upcoming'
	},
	{
		id: 'wipo-curriculum',
		title: 'WIPO Curriculum',
		description:
			'For med-tech and health-tech teams aiming to build scalable solutions with strong IP protection, global standards, and commercialisation readiness.',
		image: 'academy/startup2',
		category: 'startup',
		status: 'Upcoming'
	},
	{
		id: 'hsil-venture-incubation',
		title: 'HSIL Venture Incubation',
		description:
			'For health system innovators, social impact founders, and AI solution designers working to reimagine healthcare through responsible, people-centred technology.',
		image: 'academy/startup3',
		category: 'startup',
		status: 'Upcoming'
	}
];

export const courseCategories = [
	{ key: 'professional', label: 'AI for Professionals' },
	{ key: 'skills', label: 'AI Technique Tutorials' },
	{ key: 'startup', label: 'Start-up Masterclass' }
] as const;

/**
 * Sector-specific corporate and institutional training. Case studies
 * reference documented deliveries in the events dataset.
 */
export const sectors: Sector[] = [
	{
		slug: 'capital-markets',
		name: 'Capital Markets',
		blurb:
			'AI for financial operations, risk, trade execution, and market research. Delivered for LankaBangla Securities and the Dhaka Stock Exchange’s Investigation & Enforcement Department.',
		caseStudies: ['lankabangla-capital-markets']
	},
	{
		slug: 'banking-fintech',
		name: 'Banking & FinTech',
		blurb:
			'Practical AI for digital finance, financial operations, and technology-enabled banking services. Delivered for Sonali Intellect Limited.',
		caseStudies: ['sonali-intellect-banking']
	},
	{
		slug: 'healthcare',
		name: 'Healthcare',
		blurb:
			'Hands-on AI for doctors, clinical staff, and physiologists, from hospital workflows to diagnostics. Delivered at OGSB Hospital & IRCH, with BSP, and internationally with PILL Pakistan.',
		caseStudies: ['ogsb-irch-healthcare', 'bsp-physiology', 'pill-pakistan-healthcare']
	},
	{
		slug: 'energy-infrastructure',
		name: 'Energy & Infrastructure',
		blurb:
			'AI tools for productivity and performance in the power and energy sector. Delivered for the Bangladesh Energy and Power Research Council.',
		caseStudies: ['beprc-productivity']
	},
	{
		slug: 'education',
		name: 'Education',
		blurb:
			'Programmes for university faculty, researchers, and academic teams, including the research engineers of AIMS Lab at UIU.',
		caseStudies: ['aims-lab-research-engineers']
	},
	{
		slug: 'government-development',
		name: 'Government & Development',
		blurb:
			'Capacity building for government departments and development organisations, including a crash course on AI for officials of UNICEF.',
		caseStudies: ['unicef-crash-course']
	}
];
