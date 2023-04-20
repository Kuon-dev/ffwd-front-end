import * as $ from 'jquery';
import router from '@/router';
import { watch, computed } from 'vue';

export const path = computed(() => {
	return router.currentRoute.value;
});

export const renderSidebarHook = watch(path, (newPath: any, oldPath: any) => {
	if (path.value.params.topic) {
		console.log('is show');
		$('#page-sidebar').show();
	}
	else {
		$('#page-sidebar').hide();
	}
});

