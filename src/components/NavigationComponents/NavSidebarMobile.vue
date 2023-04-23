<template>
	<Teleport to="body">
		<transition
			enter-active-class="animate__animated animate__slideInRight animate__fast"
			leave-active-class="animate__animated animate__slideOutRight animate__fast"
		>
			<div
				class="top-0 fixed z-[999] w-full h-full overflow-auto"
				v-if="isShowSidebar"
				:class="isShowSidebar ? '' : 'overflow-auto '"
			>
				<div
					class="flex items-start justify-end h-full text-center closeable-wrapper"
				>
					<div
						class="overlay-bg acrlyic text-left overflow-hidden shadow-xl w-full h-full overflow-y-auto bg-white flex flex-col px-5"
						style="border-radius: 0px"
					>
						<div class="pb-8 flex items-center justify-between mt-5">
							<h3 class="font-semibold text-xl">This is a title</h3>
							<button class="select-none" @click="closeNavbarOverlay($event)">
								X
							</button>
						</div>

						<div>
							<p
								class="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-bold capitalize"
							>
								Languages
							</p>
							<ul class="space-y-1 py-2 pr-2 pl-9 list-disc">
								<li
									v-for="items in topics.languages"
									:key="items.route"
									class="antialiased font-sans text-base leading-relaxed before:content-[' '] relative list-item w-full py-1 px-1 capitalize transition-colors before:absolute before:-left-[25px] before:top-2/4 before:h-1.5 before:w-1.5 before:-translate-y-2/4 before:rounded-full before:transition-colors hover:text-blue-gray-900 hover:before:bg-blue-gray-900 font-medium text-blue-gray-900 before:bg-blue-gray-900"
								>
									<router-link
										:to="items.path"
										class="scroll-smooth closeable-wrapper-sidebar"
										@click="closeNavbarOverlay($event)"
									>
										{{ items.topic }}
									</router-link>
								</li>
							</ul>
						</div>

						<div>
							<p
								class="block antialiased font-sans text-base leading-relaxed text-blue-gray-900 font-bold capitalize"
							>
								Languages
							</p>
							<ul class="space-y-1 py-2 pr-2 pl-9 list-disc">
								<li
									v-for="items in topics.languages"
									:key="items.route"
									class="antialiased font-sans text-base leading-relaxed before:content-[' '] relative list-item w-full py-1 px-1 capitalize transition-colors before:absolute before:-left-[25px] before:top-2/4 before:h-1.5 before:w-1.5 before:-translate-y-2/4 before:rounded-full before:transition-colors hover:text-blue-gray-900 hover:before:bg-blue-gray-900 font-medium text-blue-gray-900 before:bg-blue-gray-900"
								>
									<router-link
										:to="items.path"
										class="scroll-smooth closeable-wrapper-sidebar"
										@click="closeNavbarOverlay($event)"
									>
										{{ items.topic }}
									</router-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
	injectRenderNav,
	toggleShowSidebar,
	isShowSidebar,
	path,
} from 'compostables/NavInjector';

import { topics } from 'course-components/CourseTopics';
/*
import BaseCard from 'base-components/BaseCard.vue';
import { landingNavigation } from 'nav-components/NavItems';
*/

const closeNavbarOverlay = (e) => {
	toggleShowSidebar(false);
};
</script>
