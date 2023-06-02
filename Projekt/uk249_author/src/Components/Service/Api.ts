import axios, { AxiosInstance } from "axios";

const BASE_URL = `http://localhost:3001/`;

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});