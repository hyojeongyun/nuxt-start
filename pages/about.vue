<script setup>
import { reactive } from "vue";
const posts = [
    { id: 1, title: "Vue" },
    { id: 2, title: "Nuxt" },
];
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const sameCounter = useState("counter");

const dateAndTime = reactive({
    dateString: new Date().getFullYear() + "." + (new Date().getMonth() + 1) + "." + new Date().getDate(),
    timeString: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
});

function setDateAndTime() {
    dateAndTime.dateString = new Date().getFullYear() + "." + (new Date().getMonth() + 1) + "." + new Date().getDate();
    dateAndTime.timeString = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
}

const loading = setInterval(() => {
    setDateAndTime();
}, 1000);
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
            <h3>COUNTER</h3>
            <div>{{ counter }}</div>
            <div>{{ sameCounter }}</div>
            <br />
            <button @click="counter++">+</button>
            <button @click="counter--">-</button>
        </div>
        <br />
        <div>
            <p>
                <strong>Date: </strong><span>{{ dateAndTime.dateString }}</span> <br />
                <strong>Time: </strong><span>{{ dateAndTime.timeString }}</span>
            </p>
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
