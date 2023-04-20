<template>
	<div class="mb-10">
		<BaseCard paddingSize="md">
			<div id="md-convert"></div>
		</BaseCard>
	</div>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import { injectMarkdownContent } from 'compostables/courses/CourseSidebarDataInjector';
import { computed, watch, ref } from 'vue';
import { useRouter } from 'vue-router';

// const mdContent = mdConvert.makeHtml(MarkdownFile)
// console.log(mdContent);

const router = useRouter();
const path = computed(() => {
	return router.currentRoute.value.params.lang;
});

// jquery usage
injectMarkdownContent(path.value);
</script>

<style lang="scss">
#md-convert {
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	margin: 0;
	color: #24292f;
	background-color: #ffffff;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans',
		Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
	font-size: 16px;
	line-height: 1.5;
	word-wrap: break-word;
}

#md-convert .octicon {
	display: inline-block;
	fill: currentColor;
	vertical-align: text-bottom;
}

#md-convert h1:hover .anchor .octicon-link:before,
#md-convert h2:hover .anchor .octicon-link:before,
#md-convert h3:hover .anchor .octicon-link:before,
#md-convert h4:hover .anchor .octicon-link:before,
#md-convert h5:hover .anchor .octicon-link:before,
#md-convert h6:hover .anchor .octicon-link:before {
	width: 16px;
	height: 16px;
	content: ' ';
	display: inline-block;
	background-color: currentColor;
	-webkit-mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
	mask-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>");
}

#md-convert details,
#md-convert figcaption,
#md-convert figure {
	display: block;
}

#md-convert summary {
	display: list-item;
}

#md-convert [hidden] {
	display: none !important;
}

#md-convert a {
	background-color: transparent;
	color: #0969da;
	text-decoration: none;
}

#md-convert abbr[title] {
	border-bottom: none;
	text-decoration: underline dotted;
}

#md-convert b,
#md-convert strong {
	font-weight: 600;
}

#md-convert dfn {
	font-style: italic;
}

#md-convert h1 {
	margin: 0.67em 0;
	font-weight: 600;
	padding-bottom: 0.3em;
	font-size: 2em;
	border-bottom: 1px solid hsla(210, 18%, 87%, 1);
}

#md-convert mark {
	background-color: #fff8c5;
	color: #24292f;
}

#md-convert small {
	font-size: 90%;
}

#md-convert sub,
#md-convert sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
}

#md-convert sub {
	bottom: -0.25em;
}

#md-convert sup {
	top: -0.5em;
}

#md-convert img {
	border-style: none;
	max-width: 100%;
	box-sizing: content-box;
	background-color: #ffffff;
}

#md-convert code,
#md-convert kbd,
#md-convert pre,
#md-convert samp {
	font-family: monospace;
	font-size: 1em;
}

#md-convert figure {
	margin: 1em 40px;
}

#md-convert hr {
	box-sizing: content-box;
	overflow: hidden;
	background: transparent;
	border-bottom: 1px solid hsla(210, 18%, 87%, 1);
	height: 0.25em;
	padding: 0;
	margin: 24px 0;
	background-color: #d0d7de;
	border: 0;
}

#md-convert input {
	font: inherit;
	margin: 0;
	overflow: visible;
	font-family: inherit;
	font-size: inherit;
	line-height: inherit;
}

#md-convert [type='button'],
#md-convert [type='reset'],
#md-convert [type='submit'] {
	-webkit-appearance: button;
}

#md-convert [type='checkbox'],
#md-convert [type='radio'] {
	box-sizing: border-box;
	padding: 0;
}

#md-convert [type='number']::-webkit-inner-spin-button,
#md-convert [type='number']::-webkit-outer-spin-button {
	height: auto;
}

#md-convert [type='search']::-webkit-search-cancel-button,
#md-convert [type='search']::-webkit-search-decoration {
	-webkit-appearance: none;
}

#md-convert ::-webkit-input-placeholder {
	color: inherit;
	opacity: 0.54;
}

#md-convert ::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}

#md-convert a:hover {
	text-decoration: underline;
}

#md-convert ::placeholder {
	color: #6e7781;
	opacity: 1;
}

#md-convert hr::before {
	display: table;
	content: '';
}

#md-convert hr::after {
	display: table;
	clear: both;
	content: '';
}

