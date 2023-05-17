<template>
	<Teleport to="body">
		<transition
			enter-active-class="animate__animated animate__fadeIn animate__fast"
			leave-active-class="animate__animated animate__fadeOut animate__fast"
		>
			<div
				class="top-0 fixed z-[1000] w-full bg-[#000000A0] h-full overflow-auto"
				v-if="
					(isShowProfile &&
						((Object.keys(userManageStore.editUser).length < 1 &&
							profileType === 'userEdit') ||
							(Object.keys(userManageStore.editUser).length > 0 &&
								profileType === 'adminEdit'))) ||
					(Object.keys(userManageStore.editUser).length < 1 &&
						profileType === 'adminAdd')
				"
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
								<!-- <v-btn color="#7e81ee" class="text-white w-60"
									>Update Profile Picture</v-btn
								> -->
							</BaseCard>
							<BaseCard class="lg:w-3/5">
								<div v-if="isLoaded">
									<h2 class="text-2xl mb-3">Edit Profile</h2>
									<hr class="border-black" />
									<form class="lg:grid grid-cols-2 gap-4 my-5">
										<v-text-field
											v-model="editName"
											label="Name"
											variant="solo"
										></v-text-field>
										<v-text-field
											v-model="editEmail"
											label="Email"
											variant="solo"
										></v-text-field>
										<v-text-field
											v-model="editPhone"
											label="Phone Number"
											variant="solo"
											class="h-10"
										></v-text-field>
										<v-textarea
											label="Bio"
											variant="solo"
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
								</div>
								<div v-else>Loading</div>
							</BaseCard>

							<!-- Comment Related Alerts Field -->
							<BaseAlert
								v-if="showAlert"
								:type="showAlertType"
								:title="showAlertTitle"
								:text="showAlertText"
							/>
						</div>
						<v-btn
							class="select-none font-bold text-red-500 text-3xl mt-10"
							@click="handleClose()"
						>
							close
						</v-btn>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script setup lang="ts">
import { useUserStore, User } from '@/stores/UserStore';
import { ref, computed, PropType, onMounted } from 'vue';
import BaseCard from 'base-components/BaseCard.vue';
import BaseAlert from 'base-components/BaseAlert.vue';
import { isShowProfile, toggleProfileOverlay } from 'compostables/NavInjector';
import { useUserManagementStore } from 'stores/UserManagementStore';

const props = defineProps({
	profileType: {
		type: String,
		default: 'userEdit',
	},
});

// Define data properties for the component
const userStore = useUserStore();
const userManageStore = useUserManagementStore();

const originalUserData = ref();
const editName = ref();
const editEmail = ref();
const editPhone = ref();
const editBio = ref();

const oriName = ref();
const oriEmail = ref();
const oriPhone = ref();
const oriBio = ref();

const oriData = ref();
const isLoaded = ref(false);

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

const handleSave = (e: Event) => {
	e.preventDefault();
	const updatedUser: User = {
		id: originalUserData.value?.id,
		created_at: null,
		email_verified_at: null,
		is_banned: null,
		updated_at: null,
		name: editName.value!.trim(),
		email: editEmail.value!.trim(),
		phone_number: editPhone.value!.trim(),
		password: '',
		bio: editBio.value!.trim(),
	};

	if (
		!editName.value ||
		!editEmail.value ||
		!editPhone.value ||
		!editBio.value
	) {
		renderAlert(
			'error',
			'Empty Field!',
			'Please do not leave any field empty!',
		);
	}
	userStore.editUser(updatedUser);
};

const handleDiscard = () => {
	editName.value = oriName.value;
	editEmail.value = oriEmail.value;
	editPhone.value = oriPhone.value;
	// editPassword.value = '';
	editBio.value = oriBio.value;
};

const handleClose = () => {
	originalUserData.value = {};
	oriData.value = {};
	(userManageStore.manageEditUser = {}), toggleProfileOverlay(false);
};

onMounted(async () => {
	await userStore.getUser();
	originalUserData.value =
		Object.keys(userManageStore.editUser).length > 0
			? userManageStore.editUser
			: userStore.user;
	editName.value = originalUserData.value?.name;
	editEmail.value = originalUserData.value?.email;
	editPhone.value = originalUserData.value?.phone_number;
	editBio.value = originalUserData.value?.bio;

	oriData.value =
		Object.keys(userManageStore.editUser).length > 0
			? userManageStore.editUser
			: userStore.user;
	oriName.value = oriData.value?.name;
	oriEmail.value = oriData.value?.email;
	oriPhone.value = oriData.value?.phone_number;
	oriBio.value = oriData.value?.bio;
	isLoaded.value = true;
});
</script>

<style></style>
