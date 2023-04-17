<template>
	<!--The whole page-->
	<div>
		<!--Create Forum Card-->
		<div class="justify-center flex m-20">
			<!--form card-->
			<div
				class="w-full max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
			>
				<!--Title box-->
				<div class="mx-4 -mt-6 translate-y-0">
					<!--title-->
					<div class="shadow-pink pe-1 rounded-lg bg-pink-500 py-3 w-48">
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
									class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
									placeholder=" "
									max="200"
								/>
								<label
									class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
								>
									Title
								</label>
							</div>

							<!--Rich Text Editor-->
							<div class="flex items-center justify-center">
								<div
									class="w-full max-w-6xl mx-auto rounded-lg bg-white border shadow-lg p-5 text-black"
								>
									<!--Box Inside-->
									<div
										class="border border-gray-200 overflow-hidden rounded-md"
									>
										<!--Buttons-->
										<div
											class="w-full flex border-b border-gray-200 text-xl text-gray-600 overflow-x-auto"
										>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-bold"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-italic"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-underline"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-link"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-image"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-code-tags"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-file-code"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-list-bulleted"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 mr-1 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-list-numbered"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-l border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-align-left"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-align-center"></i>
											</button>
											<button
												class="outline-none focus:outline-none border-r border-gray-200 w-10 h-10 hover:text-indigo-500 active:bg-gray-50"
											>
												<i class="mdi mdi-format-align-right"></i>
											</button>
										</div>
										<div class="w-full h-96">
											<!-- <input type="textarea" x-ref="wysiwyg" class="w-full h-full resize-none p-2 align-top" name="description "> -->
											<iframe
												x-ref="wysiwyg"
												class="w-full h-96 overflow-y-auto"
											></iframe>
										</div>
									</div>
								</div>
							</div>
							<!--https://tailwindcomponents.com/component/wysiwyg-->
						</div>
					</form>

					<div class="form-check form-switch my-7 ml-1 flex items-end">
						<button
							class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							data-ripple-light="true"
							name="SignIn"
						>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- https://www.material-tailwind.com/docs/html/card#pricing-card -->
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css);
/**
    * tailwind.config.js
    * module.exports = {
    *   variants: {
    *     extend: {
    *       backgroundColor: ['active'],
    *     }
    *   },
    * }
    */
.active\:bg-gray-50:active {
	--tw-bg-opacity: 1;
	background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
}
</style>
