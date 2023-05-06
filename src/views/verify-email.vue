<template>
	<div class="div-center h-full base-bg relative">
		<div class="img-overlay"></div>
		<Suspense>
			<template #default>
				<div
					class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg drop-shadow-md"
				>
					<div
						class="mx-auto max-w-lg text-center"
						v-if="store.user || store.errorList.status"
					>
						<h1 class="text-2xl font-bold sm:text-3xl">
							{{
								store.user
									? 'Verify your email'
									: `Error ${store.errorList.status} : ${store.errorList.message} `
							}}
						</h1>
						<p class="mt-4 text-gray-500" v-if="store.user">
							We have sent an email to
							<span class="font-bold"> {{ userEmail }}</span
							>. to verify your email address and activate your account.
							<br />
							<br />
							<button
								class="text-sky-500"
								@click="handleResendEmailVerification()"
							>
								click here
							</button>
							if you have not received the email.
						</p>

						<p class="mt-4 text-gray-500" v-else>Please login again</p>
					</div>

					<div v-if="!store.user">
						<div class="flex justify-center pt-10">
							<button
								class="inline-block rounded-lg bg-brand px-5 py-3 text-sm font-medium text-white"
							>
								<router-link :to="'/login'">
									<font-awesome-icon icon="fa-regular fa-square-caret-left" />
									Back to login page
								</router-link>
							</button>
						</div>
					</div>
				</div>
			</template>
			<template #fallback>
				<div
					class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white rounded-lg drop-shadow-md"
				>
					<div class="mx-auto max-w-lg text-center">
						<h1 class="text-2xl font-bold sm:text-3xl">Verify your email</h1>
						<p class="mt-4 text-gray-500">
							{{ store.authUser }}
						</p>
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
				</div>
			</template>
		</Suspense>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useUserStore } from 'stores/UserStore';

const store = useUserStore();

const emailError = ref();
const responseStatus = ref();

// const backendAPI = ref(import.meta.env.VITE_DEV_API)
const userEmail = computed(() => {
	return (store.user as any).email;
});

const email = ref('');

const handleForgotPassword = async (e: Event) => {
	e.preventDefault();
	emailError.value = '';
	responseStatus.value = '';
	const status = await store.handleForgotPassword(email.value);
};

const handleResendEmailVerification = () => {
	store.handleResendEmailVerification();
};

const hasLoaded = ref();

onMounted(async () => {
	const user = await store.getUser();
	hasLoaded.value = user;
});
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
