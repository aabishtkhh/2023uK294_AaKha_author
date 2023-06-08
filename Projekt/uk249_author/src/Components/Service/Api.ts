import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const BASE_URL = `http://localhost:3030/`; //backend zugreifen

/*damit verweigern wir Redundanz*/
export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

//interceptor: 
defaultAxiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    let correctPath: boolean = config.url !== "login";
    if (localStorage.getItem("accessToken") !== "" && correctPath) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
    },

    (error: AxiosError) => {
        return Promise.reject(error);
    }
)