import Spacing from '@/components/myUI/spaing';
import Text from '@/components/myUI/text';
import ReactIcon from '@/assets/react.svg';
import { CircuitBoard, CodeXml, Sparkles } from 'lucide-react';

interface Expertise {
	area: number;
	icon: string | React.ReactNode;
	title: string;
	subtitle: string;
	description: string;
}

const expertises: Expertise[] = [
	{
		area: 1,
		icon: ReactIcon,
		title: 'Frontend',
		subtitle: 'React, React Native',
		description: 'User interface builder',
	},
	{
		area: 2,
		icon: <CodeXml />,
		title: 'Software',
		subtitle: 'Development',
		description: 'Always develop software with scalability and maintainability in mind.',
	},
	{
		area: 3,
		icon: <Sparkles />,
		title: 'Business',
		subtitle: 'Domain adaptability',
		description:
			'Experienced in multiple bussiness domain. Fashion, E-commerce, Education, AI, Physical security, etc.',
	},
	{
		area: 4,
		icon: <CircuitBoard />,
		title: 'For good UX',
		subtitle: 'Do not harm user',
		description: 'Always try to develop a good UX until the end. I think a beautiful UX always has the best value.',
	},
];

const Expertise = () => {
	return (
		<div className='w-full h-full flex flex-col items-center justify-center'>
			<Text
				size='display'
				weight='bold'
			>
				Expertise
			</Text>
			<Spacing size={16} />
			<div
				className='grid border'
				style={{
					gridTemplateAreas: `
            "card1 card1 card1"
            "card2 card3 card4"
        `,
				}}
			>
				{expertises.map((expertise) => (
					<div
						key={expertise.title}
						className='flex flex-col items-center gap-2 p-4 border'
						style={{
							gridArea: 'card' + expertise.area,
						}}
					>
						<div className='flex flex-row gap-4 items-center '>
							{typeof expertise.icon === 'string' ? (
								<img
									className='w-10 h-10'
									src={expertise.icon}
								/>
							) : (
								<p className='[&_svg]:w-10 [&_svg]:h-10 flex items-center justify-center'>
									{expertise.icon}
								</p>
							)}
							<div className='flex flex-col'>
								<Text size='subtitle'>{expertise.title}</Text>
								<Text
									size='label'
									className='bg-[var(--foreground)] text-[var(--background)] w-fit'
								>
									{expertise.subtitle}
								</Text>
							</div>
						</div>
						<Spacing size={8} />
						<Text
							size='body'
							weight='regular'
							className='break-word max-w-[270px] pl-4'
						>
							{expertise.description}
						</Text>
					</div>
				))}
			</div>
		</div>
	);
};

export default Expertise;
