import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../Constants/baseUrl.js";

axios.defaults.withCredentials = true;

const API = axios.create({ baseURL: baseUrl, withcredentials: true });

API.interceptors.request.use((req) => {
    const token = Cookies.get()?.token;
    if (token) {
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});

// API.interceptors.response.use((res) => {
//     console.log('interceptor', res);
//     return res;
// }, (err) => {
//     return err;
// });

export const signup = (formData) =>
    API.post("/user/signup", formData)
        .then((res) => {
            Cookies.set("token", res.data.token, { expires: 1 });
            Cookies.set("username", res.data.username, { expires: 1 });
            Cookies.set("_id", res.data._id, { expires: 1 });
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

export const login = (formData) =>
    API.post("/user/login", formData)
        .then((res) => {
            Cookies.set("token", res.data.token, { expires: 1 });
            Cookies.set("username", res.data.username, { expires: 1 });
            Cookies.set("_id", res.data._id, { expires: 1 });
            console.log('function', res);
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });

