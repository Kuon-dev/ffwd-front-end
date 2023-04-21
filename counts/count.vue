<script setup>
import { ref } from 'vue';
const count = ref(0);

const addToCount = () => {
	console.log('HELLO FROM ADD TO COUNT');
	count.value = count.value + 1;
};

const subtractFromCount = () => {
	console.log('HELLO FROM SUBTRACT TO COUNT');
	count.value = count.value - 1;
};
</script>

<!--<script>
    export default({
        data (){
            return {
                count: 0
            }
        },
        methods: {
            addToCount(){
                this.count = this.count + 1
            },
            subtractToCount(){
                this.count = this.count - 1
            }
        }
    })
</script>-->

<template>
	<main>
		<div>
			<h4>The current count is ...</h4>
			<h1>{{ count }}</h1>
			<button @click="subtractFromCount()">-</button>"
			<button @click="addToCount()">+</button>"
		</div>
	</main>
</template>

<style scoped>
main {
	background-color: aliceblue;
	width: 100vw;
	height: 100vh;
}
</style>
