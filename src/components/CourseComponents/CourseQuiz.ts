export interface Question {
	questionText: string;
	options: Option[];
	correctAnswer: string;
}

export interface Option {
	label: string;
	optionText: string;
}

export const vue: Question[] = [
	{
		questionText: '8 ÷ 2(2 + 2)',
		options: [
			{
				label: 'A',
				optionText: '16',
			},
			{
				label: 'B',
				optionText: '1',
			},
			{
				label: 'C',
				optionText: '8',
			},
			{
				label: 'D',
				optionText: '24',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'sqrt(64) * 9',
		options: [
			{
				label: 'A',
				optionText: '4',
			},
			{
				label: 'B',
				optionText: '81',
			},
			{
				label: 'C',
				optionText: '72',
			},
			{
				label: 'D',
				optionText: '144',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: '3 + 3 x 3 ÷ 3 - 3',
		options: [
			{
				label: 'A',
				optionText: '3',
			},
			{
				label: 'B',
				optionText: '1',
			},
			{
				label: 'C',
				optionText: '8',
			},
			{
				label: 'D',
				optionText: '24',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: '1 + 4',
		options: [
			{
				label: 'A',
				optionText: '3',
			},
			{
				label: 'B',
				optionText: '1',
			},
			{
				label: 'C',
				optionText: '8',
			},
			{
				label: 'D',
				optionText: '5',
			},
		],
		correctAnswer: 'D',
	},
];
