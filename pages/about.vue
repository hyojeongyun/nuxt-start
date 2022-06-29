<script setup>
import { ref } from 'vue';
const posts = [
    { id: 1, title: "my journey" },
    { id: 2, title: "nuxt" },
];
const count = ref(0);
</script>

<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>About</h1>
        <div v-for="post in posts" :key="post.title">
            <p>{{ post.title }}</p>
        </div>
        <div>
            <span>{{ count }}</span>
            <br />
            <button @click="count++">count 증가</button>
            <button @click="count--">count 감소</button>
        </div>
    </div>
</template>

<style scoped>
img {
    height: 100px;
}
h1 {
    text-align: center;
}
</style>
