<script setup lang="ts">
const { data: mountains } = await useAsyncData("mountains", () => $fetch("https://api.nuxtjs.dev/mountains"));
</script>
<template>
    <div>
        <img src="~/assets/logo.svg" />
        
        <!-- 산 리스트 -->
        <h1>Mountains</h1>
        <ul>
            <li v-for="mountain in mountains" :key="mountain.title">
                <NuxtLink :to="'/mountains/' + mountain.slug">
                    {{ mountain.title }}
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
