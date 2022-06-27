export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            interfaceTest: () => {
                return LoginInterface.test;
            },
        },
    };
});
