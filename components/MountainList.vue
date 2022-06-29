<script setup lang="ts">
const { data: mountains } = await useAsyncData("mountains", () => $fetch("https://api.nuxtjs.dev/mountains"));
</script>
<template>
    <div>
        <div class="list">
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
        <br />
    </div>
</template>

<style scoped>
ul {
    display: contents;
    text-align: center;
}
.list {
    text-align: center;
    width: 300px;
    border: 1px solid green;
    left: 50%;
}

div {
    margin: 0px auto;
}
</style>
