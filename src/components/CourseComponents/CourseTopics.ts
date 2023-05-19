interface Languages {
	topic: string;
	img: string;
	path: string;
	desc: string;
}

interface Frameworks {
	topic: string;
	img: string;
	path: string;
	desc: string;
}
interface Topics {
	languages: Languages[];
	frameworks: Frameworks[];
}

const languagesTopic: Languages[] = [
	{
		topic: 'HTML',
		img: 'https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e',
		path: '/course/html',
		desc: 'HTML (Hypertext Markup Language) is a markup language used to create and structure content for web pages and applications.',
	},
	{
		topic: 'CSS',
		img: 'https://f9s9t9d6.rocketcdn.me/wp-content/uploads/2020/04/Artboard-11-1024x724.png',
		path: '/course/css',
		desc: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of HTML or XML documents, including colors, layouts, and fonts.',
	},
	{
		topic: 'JavaScript',
		img: 'https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg',
		path: '/course/javascript',
		desc: 'JavaScript is a programming language used primarily for front-end web development to add interactivity, validate input, and manipulate the DOM.',
	},
	{
		topic: 'PHP',
		img: 'https://networkrhinos.com/wp-content/uploads/2021/12/88-884234_top-notch-programming-hd-desktop-wallpapers-php-course.jpg',
		path: '/course/php',
		desc: 'PHP (Hypertext Preprocessor) is a server-side scripting language primarily used for web development to create dynamic web pages and perform various server-side tasks.',
	},
	{
		topic: 'Ruby',
		img: 'https://www.resourcifi.com/blog/wp-content/uploads/2019/05/10-Ruby-Frameworks-that-are-must-for-Developers_revised-min.jpg',
		path: '/course/ruby',
		desc: 'Ruby is a high-level, dynamic programming language that emphasizes simplicity and productivity. It is often used for web development and scripting.',
	},
	{
		topic: 'Python',
		img: 'https://i.pinimg.com/originals/c2/6a/58/c26a58af112f4cad08629893409f32c5.jpg',
		path: '/course/python',
		desc: 'Python is a high-level, interpreted programming language used for web development, scientific computing, data analysis, artificial intelligence, and many other applications.',
	},
	{
		topic: 'C++',
		img: 'https://wallpapercave.com/wp/wp4009915.jpg',
		path: '/course/cpp',
		desc: 'C++ is a high-performance, compiled programming language often used for system programming, game development, and other applications requiring low-level memory manipulation.',
	},
	{
		topic: 'Java',
		img: 'https://www.jrebel.com/sites/default/files/image/2021-03/2021%20java%20technology%20report.jpeg',
		path: '/course/java',
		desc: 'Java is a class-based, object-oriented programming language often used for developing large-scale enterprise applications, Android mobile apps, and web-based applications.',
	},
];

const frameworksTopic: Frameworks[] = [
	{
		topic: 'React',
		img: 'https://e1.pxfuel.com/desktop-wallpaper/948/473/desktop-wallpaper-react-js-reactjs.jpg',
		path: '/course/react',
		desc: ' React is a JavaScript library for building user interfaces, often used for building single-page applications or mobile applications.',
	},
	{
		topic: 'Vue',
		img: 'https://rare-gallery.com/mocahbig/87828-vue-js-programming-code-computer-logo-hd-4k.jpg',
		path: '/course/vue',
		desc: 'Vue is a progressive JavaScript framework for building user interfaces, often used for building web applications.',
	},
	{
		topic: 'Laravel',
		img: 'https://rivo.agency/wp-content/uploads/2022/05/Image7.png',
		path: '/course/laravel',
		desc: 'Laravel is a PHP web application framework used for building robust, scalable web applications with features such as routing, authentication, and database management.',
	},
	{
		topic: 'Ruby on Rails',
		img: 'https://www.goodworklabs.com/wp-content/uploads/2017/07/Ruby-on-Rails.png',
		path: '/course/rails',
		desc: 'Ruby on Rails, often called just Rails, is a web application framework written in the Ruby programming language. It provides a robust set of tools for building web applications, including database management, routing, and authentication.',
	},
	{
		topic: 'Ionic',
		img: 'https://ionicframework.com/img/meta/ionic-framework-og.png',
		path: '/course/ionic',
		desc: 'Ionic is a framework for building mobile applications using web technologies such as HTML, CSS, and JavaScript. It allows developers to build hybrid mobile apps that can run on multiple platforms such as iOS and Android.',
	},
];

export const topics: Topics = {
	languages: languagesTopic,
	frameworks: frameworksTopic,
};

/* --------------------------
 * This section will consist of the topics
 * it must be on 'export default ${variable name}'
 *
 * Below consist of the interfaces for writing the
 * contents of each topic
 *
 */

