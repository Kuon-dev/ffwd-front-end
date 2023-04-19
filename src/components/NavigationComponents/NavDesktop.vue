<template>
	<nav class="mx-20 my-5 fixed w-full pr-[8rem] z-50">
		<BaseCard
			class="flex flex-row justify-space-between items-center"
			padding-size="sm"
			add-class=""
		>
			<div class="">
				<v-avatar>
					<v-img src="../../public/Logo2.png" alt="logo"></v-img>
				</v-avatar>
			</div>

			<!-- <div class="">test</div> -->
			<div class="">
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
			<v-avatar color="info">
				<font-awesome-icon icon="fa-regular fa-user" />
			</v-avatar>
		</BaseCard>
	</nav>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import { landingNavigation } from 'nav-components/NavItems';
</script>

<style lang="scss" scoped></style>
