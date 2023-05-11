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
			{ topic: 'HTML Tutorial', path: 'html/html-tutorial' },
			{ topic: 'HTML Basic', path: 'html/html-basic' },
			{ topic: 'HTML Elements', path: 'html/html-elements' },
			{ topic: 'HTML Attributes', path: 'html/html-attributes' },
			{ topic: 'HTML Headings', path: 'html/html-headings' },
			{ topic: 'HTML Paragraphs', path: 'html/html-paragraphs' },
			{ topic: 'HTML Styles', path: 'html/html-styles' },
			{ topic: 'HTML Formatting', path: 'html/html-formatting' },
			{ topic: 'HTML Quotations', path: 'html/html-quotations' },
			{ topic: 'HTML Comments', path: 'html/html-comments' },
			{ topic: 'HTML Colours', path: 'html/html-colours' },
			{ topic: 'HTML Links', path: 'html/html-links' },
			{ topic: 'HTML Images', path: 'html/html-images' },
			{ topic: 'HTML Favicon', path: 'html/html-favicon' },
			{ topic: 'HTML Page Title', path: 'html/html-page-title' },
			{ topic: 'HTML Tables', path: 'html/html-tables' },
			{ topic: 'HTML Lists', path: 'html/html-lists' },
			{ topic: 'HTML Block & Inline', path: 'html/html-block-inline' },
			{ topic: 'HTML Classes', path: 'html/html-classes' },
			{ topic: 'HTML Id', path: 'html/html-id' },
			{ topic: 'HTML Head', path: 'html/html-head' },
			{ topic: 'HTML Layout', path: 'html/html-layout' },
			{ topic: 'HTML Responsive', path: 'html/html-responsive' },
		],
	},
	{
		title: 'HTML Graphics',
		lists: [
			{ topic: 'HTML Canvas', path: 'html/html-canvas' },
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
			{ topic: 'HTML Plugins', path: 'html/html-plugins' },
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
			{ topic: 'CSS Selectors', path: 'css/css-selectors' },
			{ topic: 'CSS How To', path: 'css/css-how-to' },
			{ topic: 'CSS Comments', path: 'css/css-comments' },
			{ topic: 'CSS Colors', path: 'css/css-colors' },
			{ topic: 'CSS Backgrounds', path: 'css/css-backgrounds' },
			{ topic: 'CSS Borders', path: 'css/css-borders' },
			{ topic: 'CSS Margins', path: 'css/css-margins' },
			{ topic: 'CSS Padding', path: 'css/css-padding' },
			{ topic: 'CSS Height/Width', path: 'css/css-height-width' },
			{ topic: 'CSS Box Model', path: 'css/css-box-model' },
			{ topic: 'CSS Outline', path: 'css/css-outline' },
			{ topic: 'CSS Text', path: 'css/css-text' },
			{ topic: 'CSS Fonts', path: 'css/css-fonts' },
			{ topic: 'CSS Icons', path: 'css/css-icons' },
			{ topic: 'CSS Links', path: 'css/css-links' },
			{ topic: 'CSS Lists', path: 'css/css-lists' },
			{ topic: 'CSS Tables', path: 'css/css-tables' },
			{ topic: 'CSS Display', path: 'css/css-display' },
			{ topic: 'CSS Maxwidth', path: 'css/css-maxwidth' },
			{ topic: 'CSS Position', path: 'css/css-position' },
			{ topic: 'CSS Zindex', path: 'css/css-zindex' },
			{ topic: 'CSS Overflow', path: 'css/css-overflow' },
			{ topic: 'CSS Float', path: 'css/css-float' },
			{ topic: 'CSS Inlineblock', path: 'css/css-inlineblock' },
			{ topic: 'CSS Align', path: 'css/css-align' },
			{ topic: 'CSS Combinators', path: 'css/css-combinators' },
			{ topic: 'CSS Pseudoclass', path: 'css/css-pseudoclass' },
			{ topic: 'CSS Pseudoelement', path: 'css/css-pseudoelement' },
			{ topic: 'CSS Opacity', path: 'css/css-opacity' },
			{ topic: 'CSS Navigation Bar', path: 'css/css-navigation-bar' },
			{ topic: 'CSS Dropdowns', path: 'css/css-dropdowns' },
			{ topic: 'CSS Image Gallery', path: 'css/css-image-gallery' },
			{ topic: 'CSS Image Sprites', path: 'css/css-image-sprites' },
			{ topic: 'CSS Attr Selectors', path: 'css/css-attr-selectors' },
			{ topic: 'CSS Forms', path: 'css/css-forms' },
			{ topic: 'CSS Counters', path: 'css/css-counters' },
			{ topic: 'CSS Website Layout', path: 'css/css-website-layout' },
			{ topic: 'CSS Units', path: 'css/css-units' },
			{ topic: 'CSS Specificity', path: 'css/css-specificity' },
			{ topic: 'CSS Math Functions', path: 'css/css-math-functions' },
		],
	},
	{
		title: 'CSS Advanced',
		lists: [
			{ topic: 'CSS Rounded Corners', path: 'css/css-rounded-corners' },
			{ topic: 'CSS Border Images', path: 'css/css-border-images' },
			{ topic: 'CSS Backgrounds', path: 'css/css-backgrounds-advanced' },
			{ topic: 'CSS Colors', path: 'css/css-colors-advanced' },
			{ topic: 'CSS Color Keywords', path: 'css/css-color-keywords' },
			{ topic: 'CSS Gradients', path: 'css/css-gradients' },
			{ topic: 'CSS Shadows', path: 'css/css-shadows' },
			{ topic: 'CSS Text Effects', path: 'css/css-text-effects' },
			{ topic: 'CSS Web Fonts', path: 'css/css-web-fonts' },
			{ topic: 'CSS 2D Transforms', path: 'css/css-2d-transforms' },
			{ topic: 'CSS 3D Transforms', path: 'css/css-3d-transforms' },
			{ topic: 'CSS Transitions', path: 'css/css-transitions' },
			{ topic: 'CSS Animations', path: 'css/css-animations' },
			{ topic: 'CSS Tooltips', path: 'css/css-tooltips' },
			{ topic: 'CSS Style Images', path: 'css/css-style-images' },
			{ topic: 'CSS Image Reflection', path: 'css/css-image-reflection' },
			{ topic: 'CSS objectfit', path: 'css/css-objectfit' },
			{ topic: 'CSS objectposition', path: 'css/css-objectposition' },
			{ topic: 'CSS Masking', path: 'css/css-masking' },
			{ topic: 'CSS Buttons', path: 'css/css-buttons' },
			{ topic: 'CSS Pagination', path: 'css/css-pagination' },
			{ topic: 'CSS Multiple Columns', path: 'css/css-multiple-columns' },
			{ topic: 'CSS User Interface', path: 'css/css-user-interface' },
			{ topic: 'CSS Variables', path: 'css/css-variables' },
			{ topic: 'CSS Box Sizing', path: 'css/css-box-sizing' },
			{ topic: 'CSS Media Queries', path: 'css/css-media-queries' },
			{ topic: 'CSS MQ Examples', path: 'css/css-mq-examples' },
			{ topic: 'CSS Flexbox', path: 'css/css-flexbox' },
		],
	},
	{
		title: 'CSS Responsive',
		lists: [
			{ topic: 'RWD Viewport', path: 'css/rwd-viewport' },
			{ topic: 'RWD Grid View', path: 'css/rwd-grid-view' },
			{ topic: 'RWD Media Queries', path: 'css/rwd-media-queries' },
			{ topic: 'RWD Images', path: 'css/rwd-images' },
			{ topic: 'RWD Videos', path: 'css/rwd-videos' },
			{ topic: 'RWD Frameworks', path: 'css/rwd-frameworks' },
			{ topic: 'RWD Templates', path: 'css/rwd-templates' },
		],
	},
];

