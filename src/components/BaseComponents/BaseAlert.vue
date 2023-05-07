<template>
	<Teleport to="body" class="">
		<transition
			name="fade"
			mode="out-in"
			enter-active-class="animate__animated animate__fadeInUp animate__fast"
			leave-active-class="animate__animated animate__fadeOutDown animate__fast"
		>
			<v-alert
				class="alert"
				v-if="hasAlert"
				:type="props.type"
				:title="props.title"
				:text="props.text"
			/>
		</transition>
	</Teleport>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue';
const props = defineProps({
	type: {
		type: String as PropType<'error' | 'success' | 'warning' | 'info'>,
		default: 'error',
		required: false,
	},
	title: {
		type: String,
		default: 'An error has occurred!',
		required: false,
	},
	text: {
		type: String,
		default: '',
		required: false,
	},
});

const hasAlert = ref(false);
hasAlert.value = true;

setTimeout(() => {
	hasAlert.value = false;
}, 5000);
</script>

<style lang="scss" scoped>
.alert {
	position: fixed;
	top: 5px;
	left: 5px;
	z-index: 999;
}
</style>