interface CourseList {
	topic: string;
	path: string;
}

interface Course {
	title: string;
	lists: CourseList[];
}

// Below will consist the contents of the topics

export const html: Course[] = [
	{
		title: 'HTML',
		lists: [
			{ topic: 'HTML Tutorial', path: 'html/what-is-html' },
			{ topic: 'HTML Basic', path: 'html/html-basic' },
			{ topic: 'HTML Elements', path: 'html/html-elements' },
			{ topic: 'HTML Attributes', path: 'html/html-attribute' },
			{ topic: 'HTML Headings', path: 'html/html-heading' },
			{ topic: 'HTML Paragraphs', path: 'html/html-paragraph' },
			{ topic: 'HTML Styles', path: 'html/html-style' },
			{ topic: 'HTML Formatting', path: 'html/html-formatting' },
			{ topic: 'HTML Quotations', path: 'html/html-quotation' },
			{ topic: 'HTML Comments', path: 'html/html-comment' },
			{ topic: 'HTML Colours', path: 'html/html-colour' },
			{ topic: 'HTML Links', path: 'html/html-link' },
			{ topic: 'HTML Images', path: 'html/html-image' },
			{ topic: 'HTML Page Title', path: 'html/html-page-title' },
			{ topic: 'HTML Tables', path: 'html/html-table' },
			{ topic: 'HTML Lists', path: 'html/html-list' },
			{ topic: 'HTML Classes', path: 'html/html-class' },
			{ topic: 'HTML Id', path: 'html/html-id' },
			{ topic: 'HTML Head', path: 'html/html-head' },
			{ topic: 'HTML Layout', path: 'html/html-layout' },
			{ topic: 'HTML Responsive', path: 'html/html-responsive' },
		],
	},
	{
		title: 'HTML Graphics',
		lists: [
			{ topic: 'HTML Canvas', path: 'html/html-canva' },
			{ topic: 'HTML SVG', path: 'html/html-svg' },
		],
	},
	{
		title: 'HTML Media',
		lists: [
			{ topic: 'HTML Media', path: 'html/html-media' },
			{ topic: 'HTML Video', path: 'html/html-video' },
		],
	},
	{
		title: 'HTML Audio',
		lists: [
			{ topic: 'HTML Plugins', path: 'html/html-plugin' },
			{ topic: 'HTML YouTube', path: 'html/html-youtube' },
		],
	},
	{
		title: 'HTML APIs',
		lists: [
			{ topic: 'HTML Geolocation', path: 'html/html-geolocation' },
			{ topic: 'HTML Drag/Drop', path: 'html/html-drag-drop' },
			{ topic: 'HTML Web Storage', path: 'html/html-web-storage' },
		],
	},
];

export const css = [
	{
		title: 'CSS Tutorial',
		lists: [
			{ topic: 'What is CSS?', path: 'css/what-is-css' },
			{ topic: 'CSS Syntax', path: 'css/css-syntax' },
			{ topic: 'CSS Selectors', path: 'css/css-selector' },
			{ topic: 'CSS Comments', path: 'css/css-comment' },
			{ topic: 'CSS Colors', path: 'css/css-colour' },
			{ topic: 'CSS Backgrounds', path: 'css/css-background' },
			{ topic: 'CSS Borders', path: 'css/css-border' },
			{ topic: 'CSS Margins', path: 'css/css-margin' },
			{ topic: 'CSS Padding', path: 'css/css-padding' },
			{ topic: 'CSS Height/Width', path: 'css/css-height-width' },
			{ topic: 'CSS Box Model', path: 'css/css-box-model' },
			{ topic: 'CSS Outline', path: 'css/css-outline' },
			{ topic: 'CSS Text', path: 'css/css-text' },
			{ topic: 'CSS Fonts', path: 'css/css-font' },
			{ topic: 'CSS Icons', path: 'css/css-icon' },
			{ topic: 'CSS Links', path: 'css/css-link' },
			{ topic: 'CSS Lists', path: 'css/css-list' },
			{ topic: 'CSS Tables', path: 'css/css-table' },
			{ topic: 'CSS Display', path: 'css/css-display' },
			{ topic: 'CSS Position', path: 'css/css-position' },
			{ topic: 'CSS Overflow', path: 'css/css-overflow' },
			{ topic: 'CSS Float', path: 'css/css-float' },
			{ topic: 'CSS Align', path: 'css/css-align' },
			{ topic: 'CSS Combinators', path: 'css/css-combinator' },
			{ topic: 'CSS Opacity', path: 'css/css-opacity' },
			{ topic: 'CSS Navigation Bar', path: 'css/css-navigation-bar' },
			{ topic: 'CSS Dropdowns', path: 'css/css-dropdown' },
			{ topic: 'CSS Image Gallery', path: 'css/css-image-gallery' },
			{ topic: 'CSS Forms', path: 'css/css-form' },
			{ topic: 'CSS Counters', path: 'css/css-counter' },
			{ topic: 'CSS Website Layout', path: 'css/css-website-layout' },
			{ topic: 'CSS Units', path: 'css/css-unit' },
			{ topic: 'CSS Specificity', path: 'css/css-specificity' },
		],
	},
	{
		title: 'CSS Advanced',
		lists: [
			{ topic: 'CSS Shadows', path: 'css/css-shadow' },
			{ topic: 'CSS Text Effects', path: 'css/css-text-effect' },
			{ topic: 'CSS 2D Transforms', path: 'css/css-2d-transform' },
			{ topic: 'CSS 3D Transforms', path: 'css/css-3d-transform' },
			{ topic: 'CSS Transitions', path: 'css/css-transition' },
			{ topic: 'CSS Animations', path: 'css/css-animation' },
			{ topic: 'CSS Tooltips', path: 'css/css-tooltip' },
			{ topic: 'CSS Image Reflection', path: 'css/css-image-reflection' },
			{ topic: 'CSS Buttons', path: 'css/css-button' },
			{ topic: 'CSS Variables', path: 'css/css-variable' },
			{ topic: 'CSS Box Sizing', path: 'css/css-box-sizing' },
			{ topic: 'CSS Flexbox', path: 'css/css-flexbox' },
		],
	},
];

