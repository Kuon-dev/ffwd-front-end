import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import path from 'path';
import { fileURLToPath, URL } from 'url';

const setAlias = (alias: String, path: String) => {
	return {
		find: alias,
		replacement: fileURLToPath(new URL(path, import.meta.url)),
	};
};

// https://vitejs.dev/config/
export default defineConfig({
	resolve:{
		alias:[
			setAlias('@', './src'),
			setAlias('@stores', './src/stores/'),
			setAlias('@admins', './src/views/Admin/'),
			setAlias('@users', './src/views/User/'),
			setAlias('@views', './src/views/'),
			setAlias('@base-components', './src/components/BaseComponents/'),
			setAlias('@form-components', './src/components/FormComponents/'),
			setAlias('@nav-components', './src/components/NavigationComponents/'),
			setAlias('@payment-components', './src/components/PaymentComponents/'),
			setAlias('@jquery', './src/jquery/'),
		],
	},
	plugins: [
		vue(),
	],

	server: {
		port: 5173,
	},
});
