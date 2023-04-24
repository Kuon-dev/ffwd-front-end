<template>
	<!--The whole page-->
	<div
		class="h-full w-full bg-cover bg-center bg-no-repeat content-start p-1"
		v-if="store.user"
	>
		<!--backgrond image-->
		<!--Create Forum Card-->
		<div class="justify-center flex gap-4 w-full">
			<!--form card-->
			<div
				class="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<!--Title box-->
				<div class="mx-4 -mt-6 translate-y-0">
					<!--title-->
					<div class="shadow-brand pe-1 rounded-lg bg-brand py-3 w-48">
						<h4 class="my-2 text-lg text-center font-bold text-white">
							Create a post
						</h4>
					</div>
				</div>

				<!--Form-->
				<div class="text-secondary flex-1 p-6 pb-0">
					<form action="role">
						<div class="flex flex-col gap-4">
							<!--Title Field-->
							<div class="relative h-10 w-full min-w-[200px]">
								<input
									type="Text"
									class="text-brand peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-brand focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									max="200"
									v-model="title"
								/>
								<label
									class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-brand transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-brand peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-brand peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-brand peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-brand peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-brand"
								>
									Title
								</label>
							</div>

							<BaseEditor
								server="/api/forums/create"
								:user="store.user"
								:title="title"
							/>
							<!--https://tailwindcomponents.com/component/wysiwyg-->
						</div>
					</form>

					<div class="form-check form-switch my-7 ml-1 flex items-end">
						<button
							class="middle none center rounded-lg bg-brand py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-brand/20 transition-all hover:shadow-lg hover:shadow-brand/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hidden"
							data-ripple-light="true"
						>
							Post
						</button>
					</div>
				</div>
			</div>

			<div>
				<BaseCard class="border-gray-200 w-full" paddingSize="sm">
					<h2 class="text-brand font-semibold text-lg my-2">
						Posting to CodeGeniuses
					</h2>
					<ol class="list-decimal px-5">
						<li>Be civil to each other</li>
						<li>Stay on-topic</li>
						<li>Provide relevant information</li>
						<li>Search before posting</li>
						<li>Follow the rules</li>
					</ol>
				</BaseCard>
			</div>
		</div>
		<!-- https://www.material-tailwind.com/docs/html/card#pricing-card -->
	</div>
	<div v-else>Please log in</div>
</template>

<script setup lang="ts">
import BaseCard from 'base-components/BaseCard.vue';
import BaseEditor from 'base-components/BaseEditor.vue';
import { onMounted, ref } from 'vue';
import { useUserStore } from 'stores/UserStore';

const store = useUserStore();

const title = ref('');
const getText = (e: Event) => {
	console.log(e);
};

onMounted(async () => {
	const user = ref(await store.getUser());
});
</script>

<style lang="scss" scoped></style>