#md-convert table {
	border-spacing: 0;
	border-collapse: collapse;
	display: block;
	width: max-content;
	max-width: 100%;
	overflow: auto;
}

#md-convert td,
#md-convert th {
	padding: 0;
}

#md-convert details summary {
	cursor: pointer;
}

#md-convert details:not([open]) > *:not(summary) {
	display: none !important;
}

#md-convert a:focus,
#md-convert [role='button']:focus,
#md-convert input[type='radio']:focus,
#md-convert input[type='checkbox']:focus {
	outline: 2px solid #0969da;
	outline-offset: -2px;
	box-shadow: none;
}

#md-convert a:focus:not(:focus-visible),
#md-convert [role='button']:focus:not(:focus-visible),
#md-convert input[type='radio']:focus:not(:focus-visible),
#md-convert input[type='checkbox']:focus:not(:focus-visible) {
	outline: solid 1px transparent;
}

#md-convert a:focus-visible,
#md-convert [role='button']:focus-visible,
#md-convert input[type='radio']:focus-visible,
#md-convert input[type='checkbox']:focus-visible {
	outline: 2px solid #0969da;
	outline-offset: -2px;
	box-shadow: none;
}

#md-convert a:not([class]):focus,
#md-convert a:not([class]):focus-visible,
#md-convert input[type='radio']:focus,
#md-convert input[type='radio']:focus-visible,
#md-convert input[type='checkbox']:focus,
#md-convert input[type='checkbox']:focus-visible {
	outline-offset: 0;
}

#md-convert kbd {
	display: inline-block;
	padding: 3px 5px;
	font: 11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
		Liberation Mono, monospace;
	line-height: 10px;
	color: #24292f;
	vertical-align: middle;
	background-color: #f6f8fa;
	border: solid 1px rgba(175, 184, 193, 0.2);
	border-bottom-color: rgba(175, 184, 193, 0.2);
	border-radius: 6px;
	box-shadow: inset 0 -1px 0 rgba(175, 184, 193, 0.2);
}

#md-convert h1,
#md-convert h2,
#md-convert h3,
#md-convert h4,
#md-convert h5,
#md-convert h6 {
	margin-top: 24px;
	margin-bottom: 16px;
	font-weight: 600;
	line-height: 1.25;
	color: #7e81ff;
}

#md-convert h2 {
	font-weight: 600;
	padding-bottom: 0.3em;
	font-size: 1.5em;
	// border-bottom: 1px solid hsla(210,18%,87%,1);
}

#md-convert h3 {
	font-weight: 600;
	font-size: 1.25em;
}

#md-convert h4 {
	font-weight: 600;
	font-size: 1em;
}

#md-convert h5 {
	font-weight: 600;
	font-size: 0.875em;
}

#md-convert h6 {
	font-weight: 600;
	font-size: 0.85em;
	color: #57606a;
}

#md-convert p {
	margin-top: 0;
	margin-bottom: 10px;
}

#md-convert blockquote {
	margin: 0;
	padding: 0 1em;
	color: #57606a;
	border-left: 0.25em solid #d0d7de;
}

#md-convert ul,
#md-convert ol {
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 2em;
	list-style: disc;
}

#md-convert ol ol,
#md-convert ul ol {
	list-style-type: lower-roman;
}

#md-convert ul ul ol,
#md-convert ul ol ol,
#md-convert ol ul ol,
#md-convert ol ol ol {
	list-style-type: lower-alpha;
}

#md-convert dd {
	margin-left: 0;
}

#md-convert tt,
#md-convert code,
#md-convert samp {
	font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
		Liberation Mono, monospace;
	font-size: 12px;
}

#md-convert pre {
	margin-top: 0;
	margin-bottom: 0;
	font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
		Liberation Mono, monospace;
	font-size: 12px;
	word-wrap: normal;
}

#md-convert .octicon {
	display: inline-block;
	overflow: visible !important;
	vertical-align: text-bottom;
	fill: currentColor;
}

#md-convert input::-webkit-outer-spin-button,
#md-convert input::-webkit-inner-spin-button {
	margin: 0;
	-webkit-appearance: none;
	appearance: none;
}

#md-convert::before {
	display: table;
	content: '';
}