export const javascript: Course[] = [
	{
		title: 'Javascript Tutorial',
		lists: [
			{ topic: 'What is Javascript?', path: 'javascript/what-is-javascript' },
			{ topic: 'Javascript Output', path: 'javascript/javascript-output' },
			{
				topic: 'Javascript Statements',
				path: 'javascript/javascript-statement',
			},
			{ topic: 'Javascript Syntax', path: 'javascript/javascript-syntax' },
			{ topic: 'Javascript Comments', path: 'javascript/javascript-comment' },
			{
				topic: 'Javascript Variables',
				path: 'javascript/javascript-variable',
			},
			{
				topic: 'Javascript Data Types',
				path: 'javascript/javascript-data-type',
			},
			{
				topic: 'Javascript Functions',
				path: 'javascript/javascript-function',
			},
			{ topic: 'Javascript Objects', path: 'javascript/javascript-object' },
			{ topic: 'Javascript Events', path: 'javascript/javascript-event' },
			{ topic: 'Javascript Strings', path: 'javascript/javascript-string' },
			{ topic: 'Javascript Numbers', path: 'javascript/javascript-number' },
			{ topic: 'Javascript Arrays', path: 'javascript/javascript-array' },
			{ topic: 'Javascript Dates', path: 'javascript/javascript-date' },
			{ topic: 'Javascript Math', path: 'javascript/javascript-math' },
			{ topic: 'Javascript Random', path: 'javascript/javascript-random' },
			{ topic: 'Javascript Booleans', path: 'javascript/javascript-boolean' },
			{
				topic: 'Javascript Comparisons',
				path: 'javascript/javascript-comparison',
			},
			{ topic: 'Javascript If Else', path: 'javascript/javascript-if-else' },
			{ topic: 'Javascript Switch', path: 'javascript/javascript-switch' },
			{ topic: 'Javascript Loop For', path: 'javascript/javascript-loop-for' },
			{
				topic: 'Javascript Loop While',
				path: 'javascript/javascript-loop-while',
			},
			{ topic: 'Javascript Break', path: 'javascript/javascript-break' },
			{
				topic: 'Javascript Precedence',
				path: 'javascript/javascript-precedence',
			},
			{ topic: 'Javascript Errors', path: 'javascript/javascript-error' },
			{ topic: 'Javascript Scope', path: 'javascript/javascript-scope' },
			{ topic: 'Javascript Hoisting', path: 'javascript/javascript-hoisting' },
			{
				topic: 'Javascript Strict Mode',
				path: 'javascript/javascript-strict-mode',
			},
			{
				topic: 'Javascript this Keyword',
				path: 'javascript/javascript-this-keyword',
			},
			{
				topic: 'Javascript Arrow Function',
				path: 'javascript/javascript-arrow-function',
			},
			{
				topic: 'Javascript Style Guide',
				path: 'javascript/javascript-style-guide',
			},
		],
	},
];

