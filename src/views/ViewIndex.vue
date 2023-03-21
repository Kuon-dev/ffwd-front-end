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
		<button class="text-sky-400">Hide P</button>
		<p class="text-amber-300 text-md">This is a P element</p>
	</div>
</template>

<script setup lang="ts">
import Test from '@jquery/Example.ts';
import QRCode from 'qrcode';

Test;

// With promises
QRCode.toDataURL('I am a pony!')
	.then((url) => {
		console.log(url);
	})
	.catch((err) => {
		console.error(err);
	});

// With async/await
const generateQR = async (text) => {
	try {
		console.log(await QRCode.toDataURL(text));
	}
	catch (err) {
		console.error(err);
	}
};

generateQR('test');
</script>

<style lang="scss" scoped>
p {
	&:hover {
		color: blue;
	}
}
</style>
