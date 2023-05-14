<template>
	<div></div>
</template>

<script setup lang="ts">
// import Editor from '@tinymce/tinymce-vue';
import BaseAlert from 'base-components/BaseAlert.vue';
import EditorJS from '@editorjs/editorjs';
import Code from '@editorjs/code';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';

import { handleInputChange } from 'compostables/EditorJsInjector';
import { ref, computed } from 'vue';
import { apiClient, getToken } from 'stores/BackendAPI';
</script>

<style lang="scss">
#target {
	h1 {
		font-size: 32px !important;
	}
	h2 {
		font-size: 24px !important;
	}
	h3 {
		font-size: 18.72 !important;
	}
	h4 {
		font-size: 16px !important;
	}
	h5 {
		font-size: 13.28px !important;
	}
	h6 {
		font-size: 12px !important;
	}
}
</style>
