<template>
	<div
		class="xl:w-3/5 md:w-5/6 sm:w-6/7 xl:mx-72 md:mx-16 sm:mx-2 grid grid-cols-1 my-15"
	>
		<!-- Forum Title -->
		<h2 class="place-content-start flex text-2xl font-semibold leading-10">
			How to make border-bottom line longer with CSS?
		</h2>

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
				<img src="https://i.stack.imgur.com/HGVm7.png" alt="Reference Image" />
			</p>

			<p class="my-4"><strong>HTML:</strong></p>

			<!-- Display Code -->
			<div class="bg-slate-950 rounded h-auto max-h-96 overflow-y-auto">
				<div class="flex justify-start mx-5 h-fit">
					<!--<pre class="my-1">
                        <code class="text-white grid ">
                            <span class="flex gap-1">
                                <span class="gap-0">&lt;</span>
                                <span class="text-amber-500">table</span>
                                <span class="text-sky-500">id</span>
                                <span>=</span>
                                <span class="text-teal-400">"showRoom"</span>
                                <span>&gt;</span>
                            </span>
                            <span class="flex gap-1">
                                <span>&lt;</span>
                                <span class="text-amber-500">tr</span>
                                <span class="text-sky-500">class</span>
                                <span>=</span>
                                <span class="text-teal-400">"box_shadow"</span>
                                <span>&gt;</span>
                            </span>
                            <span class="flex gap-1">
                                <span>  &lt;</span>
                                <span class="text-amber-500">td</span>
                                <span class="text-sky-500">class</span>
                                <span>=</span>
                                <span class="text-teal-400">"text_plant_address"</span>
                                <span>&gt;</span>

                                <span>&lt;</span>
                                <span class="text-amber-500">span</span>
                                <span class="text-sky-500">class</span>
                                <span>=</span>
                                <span class="text-teal-400">"text_plant"</span>
                                <span>&gt;</span>

                                <span>"Plant 1"</span>

                                <span>&lt;/</span>
                                <span class="text-amber-500">span</span>
                                <span>&gt;</span>
                            </span>
                            <span class="flex gap-1">
                                <span>      &lt;</span>
                                <span class="text-amber-500">span</span>
                                <span class="text-sky-500">class</span>
                                <span>=</span>
                                <span class="text-teal-400">"text_address"</span>
                                <span>&gt;</span>

                                <span>Street 2, Dong An Industrial Park</span>

                                <span>&lt;/</span>
                                <span class="text-amber-500">span</span>
                                <span>&gt;</span>
                            </span>
                            <span class="flex gap-1">
                                <span>  &lt;/</span>
                                <span class="text-amber-500">td</span>
                                <span>&gt;</span>
                            </span>
                            <span class="flex gap-1">
                                <span>&lt;/</span>
                                <span class="text-amber-500">tr</span>
                                <span>&gt;</span>
                            </span>
                        </code>
                    </pre>-->
				</div>
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

		<!-- Votes -->
		<!--<div class="my-2">
            <div class="grid grid-cols-2 grid-rows-1 flex justify-center items-center h-10 w-64">-->
		<!-- Upvotes -->
		<!--<div class="flex justify-start">
                    <div class="h-10 w-11">
                        <button name="upvote" class="flex justify-center h-8 w-8 m-1 cursor-pointer">
                            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
                                <path d = "M2 25h32L18 9 2 25Z" fill="DarkBlue"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="font-sm font-light text-slate-500 flex items-center"> 16 votes </div>
                </div>

                Downvotes
                <div class="flex justify-start">
                    <div class="h-10 w-11">
                        <button name="downvote" class="flex justify-center h-8 w-8 m-1 cursor-pointer">
                            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
                                <path d = "M2 11h32L18 27 2 11Z" fill="DarkBlue"> </path>
                            </svg>
                        </button>
                    </div>

                    <div class="font-sm font-light text-slate-500 flex items-center"> 2 votes </div>
                </div>
            </div>
        </div>-->

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
				<!-- One of the Comments -->
				<hr />

				<div>
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

					<!--Answer-->
					<div>
						<p></p>
						<p class="my-4">Just add Padding</p>

						<!--Code Example-->
						<div class="bg-slate-950 rounded h-auto max-h-96 overflow-y-auto">
							<div class="flex justify-start mx-5 h-fit">
								<!--<pre class="my-1">
                                    <code class="text-white grid">
                                        <span class="flex gap-1">
                                            <span class="text-sky-500">table</span>
                                            <span class="text-sky-500">tr</span>
                                            <span class="text-sky-500">td</span>
                                            <span class="text-sky-500">.text_plant</span>
                                            <span> &#123; </span>
                                        </span>
                                        <span class="flex gap-1">
                                            <span class="text-violet-500">border-bottom</span>
                                            <span>: </span>
                                            <span class="text-amber-500">1 px</span>
                                            <span>solid</span>
                                            <span class="text-amber-500">#D0D0D0</span>
                                            <span>;</span>
                                        </span>
                                        <span class="flex gap-1">
                                            <span class="text-violet-500">padding</span>
                                            <span>: </span>
                                            <span class="text-amber-500">0</span>
                                            <span class="text-amber-500">20px</span>
                                            <span>;</span>
                                            <span class="text-neutral-400">/* or how longer you want */</span>
                                        </span>
                                        <span>&#125;</span>
                                    </code>
                                </pre>-->
							</div>
						</div>

						<!-- Votes
                        <div class="my-2">
                            <div class="grid grid-cols-2 grid-rows-1 flex justify-center items-center h-10 w-64">
                                 Upvotes
                                <div class="flex justify-start">
                                    <div class="h-10 w-11">
                                        <button name="upvote" class="flex justify-center h-8 w-8 m-1 cursor-pointer">
                                            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
                                                <path d = "M2 25h32L18 9 2 25Z" fill="DarkBlue"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="font-sm font-light text-slate-500 flex items-center"> 16 votes </div>
                                </div>

                                 Downvotes
                                <div class="flex justify-start">
                                    <div class="h-10 w-11">
                                        <button name="downvote" class="flex justify-center h-8 w-8 m-1 cursor-pointer">
                                            <svg aria-hidden="true" width="36" height="36" viewBox="0 0 36 36">
                                                <path d = "M2 11h32L18 27 2 11Z" fill="DarkBlue"> </path>
                                            </svg>
                                        </button>
                                    </div>

                                    <div class="font-sm font-light text-slate-500 flex items-center"> 2 votes </div>
                                </div>
                            </div>
                        </div>-->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
