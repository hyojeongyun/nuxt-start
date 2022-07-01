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
    dateString: new Date().getFullYear() + "." + ("0" + (new Date().getMonth() + 1)).slice(-2) + "." + ("0" + new Date().getDate()).slice(-2),
    timeString: ("0" + new Date().getHours()).slice(-2) + ":" + ("0" + new Date().getMinutes()).slice(-2) + ":" + ("0" + new Date().getSeconds()).slice(-2),
});

// date and time
function setDateAndTime() {
    dateAndTime.dateString = new Date().getFullYear() + "." + ("0" + (new Date().getMonth() + 1)).slice(-2) + "." + ("0" + new Date().getDate()).slice(-2);
    dateAndTime.timeString = ("0" + new Date().getHours()).slice(-2) + ":" + ("0" + new Date().getMinutes()).slice(-2) + ":" + ("0" + new Date().getSeconds()).slice(-2);
}
const loading = setInterval(() => {
    setDateAndTime();
}, 1000);

// calculation
let add1, add2, sub1, sub2, mul1, mul2, div1, div2;
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
            <input v-model="add1" type="text" />
            <span> + </span>
            <input v-model="add2" type="text" />
            <span> = </span>
            <span v-if="parseInt(add1) >= 0 && parseInt(add2) >= 0">{{ parseInt(add1) + parseInt(add2) }}</span>
        </div>
        <div>
            <h3>SUB</h3>
            <input v-model="sub1" type="text" />
            <span> - </span>
            <input v-model="sub2" type="text" />
            <span> = </span>
            <span v-if="parseInt(sub1) >= 0 && parseInt(sub2) >= 0">{{ parseInt(sub1) - parseInt(sub2) }}</span>
        </div>
        <div>
            <h3>MUL</h3>
            <input v-model="mul1" type="text" />
            <span> * </span>
            <input v-model="mul2" type="text" />
            <span> = </span>
            <span v-if="parseInt(mul1) >= 0 && parseInt(mul2) >= 0">{{ parseInt(mul1) * parseInt(mul2) }}</span>
        </div>
        <div>
            <h3>DIV</h3>
            <input v-model="div1" type="text" />
            <span> / </span>
            <input v-model="div2" type="text" />
            <span> = </span>
            <span v-if="parseInt(div1) >= 0 && parseInt(div2) >= 0">{{ parseInt(div1) / parseInt(div2) }}</span>
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
