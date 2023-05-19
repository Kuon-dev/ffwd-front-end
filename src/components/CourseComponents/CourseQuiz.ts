export interface Question {
	questionText: string;
	options: Option[];
	correctAnswer: string;
}

export interface Option {
	label: string;
	optionText: string;
}

export const html: Question[] = [
	{
		questionText: 'What does HTML stand for?',
		options: [
			{
				label: 'A',
				optionText: 'Hyper Text Markup Language',
			},
			{
				label: 'B',
				optionText: 'Home Tool Markup Language',
			},
			{
				label: 'C',
				optionText: 'Hyperlinks and Text Markup Language',
			},
			{
				label: 'D',
				optionText: 'Hyper Transfer Markup Language',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'What is the correct HTML element for the largest heading?',
		options: [
			{
				label: 'A',
				optionText: '<h1>',
			},
			{
				label: 'B',
				optionText: '<head>',
			},
			{
				label: 'C',
				optionText: '<h6>',
			},
			{
				label: 'D',
				optionText: '<heading>',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'Which tag is used to define an unordered list in HTML?',
		options: [
			{
				label: 'A',
				optionText: '<ol>',
			},
			{
				label: 'B',
				optionText: '<ul>',
			},
			{
				label: 'C',
				optionText: '<li>',
			},
			{
				label: 'D',
				optionText: '<list>',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'What is the correct HTML for creating a hyperlink?',
		options: [
			{
				label: 'A',
				optionText: '<a href="http://www.example.com">Example</a>',
			},
			{
				label: 'B',
				optionText: '<a>http://www.example.com</a>',
			},
			{
				label: 'C',
				optionText: '<a url="http://www.example.com">Example</a>',
			},
			{
				label: 'D',
				optionText: '<link href="http://www.example.com">',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'Which attribute is used to define inline styles in HTML?',
		options: [
			{
				label: 'A',
				optionText: 'style',
			},
			{
				label: 'B',
				optionText: 'class',
			},
			{
				label: 'C',
				optionText: 'id',
			},
			{
				label: 'D',
				optionText: 'font',
			},
		],
		correctAnswer: 'A',
	},
];

export const css: Question[] = [
	{
		questionText:
			'Which property is used to change the background color of an element?',
		options: [
			{
				label: 'A',
				optionText: 'color',
			},
			{
				label: 'B',
				optionText: 'background-color',
			},
			{
				label: 'C',
				optionText: 'background-image',
			},
			{
				label: 'D',
				optionText: 'background',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'How do you select an element with class "example" in CSS?',
		options: [
			{
				label: 'A',
				optionText: '.example',
			},
			{
				label: 'B',
				optionText: '#example',
			},
			{
				label: 'C',
				optionText: 'example',
			},
			{
				label: 'D',
				optionText: '*example',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText:
			'Which CSS property is used to control the spacing between lines of text?',
		options: [
			{
				label: 'A',
				optionText: 'text-indent',
			},
			{
				label: 'B',
				optionText: 'text-align',
			},
			{
				label: 'C',
				optionText: 'line-height',
			},
			{
				label: 'D',
				optionText: 'text-decoration',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What does CSS stand for?',
		options: [
			{
				label: 'A',
				optionText: 'Cascading Style Sheets',
			},
			{
				label: 'B',
				optionText: 'Creative Style Sheets',
			},
			{
				label: 'C',
				optionText: 'Colorful Style Sheets',
			},
			{
				label: 'D',
				optionText: 'Computer Style Sheets',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText:
			'Which CSS property is used to change the font size of an element?',
		options: [
			{
				label: 'A',
				optionText: 'text-style',
			},
			{
				label: 'B',
				optionText: 'font-size',
			},
			{
				label: 'C',
				optionText: 'text-transform',
			},
			{
				label: 'D',
				optionText: 'font-family',
			},
		],
		correctAnswer: 'B',
	},
];

export const javascript: Question[] = [
	{
		questionText:
			'What is the correct syntax to declare a JavaScript variable?',
		options: [
			{
				label: 'A',
				optionText: 'v carName;',
			},
			{
				label: 'B',
				optionText: 'variable carName;',
			},
			{
				label: 'C',
				optionText: 'var carName;',
			},
			{
				label: 'D',
				optionText: 'string carName;',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText:
			'Which operator is used to concatenate two strings in JavaScript?',
		options: [
			{
				label: 'A',
				optionText: '+',
			},
			{
				label: 'B',
				optionText: '*',
			},
			{
				label: 'C',
				optionText: '-',
			},
			{
				label: 'D',
				optionText: '&',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'What is the correct way to write a JavaScript array?',
		options: [
			{
				label: 'A',
				optionText: 'var colors = (1:"red", 2:"blue", 3:"green")',
			},
			{
				label: 'B',
				optionText: 'var colors = ["red", "blue", "green"]',
			},
			{
				label: 'C',
				optionText: 'var colors = "red", "blue", "green"',
			},
			{
				label: 'D',
				optionText: 'var colors = {red, blue, green}',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'How do you write "Hello World" in an alert box?',
		options: [
			{
				label: 'A',
				optionText: 'msg("Hello World")',
			},
			{
				label: 'B',
				optionText: 'alert("Hello World")',
			},
			{
				label: 'C',
				optionText: 'msgBox("Hello World")',
			},
			{
				label: 'D',
				optionText: 'alertBox("Hello World")',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText:
			'What is the correct JavaScript syntax to change the content of an HTML element with id "demo"?',
		options: [
			{
				label: 'A',
				optionText:
					'document.getElementByName("demo").innerHTML = "Hello World"',
			},
			{
				label: 'B',
				optionText: 'document.getElementById("demo").innerHTML = "Hello World"',
			},
			{
				label: 'C',
				optionText: 'document.getElement("demo").innerHTML = "Hello World"',
			},
			{
				label: 'D',
				optionText:
					'document.getElementByIdName("demo").innerHTML = "Hello World"',
			},
		],
		correctAnswer: 'B',
	},
];

export const php: Question[] = [
	{
		questionText: 'What does PHP stand for?',
		options: [
			{
				label: 'A',
				optionText: 'Personal Hypertext Processor',
			},
			{
				label: 'B',
				optionText: 'PHP: Hypertext Preprocessor',
			},
			{
				label: 'C',
				optionText: 'Programming Hypertext Processor',
			},
			{
				label: 'D',
				optionText: 'Pre Hypertext Processor',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'What is the correct way to start a PHP variable name?',
		options: [
			{
				label: 'A',
				optionText: '$',
			},
			{
				label: 'B',
				optionText: '@',
			},
			{
				label: 'C',
				optionText: '&',
			},
			{
				label: 'D',
				optionText: '%',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'Which function is used to check if a file exists in PHP?',
		options: [
			{
				label: 'A',
				optionText: 'file_get_contents()',
			},
			{
				label: 'B',
				optionText: 'file_exists()',
			},
			{
				label: 'C',
				optionText: 'file_put_contents()',
			},
			{
				label: 'D',
				optionText: 'file_open()',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'How do you concatenate two strings in PHP?',
		options: [
			{
				label: 'A',
				optionText: 'string_concat()',
			},
			{
				label: 'B',
				optionText: 'concatenate()',
			},
			{
				label: 'C',
				optionText: 'string_combine()',
			},
			{
				label: 'D',
				optionText: '. (dot) operator',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What is the correct way to create a function in PHP?',
		options: [
			{
				label: 'A',
				optionText: 'function myFunction() { }',
			},
			{
				label: 'B',
				optionText: 'def myFunction():',
			},
			{
				label: 'C',
				optionText: 'function = myFunction()',
			},
			{
				label: 'D',
				optionText: 'create function myFunction()',
			},
		],
		correctAnswer: 'A',
	},
];

export const ruby: Question[] = [
	{
		questionText:
			'Which of the following is not a valid variable name in Ruby?',
		options: [
			{
				label: 'A',
				optionText: 'my_var',
			},
			{
				label: 'B',
				optionText: 'myVar',
			},
			{
				label: 'C',
				optionText: 'MY_VAR',
			},
			{
				label: 'D',
				optionText: 'my-var',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```ruby\nx = 5\ny = 3\nputs x + y * 2\n```',
		options: [
			{
				label: 'A',
				optionText: '16',
			},
			{
				label: 'B',
				optionText: '11',
			},
			{
				label: 'C',
				optionText: '13',
			},
			{
				label: 'D',
				optionText: '8',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText:
			'Which of the following is a valid way to define a hash in Ruby?',
		options: [
			{
				label: 'A',
				optionText: '{ "key" => "value" }',
			},
			{
				label: 'B',
				optionText: '{ key: "value" }',
			},
			{
				label: 'C',
				optionText: '{ :key => "value" }',
			},
			{
				label: 'D',
				optionText: 'All of the above',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What does the `each` method do in Ruby?',
		options: [
			{
				label: 'A',
				optionText: 'Iterates over an array',
			},
			{
				label: 'B',
				optionText: 'Iterates over a hash',
			},
			{
				label: 'C',
				optionText: 'Iterates over a range',
			},
			{
				label: 'D',
				optionText: 'All of the above',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```ruby\nx = 10\nif x > 5\n  puts "x is greater than 5"\nelse\n  puts "x is less than or equal to 5"\nend\n```',
		options: [
			{
				label: 'A',
				optionText: 'x is greater than 5',
			},
			{
				label: 'B',
				optionText: 'x is less than or equal to 5',
			},
			{
				label: 'C',
				optionText: '10',
			},
			{
				label: 'D',
				optionText: '5',
			},
		],
		correctAnswer: 'A',
	},
];

export const python: Question[] = [
	{
		questionText:
			'Which of the following is not a valid variable name in Python?',
		options: [
			{
				label: 'A',
				optionText: 'my_var',
			},
			{
				label: 'B',
				optionText: 'myVar',
			},
			{
				label: 'C',
				optionText: 'MY_VAR',
			},
			{
				label: 'D',
				optionText: 'my-var',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```python\nx = 5\ny = 3\nprint(x + y * 2)\n```',
		options: [
			{
				label: 'A',
				optionText: '16',
			},
			{
				label: 'B',
				optionText: '11',
			},
			{
				label: 'C',
				optionText: '13',
			},
			{
				label: 'D',
				optionText: '8',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText:
			'Which of the following is a valid way to define a dictionary in Python?',
		options: [
			{
				label: 'A',
				optionText: '{ "key": "value" }',
			},
			{
				label: 'B',
				optionText: '{ key: "value" }',
			},
			{
				label: 'C',
				optionText: '{ "key" => "value" }',
			},
			{
				label: 'D',
				optionText: 'All of the above',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'What does the `for` loop do in Python?',
		options: [
			{
				label: 'A',
				optionText: 'Iterates over a list',
			},
			{
				label: 'B',
				optionText: 'Iterates over a dictionary',
			},
			{
				label: 'C',
				optionText: 'Iterates over a range',
			},
			{
				label: 'D',
				optionText: 'All of the above',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```python\nx = 10\nif x > 5:\n  print("x is greater than 5")\nelse:\n  print("x is less than or equal to 5")\n```',
		options: [
			{
				label: 'A',
				optionText: 'x is greater than 5',
			},
			{
				label: 'B',
				optionText: 'x is less than or equal to 5',
			},
			{
				label: 'C',
				optionText: '10',
			},
			{
				label: 'D',
				optionText: '5',
			},
		],
		correctAnswer: 'A',
	},
];

export const cpp: Question[] = [
	{
		questionText: 'What is the extension of C++ source files?',
		options: [
			{
				label: 'A',
				optionText: '.cc',
			},
			{
				label: 'B',
				optionText: '.cpp',
			},
			{
				label: 'C',
				optionText: '.cxx',
			},
			{
				label: 'D',
				optionText: '.c++',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'Which of the following is not a valid data type in C++?',
		options: [
			{
				label: 'A',
				optionText: 'int',
			},
			{
				label: 'B',
				optionText: 'bool',
			},
			{
				label: 'C',
				optionText: 'real',
			},
			{
				label: 'D',
				optionText: 'char',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is the correct way to declare a variable in C++?',
		options: [
			{
				label: 'A',
				optionText: 'variable x',
			},
			{
				label: 'B',
				optionText: 'var x',
			},
			{
				label: 'C',
				optionText: 'x = variable',
			},
			{
				label: 'D',
				optionText: 'int x',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What does the `cin` object in C++ do?',
		options: [
			{
				label: 'A',
				optionText: 'Prints output to the console',
			},
			{
				label: 'B',
				optionText: 'Reads input from the console',
			},
			{
				label: 'C',
				optionText: 'Opens a file for reading',
			},
			{
				label: 'D',
				optionText: 'None of the above',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```cpp\nint x = 5;\nint y = 3;\nstd::cout << x + y * 2;\n```',
		options: [
			{
				label: 'A',
				optionText: '16',
			},
			{
				label: 'B',
				optionText: '11',
			},
			{
				label: 'C',
				optionText: '13',
			},
			{
				label: 'D',
				optionText: '8',
			},
		],
		correctAnswer: 'B',
	},
];

export const java: Question[] = [
	{
		questionText:
			'Which of the following is not a valid variable name in Java?',
		options: [
			{
				label: 'A',
				optionText: 'myVar',
			},
			{
				label: 'B',
				optionText: 'my-var',
			},
			{
				label: 'C',
				optionText: 'MY_VAR',
			},
			{
				label: 'D',
				optionText: 'MyVar',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```java\nint x = 5;\nint y = 3;\nSystem.out.println(x + y * 2);\n```',
		options: [
			{
				label: 'A',
				optionText: '16',
			},
			{
				label: 'B',
				optionText: '11',
			},
			{
				label: 'C',
				optionText: '13',
			},
			{
				label: 'D',
				optionText: '8',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText:
			'Which of the following is a valid way to declare an array in Java?',
		options: [
			{
				label: 'A',
				optionText: 'int[] numbers = new int[5];',
			},
			{
				label: 'B',
				optionText: 'int numbers[] = new int[5];',
			},
			{
				label: 'C',
				optionText: 'int[5] numbers = new int[];',
			},
			{
				label: 'D',
				optionText: 'All of the above',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'What does the `for` loop do in Java?',
		options: [
			{
				label: 'A',
				optionText: 'Iterates over an array',
			},
			{
				label: 'B',
				optionText: 'Iterates over a list',
			},
			{
				label: 'C',
				optionText: 'Iterates over a range',
			},
			{
				label: 'D',
				optionText: 'All of the above',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText:
			'What is the output of the following code?\n\n```java\nint x = 10;\nif (x > 5) {\n  System.out.println("x is greater than 5");\n} else {\n  System.out.println("x is less than or equal to 5");\n}\n```',
		options: [
			{
				label: 'A',
				optionText: 'x is greater than 5',
			},
			{
				label: 'B',
				optionText: 'x is less than or equal to 5',
			},
			{
				label: 'C',
				optionText: '10',
			},
			{
				label: 'D',
				optionText: '5',
			},
		],
		correctAnswer: 'A',
	},
];

export const react: Question[] = [
	{
		questionText: 'What is React?',
		options: [
			{
				label: 'A',
				optionText: 'A JavaScript framework for building user interfaces',
			},
			{
				label: 'B',
				optionText: 'A programming language',
			},
			{
				label: 'C',
				optionText: 'A server-side scripting language',
			},
			{
				label: 'D',
				optionText: 'A database management system',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'Which of the following is not a core concept of React?',
		options: [
			{
				label: 'A',
				optionText: 'Components',
			},
			{
				label: 'B',
				optionText: 'Virtual DOM',
			},
			{
				label: 'C',
				optionText: 'State',
			},
			{
				label: 'D',
				optionText: 'Database',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What is JSX?',
		options: [
			{
				label: 'A',
				optionText: 'A data storage format',
			},
			{
				label: 'B',
				optionText: 'A templating engine',
			},
			{
				label: 'C',
				optionText: 'A syntax extension for JavaScript',
			},
			{
				label: 'D',
				optionText: 'A CSS styling language',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is the purpose of React Router?',
		options: [
			{
				label: 'A',
				optionText: 'Managing state in React components',
			},
			{
				label: 'B',
				optionText: 'Handling HTTP requests in React',
			},
			{
				label: 'C',
				optionText: 'Creating reusable React components',
			},
			{
				label: 'D',
				optionText: 'Enabling navigation in a React application',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText:
			'What is the lifecycle method used for initializing state in a React component?',
		options: [
			{
				label: 'A',
				optionText: 'componentDidMount()',
			},
			{
				label: 'B',
				optionText: 'componentWillUnmount()',
			},
			{
				label: 'C',
				optionText: 'constructor()',
			},
			{
				label: 'D',
				optionText: 'render()',
			},
		],
		correctAnswer: 'C',
	},
];

export const vue: Question[] = [
	{
		questionText: 'What is Vue.js?',
		options: [
			{
				label: 'A',
				optionText: 'A JavaScript framework for building user interfaces',
			},
			{
				label: 'B',
				optionText: 'A programming language',
			},
			{
				label: 'C',
				optionText: 'A server-side scripting language',
			},
			{
				label: 'D',
				optionText: 'A database management system',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'Which of the following is not a core concept of Vue.js?',
		options: [
			{
				label: 'A',
				optionText: 'Components',
			},
			{
				label: 'B',
				optionText: 'Reactivity',
			},
			{
				label: 'C',
				optionText: 'Templates',
			},
			{
				label: 'D',
				optionText: 'Database',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What is the Vue CLI?',
		options: [
			{
				label: 'A',
				optionText: 'A command-line tool for managing Vue projects',
			},
			{
				label: 'B',
				optionText: 'A package manager for Vue.js',
			},
			{
				label: 'C',
				optionText: 'A code editor for Vue development',
			},
			{
				label: 'D',
				optionText: 'A testing framework for Vue components',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'What is the purpose of Vuex in Vue.js?',
		options: [
			{
				label: 'A',
				optionText: 'Managing state in Vue components',
			},
			{
				label: 'B',
				optionText: 'Handling HTTP requests in Vue',
			},
			{
				label: 'C',
				optionText: 'Creating reusable Vue components',
			},
			{
				label: 'D',
				optionText: 'Enabling navigation in a Vue application',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText:
			'What is the lifecycle method used for cleaning up resources in a Vue component?',
		options: [
			{
				label: 'A',
				optionText: 'created()',
			},
			{
				label: 'B',
				optionText: 'destroyed()',
			},
			{
				label: 'C',
				optionText: 'mounted()',
			},
			{
				label: 'D',
				optionText: 'updated()',
			},
		],
		correctAnswer: 'B',
	},
];

export const laravel: Question[] = [
	{
		questionText: 'What is Laravel?',
		options: [
			{
				label: 'A',
				optionText: 'A PHP framework for web development',
			},
			{
				label: 'B',
				optionText: 'A JavaScript library for front-end development',
			},
			{
				label: 'C',
				optionText: 'A database management system',
			},
			{
				label: 'D',
				optionText: 'A programming language',
			},
		],
		correctAnswer: 'A',
	},
	{
		questionText: 'Which of the following is not a feature of Laravel?',
		options: [
			{
				label: 'A',
				optionText: 'Database migrations',
			},
			{
				label: 'B',
				optionText: 'Routing',
			},
			{
				label: 'C',
				optionText: 'Server-side rendering',
			},
			{
				label: 'D',
				optionText: 'Authentication and authorization',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is Eloquent in Laravel?',
		options: [
			{
				label: 'A',
				optionText: 'A templating engine',
			},
			{
				label: 'B',
				optionText: 'A package manager',
			},
			{
				label: 'C',
				optionText: 'An ORM (Object-Relational Mapping) library',
			},
			{
				label: 'D',
				optionText: 'A testing framework',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is the purpose of artisan in Laravel?',
		options: [
			{
				label: 'A',
				optionText: 'Database management',
			},
			{
				label: 'B',
				optionText: 'Authentication and authorization',
			},
			{
				label: 'C',
				optionText: 'Code generation and command-line interface',
			},
			{
				label: 'D',
				optionText: 'Routing',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is the recommended way to install Laravel?',
		options: [
			{
				label: 'A',
				optionText: 'Using npm',
			},
			{
				label: 'B',
				optionText: 'Using Composer',
			},
			{
				label: 'C',
				optionText: 'Using RubyGems',
			},
			{
				label: 'D',
				optionText: 'Using pip',
			},
		],
		correctAnswer: 'B',
	},
];

export const rails: Question[] = [
	{
		questionText: 'What is Ruby on Rails?',
		options: [
			{
				label: 'A',
				optionText: 'A JavaScript library for front-end development',
			},
			{
				label: 'B',
				optionText: 'A programming language',
			},
			{
				label: 'C',
				optionText: 'A database management system',
			},
			{
				label: 'D',
				optionText: 'A web development framework using Ruby',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What is the file extension for a Ruby on Rails view file?',
		options: [
			{
				label: 'A',
				optionText: '.html',
			},
			{
				label: 'B',
				optionText: '.rb',
			},
			{
				label: 'C',
				optionText: '.erb',
			},
			{
				label: 'D',
				optionText: '.js',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'Which of the following is not a feature of Ruby on Rails?',
		options: [
			{
				label: 'A',
				optionText: 'Routing',
			},
			{
				label: 'B',
				optionText: 'Database migrations',
			},
			{
				label: 'C',
				optionText: 'Authentication and authorization',
			},
			{
				label: 'D',
				optionText: 'Server-side rendering',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What is ActiveRecord in Ruby on Rails?',
		options: [
			{
				label: 'A',
				optionText: 'A testing framework',
			},
			{
				label: 'B',
				optionText: 'An ORM (Object-Relational Mapping) library',
			},
			{
				label: 'C',
				optionText: 'A templating engine',
			},
			{
				label: 'D',
				optionText: 'A package manager',
			},
		],
		correctAnswer: 'B',
	},
	{
		questionText: 'What is the command to start a Rails server?',
		options: [
			{
				label: 'A',
				optionText: 'rails serve',
			},
			{
				label: 'B',
				optionText: 'rails start',
			},
			{
				label: 'C',
				optionText: 'rails run',
			},
			{
				label: 'D',
				optionText: 'rails server',
			},
		],
		correctAnswer: 'D',
	},
];

export const ionic: Question[] = [
	{
		questionText: 'What is Ionic?',
		options: [
			{
				label: 'A',
				optionText: 'A programming language',
			},
			{
				label: 'B',
				optionText: 'A JavaScript library for front-end development',
			},
			{
				label: 'C',
				optionText: 'A database management system',
			},
			{
				label: 'D',
				optionText: 'A hybrid mobile app development framework',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'Which programming languages are commonly used with Ionic?',
		options: [
			{
				label: 'A',
				optionText: 'JavaScript and PHP',
			},
			{
				label: 'B',
				optionText: 'Python and Ruby',
			},
			{
				label: 'C',
				optionText: 'HTML, CSS, and JavaScript',
			},
			{
				label: 'D',
				optionText: 'Java and C#',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is Capacitor in Ionic?',
		options: [
			{
				label: 'A',
				optionText: 'A testing framework',
			},
			{
				label: 'B',
				optionText: 'A package manager',
			},
			{
				label: 'C',
				optionText: 'A build tool',
			},
			{
				label: 'D',
				optionText: 'A native runtime for web apps',
			},
		],
		correctAnswer: 'D',
	},
	{
		questionText: 'What is the purpose of Ionic CLI?',
		options: [
			{
				label: 'A',
				optionText: 'Managing dependencies',
			},
			{
				label: 'B',
				optionText: 'Building and deploying Ionic apps',
			},
			{
				label: 'C',
				optionText: 'Creating and managing Ionic projects',
			},
			{
				label: 'D',
				optionText: 'Testing Ionic components',
			},
		],
		correctAnswer: 'C',
	},
	{
		questionText: 'What is the command to create a new Ionic project?',
		options: [
			{
				label: 'A',
				optionText: 'ionic new',
			},
			{
				label: 'B',
				optionText: 'ionic create',
			},
			{
				label: 'C',
				optionText: 'ionic start',
			},
			{
				label: 'D',
				optionText: 'ionic generate',
			},
		],
		correctAnswer: 'C',
	},
];