export const javascript: Course[] = [
	{
		title: 'JAVASCRIPT Tutorial',
		lists: [
			{ topic: 'What is JAVASCRIPT?', path: 'javascript/what-is-javascript' },
			{ topic: 'JAVASCRIPT Output', path: 'javascript/javascript-output' },
			{
				topic: 'JAVASCRIPT Statements',
				path: 'javascript/javascript-statements',
			},
			{ topic: 'JAVASCRIPT Syntax', path: 'javascript/javascript-syntax' },
			{ topic: 'JAVASCRIPT Comments', path: 'javascript/javascript-comments' },
			{
				topic: 'JAVASCRIPT Variables',
				path: 'javascript/javascript-variables',
			},
			{ topic: 'JAVASCRIPT Let', path: 'javascript/javascript-let' },
			{ topic: 'JAVASCRIPT Const', path: 'javascript/javascript-const' },
			{
				topic: 'JAVASCRIPT Operators',
				path: 'javascript/javascript-operators',
			},
			{
				topic: 'JAVASCRIPT Arithmetic',
				path: 'javascript/javascript-arithmetic',
			},
			{
				topic: 'JAVASCRIPT Assignment',
				path: 'javascript/javascript-assignment',
			},
			{
				topic: 'JAVASCRIPT Data Types',
				path: 'javascript/javascript-data-types',
			},
			{
				topic: 'JAVASCRIPT Functions',
				path: 'javascript/javascript-functions',
			},
			{ topic: 'JAVASCRIPT Objects', path: 'javascript/javascript-objects' },
			{ topic: 'JAVASCRIPT Events', path: 'javascript/javascript-events' },
			{ topic: 'JAVASCRIPT Strings', path: 'javascript/javascript-strings' },
			{
				topic: 'JAVASCRIPT String Methods',
				path: 'javascript/javascript-string-methods',
			},
			{
				topic: 'JAVASCRIPT String Search',
				path: 'javascript/javascript-string-search',
			},
			{
				topic: 'JAVASCRIPT String Templates',
				path: 'javascript/javascript-string-templates',
			},
			{ topic: 'JAVASCRIPT Numbers', path: 'javascript/javascript-numbers' },
			{ topic: 'JAVASCRIPT BigInt', path: 'javascript/javascript-bigint' },
			{
				topic: 'JAVASCRIPT Number Methods',
				path: 'javascript/javascript-number-methods',
			},
			{
				topic: 'JAVASCRIPT Number Properties',
				path: 'javascript/javascript-number-properties',
			},
			{ topic: 'JAVASCRIPT Arrays', path: 'javascript/javascript-arrays' },
			{
				topic: 'JAVASCRIPT Array Methods',
				path: 'javascript/javascript-array-methods',
			},
			{
				topic: 'JAVASCRIPT Array Sort',
				path: 'javascript/javascript-array-sort',
			},
			{
				topic: 'JAVASCRIPT Array Iteration',
				path: 'javascript/javascript-array-iteration',
			},
			{
				topic: 'JAVASCRIPT Array Const',
				path: 'javascript/javascript-array-const',
			},
			{ topic: 'JAVASCRIPT Dates', path: 'javascript/javascript-dates' },
			{
				topic: 'JAVASCRIPT Date Formats',
				path: 'javascript/javascript-date-formats',
			},
			{
				topic: 'JAVASCRIPT Date Get Methods',
				path: 'javascript/javascript-date-get-methods',
			},
			{
				topic: 'JAVASCRIPT Date Set Methods',
				path: 'javascript/javascript-date-set-methods',
			},
			{ topic: 'JAVASCRIPT Math', path: 'javascript/javascript-math' },
			{ topic: 'JAVASCRIPT Random', path: 'javascript/javascript-random' },
			{ topic: 'JAVASCRIPT Booleans', path: 'javascript/javascript-booleans' },
			{
				topic: 'JAVASCRIPT Comparisons',
				path: 'javascript/javascript-comparisons',
			},
			{ topic: 'JAVASCRIPT If Else', path: 'javascript/javascript-if-else' },
			{ topic: 'JAVASCRIPT Switch', path: 'javascript/javascript-switch' },
			{ topic: 'JAVASCRIPT Loop For', path: 'javascript/javascript-loop-for' },
			{
				topic: 'JAVASCRIPT Loop For In',
				path: 'javascript/javascript-loop-for-in',
			},
			{
				topic: 'JAVASCRIPT Loop For Of',
				path: 'javascript/javascript-loop-for-of',
			},
			{
				topic: 'JAVASCRIPT Loop While',
				path: 'javascript/javascript-loop-while',
			},
			{ topic: 'JAVASCRIPT Break', path: 'javascript/javascript-break' },
			{
				topic: 'JAVASCRIPT Iterables',
				path: 'javascript/javascript-iterables',
			},
			{ topic: 'JAVASCRIPT Sets', path: 'javascript/javascript-sets' },
			{ topic: 'JAVASCRIPT Maps', path: 'javascript/javascript-maps' },
			{ topic: 'JAVASCRIPT Typeof', path: 'javascript/javascript-typeof' },
			{
				topic: 'JAVASCRIPT Type Conversion',
				path: 'javascript/javascript-type-conversion',
			},
			{ topic: 'JAVASCRIPT Bitwise', path: 'javascript/javascript-bitwise' },
			{ topic: 'JAVASCRIPT RegExp', path: 'javascript/javascript-regexp' },
			{
				topic: 'JAVASCRIPT Precedence',
				path: 'javascript/javascript-precedence',
			},
			{ topic: 'JAVASCRIPT Errors', path: 'javascript/javascript-errors' },
			{ topic: 'JAVASCRIPT Scope', path: 'javascript/javascript-scope' },
			{ topic: 'JAVASCRIPT Hoisting', path: 'javascript/javascript-hoisting' },
			{
				topic: 'JAVASCRIPT Strict Mode',
				path: 'javascript/javascript-strict-mode',
			},
			{
				topic: 'JAVASCRIPT this Keyword',
				path: 'javascript/javascript-this-keyword',
			},
			{
				topic: 'JAVASCRIPT Arrow Function',
				path: 'javascript/javascript-arrow-function',
			},
			{ topic: 'JAVASCRIPT Classes', path: 'javascript/javascript-classes' },
			{ topic: 'JAVASCRIPT Modules', path: 'javascript/javascript-modules' },
			{
				topic: 'JAVASCRIPT JAVASCRIPTON',
				path: 'javascript/javascript-javascripton',
			},
			{
				topic: 'JAVASCRIPT Debugging',
				path: 'javascript/javascript-debugging',
			},
			{
				topic: 'JAVASCRIPT Style Guide',
				path: 'javascript/javascript-style-guide',
			},
			{
				topic: 'JAVASCRIPT Best Practices',
				path: 'javascript/javascript-best-practices',
			},
			{ topic: 'JAVASCRIPT Mistakes', path: 'javascript/javascript-mistakes' },
			{
				topic: 'JAVASCRIPT Performance',
				path: 'javascript/javascript-performance',
			},
			{
				topic: 'JAVASCRIPT Reserved Words',
				path: 'javascript/javascript-reserved-words',
			},
		],
	},
	{
		title: 'JAVASCRIPT Objects',
		lists: [
			{
				topic: 'Object Definitions',
				path: 'javascript/objects/object-definitions',
			},
			{
				topic: 'Object Properties',
				path: 'javascript/objects/object-properties',
			},
			{ topic: 'Object Methods', path: 'javascript/objects/object-methods' },
			{ topic: 'Object Display', path: 'javascript/objects/object-display' },
			{
				topic: 'Object Accessors',
				path: 'javascript/objects/object-accessors',
			},
			{
				topic: 'Object Constructors',
				path: 'javascript/objects/object-constructors',
			},
			{
				topic: 'Object Prototypes',
				path: 'javascript/objects/object-prototypes',
			},
			{
				topic: 'Object Iterables',
				path: 'javascript/objects/object-iterables',
			},
			{ topic: 'Object Sets', path: 'javascript/objects/object-sets' },
			{ topic: 'Object Maps', path: 'javascript/objects/object-maps' },
			{
				topic: 'Object Reference',
				path: 'javascript/objects/object-reference',
			},
		],
	},
	{
		title: 'JAVASCRIPT Functions',
		lists: [
			{
				topic: 'Function Definitions',
				path: 'javascript/functions/function-definitions',
			},
			{
				topic: 'Function Parameters',
				path: 'javascript/functions/function-parameters',
			},
			{
				topic: 'Function Invocation',
				path: 'javascript/functions/function-invocation',
			},
			{ topic: 'Function Call', path: 'javascript/functions/function-call' },
			{ topic: 'Function Apply', path: 'javascript/functions/function-apply' },
			{ topic: 'Function Bind', path: 'javascript/functions/function-bind' },
			{
				topic: 'Function Closures',
				path: 'javascript/functions/function-closures',
			},
		],
	},

	{
		title: 'JAVASCRIPT Classes',
		lists: [
			{ topic: 'Class Intro', path: 'javascript/classes/class-intro' },
			{
				topic: 'Class Inheritance',
				path: 'javascript/classes/class-inheritance',
			},
			{ topic: 'Class Static', path: 'javascript/classes/class-static' },
		],
	},
];