#md-convert::after {
	display: table;
	clear: both;
	content: '';
}

#md-convert > *:first-child {
	margin-top: 0 !important;
}

#md-convert > *:last-child {
	margin-bottom: 0 !important;
}

#md-convert a:not([href]) {
	color: inherit;
	text-decoration: none;
}

#md-convert .absent {
	color: #cf222e;
}

#md-convert .anchor {
	float: left;
	padding-right: 4px;
	margin-left: -20px;
	line-height: 1;
}

#md-convert .anchor:focus {
	outline: none;
}

#md-convert ul,
ol {
	margin-top: 0;
	margin-bottom: 16px;
	font-weight: 500;
}

#md-convert p,
#md-convert blockquote,
#md-convert dl,
#md-convert table,
#md-convert pre,
#md-convert details {
	margin-top: 0;
	margin-bottom: 16px;
	color: #424242;
}

#md-convert blockquote > :first-child {
	margin-top: 0;
}

#md-convert blockquote > :last-child {
	margin-bottom: 0;
}

#md-convert h1 .octicon-link,
#md-convert h2 .octicon-link,
#md-convert h3 .octicon-link,
#md-convert h4 .octicon-link,
#md-convert h5 .octicon-link,
#md-convert h6 .octicon-link {
	color: #24292f;
	vertical-align: middle;
	visibility: hidden;
}

#md-convert h1:hover .anchor,
#md-convert h2:hover .anchor,
#md-convert h3:hover .anchor,
#md-convert h4:hover .anchor,
#md-convert h5:hover .anchor,
#md-convert h6:hover .anchor {
	text-decoration: none;
}

#md-convert h1:hover .anchor .octicon-link,
#md-convert h2:hover .anchor .octicon-link,
#md-convert h3:hover .anchor .octicon-link,
#md-convert h4:hover .anchor .octicon-link,
#md-convert h5:hover .anchor .octicon-link,
#md-convert h6:hover .anchor .octicon-link {
	visibility: visible;
}

#md-convert h1 tt,
#md-convert h1 code,
#md-convert h2 tt,
#md-convert h2 code,
#md-convert h3 tt,
#md-convert h3 code,
#md-convert h4 tt,
#md-convert h4 code,
#md-convert h5 tt,
#md-convert h5 code,
#md-convert h6 tt,
#md-convert h6 code {
	padding: 0 0.2em;
	font-size: inherit;
}

#md-convert summary h1,
#md-convert summary h2,
#md-convert summary h3,
#md-convert summary h4,
#md-convert summary h5,
#md-convert summary h6 {
	display: inline-block;
}

#md-convert summary h1 .anchor,
#md-convert summary h2 .anchor,
#md-convert summary h3 .anchor,
#md-convert summary h4 .anchor,
#md-convert summary h5 .anchor,
#md-convert summary h6 .anchor {
	margin-left: -40px;
}

#md-convert summary h1,
#md-convert summary h2 {
	padding-bottom: 0;
	border-bottom: 0;
}

#md-convert ul.no-list,
#md-convert ol.no-list {
	padding: 0;
	list-style-type: none;
}

#md-convert ol[type='a'] {
	list-style-type: lower-alpha;
}

#md-convert ol[type='A'] {
	list-style-type: upper-alpha;
}

#md-convert ol[type='i'] {
	list-style-type: lower-roman;
}

#md-convert ol[type='I'] {
	list-style-type: upper-roman;
}

#md-convert ol[type='1'] {
	list-style-type: decimal;
}

#md-convert div > ol:not([type]) {
	list-style-type: decimal;
}

#md-convert ul ul,
#md-convert ul ol,
#md-convert ol ol,
#md-convert ol ul {
	margin-top: 0;
	margin-bottom: 0;
}

#md-convert li > p {
	margin-top: 16px;
}

#md-convert li + li {
	margin-top: 0.25em;
}

#md-convert dl {
	padding: 0;
}

#md-convert dl dt {
	padding: 0;
	margin-top: 16px;
	font-size: 1em;
	font-style: italic;
	font-weight: 600;
}

#md-convert dl dd {
	padding: 0 16px;
	margin-bottom: 16px;
}

#md-convert table th {
	font-weight: 600;
}

#md-convert table th,
#md-convert table td {
	padding: 6px 13px;
	border: 1px solid #d0d7de;
}

