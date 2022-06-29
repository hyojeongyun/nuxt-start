<script setup>
const posts = [
    { id: 1, title: "my journey" },
    { id: 2, title: "nuxt" },
];
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const sameCounter = useState("counter");
</script>

<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>About</h1>
        <div v-for="post in posts" :key="post.title">
            <p>{{ post.title }}</p>
        </div>
        <br />
        <div>
            <div>{{ counter }}</div>
            <div>{{ sameCounter }}</div>
            <br />
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>
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
