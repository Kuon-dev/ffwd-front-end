<template>
	<div>
		<div>
			<span>
				<font-awesome-icon icon="fa-regular fa-square" />
			</span>
			<span style="--delay: 0.1s">
				<font-awesome-icon icon="fa-regular fa-square" />
			</span>
			<span style="--delay: 0.3s">
				<font-awesome-icon icon="fa-regular fa-square" />
			</span>
			<span style="--delay: 0.4s">
				<font-awesome-icon icon="fa-regular fa-square" />
			</span>
			<span style="--delay: 0.5s">
				<font-awesome-icon icon="fa-regular fa-square" />
			</span>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
div {
	display: flex;
	height: 100vh;
	align-items: center;
	justify-content: center;
}

@keyframes arrows {
	0%,
	100% {
		color: black;
		transform: translateY(0);
	}
	50% {
		color: #3ab493;
		transform: translateY(20px);
	}
}

span {
	--delay: 0s;
	animation: arrows 1s var(--delay) infinite ease-in;
}
</style>
