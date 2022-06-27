import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: "user-store",
    state: () => {
        return {
            accessToken: "",
            refreshToken: "",
        };
    },
    getters: {
        getAccessToken: (state) => state.accessToken,
        getRefreshToken: (state) => state.refreshToken,
    },
    actions: {
        //임시 테스트용
        async requestToken() {
            const params = {
                socialType: "G",
                socialId: 123456789,
            };
            //테스트용
            const response = await requestPost("user/auth/login", params).catch((e) => console.log(e));
            //pinia에 올리기
            this.accessToken = response.accessToken;
            this.refreshToken = response.refreshToken;
        },
    },
});
