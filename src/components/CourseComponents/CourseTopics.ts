interface Languages {
  topic: string,
  img: string,
  path: string,
  desc: string,
}

interface Frameworks {
  topic: string,
  img: string,
  path: string,
  desc: string,
}
interface Topics {
  languages: Languages[],
  frameworks: Frameworks[],
}

const languagesTopic: Languages[] = [
	{
		'topic': 'HTML',
		'img': 'https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e',
		'path': '/course/html',
		'desc': 'HTML (Hypertext Markup Language) is a markup language used to create and structure content for web pages and applications.',
	},
	{
		'topic': 'CSS',
		'img': 'https://f9s9t9d6.rocketcdn.me/wp-content/uploads/2020/04/Artboard-11-1024x724.png',
		'path': '/course/css',
		'desc': 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of HTML or XML documents, including colors, layouts, and fonts.',
	},
	{
		'topic': 'JavaScript',
		'img': 'https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg',
		'path': '/course/javascript',
		'desc': 'JavaScript is a programming language used primarily for front-end web development to add interactivity, validate input, and manipulate the DOM.',
	},
	{
		'topic': 'PHP',
		'img': 'https://networkrhinos.com/wp-content/uploads/2021/12/88-884234_top-notch-programming-hd-desktop-wallpapers-php-course.jpg',
		'path': '/course/php',
		'desc': 'PHP (Hypertext Preprocessor) is a server-side scripting language primarily used for web development to create dynamic web pages and perform various server-side tasks.',
	},
	{
		'topic': 'Ruby',
		'img': 'https://www.resourcifi.com/blog/wp-content/uploads/2019/05/10-Ruby-Frameworks-that-are-must-for-Developers_revised-min.jpg',
		'path': '/course/ruby',
		'desc': 'Ruby is a high-level, dynamic programming language that emphasizes simplicity and productivity. It is often used for web development and scripting.',
	},
	{
		'topic': 'Python',
		'img': 'https://i.pinimg.com/originals/c2/6a/58/c26a58af112f4cad08629893409f32c5.jpg',
		'path': '/course/python',
		'desc': 'Python is a high-level, interpreted programming language used for web development, scientific computing, data analysis, artificial intelligence, and many other applications.',
	},
	{
		'topic': 'C++',
		'img': 'https://wallpapercave.com/wp/wp4009915.jpg',
		'path': '/course/cpp',
		'desc': 'C++ is a high-performance, compiled programming language often used for system programming, game development, and other applications requiring low-level memory manipulation.',
	},
	{
		'topic': 'Java',
		'img': 'https://www.jrebel.com/sites/default/files/image/2021-03/2021%20java%20technology%20report.jpeg',
		'path': '/course/Java',
		'desc': 'Java is a class-based, object-oriented programming language often used for developing large-scale enterprise applications, Android mobile apps, and web-based applications.',
	},
];

const frameworksTopic: Frameworks[] = [
	{
		'topic': 'React',
		'img': 'https://e1.pxfuel.com/desktop-wallpaper/948/473/desktop-wallpaper-react-js-reactjs.jpg',
		'path': '/course/react',
		'desc': ' React is a JavaScript library for building user interfaces, often used for building single-page applications or mobile applications.',
	},
	{
		'topic': 'Vue',
		'img': 'https://rare-gallery.com/mocahbig/87828-vue-js-programming-code-computer-logo-hd-4k.jpg',
		'path': '/course/vue',
		'desc': 'Vue is a progressive JavaScript framework for building user interfaces, often used for building web applications.',
	},
	{
		'topic': 'Laravel',
		'img': 'https://rivo.agency/wp-content/uploads/2022/05/Image7.png',
		'path': '/course/laravel',
		'desc': 'Laravel is a PHP web application framework used for building robust, scalable web applications with features such as routing, authentication, and database management.',
	},
	{
		'topic': 'Ruby on Rails',
		'img': 'https://www.goodworklabs.com/wp-content/uploads/2017/07/Ruby-on-Rails.png',
		'path': '/course/rails',
		'desc': 'Ruby on Rails, often called just Rails, is a web application framework written in the Ruby programming language. It provides a robust set of tools for building web applications, including database management, routing, and authentication.',
	},
	{
		'topic': 'Ionic',
		'img': 'https://ionicframework.com/img/meta/ionic-framework-og.png',
		'path': '/course/ionic',
		'desc': 'Ionic is a framework for building mobile applications using web technologies such as HTML, CSS, and JavaScript. It allows developers to build hybrid mobile apps that can run on multiple platforms such as iOS and Android.',
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
  topic: string,
  path: string,
}

interface Course {
  title: string,
  lists: CourseList[],
}

// Below will consist the contents of the topics

export const vue: Course[] = [
	{
		'title': 'Chapter 1: Introduction',
		'lists': [
			{
				'topic': 'What is vue',
				'path': 'vue/what-is-vue',
			},
			{
				'topic': 'Vue basics',
				'path': 'vue/vue-basic',
			},

		],
	},
	{
		'title': 'Chapter 2: Vue 3 basics',
		'lists': [
			{
				'topic': 'What is vue',
				'path': 'vue/what-is-vue',
			},
			{
				'topic': 'Vue basics',
				'path': 'vue/vue-basic',
			},

		],
	},

];
