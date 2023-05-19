<template>
	<div>
		<section class="bg-white" :class="errorMessage ? 'has-error' : ''">
			<div class="lg:grid lg:min-h-screen lg:grid-cols-12">
				<section
					class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
				>
					<img
						alt="Night"
						:src="image"
						class="absolute inset-0 h-full w-full object-cover opacity-80"
					/>

					<div class="hidden lg:relative lg:block lg:p-12">
						<router-link to="/" class="block text-black">
							<span class="sr-only">Home</span>
						</router-link>

						<h2
							class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"
						>
							Welcome to CodeGenius
						</h2>

						<p class="mt-4 leading-relaxed text-white/90">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
							nam dolorum aliquam, quibusdam aperiam voluptatum.
						</p>
					</div>
				</section>

				<main
					aria-label="Main"
					class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
				>
					<BaseCard class="max-w-xl lg:max-w-3xl">
						<div class="relative -mt-16 block lg:hidden">
							<a
								class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
								href="/"
							>
								<span class="sr-only">Home</span>
							</a>

							<h1
								class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
							>
								Welcome to VDA GLOBAL
							</h1>

							<p class="mt-4 leading-relaxed text-gray-500">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
							</p>
						</div>

						<div>
							<router-link :to="'/'">
								<font-awesome-icon icon="fa-regular fa-square-caret-left" />
								Back
							</router-link>
						</div>
						<form method="POST" action="" class="mt-8 grid grid-cols-6 gap-6">
							<div class="col-span-6 sm:col-span-3">
								<label
									for="FirstName"
									class="block text-sm font-medium text-gray-700"
								>
									First Name
								</label>

								<input
									type="text"
									class="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-gray-700 shadow-sm border"
									v-model="firstName"
									required
								/>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label
									for="LastName"
									class="block text-sm font-medium text-gray-700"
								>
									Last Name
								</label>

								<input
									type="text"
									class="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-gray-700 shadow-sm border"
									v-model="lastName"
									required
								/>
							</div>

							<div class="col-span-6" v-if="store.errorList?.name">
								<p
									v-for="(errors, index) in store.errorList?.name"
									:key="index"
									class="text-error"
								>
									{{ errors }}
								</p>
							</div>

							<div class="col-span-6">
								<label
									for="Email"
									class="block text-sm font-medium text-gray-700"
								>
									Email
								</label>

								<input
									type="email"
									class="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-gray-700 shadow-sm border"
									v-model="email"
									required
									autocomplete="email"
								/>
							</div>

							<div class="col-span-6" v-if="store.errorList?.email">
								<p
									v-for="(errors, index) in store.errorList?.email"
									:key="index"
									class="text-error"
								>
									{{ errors }}
								</p>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label
									for="Password"
									class="block text-sm font-medium text-gray-700"
								>
									Password
								</label>

								<input
									type="password"
									name="password"
									class="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-gray-700 shadow-sm border"
									v-model="password"
									required
									autocomplete="false"
								/>
							</div>

							<div class="col-span-6 sm:col-span-3">
								<label
									for="PasswordConfirmation"
									class="block text-sm font-medium text-gray-700"
								>
									Password Confirmation
								</label>

								<input
									type="password"
									id="PasswordConfirmation"
									name="password_confirmation"
									class="mt-1 w-full rounded-sm border-gray-200 bg-white text-sm text-gray-700 shadow-sm border"
									autocomplete="false"
									v-model="passwordConf"
									required
								/>
							</div>

							<!-- password error -->
							<div class="col-span-6" v-if="store.errorList?.password">
								<p
									v-for="(errors, index) in store.errorList?.password"
									:key="index"
									class="text-error"
								>
									{{ errors }}
								</p>
							</div>

							<div class="col-span-6">
								<label for="MarketingAccept" class="flex gap-4">
									<input
										type="checkbox"
										id="MarketingAccept"
										name="marketing_accept"
										class="h-5 w-5 rounded-sm border"
									/>

									<span class="text-sm text-gray-700 mt-[0.4rem]">
										I want to receive emails about events, product updates and
										company announcements.
									</span>
								</label>
							</div>

							<div class="col-span-6">
								<p class="text-sm text-gray-500">
									By creating an account, you agree to our
									<a href="#" class="text-gray-700 underline">
										terms and conditions
									</a>
									and
									<a href="#" class="text-gray-700 underline">privacy policy</a
									>.
								</p>
							</div>

							<div class="col-span-6 sm:flex sm:items-center sm:gap-4">
								<button
									class="inline-block shrink-0 rounded-sm border border-brand bg-brand px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
									@click.stop="submitRegister($event)"
								>
									Create an account
								</button>

								<p class="mt-4 text-sm text-gray-500 sm:mt-0">
									Already have an account?
									<a href="#" class="text-gray-700 underline">Log in</a>.
								</p>
							</div>
						</form>

						<!-- error box -->
						<div
							v-for="(errors, index) in store.errorList?.password"
							:key="index"
						></div>
					</BaseCard>
				</main>
			</div>
		</section>
	</div>
	<BaseAlert
		v-if="showAlert"
		:type="showAlertType"
		:title="showAlertTitle"
		:text="showAlertText"
	/>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import BaseAlert from 'base-components/BaseAlert.vue';
import { ref } from 'vue';
import { useUserStore } from 'stores/UserStore';

const store = useUserStore();

const image = ref('/img1.png');

const firstName = ref<String>('');
const lastName = ref<String>('');
const email = ref<String>('');
const password = ref<String>('');
const passwordConf = ref<String>('');

const errorMessage = ref('');

const showAlert = ref<Boolean>(false);
const showAlertTitle = ref<string>('');
const showAlertText = ref<string>('');
const showAlertType = ref<'error' | 'success' | 'warning' | 'info'>('error');
const renderAlert = (
	type: 'error' | 'success' | 'warning' | 'info',
	title: string,
	text: string,
) => {
	showAlertType.value = type ?? 'error';
	showAlertTitle.value = title;
	showAlertText.value = text;
	showAlert.value = true;
	setTimeout(() => {
		showAlert.value = false;
	}, 8000);
};

const submitRegister = async (e: Event) => {
	e.preventDefault();
	if (password.value !== passwordConf.value) {
		errorMessage.value = 'Password does not match';
		return;
	}

	const body = {
		name: firstName.value,
		email: email.value,
		password: password.value,
		password_confirmation: passwordConf.value,
	};
	const res = await store.handleRegister(body);
	if (res) {
		store.loginRedirect();
	}
	else {
		renderAlert('error', 'an error has occured', 'please try again later');
	}
};
</script>

<style scoped lang="scss">
.has-error {
	&input :invalid {
		border-color: red;
	}
}

input {
	height: 2rem;
	padding: 1rem;
}
</style>