export const php: Course[] = [
	{
		title: 'PHP Tutorial',
		lists: [
			{ topic: 'What is PHP?', path: 'php/what-is-php' },
			{ topic: 'PHP Syntax', path: 'php/php-syntax' },
			{ topic: 'PHP Comments', path: 'php/php-comment' },
			{ topic: 'PHP Variables', path: 'php/php-variable' },
			{ topic: 'PHP Data Types', path: 'php/php-data-type' },
			{ topic: 'PHP Strings', path: 'php/php-string' },
			{ topic: 'PHP Numbers', path: 'php/php-number' },
			{ topic: 'PHP Math', path: 'php/php-math' },
			{ topic: 'PHP Constants', path: 'php/php-constant' },
			{ topic: 'PHP Operators', path: 'php/php-operator' },
			{ topic: 'PHP Switch', path: 'php/php-switch' },
			{ topic: 'PHP Loops', path: 'php/php-loop' },
			{ topic: 'PHP Functions', path: 'php/php-function' },
			{ topic: 'PHP Arrays', path: 'php/php-array' },
		],
	},
	{
		title: 'PHP Advanced',
		lists: [
			{ topic: 'PHP Date and Time', path: 'php/php-date-time' },
			{ topic: 'PHP Include', path: 'php/php-include' },
			{ topic: 'PHP File Handling', path: 'php/php-file-handling' },
			{ topic: 'PHP File Open/Read', path: 'php/php-file-open-read' },
			{
				topic: 'PHP File Create/Write',
				path: 'php/php-file-create-write',
			},
			{ topic: 'PHP File Upload', path: 'php/php-file-upload' },
			{ topic: 'PHP Cookies', path: 'php/php-cookie' },
			{ topic: 'PHP Sessions', path: 'php/php-session' },
			{ topic: 'PHP Filters', path: 'php/php-filter' },
			{ topic: 'PHP Exceptions', path: 'php/php-exception' },
		],
	},
	{
		title: 'PHP OOP',
		lists: [
			{ topic: 'PHP Constructor', path: 'php/php-constructor' },
			{ topic: 'PHP Destructor', path: 'php/php-destructor' },
			{ topic: 'PHP Access Modifiers', path: 'php/php-access-modifier' },
			{ topic: 'PHP Inheritance', path: 'php/php-inheritance' },
			{ topic: 'PHP Constants', path: 'php/php-constant' },
			{ topic: 'PHP Interfaces', path: 'php/php-interface' },
			{ topic: 'PHP Traits', path: 'php/php-trait' },
		],
	},
];

export const ruby: Course[] = [
	{
		title: 'Ruby Tutorial',
		lists: [
			{ topic: 'What is Ruby?', path: 'ruby/what-is-ruby' },
			{ topic: 'Ruby Syntax', path: 'ruby/ruby-syntax' },
			{ topic: 'Ruby Variables', path: 'ruby/ruby-variable' },
			{ topic: 'Ruby Operators', path: 'ruby/ruby-operator' },
			{ topic: 'Ruby Comments', path: 'ruby/ruby-comment' },
			{ topic: 'Ruby IF...ELSE', path: 'ruby/ruby-if-else' },
			{ topic: 'Ruby Loops', path: 'ruby/ruby-loop' },
			{ topic: 'Ruby Methods', path: 'ruby/ruby-method' },
			{ topic: 'Ruby Blocks', path: 'ruby/ruby-block' },
			{ topic: 'Ruby Modules', path: 'ruby/ruby-module' },
			{ topic: 'Ruby Strings', path: 'ruby/ruby-string' },
			{ topic: 'Ruby Arrays', path: 'ruby/ruby-array' },
			{ topic: 'Ruby Hashes', path: 'ruby/ruby-hashe' },
			{ topic: 'Ruby Date & Time', path: 'ruby/ruby-date-time' },
			{ topic: 'Ruby Ranges', path: 'ruby/ruby-range' },
			{ topic: 'Ruby Iterators', path: 'ruby/ruby-iterator' },
			{ topic: 'Ruby File I/O', path: 'ruby/ruby-file' },
			{ topic: 'Ruby Exceptions', path: 'ruby/ruby-exception' },
		],
	},
	{
		title: 'Ruby Advanced',
		lists: [
			{ topic: 'Ruby Object Oriented', path: 'ruby/ruby-object-oriented' },
			{ topic: 'Ruby Database Access', path: 'ruby/ruby-database-access' },
			{ topic: 'Ruby Sending Email', path: 'ruby/ruby-sending-email' },
			{ topic: 'Ruby Multithreading', path: 'ruby/ruby-multithreading' },
			{
				topic: 'Ruby Built-in Functions',
				path: 'ruby/ruby-built-in-function',
			},
			{ topic: 'Ruby Associated Tools', path: 'ruby/ruby-associated-tool' },
		],
	},
];

