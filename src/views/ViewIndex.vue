<template>
	<div>
		<div class="flex flex-row gap-4 bg-amber-300">
			<div class="">1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
		</div>
		<Suspense>
			<template #default>
				<img :src="test" class="h-[50rem]" />
			</template>
			<template #fallback> loading </template>
		</Suspense>
		<button class="text-sky-400">Hide P</button>
		<p class="text-amber-300 text-md">This is a P element</p>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Test from '@jquery/Example.ts';
import QRCode from 'qrcode';

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
