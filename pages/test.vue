<script setup lang="ts">
import { useUserStore } from "~~/store/user/auth";

const userStore = useUserStore();
//테스트용 요청
userStore.requestToken();
</script>
<template></template>
