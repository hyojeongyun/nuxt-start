<script>
export default {
    data() {
        return {
            show: false,
        };
    },
};
</script>
<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>Hello! 👋</h1>

        <!-- 산 리스트 -->
        <LazyMountainList v-if="show" />
        <button v-if="!show" @click="show = true">Show List</button>
        <button v-if="show" @click="show = false">Close List</button>
    </div>
</template>

<style scoped>
button {
    font-family: "Jua", sans-serif;
}
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
