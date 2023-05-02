<template>
	<div class="top-1 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />

		<section class="flex flex-row w-full mt-10 justify-center">
			<div class="rounded-lg flex-row flex xl:w-8/12 w-full xl:mx-0 mx-20">
				<div
					class="w-full lg:mt-36 mt-20 lg:px-6 lg:ml-10 2xl:ml-0 justify-center"
				>
					<section class="overflow-hidden relative lg:flex lg:items-center">
						<div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
							<h2
								class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
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
						<div class="flex items-center gap-8 p-8 lg:p-24">
							<div class="w-10/12 rounded-lg flex basis-1/2">
								<img src="code3.png" class="w-full rounded-lg" alt="Tree" />
							</div>
							<div class="basis-1/2">
								<img src="/code1.png" class="mb-8 rounded-lg" alt="Tree" />
								<img src="/code2.png" class="rounded-lg" alt="Tree" />
							</div>
						</div>
					</section>

					<section></section>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
</script>

<style lang="scss" scoped></style>
