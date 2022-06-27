export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            test: () => {
                console.log("test");
            },
        },
    };
});