export const php: Course[] = [
	{
		title: 'PHP Tutorial',
		lists: [
			{ topic: 'What is PHP?', path: 'php/tutorial/what-is-php' },
			{ topic: 'PHP Syntax', path: 'php/tutorial/php-syntax' },
			{ topic: 'PHP Comments', path: 'php/tutorial/php-comments' },
			{ topic: 'PHP Variables', path: 'php/tutorial/php-variables' },
			{ topic: 'PHP Echo / Print', path: 'php/tutorial/php-echo-print' },
			{ topic: 'PHP Data Types', path: 'php/tutorial/php-data-types' },
			{ topic: 'PHP Strings', path: 'php/tutorial/php-strings' },
			{ topic: 'PHP Numbers', path: 'php/tutorial/php-numbers' },
			{ topic: 'PHP Math', path: 'php/tutorial/php-math' },
			{ topic: 'PHP Constants', path: 'php/tutorial/php-constants' },
			{ topic: 'PHP Operators', path: 'php/tutorial/php-operators' },
			{
				topic: 'PHP If...Else...Elseif',
				path: 'php/tutorial/php-if-else-elseif',
			},
			{ topic: 'PHP Switch', path: 'php/tutorial/php-switch' },
			{ topic: 'PHP Loops', path: 'php/tutorial/php-loops' },
			{ topic: 'PHP Functions', path: 'php/tutorial/php-functions' },
			{ topic: 'PHP Arrays', path: 'php/tutorial/php-arrays' },
		],
	},
	{
		title: 'PHP Advanced',
		lists: [
			{ topic: 'PHP Date and Time', path: 'php/advanced/php-date-time' },
			{ topic: 'PHP Include', path: 'php/advanced/php-include' },
			{ topic: 'PHP File Handling', path: 'php/advanced/php-file-handling' },
			{ topic: 'PHP File Open/Read', path: 'php/advanced/php-file-open-read' },
			{
				topic: 'PHP File Create/Write',
				path: 'php/advanced/php-file-create-write',
			},
			{ topic: 'PHP File Upload', path: 'php/advanced/php-file-upload' },
			{ topic: 'PHP Cookies', path: 'php/advanced/php-cookies' },
			{ topic: 'PHP Sessions', path: 'php/advanced/php-sessions' },
			{ topic: 'PHP Filters', path: 'php/advanced/php-filters' },
			{
				topic: 'PHP Filters Advanced',
				path: 'php/advanced/php-filters-advanced',
			},
			{
				topic: 'PHP Call back Functions',
				path: 'php/advanced/php-callback-functions',
			},
			{ topic: 'PHP JAVASCRIPTON', path: 'php/advanced/php-json' },
			{ topic: 'PHP Exceptions', path: 'php/advanced/php-exceptions' },
		],
	},
	{
		title: 'PHP OOP',
		lists: [
			{ topic: 'PHP What is OOP', path: 'php/oop/php-what-is-oop' },
			{ topic: 'PHP Classes/Objects', path: 'php/oop/php-classes-objects' },
			{ topic: 'PHP Constructor', path: 'php/oop/php-constructor' },
			{ topic: 'PHP Destructor', path: 'php/oop/php-destructor' },
			{ topic: 'PHP Access Modifiers', path: 'php/oop/php-access-modifiers' },
			{ topic: 'PHP Inheritance', path: 'php/oop/php-inheritance' },
			{ topic: 'PHP Constants', path: 'php/oop/php-constants' },
			{ topic: 'PHP Abstract Classes', path: 'php/oop/php-abstract-classes' },
			{ topic: 'PHP Interfaces', path: 'php/oop/php-interfaces' },
			{ topic: 'PHP Traits', path: 'php/oop/php-traits' },
			{ topic: 'PHP Static Methods', path: 'php/oop/php-static-methods' },
			{ topic: 'PHP Static Properties', path: 'php/oop/php-static-properties' },
			{ topic: 'PHP Namespaces', path: 'php/oop/php-namespaces' },
		],
	},
	{
		title: 'MySQL Database',
		lists: [
			{ topic: 'MySQL Database', path: 'php/mysql/mysql-database' },
			{ topic: 'MySQL Connect', path: 'php/mysql/mysql-connect' },
			{ topic: 'MySQL Create DB', path: 'php/mysql/mysql-create-db' },
			{ topic: 'MySQL Create Table', path: 'php/mysql/mysql-create-table' },
			{ topic: 'MySQL Insert Data', path: 'php/mysql/mysql-insert-data' },
			{ topic: 'MySQL Get Last ID', path: 'php/mysql/mysql-get-last-id' },
			{
				topic: 'MySQL Insert Multiple',
				path: 'php/mysql/mysql-insert-multiple',
			},
			{ topic: 'MySQL Prepared', path: 'php/mysql/mysql-prepared' },
			{ topic: 'MySQL Select Data', path: 'php/mysql/mysql-select-data' },
			{ topic: 'MySQL Where', path: 'php/mysql/mysql-where' },
			{ topic: 'MySQL Order By', path: 'php/mysql/mysql-order-by' },
			{ topic: 'MySQL Delete Data', path: 'php/mysql/mysql-delete-data' },
			{ topic: 'MySQL Update Data', path: 'php/mysql/mysql-update-data' },
			{ topic: 'MySQL Limit Data', path: 'php/mysql/mysql-limit-data' },
		],
	},
];

