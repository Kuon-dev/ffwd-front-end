interface Question {
	questionText: string;
	options: Option[];
}

interface Option {
	label: string;
	optionText: string;
	isCorrect: boolean;
}

export const vue: Question[] = [
	{
		questionText: '8 ÷ 2(2 + 2)',
		options: [
			{
				label: 'A',
				optionText: '16',
				isCorrect: true,
			},
			{
				label: 'B',
				optionText: '1',
				isCorrect: false,
			},
			{
				label: 'C',
				optionText: '8',
				isCorrect: false,
			},
			{
				label: 'D',
				optionText: '24',
				isCorrect: false,
			},
		],
	},
	{
		questionText: 'sqrt(64) * 9',
		options: [
			{
				label: 'A',
				optionText: '4',
				isCorrect: false,
			},
			{
				label: 'B',
				optionText: '81',
				isCorrect: false,
			},
			{
				label: 'C',
				optionText: '72',
				isCorrect: true,
			},
			{
				label: 'D',
				optionText: '144',
				isCorrect: false,
			},
		],
	},
	{
		questionText: '3 + 3 x 3 ÷ 3 - 3',
		options: [
			{
				label: 'A',
				optionText: '3',
				isCorrect: true,
			},
			{
				label: 'B',
				optionText: '1',
				isCorrect: false,
			},
			{
				label: 'C',
				optionText: '8',
				isCorrect: false,
			},
			{
				label: 'D',
				optionText: '24',
				isCorrect: false,
			},
		],
	},
];
