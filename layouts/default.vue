<!-- default layout -->
<script setup lang="ts">
import TheFooter from "~~/components/TheFooter.vue";
useHead({
    title: "My App",
    charset: "utf-8",
    meta: [{ name: "description", content: "My amazing site." }],
});
</script>
<template>
    <div>
        <nav>
            <ul>
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/map">Map</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/mountain">Mountains</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/river">Rivers</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/planet">Planets</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/container">Container</NuxtLink>
                </li>
            </ul>
        </nav>
        <main>
            <Nuxt-Page />
        </main>
        <div>
            <TheFooter />
        </div>
    </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");

:root {
    --primary-color: #00c58e;
    font-family: "Jua", serif;
}

/* home route and active route will show in bold as it matches / and /about */
a.nuxt-link-active {
    font-weight: bold;
}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
    color: #00c58e;
}

main {
    margin: 0 auto;
    padding: 0 1rem;
    margin-top: 100px;
    max-width: 1280px;
    text-align: center;
}

img {
    margin-bottom: 1rem;
}

ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
li {
    margin: 0 0.5rem;
    padding: 0.25rem;
    font-size: 1.2rem;
}

nav {
    padding: 0 1rem;
}

a,
a:visited {
    text-decoration: none;
    color: inherit;
}

a:hover {
    color: #000000;
}

button,
.button {
    background: var(--primary-color);
    padding: 0.75rem 1.5rem;
    outline: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    letter-spacing: 0.5px;
    margin: 0 0.5rem;
}

button:hover,
.button:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    opacity: 0.8;
}
</style>
