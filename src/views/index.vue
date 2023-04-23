<template>
	<div class="">
		<Nav />
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
import Nav from 'nav-components/NavTop.vue';
</script>

<style lang="scss" scoped>
p {
	&:hover {
		color: blue;
	}
}
</style>
