<template>
	<Teleport to="body">
		<transition
			enter-active-class="animate__animated animate__fadeIn"
			leave-active-class="animate__animated animate__fadeOut"
		>
			<div
				class="top-0 fixed z-[1000] w-full bg-[#000000A0] h-full overflow-auto"
				v-if="isShowProfile"
				:class="isShowProfile ? '' : 'overflow-auto '"
			>
				<div
					class="flex items-start justify-center min-h-screen pt-24 text-center"
					ref="container"
				>
					<div class="rounded-lg text-left overflow-hidden w-5/6 md:w-4/5">
						<div class="flex flex-col gap-5 lg:flex-row lg:justify-around">
							<BaseCard class="flex flex-col gap-7 items-center lg:w-2/5">
								<div class="text-center text-2xl">
									<p>{{ oriName }}</p>
								</div>
								<div
									class="border-2 border-black rounded-full w-44 h-44 m-auto flex justify-center items-center"
								>
									<font-awesome-icon
										class="text-[70pt]"
										:icon="['fas', 'user']"
									/>
								</div>
								<v-btn color="#7e81ee" class="text-white w-60"
									>Update Profile Picture</v-btn
								>
							</BaseCard>
							<BaseCard class="lg:w-3/5">
								<h2 class="text-2xl mb-3">Edit Profile</h2>
								<hr class="border-black" />
								<form class="lg:grid grid-cols-2 gap-4 my-5">
									<v-text-field
										:model-value="oriName"
										v-model="editName"
										label="Name"
										variant="solo"
									></v-text-field>
									<v-text-field
										:model-value="oriEmail"
										v-model="editEmail"
										label="Email"
										variant="solo"
									></v-text-field>
									<v-text-field
										:model-value="oriPhone"
										v-model="editPhone"
										label="Phone Number"
										variant="solo"
									></v-text-field>
									<div class="relative">
										<v-text-field
											:type="passwordFieldType"
											v-model="editPassword"
											label="Password"
											variant="solo"
										/>

										<span
											class="absolute top-4 right-0 grid place-content-center px-4 z-20"
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
									<v-textarea
										label="Bio"
										variant="solo"
										:model-value="oriBio"
										v-model="editBio"
									></v-textarea>
								</form>
								<div
									class="flex flex-col gap-5 items-center lg:flex-row lg:justify-end"
								>
									<v-btn
										color="#7e81ee"
										class="text-white w-full md:w-1/4"
										@click="handleSave($event)"
										>Save</v-btn
									>
									<v-btn
										color="#E32227"
										class="text-white w-full md:w-1/4"
										@click="handleDiscard()"
									>
										Discard
									</v-btn>
								</div>
							</BaseCard>
						</div>
						<button
							class="select-none font-bold text-red-500 text-3xl"
							@click="toggleProfileOverlay()"
						>
							X
						</button>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore';
import { ref, computed } from 'vue';
import BaseCard from 'base-components/BaseCard.vue';
import { isShowProfile, toggleProfileOverlay } from 'compostables/NavInjector';
// toggleProfileOverlay(true);

// Define data properties for the component
const userStore = useUserStore();
await userStore.getUser();

const passwordFieldType = ref('password');
const isPeekingPassword = ref(false);

const originalUserData = ref(userStore.user);
const editName = ref(originalUserData.value?.name);
const editEmail = ref(originalUserData.value?.email);
const editPhone = ref(originalUserData.value?.phone_number);
const editPassword = ref('');
const editBio = ref(originalUserData.value?.bio);

const oriName = ref(userStore.user?.name);
const oriEmail = ref(userStore.user?.email);
const oriPhone = ref(userStore.user?.phone_number);
const oriBio = ref(userStore.user?.bio);

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

const handleSave = (e: Event) => {
	const updatedUser = {
		id: originalUserData.value.id,
		newName: editName.value,
		newEmail: editEmail.value,
		newPhone: editPhone.value,
		newPassword: editPassword.value,
		newBio: editBio.value,
	};
	userStore.editUser(updatedUser);
};

const handleDiscard = () => {
	editName.value = oriName.value;
	editEmail.value = oriEmail.value;
	editPhone.value = oriPhone.value;
	editPassword.value = '';
	editBio.value = oriBio.value;
};
</script>

<style></style>