export const python: Course[] = [
	{
		title: 'Python Tutorial',
		lists: [
			{ topic: 'What is Python?', path: 'python/what-is-python' },
			{ topic: 'Python Syntax', path: 'python/python-syntax' },
			{ topic: 'Python Comments', path: 'python/python-comment' },
			{ topic: 'Python Variables', path: 'python/python-variable' },
			{ topic: 'Python Data Types', path: 'python/python-data-type' },
			{ topic: 'Python Operators', path: 'python/python-operator' },
			{
				topic: 'Python Decision Making',
				path: 'python/python-decision-making',
			},
			{ topic: 'Python Loops', path: 'python/python-loop' },
			{ topic: 'Python Numbers', path: 'python/python-number' },
			{ topic: 'Python Strings', path: 'python/python-string' },
			{ topic: 'Python Lists', path: 'python/python-list' },
			{ topic: 'Python Tuples', path: 'python/python-tuple' },
			{ topic: 'Python Dictionary', path: 'python/python-dictionary' },
			{ topic: 'Python Date & Time', path: 'python/python-date-time' },
			{ topic: 'Python Functions', path: 'python/python-function' },
			{ topic: 'Python Modules', path: 'python/python-module' },
			{ topic: 'Python Files I/O', path: 'python/python-file' },
			{ topic: 'Python Exceptions', path: 'python/python-exception' },
		],
	},
	{
		title: 'Python Advanced',
		lists: [
			{ topic: 'Python Reg Expressions', path: 'python/python-reg-expression' },
			{
				topic: 'Python CGI Programming',
				path: 'python/python-cgi-programming',
			},
			{
				topic: 'Python Database Access',
				path: 'python/python-database-access',
			},
			{ topic: 'Python Networking', path: 'python/python-networking' },
			{ topic: 'Python Sending Email', path: 'python/python-sending-email' },
			{ topic: 'Python Multithreading', path: 'python/python-multithreading' },
			{ topic: 'Python XML Processing', path: 'python/python-xml-processing' },
			{
				topic: 'Python GUI Programming',
				path: 'python/python-gui-programming',
			},
			{
				topic: 'Python Further Extensions',
				path: 'python/python-further-extension',
			},
		],
	},
];

export const cpp: Course[] = [
	{
		title: 'C++ Tutorial',
		lists: [
			{ topic: 'What is C++?', path: 'cpp/what-is-cpp' },
			{ topic: 'C++ Syntax', path: 'cpp/cpp-syntax' },
			{ topic: 'C++ Data Types', path: 'cpp/cpp-data-type' },
			{ topic: 'C++ Variable Types', path: 'cpp/cpp-variable-type' },
			{ topic: 'C++ Variable Scope', path: 'cpp/cpp-variable-scope' },
			{ topic: 'C++ Constants/Literals', path: 'cpp/cpp-constant' },
			{ topic: 'C++ Modifier Types', path: 'cpp/cpp-modifier-type' },
			{ topic: 'C++ Storage Classes', path: 'cpp/cpp-storage-class' },
			{ topic: 'C++ Operators', path: 'cpp/cpp-operator' },
			{ topic: 'C++ Loop Types', path: 'cpp/cpp-loop-type' },
			{ topic: 'C++ Decision Making', path: 'cpp/cpp-decision-making' },
			{ topic: 'C++ Functions', path: 'cpp/cpp-function' },
			{ topic: 'C++ Numbers', path: 'cpp/cpp-number' },
			{ topic: 'C++ Arrays', path: 'cpp/cpp-array' },
			{ topic: 'C++ Strings', path: 'cpp/cpp-string' },
			{ topic: 'C++ Pointers', path: 'cpp/cpp-pointer' },
			{ topic: 'C++ References', path: 'cpp/cpp-reference' },
			{ topic: 'C++ Date & Time', path: 'cpp/cpp-date-time' },
			{ topic: 'C++ Data Structures', path: 'cpp/cpp-data-structure' },
		],
	},
	{
		title: 'C++ Advanced',
		lists: [
			{ topic: 'C++ Files and Streams', path: 'cpp/cpp-file-stream' },
			{ topic: 'C++ Exception Handling', path: 'cpp/cpp-exception-handling' },
			{ topic: 'C++ Dynamic Memory', path: 'cpp/cpp-dynamic-memory' },
			{ topic: 'C++ Namespaces', path: 'cpp/cpp-namespace' },
			{ topic: 'C++ Templates', path: 'cpp/cpp-template' },
			{ topic: 'C++ Signal Handling', path: 'cpp/cpp-signal-handling' },
		],
	},
];

