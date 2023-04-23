<template>
	<nav
		class="fixed left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed"
	>
		<BaseCard
			id="nav"
			class="w-full"
			padding-size="xs"
			add-class=""
			acrlyic
			noBg
		>
			<div class="flex flex-row justify-space-between items-center">
				<div class="p-1 sm:p-0">
					<router-link to="/">
						<v-avatar>
							<v-img src="/Logo2.png" alt="logo"></v-img>
						</v-avatar>
					</router-link>
				</div>

				<!-- <div class="">test</div> -->
				<div class="hidden">
					<router-link
						v-for="(item, index) in landingNavigation"
						:key="index"
						:to="item.path"
					>
						<v-btn variant="text">
							{{ item.title }}
						</v-btn>
					</router-link>
				</div>

				<div class="flex max-w-[2.5rem]">
					<label for="check">
						<input type="checkbox" id="check" @click="injectRenderNav()" />
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>
			</div>
			<transition
				enter-active-class="animate__animated animate__slideInLeft animate__faster"
				leave-active-class="animate__animated animate__slideOutRight animate__faster"
			>
				<div
					v-if="isChecked"
					class="flex flex-row items-center border-blue-gray-50 mt-2 border-t pt-3 justify-center"
				>
					<button @click="[injectSidebar(), toggleShowSidebar()]">
						<font-awesome-icon icon="fa-solid fa-bars-staggered" size="lg" />
					</button>
					<ol
						class="text-blue-gray-700 ml-4 flex min-w-0 whitespace-nowrap text-md leading-6 mr-4"
					>
						<li class="flex items-center">
							<span class="">
								<router-link to="/course"> course </router-link>
							</span>
							<span class="ml-2"
								>{{ path.params.lang ? ' >' : '' }} {{ path.params.lang }}</span
							>
						</li>
						<li></li>
					</ol>

					<font-awesome-icon
						icon="fa-solid fa-grip-lines-vertical"
						class="sm:block hidden"
					/>
					<ul class="hidden flex-row ml-4 sm:flex">
						<li v-for="(item, index) in landingNavigation" :key="index">
							<router-link :to="item.path" class="mx-2">
								{{ item.title }}
							</router-link>
						</li>
					</ul>
					<MobileComponent />
				</div>
			</transition>
		</BaseCard>
	</nav>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import MobileComponent from './NavSidebarMobile.vue';
import { landingNavigation } from 'nav-components/NavItems';
import {
	injectRenderNav,
	injectSidebar,
	toggleShowSidebar,
	isChecked,
	path,
} from 'compostables/NavInjector';
import { ref } from 'vue';
</script>

<style lang="scss" scoped>
label {
	display: flex;
	flex-direction: column;
	width: 70px;
	cursor: pointer;
}

label span {
	background: #7e81ee;
	border-radius: 10px;
	height: 2px;
	margin: 4px 0;
	transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
	width: 50%;
}

span:nth-of-type(2) {
	width: 100%;
}

span:nth-of-type(3) {
	width: 75%;
}

input[type='checkbox'] {
	display: none;
}

input[type='checkbox']:checked ~ span:nth-of-type(1) {
	transform-origin: bottom;
	transform: rotatez(45deg) translate(8px, 0px);
}

input[type='checkbox']:checked ~ span:nth-of-type(2) {
	transform-origin: top;
	transform: rotatez(-45deg);
}

input[type='checkbox']:checked ~ span:nth-of-type(3) {
	transform-origin: bottom;
	width: 50%;
	transform: translate(16px, -4px) rotatez(45deg);
}
</style>