export const ruby: Course[] = [
	{
		title: 'Ruby Tutorial',
		lists: [
			{ topic: 'What is Ruby?', path: 'ruby/ruby-intro' },
			{ topic: 'Ruby Syntax', path: 'ruby/ruby-syntax' },
			{ topic: 'Ruby Classes and Objects', path: 'ruby/ruby-classes-objects' },
			{ topic: 'Ruby Variables', path: 'ruby/ruby-variables' },
			{ topic: 'Ruby Operators', path: 'ruby/ruby-operators' },
			{ topic: 'Ruby Comments', path: 'ruby/ruby-comments' },
			{ topic: 'Ruby IF...ELSE', path: 'ruby/ruby-if-else' },
			{ topic: 'Ruby Loops', path: 'ruby/ruby-loops' },
			{ topic: 'Ruby Methods', path: 'ruby/ruby-methods' },
			{ topic: 'Ruby Blocks', path: 'ruby/ruby-blocks' },
			{ topic: 'Ruby Modules', path: 'ruby/ruby-modules' },
			{ topic: 'Ruby Strings', path: 'ruby/ruby-strings' },
			{ topic: 'Ruby Arrays', path: 'ruby/ruby-arrays' },
			{ topic: 'Ruby Hashes', path: 'ruby/ruby-hashes' },
			{ topic: 'Ruby Date & Time', path: 'ruby/ruby-date-time' },
			{ topic: 'Ruby Ranges', path: 'ruby/ruby-ranges' },
			{ topic: 'Ruby Iterators', path: 'ruby/ruby-iterators' },
			{ topic: 'Ruby File I/O', path: 'ruby/ruby-file-io' },
			{ topic: 'Ruby Exceptions', path: 'ruby/ruby-exceptions' },
		],
	},
	{
		title: 'Ruby Advanced',
		lists: [
			{ topic: 'Ruby Object Oriented', path: 'ruby/ruby-oop' },
			{ topic: 'Ruby Regular Expressions', path: 'ruby/ruby-regex' },
			{ topic: 'Ruby Database Access', path: 'ruby/ruby-db-access' },
			{ topic: 'Ruby Web Applications', path: 'ruby/ruby-web-apps' },
			{ topic: 'Ruby Sending Email', path: 'ruby/ruby-sending-email' },
			{
				topic: 'Ruby Socket Programming',
				path: 'ruby/ruby-socket-programming',
			},
			{ topic: 'Ruby Ruby/XML, XSLT', path: 'ruby/ruby-xml-xslt' },
			{ topic: 'Ruby Web Services', path: 'ruby/ruby-web-services' },
			{ topic: 'Ruby Tk Guide', path: 'ruby/ruby-tk-guide' },
			{ topic: 'Ruby Ruby/LDAP Tutorial', path: 'ruby/ruby-ldap-tutorial' },
			{ topic: 'Ruby Multithreading', path: 'ruby/ruby-multithreading' },
			{
				topic: 'Ruby Built-in Functions',
				path: 'ruby/ruby-built-in-functions',
			},
			{
				topic: 'Ruby Predefined Variables',
				path: 'ruby/ruby-predefined-variables',
			},
			{
				topic: 'Ruby Predefined Constants',
				path: 'ruby/ruby-predefined-constants',
			},
			{ topic: 'Ruby Associated Tools', path: 'ruby/ruby-associated-tools' },
		],
	},
];

