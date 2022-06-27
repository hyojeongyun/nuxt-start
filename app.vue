<script setup lang="ts">
const { $interfaceTest } = useNuxtApp();
if (process.client) {
    //client side가 아니면 window객체를 가져올 수 없음
    // window.test = $interfaceTest;
    // callNativeFunction("test");
}
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss"></style>
