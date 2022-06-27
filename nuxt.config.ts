import { defineNuxtConfig } from "nuxt";
const phase = process.env.PHASE; // production, development, local의 단계를 나누는 변수.
require("dotenv").config({ path: `./.env.${phase}` }); //환경변수 파일 분리
// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: ["@pinia/nuxt"],
    // vite: {
    //     plugins: [eslintPlugin()],
    // },
    typescript: {
        strict: true,
    },
    //api baseurl을 설정
    runtimeConfig: {
        apiBase: process.env.NUXT_PUBLIC_API_BASE,
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE,
        },
    },
    build: {
        analyze: true,
    },
    env: {
        NUXT_PUBLIC_API_BASE: process.env.NUXT_PUBLIC_API_BASE,
    },
    // head: {
    //     { charset : 'utf-8'},
    //     { name: 'viewport', content: 'width=device-width,initial-scale=1.0,user-scalable=no,viewport-fit=cover'}
    // }
});