#md-convert table tr {
	background-color: #ffffff;
	border-top: 1px solid hsla(210, 18%, 87%, 1);
}

#md-convert table tr:nth-child(2n) {
	background-color: #f6f8fa;
}

#md-convert table img {
	background-color: transparent;
}

#md-convert img[align='right'] {
	padding-left: 20px;
}

#md-convert img[align='left'] {
	padding-right: 20px;
}

#md-convert .emoji {
	max-width: none;
	vertical-align: text-top;
	background-color: transparent;
}

#md-convert span.frame {
	display: block;
	overflow: hidden;
}

#md-convert span.frame > span {
	display: block;
	float: left;
	width: auto;
	padding: 7px;
	margin: 13px 0 0;
	overflow: hidden;
	border: 1px solid #d0d7de;
}

#md-convert span.frame span img {
	display: block;
	float: left;
}

#md-convert span.frame span span {
	display: block;
	padding: 5px 0 0;
	clear: both;
	color: #24292f;
}

#md-convert span.align-center {
	display: block;
	overflow: hidden;
	clear: both;
}

#md-convert span.align-center > span {
	display: block;
	margin: 13px auto 0;
	overflow: hidden;
	text-align: center;
}

#md-convert span.align-center span img {
	margin: 0 auto;
	text-align: center;
}

#md-convert span.align-right {
	display: block;
	overflow: hidden;
	clear: both;
}

#md-convert span.align-right > span {
	display: block;
	margin: 13px 0 0;
	overflow: hidden;
	text-align: right;
}

#md-convert span.align-right span img {
	margin: 0;
	text-align: right;
}

#md-convert span.float-left {
	display: block;
	float: left;
	margin-right: 13px;
	overflow: hidden;
}

#md-convert span.float-left span {
	margin: 13px 0 0;
}

#md-convert span.float-right {
	display: block;
	float: right;
	margin-left: 13px;
	overflow: hidden;
}

#md-convert span.float-right > span {
	display: block;
	margin: 13px auto 0;
	overflow: hidden;
	text-align: right;
}

#md-convert code,
#md-convert tt {
	padding: 0.2em 0.4em;
	margin: 0;
	font-size: 85%;
	white-space: break-spaces;
	background-color: rgba(175, 184, 193, 0.2);
	border-radius: 6px;
}

#md-convert code br,
#md-convert tt br {
	display: none;
}

#md-convert del code {
	text-decoration: inherit;
}

#md-convert samp {
	font-size: 85%;
}

#md-convert pre code {
	font-size: 100%;
}

#md-convert pre > code {
	padding: 0;
	margin: 0;
	word-break: normal;
	white-space: pre;
	background: transparent;
	border: 0;
}

#md-convert .highlight {
	margin-bottom: 16px;
}

#md-convert .highlight pre {
	margin-bottom: 0;
	word-break: normal;
}

#md-convert .highlight pre,
#md-convert pre {
	padding: 16px;
	overflow: auto;
	font-size: 85%;
	line-height: 1.45;
	background-color: #f6f8fa;
	border-radius: 6px;
}

#md-convert pre code,
#md-convert pre tt {
	display: inline;
	max-width: auto;
	padding: 0;
	margin: 0;
	overflow: visible;
	line-height: inherit;
	word-wrap: normal;
	background-color: transparent;
	border: 0;
}

#md-convert .csv-data td,
#md-convert .csv-data th {
	padding: 5px;
	overflow: hidden;
	font-size: 12px;
	line-height: 1;
	text-align: left;
	white-space: nowrap;
}

#md-convert .csv-data .blob-num {
	padding: 10px 8px 9px;
	text-align: right;
	background: #ffffff;
	border: 0;
}

#md-convert .csv-data tr {
	border-top: 0;
}

#md-convert .csv-data th {
	font-weight: 600;
	background: #f6f8fa;
	border-top: 0;
}

#md-convert [data-footnote-ref]::before {
	content: '[';
}

#md-convert [data-footnote-ref]::after {
	content: ']';
}

#md-convert .footnotes {
	font-size: 12px;
	color: #57606a;
	border-top: 1px solid #d0d7de;
}

#md-convert .footnotes ol {
	padding-left: 16px;
}

