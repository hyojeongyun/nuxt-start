export const requestApi = (url: string, options = {}) => useFetch(url, { baseURL: useRuntimeConfig().apiBase, ...options });
export const requestPost = (url: string, params = {}) => $fetch(url, { baseURL: useRuntimeConfig().apiBase, method: "POST", body: params });
export const requestGet = (url: string, queryParams = {}) => $fetch(url, { baseURL: useRuntimeConfig().apiBase, method: "GET", params: queryParams });
