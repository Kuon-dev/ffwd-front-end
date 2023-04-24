<template>
	<!--The Whole Page-->
	<div class="h-full w-full bg-cover p-1">
		<!--Forum-->
		<div
			class="bg-white flex justify-center border rounded-lg p-9 xl:w-3/5 md:w-5/6 sm:w-6/7 xl:mx-72 md:mx-16 sm:mx-2 grid grid-cols-1 my-15"
		>
			<!-- Forum Title -->
			<div class="flex flex-row gap-4">
				<div class="flex flex-col">
					<button variant="text">
						1
						<font-awesome-icon :icon="['fas', 'caret-up']" size="xl" />
					</button>
					<button>
						2
						<font-awesome-icon :icon="['fas', 'caret-down']" size="xl" />
					</button>
				</div>
				<h2 class="place-content-start flex text-2xl font-semibold leading-10">
					How to make border-bottom line longer with CSS?
				</h2>
			</div>

			<!-- Author -->
			<div class="h-14 my-4 ml-1">
				<div class="h-14 w-full flex justify-start items-center">
					<!-- Profile Image -->
					<div class="h-14 w-12 flex justify-center items-center">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/800px-Default_pfp.svg.png"
							alt="Profile"
							class="rounded-full h-12 w-12"
						/>
					</div>
					<!-- Name -->
					<div class="ml-5">
						<div class="font-medium text-lg">Mary Maw</div>
						<!-- Author username -->
						<div class="font-light text-xs">3 days ago</div>
						<!-- Time elapsed since forum post -->
					</div>
				</div>
			</div>

			<!--Description-->
			<div class="ml-1">
				<p class="my-4">
					I would like to extend the border-bottom line longer than ever as the
					image below: \n If this is impossible and you have any suggestion to
					make a change into my code, that would be great.
				</p>

				<!-- Image -->
				<p>
					<img
						src="https://i.stack.imgur.com/HGVm7.png"
						alt="Reference Image"
					/>
				</p>

				<p class="my-4"><strong>HTML:</strong></p>

				<!-- Display Code -->
				<div class="bg-slate-950 rounded h-auto max-h-96 overflow-y-auto">
					<div class="flex justify-start mx-5 h-fit"></div>
				</div>

				<!-- Link -->
				<p class="my-4">
					"Here is my &nbsp;"
					<strong>JSFIDDLE</strong>
					": &nbsp;"
					<strong>
						<a
							href="http://jsfiddle.net/QTNr5/"
							rel="nofollow noreferrer"
							class="text-sky-700 underline hover:text-blue-700 visited:text-indigo-500"
							>http://jsfiddle.net/QTNr5/</a
						>
					</strong>
				</p>
			</div>

			<!-- Leave Comment Field -->
			<div class="relative my-3 mx-1" data-te-input-wrapper-init>
				<textarea
					class="peer block min-h-[auto] w-full rounded border border-gray-400 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
					id="comment"
					rows="3"
					placeholder="Leave a comment"
				></textarea>
				<label
					for="exampleFormControlTextarea1"
					class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
					>Comment</label
				>
			</div>

			<!-- Comment Area -->
			<div class="mt-5 mx-1">
				<!-- Comment Number -->
				<div
					class="place-content-start flex text-xl font-semibold leading-10 ml-2"
				>
					<div>6 Answers</div>
				</div>

				<!-- Comments -->
				<div class="my-1">
					<Comments />
					<Comments />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue';
import { useRouter } from 'vue-router';
import { renderHTML } from 'compostables/EditorJsInjector';
import Comments from 'forum-components/PostComment.vue';

const router = useRouter();

const path = computed(() => {
	return router.currentRoute.value.path;
});
</script>

<style lang="scss" scoped></style>
