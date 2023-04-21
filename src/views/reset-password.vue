<template>
	<div class="div-center h-full base-bg relative">
		<div class="img-overlay"></div>
		<div
			class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg drop-shadow-md"
		>
			<div class="mx-auto max-w-lg text-center">
				<h1 class="text-2xl font-bold sm:text-3xl">Reset Password</h1>

				<p class="mt-4 text-gray-500">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
					nulla eaque error neque ipsa culpa autem, at itaque nostrum!
				</p>
			</div>

			<form action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
				<div>
					<label for="password" class="sr-only">password</label>
					<div class="relative">
						<input
							type="password"
							class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							placeholder="Enter password"
							v-model="password"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="sr-only">Email</label>
					<div class="relative">
						<input
							type="password"
							class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
							placeholder="Enter password"
							v-model="passwordConf"
						/>
						<span class="text-error text-sm">
							{{ passwordError?.[0] }}
						</span>

						<span class="text-sky-500 text-sm p-2 pt-2 translate-y-6">
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
import { useRoute } from 'vue-router';

const store = useUserStore();
const route = useRoute();

const passwordError = ref();
const responseStatus = ref();

// const backendAPI = ref(import.meta.env.VITE_DEV_API)

const password = ref('');
const passwordConf = ref('');

const handleForgotPassword = async (e: Event) => {
	passwordError.value = '';
	e.preventDefault();
	if (password.value !== passwordConf.value) {
		passwordError.value = ['password does not match'];
		return;
	}

	e.preventDefault();
	const res = await store.handleResetPassword({
		password: password.value,
		password_confirmation: passwordConf.value,
		email: route.query.email,
		token: (route.params as any).token,
	});
	// debugging purpose
	passwordError.value = store.errorList;
	if (!store.errorList || store.errorList.length !== 0) {
		responseStatus.value = res?.data.status;
	}
};
</script>

<style scoped>
.base-bg {
	background-image: url('/images/house7.jpg');
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
