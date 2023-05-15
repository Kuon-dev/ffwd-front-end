<template>
	<div>
		<div class="flex h-screen flex-col justify-between border-r bg-white">
			<div class="px-4 py-6">
				<span
					class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
				>
					Logo
				</span>

				<nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1">
					<div
						v-for="(item, index) in landingNavigation"
						:key="index"
						:href="item.path"
						class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
					>
						<span class="text-sm font-medium"> {{ item }} </span>
					</div>
				</nav>
			</div>

			<div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
				<a
					href="#"
					class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
				>
					<img
						alt="Man"
						src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						class="h-10 w-10 rounded-full object-cover"
					/>

					<div>
						<p class="text-xs">
							<strong class="block font-medium">Eric Frusciante</strong>

							<span> eric@frusciante.com </span>
						</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { landingNavigation } from 'nav-components/NavItems';
import { onMounted } from 'vue';
import BaseCard from 'base-components/BaseCard.vue';
import { useUserStore } from 'stores/UserStore';

const store = useUserStore();
</script>

<style lang="scss" scoped></style>
