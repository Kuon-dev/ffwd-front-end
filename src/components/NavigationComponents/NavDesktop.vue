<template>
	<nav
		class="fixed left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed undefined"
	>
		<BaseCard
			class="flex flex-row justify-space-between items-center w-full"
			padding-size="sm"
			add-class=""
			acrlyic
			noBg
		>
			<div class="">
				<router-link to="/">
					<v-avatar>
						<v-img src="/Logo2.png" alt="logo"></v-img>
					</v-avatar>
				</router-link>
			</div>

			<!-- <div class="">test</div> -->
			<div class="xl:ml-[30rem] ml-[20rem]">
				<router-link
					v-for="(item, index) in landingNavigation"
					:key="index"
					:to="item.path"
				>
					<v-btn variant="text">
						{{ item.title }}
					</v-btn>
				</router-link>
			</div>
			<div class="flex gap-4" v-if="!store.user">
				<v-btn color="white">
					<router-link to="/login"> Login </router-link>
				</v-btn>
				<v-btn color="#7E81FF" class="text-white">
					<router-link to="/register"> Register </router-link>
				</v-btn>
			</div>
			<div v-else>
				<v-container fluid>
					<v-row justify="center">
						<v-menu min-width="200px" rounded :close-on-content-click="false">
							<template v-slot:activator="{ props }">
								<v-btn icon v-bind="props">
									<v-avatar color="#7E81FF" size="large">
										<span class="text-sm text-white">{{
											store.user.name
										}}</span>
									</v-avatar>
								</v-btn>
							</template>
							<v-card>
								<v-card-text>
									<div class="mx-auto text-center">
										<v-avatar color="#7E81FF" size="large">
											<span class="text-sm text-white">{{
												store.user.name
											}}</span>
										</v-avatar>
										<h3 class="mt-2">{{ store.user.name }}</h3>
										<p class="text-caption mt-1">
											{{ store.user.email }}
										</p>
										<v-divider class="my-1"></v-divider>
										<v-btn
											rounded
											variant="text"
											@click="toggleProfileOverlay(true)"
										>
											Edit Account
										</v-btn>

										<v-divider class="my-1"></v-divider>
										<v-btn rounded variant="text" @click="store.handleLogout()">
											Logout
										</v-btn>
									</div>
								</v-card-text>
							</v-card>
						</v-menu>
					</v-row>
				</v-container>
			</div>
		</BaseCard>
		<BaseUserProfile />
	</nav>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import BaseCard from 'base-components/BaseCard.vue';
import { landingNavigation } from 'nav-components/NavItems';
import { useUserStore } from 'stores/UserStore';
import BaseUserProfile from 'base-components/BaseUserProfile.vue';
import { toggleProfileOverlay } from 'compostables/NavInjector';

const store = useUserStore();
</script>

<style lang="scss" scoped></style>
