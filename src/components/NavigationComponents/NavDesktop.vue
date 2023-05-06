<template>
	<nav
		class="fixed left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed undefined"
	>
		<BaseCard
			class="flex flex-row justify-space-between items-center w-full"
			padding-size="sm"
			add-class=""
			acrlyic
			noBg
		>
			<div class="">
				<router-link to="/">
					<v-avatar>
						<v-img src="/Logo2.png" alt="logo"></v-img>
					</v-avatar>
				</router-link>
			</div>

			<!-- <div class="">test</div> -->
			<div class="xl:ml-[30rem] ml-[20rem]">
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
			<div class="flex gap-4">
				<v-btn color="white">
					<router-link to="/login"> Login </router-link>
				</v-btn>
				<v-btn color="#7E81FF" class="text-white">
					<router-link to="/register"> Register </router-link>
				</v-btn>
			</div>
		</BaseCard>
	</nav>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import { landingNavigation } from 'nav-components/NavItems';
</script>

<style lang="scss" scoped></style>