export const python: Course[] = [
	{
		title: 'Python Tutorial',
		lists: [
			{ topic: 'What is Python?', path: 'python/python-intro' },
			{ topic: 'Python Syntax', path: 'python/python-syntax' },
			{ topic: 'Python Comments', path: 'python/python-comments' },
			{ topic: 'Python Variables', path: 'python/python-variables' },
			{ topic: 'Python Data Types', path: 'python/python-data-types' },
			{ topic: 'Python Operators', path: 'python/python-operators' },
			{
				topic: 'Python Decision Making',
				path: 'python/python-decision-making',
			},
			{ topic: 'Python Loops', path: 'python/python-loops' },
			{ topic: 'Python Numbers', path: 'python/python-numbers' },
			{ topic: 'Python Strings', path: 'python/python-strings' },
			{ topic: 'Python Lists', path: 'python/python-lists' },
			{ topic: 'Python Tuples', path: 'python/python-tuples' },
			{ topic: 'Python Dictionary', path: 'python/python-dictionary' },
			{ topic: 'Python Date & Time', path: 'python/python-date-time' },
			{ topic: 'Python Functions', path: 'python/python-functions' },
			{ topic: 'Python Modules', path: 'python/python-modules' },
			{ topic: 'Python Files I/O', path: 'python/python-files-io' },
			{ topic: 'Python Exceptions', path: 'python/python-exceptions' },
		],
	},
	{
		title: 'Python Advanced',
		lists: [
			{
				topic: 'Python Classes/Objects',
				path: 'python/python-classes-objects',
			},
			{ topic: 'Python Reg Expressions', path: 'python/python-regex' },
			{
				topic: 'Python CGI Programming',
				path: 'python/python-cgi-programming',
			},
			{ topic: 'Python Database Access', path: 'python/python-db-access' },
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
				path: 'python/python-further-extensions',
			},
		],
	},
];

