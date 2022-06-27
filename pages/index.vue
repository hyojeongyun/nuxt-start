<script setup lang="ts">
useHead({
    title: "My App",
    charset: "utf-8",
    meta: [{ name: "description", content: "My amazing site." }],
});
</script>
<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>Hello! 👋</h1>
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
