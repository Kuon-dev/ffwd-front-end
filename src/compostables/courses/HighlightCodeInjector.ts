import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import ruby from 'highlight.js/lib/languages/ruby';
import python from 'highlight.js/lib/languages/python';
import php from 'highlight.js/lib/languages/php';
import java from 'highlight.js/lib/languages/java';
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('vue', xml);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('cpp', cpp);
hljs.registerLanguage('css', css);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('python', python);
hljs.registerLanguage('php', php);
hljs.registerLanguage('java', java);

import $ from 'jquery';

export const highlightCode = () =>
	$('pre code').each((_i: any, block: any) => {
		hljs.highlightElement(block);
	});
