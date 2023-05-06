import $ from 'jquery';
import { ref, computed } from 'vue';
import router from '@/router';

/* -------------------
 * | This section contains the
 * | variable exports
 * |
 */
export const isChecked = ref(false);
export const isShowSidebar = ref(false);

export const path = computed(() => {
	return router.currentRoute.value;
});

/* -------------------
 * | This section contains the
 * | functions exports
 * |
 */

export const toggleCheck = () => {
	if (isChecked.value) isChecked.value = false;
	else isChecked.value = true;
};

export const toggleShowSidebar = (value: boolean) => {
	console.log(value);
	if (value) {
		isShowSidebar.value = value;
		return;
	}
	if (isShowSidebar.value) isShowSidebar.value = false;
	else isShowSidebar.value = true;
};

export const injectRenderNav = () => {
	toggleCheck();
	const navbar = $('#nav');
	/*
	if (isChecked.value) {
	}
	else {
		//navbar.children().last().remove();
	}
  */
};
