<script setup>
import { reactive, computed } from "vue";

// about
const posts = [
    { id: 1, title: "Vue" },
    { id: 2, title: "Nuxt" },
];

// counter
const counter = useState("counter", () => Math.round(Math.random() * 1000));
const sameCounter = useState("counter");

const dateAndTime = reactive({
    dateString: new Date().getFullYear() + "." + (new Date().getMonth() + 1) + "." + new Date().getDate(),
    timeString: new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(),
});

// date and time
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
        <br />
        <div>
            <h3>ADD</h3>
            <input v-model="data1" type="text" />
            <span> + </span>
            <input v-model="data2" type="text" />
            <span> = </span>
            <span v-if="parseInt(data1) >= 0 && parseInt(data2) >= 0">{{ parseInt(data1) + parseInt(data2) }}</span>
        </div>
        <br />
    </div>
</template>

<style scoped>
img {
    height: 100px;
}
h1 {
    text-align: center;
}
input {
    width: 50px;
}
</style>
