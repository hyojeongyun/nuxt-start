<script setup lang="ts">
const { data: mountains } = await useAsyncData("mountains", () => $fetch("https://api.nuxtjs.dev/mountains"));
</script>
<template>
    <div>
        <h2>Mountains</h2>
        <ul>
            <li v-for="mountain in mountains" :key="mountain.title">
                <NuxtLink :to="'/mountains/' + mountain.slug">
                    {{ mountain.title }}
                </NuxtLink>
            </li>
        </ul>
        <br />
    </div>
</template>

<style scoped>
ul {
    display: contents;
}
</style>