export const java: Course[] = [
	{
		title: 'Java Tutorial',
		lists: [
			{ topic: 'What is Java?', path: 'java/what-is-java' },
			{ topic: 'Java Syntax', path: 'java/java-syntax' },
			{ topic: 'Java Constructors', path: 'java/java-constructor' },
			{ topic: 'Java Basic Datatypes', path: 'java/java-data-type' },
			{ topic: 'Java Variable Types', path: 'java/java-variable-type' },
			{ topic: 'Java Modifier Types', path: 'java/java-modifier-type' },
			{ topic: 'Java Basic Operators', path: 'java/java-operator' },
			{ topic: 'Java Loop Control', path: 'java/java-loop-control' },
			{ topic: 'Java Decision Making', path: 'java/java-decision-making' },
			{ topic: 'Java Numbers', path: 'java/java-number' },
			{ topic: 'Java Characters', path: 'java/java-character' },
			{ topic: 'Java Strings', path: 'java/java-string' },
			{ topic: 'Java Arrays', path: 'java/java-array' },
			{ topic: 'Java Date & Time', path: 'java/java-date-time' },
			{
				topic: 'Java Regular Expressions',
				path: 'java/java-regular-expression',
			},
			{ topic: 'Java Methods', path: 'java/java-method' },
			{ topic: 'Java Files and I/O', path: 'java/java-file' },
			{ topic: 'Java Exceptions', path: 'java/java-exception' },
		],
	},
	{
		title: 'Java Object Oriented',
		lists: [
			{ topic: 'Java Inheritance', path: 'java/java-inheritance' },
			{ topic: 'Java Overriding', path: 'java/java-overriding' },
			{ topic: 'Java Polymorphism', path: 'java/java-polymorphism' },
			{ topic: 'Java Abstraction', path: 'java/java-abstraction' },
			{ topic: 'Java Encapsulation', path: 'java/java-encapsulation' },
			{ topic: 'Java Interfaces', path: 'java/java-interface' },
			{ topic: 'Java Packages', path: 'java/java-package' },
		],
	},
	{
		title: 'Java Advanced',
		lists: [
			{ topic: 'Java Data Structures', path: 'java/java-data-structure' },
			{ topic: 'Java Collections', path: 'java/java-collection' },
			{ topic: 'Java Generics', path: 'java/java-generic' },
			{ topic: 'Java Networking', path: 'java/java-networking' },
			{ topic: 'Java Multithreading', path: 'java/java-multithreading' },
		],
	},
];

export const react: Course[] = [
	{
		title: 'React Tutorial',
		lists: [
			{ topic: 'What is React?', path: 'react/what-is-react' },
			{ topic: 'React Render HTML', path: 'react/react-render-html' },
			{ topic: 'React JSX', path: 'react/react-jsx' },
			{ topic: 'React Components', path: 'react/react-component' },
			{ topic: 'React Class', path: 'react/react-class' },
			{ topic: 'React Props', path: 'react/react-prop' },
			{ topic: 'React Events', path: 'react/react-event' },
			{ topic: 'React Conditionals', path: 'react/react-conditional' },
			{ topic: 'React Lists', path: 'react/react-list' },
			{ topic: 'React Forms', path: 'react/react-form' },
			{ topic: 'React Router', path: 'react/react-router' },
			{ topic: 'React Memo', path: 'react/react-memo' },
			{ topic: 'React CSS Styling', path: 'react/react-css-styling' },
			{ topic: 'React Sass Styling', path: 'react/react-sass-styling' },
		],
	},
];

export const vue: Course[] = [
	{
		title: 'Vue Tutorial',
		lists: [
			{ topic: 'What is Vue?', path: 'vue/what-is-vue' },
			{ topic: 'Vue v-bind', path: 'vue/vue-v-bind' },
			{ topic: 'Vue v-if', path: 'vue/vue-v-if' },
			{ topic: 'Vue v-show', path: 'vue/vue-v-show' },
			{ topic: 'Vue v-for', path: 'vue/vue-v-for' },
			{ topic: 'Vue Events', path: 'vue/vue-event' },
			{ topic: 'Vue v-on', path: 'vue/vue-v-on' },
			{ topic: 'Vue Methods', path: 'vue/vue-method' },
			{ topic: 'Vue Event Modifiers', path: 'vue/vue-event-modifier' },
			{ topic: 'Vue Forms', path: 'vue/vue-form' },
			{ topic: 'Vue v-model', path: 'vue/vue-v-model' },
			{ topic: 'Vue CSS Binding', path: 'vue/vue-css-binding' },
			{ topic: 'Vue Computed Properties', path: 'vue/vue-computed-propertie' },
			{ topic: 'Vue Watchers', path: 'vue/vue-watcher' },
			{ topic: 'Vue Templates', path: 'vue/vue-template' },
		],
	},
	{
		title: 'Scaling Up',
		lists: [
			{ topic: 'Vue Components', path: 'vue/vue-component' },
			{ topic: 'Vue Props', path: 'vue/vue-prop' },
			{ topic: 'Vue Scoped Styling', path: 'vue/vue-scoped-styling' },
			{ topic: 'Vue Slots', path: 'vue/vue-slot' },
			{ topic: 'Vue Teleport', path: 'vue/vue-teleport' },
			{ topic: 'Vue HTTP Request', path: 'vue/vue-http-request' },
			{ topic: 'Vue Template Refs', path: 'vue/vue-template-ref' },
			{ topic: 'Vue Lifecycle Hooks', path: 'vue/vue-lifecycle-hook' },
			{ topic: 'Vue Routing', path: 'vue/vue-routing' },
			{ topic: 'Vue Form Inputs', path: 'vue/vue-form-input' },
			{ topic: 'Vue Animations', path: 'vue/vue-animation' },
			{ topic: 'Vue Build', path: 'vue/vue-build' },
			{ topic: 'Vue Composition API', path: 'vue/vue-composition-api' },
		],
	},
];

