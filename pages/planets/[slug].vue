<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const { data: planet } = await useFetch("https://api.nuxtjs.dev/planets/" + route.params.slug);
</script>

<template>
    <div>
        <h1>{{ planet.title }}</h1>
        <section>
            <NuxtLink :to="'https://en.wikipedia.org/wiki/' + planet.title" target="_blank">
                <img :src="planet.image"/>
            </NuxtLink>
            <p> {{ planet.description }}</p>
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
