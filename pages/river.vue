<script setup lang="ts">
const { data: rivers } = await useAsyncData("rivers", () => $fetch("https://api.nuxtjs.dev/rivers"));
</script>
<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>Rivers</h1>
        <ul>
            <li v-for="river in rivers" :key="river.title">
                <NuxtLink :to="'/rivers/' + river.slug">
                    {{ river.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<style scoped>
img {
    height: 100px;
}
h1 {
    text-align: center;
}
ul {
    display: contents;
}
</style>
