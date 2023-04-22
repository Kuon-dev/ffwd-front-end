import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import path from 'path';
import { fileURLToPath, URL } from 'url';
import VueRouter from 'unplugin-vue-router/vite';

const setAlias = (alias: string, path: string) => {
	return {
		find: alias,
		replacement: fileURLToPath(new URL(path, import.meta.url)),
	};
};

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			setAlias('@', './src'),
			setAlias('stores', './src/stores/'),
			setAlias('admins', './src/views/Admin/'),
			setAlias('users', './src/views/User/'),
			setAlias('views', './src/views/'),
			setAlias('compostables', './src/compostables/'),
			setAlias('base-components', './src/components/BaseComponents/'),
			setAlias('form-components', './src/components/FormComponents/'),
			setAlias('forum-components', './src/components/ForumComponents/'),
			setAlias('nav-components', './src/components/NavigationComponents/'),
			setAlias('payment-components', './src/components/PaymentComponents/'),
			setAlias('course-components', './src/components/CourseComponents/'),
			setAlias('course-data', './src/data/courses/'),
		],
	},
	plugins: [
		VueRouter({
			routesFolder: 'src/views',
		}),
		vue(),
	],

	server: {
		port: 5173,
	},
});
