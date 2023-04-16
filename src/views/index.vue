<template>
	<div class="">
		<Nav />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Test from '@/jquery-components/Example';
import QRCode from 'qrcode';

import Nav from 'nav-components/NavTop.vue';

Test;
// With async/await
const generateQR = async (text) => {
	try {
		const image = await QRCode.toDataURL(text);
		console.log(image);
		console.log(text);
		return image;
	}
	catch (err) {
		console.error(err);
	}
};

const test = ref(
	await generateQR('https://www.youtube.com/watch?v=vEyPvak2K9o'),
);
</script>

<style lang="scss" scoped>
p {
	&:hover {
		color: blue;
	}
}
</style>
