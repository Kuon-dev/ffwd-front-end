<template>
	<footer aria-label="Site Footer" class="bg-white">
		<div
			class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
		>
			<div class="lg:flex lg:items-end lg:justify-between">
				<div>
					<div class="flex justify-center text-teal-600 lg:justify-start">
						<img
							class="h-8"
							width="36"
							alt="Logo Image"
							src="/public/Logo2.png"
						/>
						<p class="pl-4 flex items-center text-brand text-xl">CodeGenius</p>
					</div>

					<p
						class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
					>
						Welcome to CodeGenius, where learning programming is both enjoyable
						and effective. Join us today and take the first step towards
						becoming a programming genius!
					</p>
				</div>

				<nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
					<ul
						class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
					>
						<li
							class="flex flex-row"
							v-for="items in landingNavigation"
							:key="items.path"
						>
							<router-link :to="items.path">
								<v-btn variant="text"> {{ items.title }}</v-btn>
							</router-link>
						</li>
					</ul>
				</nav>
			</div>

			<p class="mt-12 text-center text-sm text-gray-500 lg:text-right">
				Copyright &copy; 2022. All rights reserved.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { landingNavigation } from 'nav-components/NavItems';
</script>

<style lang="scss" scoped></style>
