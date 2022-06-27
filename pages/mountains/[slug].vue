<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { data: mountain } = await useFetch("https://api.nuxtjs.dev/mountains/" + route.params.slug);
</script>

<template>
    <div>
        <h1>{{ mountain.title }}</h1>
        <section>
            <NuxtLink :to="'https://en.wikipedia.org/wiki/' + mountain.title" target="_blank">
                <img :src="mountain.image" />
            </NuxtLink>
            <p>{{ mountain.description }}</p>
        </section>
        <button @click="$router.go(-1)">Back</button>
    </div>
</template>

<style scoped>
article {
    max-width: 600px;
    margin: 0 auto;
}
img {
    height: 500px;
}
p {
    text-align: center;
}
</style>