export const cpp: Course[] = [
	{
		title: 'C++ Tutorial',
		lists: [
			{ topic: 'What is C++?', path: 'cpp/cpp-intro' },
			{ topic: 'C++ Syntax', path: 'cpp/cpp-syntax' },
			{ topic: 'C++ Comments', path: 'cpp/cpp-comments' },
			{ topic: 'C++ Data Types', path: 'cpp/cpp-data-types' },
			{ topic: 'C++ Variable Types', path: 'cpp/cpp-variable-types' },
			{ topic: 'C++ Variable Scope', path: 'cpp/cpp-variable-scope' },
			{ topic: 'C++ Constants/Literals', path: 'cpp/cpp-constants-literals' },
			{ topic: 'C++ Modifier Types', path: 'cpp/cpp-modifier-types' },
			{ topic: 'C++ Storage Classes', path: 'cpp/cpp-storage-classes' },
			{ topic: 'C++ Operators', path: 'cpp/cpp-operators' },
			{ topic: 'C++ Loop Types', path: 'cpp/cpp-loop-types' },
			{ topic: 'C++ Decision Making', path: 'cpp/cpp-decision-making' },
			{ topic: 'C++ Functions', path: 'cpp/cpp-functions' },
			{ topic: 'C++ Numbers', path: 'cpp/cpp-numbers' },
			{ topic: 'C++ Arrays', path: 'cpp/cpp-arrays' },
			{ topic: 'C++ Strings', path: 'cpp/cpp-strings' },
			{ topic: 'C++ Pointers', path: 'cpp/cpp-pointers' },
			{ topic: 'C++ References', path: 'cpp/cpp-references' },
			{ topic: 'C++ Date & Time', path: 'cpp/cpp-date-time' },
			{ topic: 'C++ Basic Input/Output', path: 'cpp/cpp-basic-io' },
			{ topic: 'C++ Data Structures', path: 'cpp/cpp-data-structures' },
		],
	},
	{
		title: 'C++ Object Oriented',
		lists: [
			{ topic: 'C++ Classes & Objects', path: 'cpp/cpp-classes-objects' },
			{ topic: 'C++ Inheritance', path: 'cpp/cpp-inheritance' },
			{ topic: 'C++ Overloading', path: 'cpp/cpp-overloading' },
			{ topic: 'C++ Polymorphism', path: 'cpp/cpp-polymorphism' },
			{ topic: 'C++ Abstraction', path: 'cpp/cpp-abstraction' },
			{ topic: 'C++ Encapsulation', path: 'cpp/cpp-encapsulation' },
			{ topic: 'C++ Interfaces', path: 'cpp/cpp-interfaces' },
		],
	},
	{
		title: 'C++ Advanced',
		lists: [
			{ topic: 'C++ Files and Streams', path: 'cpp/cpp-files-streams' },
			{ topic: 'C++ Exception Handling', path: 'cpp/cpp-exception-handling' },
			{ topic: 'C++ Dynamic Memory', path: 'cpp/cpp-dynamic-memory' },
			{ topic: 'C++ Namespaces', path: 'cpp/cpp-namespaces' },
			{ topic: 'C++ Templates', path: 'cpp/cpp-templates' },
			{ topic: 'C++ Preprocessor', path: 'cpp/cpp-preprocessor' },
			{ topic: 'C++ Signal Handling', path: 'cpp/cpp-signal-handling' },
			{ topic: 'C++ Multithreading', path: 'cpp/cpp-multithreading' },
			{ topic: 'C++ Web Programming', path: 'cpp/cpp-web-programming' },
		],
	},
];

