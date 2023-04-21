<template>
	<div class="div-center h-full base-bg relative">
		<div class="img-overlay"></div>
		<div
			class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg drop-shadow-md"
		>
			<div class="mx-auto max-w-lg text-center">
				<h1 class="text-2xl font-bold sm:text-3xl">Forgot Password</h1>

				<p class="mt-4 text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
					nulla eaque error neque ipsa culpa autem, at itaque nostrum!
				</p>
			</div>

			<form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
				<div>
					<label for="email" class="sr-only">Email</label>
					<div class="relative">
						<input
							type="email"
							class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							placeholder="Enter email"
							v-model="email"
						/>
						<span class="text-error text-sm">
							{{ emailError?.[0] }}
						</span>

						<span class="text-sky-500 text-sm">
							{{ responseStatus }}
						</span>
					</div>
				</div>

				<div class="flex items-center justify-between">
					<button
						type="submit"
						@click="handleForgotPassword($event)"
						class="inline-block rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white"
					>
						Enter
					</button>

					<p class="text-sm text-gray-500">
						No account?
						<router-link :to="'/signup'" class="underline" href=""
							>Sign up</router-link
						>
					</p>
				</div>
				<div class="flex justify-end">
					<router-link :to="'/login'">
						<font-awesome-icon icon="fa-regular fa-square-caret-left" />
						Back
					</router-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from 'stores/UserStore';

const store = useUserStore();

const emailError = ref();
const responseStatus = ref();

// const backendAPI = ref(import.meta.env.VITE_DEV_API)

const email = ref('');

const handleForgotPassword = async (e: Event) => {
	e.preventDefault();
	emailError.value = '';
	responseStatus.value = '';
	const status = await store.handleForgotPassword(email.value);
	// debugging purpose
	emailError.value = store.errorList;
	if (!store.errorList || store.errorList.length !== 0) {
		responseStatus.value = (status as any).data.status;
	}
};
</script>

<style scoped>
.base-bg {
	background-image: url('/Fotor_AI.png');
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
}

.img-overlay {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	background-color: #000000;
	opacity: 0.25;
	overflow: hidden;
	height: 100%;
	transition: 0.5s ease;
}
</style>