export const laravel: Course[] = [
	{
		title: 'Laravel Tutorial',
		lists: [
			{ topic: 'What is Laravel?', path: 'laravel/what-is-laravel' },
			{
				topic: 'Laravel Application Structure',
				path: 'laravel/laravel-application-structure',
			},
			{ topic: 'Laravel Configuration', path: 'laravel/laravel-configuration' },
			{ topic: 'Laravel Routing', path: 'laravel/laravel-routing' },
			{ topic: 'Laravel Middleware', path: 'laravel/laravel-middleware' },
			{ topic: 'Laravel Namespaces', path: 'laravel/laravel-namespace' },
			{ topic: 'Laravel Controllers', path: 'laravel/laravel-controller' },
			{ topic: 'Laravel Request', path: 'laravel/laravel-request' },
			{ topic: 'Laravel Cookie', path: 'laravel/laravel-cookie' },
			{ topic: 'Laravel Response', path: 'laravel/laravel-response' },
			{ topic: 'Laravel Views', path: 'laravel/laravel-view' },
			{
				topic: 'Laravel Blade Templates',
				path: 'laravel/laravel-blade-template',
			},
			{ topic: 'Laravel Redirections', path: 'laravel/laravel-redirection' },
			{
				topic: 'Laravel Errors & Logging',
				path: 'laravel/laravel-error-logging',
			},
			{ topic: 'Laravel Forms', path: 'laravel/laravel-form' },
			{ topic: 'Laravel Localization', path: 'laravel/laravel-localization' },
			{ topic: 'Laravel Session', path: 'laravel/laravel-session' },
			{ topic: 'Laravel Validation', path: 'laravel/laravel-validation' },
			{
				topic: 'Laravel File Uploading',
				path: 'laravel/laravel-file-uploading',
			},
			{ topic: 'Laravel Sending Email', path: 'laravel/laravel-sending-email' },
			{ topic: 'Laravel Ajax', path: 'laravel/laravel-ajax' },
			{
				topic: 'Laravel Error Handling',
				path: 'laravel/laravel-error-handling',
			},
			{
				topic: 'Laravel Event Handling',
				path: 'laravel/laravel-event-handling',
			},
			{ topic: 'Laravel Facades', path: 'laravel/laravel-facade' },
			{ topic: 'Laravel Contracts', path: 'laravel/laravel-contract' },
			{
				topic: 'Laravel Authentication',
				path: 'laravel/laravel-authentication',
			},
			{ topic: 'Laravel Authorization', path: 'laravel/laravel-authorization' },
			{
				topic: 'Laravel Artisan Console',
				path: 'laravel/laravel-artisan-console',
			},
			{ topic: 'Laravel Encryption', path: 'laravel/laravel-encryption' },
			{ topic: 'Laravel Hashing', path: 'laravel/laravel-hashing' },
			{ topic: 'Laravel Dump Server', path: 'laravel/laravel-dump-server' },
			{ topic: 'Laravel Action URL', path: 'laravel/laravel-action-url' },
		],
	},
];

