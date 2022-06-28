<script setup lang="ts">
const { data: planets } = await useAsyncData("planets", () => $fetch("https://api.nuxtjs.dev/planets"));
</script>
<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>Planets</h1>
        <ul>
            <li v-for="planet in planets" :key="planet.title">
                <NuxtLink :to="'/planets/' + planet.slug">
                    {{ planet.title }}
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