#md-convert .footnotes ol ul {
	display: inline-block;
	padding-left: 16px;
	margin-top: 16px;
}

#md-convert .footnotes li {
	position: relative;
}

#md-convert .footnotes li:target::before {
	position: absolute;
	top: -8px;
	right: -8px;
	bottom: -8px;
	left: -24px;
	pointer-events: none;
	content: '';
	border: 2px solid #0969da;
	border-radius: 6px;
}

#md-convert .footnotes li:target {
	color: #24292f;
}

#md-convert .footnotes .data-footnote-backref g-emoji {
	font-family: monospace;
}

#md-convert .pl-c {
	color: #6e7781;
}

#md-convert .pl-c1,
#md-convert .pl-s .pl-v {
	color: #0550ae;
}

#md-convert .pl-e,
#md-convert .pl-en {
	color: #8250df;
}

#md-convert .pl-smi,
#md-convert .pl-s .pl-s1 {
	color: #24292f;
}

#md-convert .pl-ent {
	color: #116329;
}

#md-convert .pl-k {
	color: #cf222e;
}

#md-convert .pl-s,
#md-convert .pl-pds,
#md-convert .pl-s .pl-pse .pl-s1,
#md-convert .pl-sr,
#md-convert .pl-sr .pl-cce,
#md-convert .pl-sr .pl-sre,
#md-convert .pl-sr .pl-sra {
	color: #0a3069;
}

#md-convert .pl-v,
#md-convert .pl-smw {
	color: #953800;
}

#md-convert .pl-bu {
	color: #82071e;
}

#md-convert .pl-ii {
	color: #f6f8fa;
	background-color: #82071e;
}

#md-convert .pl-c2 {
	color: #f6f8fa;
	background-color: #cf222e;
}

#md-convert .pl-sr .pl-cce {
	font-weight: bold;
	color: #116329;
}

#md-convert .pl-ml {
	color: #3b2300;
}

#md-convert .pl-mh,
#md-convert .pl-mh .pl-en,
#md-convert .pl-ms {
	font-weight: bold;
	color: #0550ae;
}

#md-convert .pl-mi {
	font-style: italic;
	color: #24292f;
}

#md-convert .pl-mb {
	font-weight: bold;
	color: #24292f;
}

#md-convert .pl-md {
	color: #82071e;
	background-color: #ffebe9;
}

#md-convert .pl-mi1 {
	color: #116329;
	background-color: #dafbe1;
}

#md-convert .pl-mc {
	color: #953800;
	background-color: #ffd8b5;
}

#md-convert .pl-mi2 {
	color: #eaeef2;
	background-color: #0550ae;
}

#md-convert .pl-mdr {
	font-weight: bold;
	color: #8250df;
}

#md-convert .pl-ba {
	color: #57606a;
}

#md-convert .pl-sg {
	color: #8c959f;
}

#md-convert .pl-corl {
	text-decoration: underline;
	color: #0a3069;
}

#md-convert g-emoji {
	display: inline-block;
	min-width: 1ch;
	font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
	font-size: 1em;
	font-style: normal !important;
	font-weight: 400;
	line-height: 1;
	vertical-align: -0.075em;
}

#md-convert g-emoji img {
	width: 1em;
	height: 1em;
}

#md-convert .task-list-item {
	list-style-type: none;
}

#md-convert .task-list-item label {
	font-weight: 400;
}

#md-convert .task-list-item.enabled label {
	cursor: pointer;
}

#md-convert .task-list-item + .task-list-item {
	margin-top: 4px;
}

#md-convert .task-list-item .handle {
	display: none;
}

#md-convert .task-list-item-checkbox {
	margin: 0 0.2em 0.25em -1.4em;
	vertical-align: middle;
}

#md-convert .contains-task-list:dir(rtl) .task-list-item-checkbox {
	margin: 0 -1.6em 0.25em 0.2em;
}

#md-convert .contains-task-list {
	position: relative;
}

#md-convert .contains-task-list:hover .task-list-item-convert-container,
#md-convert .contains-task-list:focus-within .task-list-item-convert-container {
	display: block;
	width: auto;
	height: 24px;
	overflow: visible;
	clip: auto;
}

#md-convert ::-webkit-calendar-picker-indicator {
	filter: invert(50%);
}
</style>
