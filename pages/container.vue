<template>
    <div>
        <img src="~/assets/logo.svg" />
        <h1>Container</h1> <br />
        <div class="container">
            Container Component
            <nuxt-child />
        </div>
        <br />
        <NuxtLink to="/container/content1"><button>Content1</button></NuxtLink>
        <NuxtLink to="/container/content2"><button>Content2</button></NuxtLink>
    </div>
</template>

<style>
.container {
    width: 300px;
    height: 300px;
    background-color: pink;
    z-index: 0;
}
</style>