<template>
	<nav class="mx-20 my-5">
		<BaseCard
			class="flex flex-row justify-space-between"
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
				<v-btn variant="text"> About </v-btn>
				<v-btn variant="text"> Course </v-btn>
				<v-btn variant="text"> Forum </v-btn>
			</div>
			<v-avatar color="info">
				<font-awesome-icon icon="fa-regular fa-user" />
			</v-avatar>
		</BaseCard>
	</nav>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
</script>

<style lang="scss" scoped></style>