export const ionic: Course[] = [
	{
		title: 'Ionic Tutorial',
		lists: [
			{
				topic: 'What is Ionic?',
				path: 'ionic/what-is-ionic',
			},
		],
	},
	{
		title: 'Ionic CSS Components',
		lists: [
			{
				topic: 'Ionic Colors',
				path: 'ionic/ionic-colour',
			},
			{
				topic: 'Ionic Content',
				path: 'ionic/ionic-content',
			},
			{
				topic: 'Ionic Header',
				path: 'ionic/ionic-header',
			},
			{
				topic: 'Ionic Footer',
				path: 'ionic/ionic-footer',
			},
			{
				topic: 'Ionic Buttons',
				path: 'ionic/ionic-button',
			},
			{
				topic: 'Ionic Lists',
				path: 'ionic/ionic-list',
			},
			{
				topic: 'Ionic Cards',
				path: 'ionic/ionic-card',
			},
			{
				topic: 'Ionic Forms',
				path: 'ionic/ionic-form',
			},
			{
				topic: 'Ionic Toggle',
				path: 'ionic/ionic-toggle',
			},
			{
				topic: 'Ionic Checkbox',
				path: 'ionic/ionic-checkbox',
			},
			{
				topic: 'Ionic Radio Button',
				path: 'ionic/ionic-radio-button',
			},
			{
				topic: 'Ionic Range',
				path: 'ionic/ionic-range',
			},
			{
				topic: 'Ionic Select',
				path: 'ionic/ionic-select',
			},
			{
				topic: 'Ionic Tabs',
				path: 'ionic/ionic-tab',
			},
			{
				topic: 'Ionic Grid',
				path: 'ionic/ionic-grid',
			},
			{
				topic: 'Ionic Icons',
				path: 'ionic/ionic-icon',
			},
			{
				topic: 'Ionic Padding',
				path: 'ionic/ionic-padding',
			},
		],
	},
	{
		title: 'Ionic JavaScript Components',
		lists: [
			{ topic: 'Ionic JS Action Sheet', path: 'ionic/ionic-js-action-sheet' },
			{ topic: 'Ionic JS Backdrop', path: 'ionic/ionic-js-backdrop' },
			{ topic: 'Ionic JS Forms', path: 'ionic/ionic-js-form' },
			{ topic: 'Ionic JS Events', path: 'ionic/ionic-js-event' },
			{ topic: 'Ionic JS Keyboard', path: 'ionic/ionic-js-keyboard' },
			{ topic: 'Ionic JS Loading', path: 'ionic/ionic-js-loading' },
			{ topic: 'Ionic JS Modal', path: 'ionic/ionic-js-modal' },
			{ topic: 'Ionic JS Navigation', path: 'ionic/ionic-js-navigation' },
			{ topic: 'Ionic JS Popover', path: 'ionic/ionic-js-popover' },
			{ topic: 'Ionic JS Popup', path: 'ionic/ionic-js-popup' },
			{ topic: 'Ionic JS Scroll', path: 'ionic/ionic-js-scroll' },
			{ topic: 'Ionic JS Side Menu', path: 'ionic/ionic-js-side-menu' },
			{ topic: 'Ionic JS Slide Box', path: 'ionic/ionic-js-slide-box' },
			{ topic: 'Ionic JS Tabs', path: 'ionic/ionic-js-tab' },
		],
	},
];

export const rails: Course[] = [
	{
		title: 'Ruby on Rails Tutorial',
		lists: [
			{ topic: 'What is Ruby on Rails?', path: 'rails/what-is-ruby-on-rail' },
			{
				topic: 'Ruby on Rails Active Records',
				path: 'rails/ruby-on-rail-active-record',
			},
			{ topic: 'Ruby on Rails Ajax', path: 'rails/ruby-on-rail-ajax' },
			{
				topic: 'Ruby on Rails Controllers',
				path: 'rails/ruby-on-rail-controller',
			},
			{
				topic: 'Ruby on Rails Databse Setups',
				path: 'rails/ruby-on-rail-database-setup',
			},
			{
				topic: 'Ruby on Rails Directory Structures',
				path: 'rails/ruby-on-rail-directory-structure',
			},
			{ topic: 'Ruby on Rails Examples', path: 'rails/ruby-on-rail-example' },
			{
				topic: 'Ruby on Rails File Uploadings',
				path: 'rails/ruby-on-rail-file-uploading',
			},
			{
				topic: 'Ruby on Rails Frameworks',
				path: 'rails/ruby-on-rail-framework',
			},
			{ topic: 'Ruby on Rails Layouts', path: 'rails/ruby-on-rail-layout' },
			{
				topic: 'Ruby on Rails Rail Migrations',
				path: 'rails/ruby-on-rail-migration',
			},
			{ topic: 'Ruby on Rails Routers', path: 'rails/ruby-on-rail-router' },
			{
				topic: 'Ruby on Rails Scaffoldings',
				path: 'rails/ruby-on-rail-scaffolding',
			},
			{
				topic: 'Ruby on Rails Send Emails',
				path: 'rails/ruby-on-rail-send-email',
			},
			{ topic: 'Ruby on Rails Views', path: 'rails/ruby-on-rail-view' },
		],
	},
];