export const java: Course[] = [
	{
		title: 'Java Tutorial',
		lists: [
			{ topic: 'What is Java?', path: 'java/what-is-java' },
			{ topic: 'Java Syntax', path: 'java/java-syntax' },
			{ topic: 'Java Object & Classes', path: 'java/java-object-classes' },
			{ topic: 'Java Constructors', path: 'java/java-constructors' },
			{ topic: 'Java Basic Datatypes', path: 'java/java-basic-datatypes' },
			{ topic: 'Java Variable Types', path: 'java/java-variable-types' },
			{ topic: 'Java Modifier Types', path: 'java/java-modifier-types' },
			{ topic: 'Java Basic Operators', path: 'java/java-basic-operators' },
			{ topic: 'Java Loop Control', path: 'java/java-loop-control' },
			{ topic: 'Java Decision Making', path: 'java/java-decision-making' },
			{ topic: 'Java Numbers', path: 'java/java-numbers' },
			{ topic: 'Java Characters', path: 'java/java-characters' },
			{ topic: 'Java Strings', path: 'java/java-strings' },
			{ topic: 'Java Arrays', path: 'java/java-arrays' },
			{ topic: 'Java Date & Time', path: 'java/java-date-time' },
			{
				topic: 'Java Regular Expressions',
				path: 'java/java-regular-expressions',
			},
			{ topic: 'Java Methods', path: 'java/java-methods' },
			{ topic: 'Java Files and I/O', path: 'java/java-files-io' },
			{ topic: 'Java Exceptions', path: 'java/java-exceptions' },
			{ topic: 'Java Inner classes', path: 'java/java-inner-classes' },
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
			{ topic: 'Java Interfaces', path: 'java/java-interfaces' },
			{ topic: 'Java Packages', path: 'java/java-packages' },
		],
	},
	{
		title: 'Java Advanced',
		lists: [
			{ topic: 'Java Data Structures', path: 'java/java-data-structures' },
			{ topic: 'Java Collections', path: 'java/java-collections' },
			{ topic: 'Java Generics', path: 'java/java-generics' },
			{ topic: 'Java Serialization', path: 'java/java-serialization' },
			{ topic: 'Java Networking', path: 'java/java-networking' },
			{ topic: 'Java Sending Email', path: 'java/java-sending-email' },
			{ topic: 'Java Multithreading', path: 'java/java-multithreading' },
			{ topic: 'Java Applet Basics', path: 'java/java-applet-basics' },
			{ topic: 'Java – Documentation', path: 'java/java-documentation' },
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
			{ topic: 'React Components', path: 'react/react-components' },
			{ topic: 'React Class', path: 'react/react-class' },
			{ topic: 'React Props', path: 'react/react-props' },
			{ topic: 'React Events', path: 'react/react-events' },
			{ topic: 'React Conditionals', path: 'react/react-conditionals' },
			{ topic: 'React Lists', path: 'react/react-lists' },
			{ topic: 'React Forms', path: 'react/react-forms' },
			{ topic: 'React Router', path: 'react/react-router' },
			{ topic: 'React Memo', path: 'react/react-memo' },
			{ topic: 'React CSS Styling', path: 'react/react-css-styling' },
			{ topic: 'React Sass Styling', path: 'react/react-sass-styling' },
		],
	},
	{
		title: 'React Hooks',
		lists: [
			{ topic: 'What is a Hook?', path: 'react/what-is-a-hook' },
			{ topic: 'useState', path: 'react/usestate' },
			{ topic: 'useEffect', path: 'react/useeffect' },
			{ topic: 'useContext', path: 'react/usecontext' },
			{ topic: 'useRef', path: 'react/useref' },
			{ topic: 'useReducer', path: 'react/usereducer' },
			{ topic: 'useCallback', path: 'react/usecallback' },
			{ topic: 'useMemo', path: 'react/usememo' },
			{ topic: 'Custom Hooks', path: 'react/custom-hooks' },
		],
	},
];

export const vue: Course[] = [
	{
		title: 'Chapter 1: Introduction',
		lists: [
			{
				topic: 'What is vue',
				path: 'vue/what-is-vue',
			},
			{
				topic: 'Vue basics',
				path: 'vue/vue-basic',
			},
		],
	},
	{
		title: 'Chapter 2: Vue 3 basics',
		lists: [
			{
				topic: 'What is vue',
				path: 'vue/what-is-vue',
			},
			{
				topic: 'Vue basics',
				path: 'vue/vue-basic',
			},
		],
	},
];
