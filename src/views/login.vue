<template>
	<div class="h-full div-center relative w-full">
		<div class="div-center h-full base-bg relative w-full">
			<div class="img-overlay"></div>
			<div
				class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg drop-shadow-md"
			>
				<div class="mx-auto max-w-lg text-center">
					<h1 class="text-2xl font-bold sm:text-3xl">Welcome Back!</h1>

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
							<span
								class="text-error text-sm"
								v-for="(error, index) in store.errorList?.email"
								:key="index"
							>
								{{ error }}
							</span>
						</div>
					</div>

					<div>
						<label for="password" class="sr-only">Password</label>

						<div class="relative">
							<div class="relative">
								<input
									:type="passwordFieldType"
									id="password"
									class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
									placeholder="Enter password"
									autocomplete="false"
									v-model="password"
								/>

								<span
									class="absolute inset-y-0 right-0 grid place-content-center px-4 z-20"
								>
									<button @click="togglePeek($event)">
										<font-awesome-icon
											:icon="
												isPeekingPassword
													? 'fa-regular fa-eye-slash'
													: 'fa-regular fa-eye'
											"
										/>
									</button>
								</span>
							</div>

							<div class="flex flex-row relative mt-3 items-center ml-2">
								<input
									type="checkbox"
									class="rounded-md border-gray-200 p-2 text-sm shadow-sm"
									v-model="rememberMeCheckbox"
								/>
								<label class="px-5 text-gray-500"> Remember me</label>
							</div>

							<span
								class="text-error text-sm"
								v-for="(error, index) in store.errorList?.password"
								:key="index"
							>
								{{ error }}
							</span>
						</div>
					</div>

					<div class="flex items-center justify-between">
						<button
							type="submit"
							@click="handleLogin($event)"
							class="inline-block rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white"
						>
							Sign in
						</button>

						<p class="text-sm text-gray-500">
							No account?
							<router-link :to="'/signup'" class="underline" href=""
								>Sign up</router-link
							>
						</p>

						<p class="text-sm text-gray-500">
							Or
							<router-link :to="'/forgot-password'" class="underline" href=""
								>Forgot password</router-link
							>
						</p>
					</div>
					<div class="flex justify-end">
						<router-link :to="'/'">
							<font-awesome-icon icon="fa-regular fa-square-caret-left" />
							Back
						</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import LoadingPage from 'base-components/BaseLoadingPage.vue';
import { ref, onMounted } from 'vue';
import { useUserStore } from 'stores/UserStore';

const store = useUserStore();
const isPeekingPassword = ref(false);
const passwordFieldType = ref('password');

const emailError = ref();
const passwordError = ref();
const loaded = ref(false);
const rememberMeCheckbox = ref(false);

// const backendAPI = ref(import.meta.env.VITE_DEV_API)
// const getUser = ref(await store.getUser());

const togglePeek = (e: Event) => {
	e.preventDefault();
	isPeekingPassword.value = !isPeekingPassword.value;
	if (isPeekingPassword.value) {
		passwordFieldType.value = 'text';
	}
	else {
		passwordFieldType.value = 'password';
	}
};
// get user details and redirect the user
// if the token is already set, immediately redirect to dashboard
const email = ref('');
const password = ref('');

const handleLogin = async (e: Event) => {
	e.preventDefault();
	if (store.user) {
		store.loginRedirect();
		return;
	}
	const status = await store.handleLogin({
		email: email.value,
		password: password.value,
		remember_me: rememberMeCheckbox.value,
	});

	// debugging purpose
	console.log(status);
	if (status?.status === 204) {
		// console.log('successfully logged in');
	}
	if (store.errorList?.length > 0) {
		emailError.value = store.errorList.email;
		passwordError.value = store.errorList.password;
		return;
	}
};
</script>

<style scoped>
.base-bg {
	background-image: url('img3.jpg');
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
