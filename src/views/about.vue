<template>
	<div class="top-1 h-full flex flex-col bg-gray-100 overflow-hidden">
		<Nav />
		<section>
			<div
				class="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl"
			>
				<div class="relative flex-col items-start m-auto align-middle">
					<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
						<div
							class="relative items-center gap-12 m-auto lg:inline-flex md:order-first"
						>
							<div class="max-w-xl text-center lg:text-left">
								<div>
									<p
										class="text-2xl font-medium tracking-tight text-black sm:text-4xl"
									>
										About us
									</p>
									<p
										class="max-w-xl mt-4 text-base tracking-tight text-gray-600"
									>
										Our goal is to make learning programming enjoyable and
										effective for beginners by providing a user-friendly
										interface and engaging learning materials.
									</p>
								</div>
								<div
									class="flex flex-col items-center justify-center gap-3 mt-10 lg:flex-row lg:justify-start"
								></div>
							</div>
						</div>
						<div class="order-first block w-full mt-12 aspect-square lg:mt-0">
							<img
								class="object-cover object-center w-full mx-auto bg-gray-300 border lg:ml-auto"
								alt="hero"
								src="/img1.png"
							/>
						</div>
					</div>
				</div>
				<div>
					<div class="pt-12 mx-auto lg:max-w-7xl">
						<dl
							class="grid grid-cols-1 gap-6 space-y-0 lg:gap-24 lg:grid-cols-3 text-left"
						>
							<div>
								<div>
									<p class="mt-5 text-lg font-semibold leading-6 text-black">
										Our goals
									</p>
								</div>
								<div class="mt-2 text-base text-gray-600">
									Our goal is to make learning programming enjoyable and
									effective for beginners by providing a user-friendly interface
									and engaging learning materials.
								</div>
							</div>
							<div>
								<div>
									<p class="mt-5 text-lg font-semibold leading-6 text-black">
										What We Offer
									</p>
								</div>
								<div class="mt-2 text-base text-gray-600">
									Our platform offers a variety of programming courses, hands-on
									coding activities, and a community forum for users to interact
									with each other and get help from experienced programmers.
								</div>
							</div>
							<div>
								<div>
									<p class="mt-5 text-lg font-semibold leading-6 text-black">
										Our Vision
									</p>
								</div>
								<div class="mt-2 text-base text-gray-600">
									We believe that everyone should have access to quality
									programming education, regardless of their background or
									experience.
								</div>
							</div>
						</dl>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import Nav from 'nav-components/NavTop.vue';
</script>

<style scoped></style>
