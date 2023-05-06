<template>
	<div class="top-1 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />

		<section class="flex flex-row w-full mt-10 justify-center">
			<div class="rounded-lg flex-row flex xl:w-9/12 w-full">
				<div class="w-full lg:px-6 lg:ml-10 2xl:ml-0 justify-center">
					<section
						class="overflow-hidden relative flex lg:items-center lg:flex-row flex-col h-screen py-20 lg:py-5 bg-white"
					>
						<div
							class="w-full py-12 px-4 lg:py-16 lg:px-20 z-20 flex flex-col basis-4/12 lg:ml-20"
						>
							<h2
								class="text-3xl font-extrabold text-black dark:text-white sm:text-6xl"
							>
								<span class="block"> The modern place to learn code </span>
							</h2>
							<p class="text-md mt-4 text-gray-400">
								Learn code for any languages that you want to learn!
							</p>
							<div class="lg:mt-0 lg:flex-shrink-0 mt-5">
								<v-btn color="#7E81FF" class="text-white">Get started</v-btn>
							</div>
						</div>

						<div class="flex items-center gap-8 p-8 lg:p-16 basis-8/12">
							<div class="w-10/12 rounded-lg flex basis-1/2">
								<img src="code3.png" class="w-full rounded-lg" alt="Tree" />
							</div>
							<div class="basis-1/2">
								<img src="/code1.png" class="mb-8 rounded-lg" alt="Tree" />
								<img src="/code2.png" class="rounded-lg" alt="Tree" />
							</div>
						</div>
					</section>

					<section
						class="overflow-hidden relative lg:flex lg:items-center bg-sky-50"
					>
						<div
							class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 lg:flex-row flex-col flex items-center justify-around gap-8"
						>
							<div class="flex basis-1/4 flex-col">
								<h2
									class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
								>
									<span class="block">Language </span>
								</h2>
								<p class="text-md mt-4 text-gray-400">
									You can learn any language and frameworks available on the web
									at the website up to date with detailed information
								</p>
							</div>

							<div class="bg-purple-50 p-5 rounded-lg drop-shadow-md">
								<Carousel
									:items-to-show="2.5"
									:wrap-around="true"
									:autoplay="2000"
									class="max-w-3xl"
								>
									<Slide v-for="(lang, index) in data" :key="index">
										<Card
											class="h-full"
											:image="lang?.img !== '' ? lang?.img : '/img1.png'"
											:route="lang?.path"
											:title="lang?.topic"
											:card-text="lang?.desc"
										/>
									</Slide>
									<template #addons>
										<Navigation />
									</template>
								</Carousel>
							</div>
						</div>
					</section>

					<section
						class="overflow-hidden relative lg:flex lg:items-center bg-red-50"
					>
						<div
							class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 flex flex-col basis-4/12"
						>
							<h2
								class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
							>
								<span class="block"> Community Forum </span>
							</h2>
							<p class="text-md mt-4 text-gray-400">
								Discusss problems relating to coding with our community!
							</p>
						</div>
						<div
							class="flex items-center gap-8 p-8 lg:p-24 basis-8/12 flex-row flex-wrap"
						>
							<img
								src="/code1.png"
								class="flex rounded-lg basis-1/2"
								alt="Tree"
							/>
							<img
								src="/code2.png"
								class="flex rounded-lg basis-1/2"
								alt="Tree"
							/>
						</div>
					</section>

					<section>
						<BaseFooter />
					</section>
				</div>
			</div>
		</section>
	</div>

	<footer>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<p class="text-4xl">CodeGenius</p>
					<div class="flex flex-col gap-4 bg-black">
						<ul>
							<div class="flex flex-row gap-4">
								<div class="w-1/5">
									<li><a href="#">Home</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">About</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Course</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Forum</a></li>
								</div>
								<div class="w-1/5">
									<li><a href="#">Contact</a></li>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom-bar">
			<p>&copy; 2023 Learn Coding. All rights reserved.</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
import { computed } from 'vue';
import Card from 'course-components/CourseCard.vue';
import { topics } from 'course-components/CourseTopics';
import BaseFooter from 'base-components/BaseFooter.vue';

import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

const data = computed(() => {
	const newArr: any = [];
	return newArr.concat(topics.languages, topics.frameworks);
});

console.log(data.value);
</script>

<style lang="scss" scoped>
::-webkit-scrollbar-track {
	background-color: #ffffff00;
}
</style>
