import axios from "axios";
import ILogin from "../interfaces/ILogin";

const baseUrl = process.env.REACT_APP_FINLOGIX_API;

axios.interceptors.request.use(
    async (config) => {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token');
            config.headers = {
                Authorization: `Bearer ${token}`,
            };
        }
        return config;
    },
    (error => Promise.reject(error)),
);

export const doLogin = ({email, password}: ILogin) =>
    axios({
        method: 'post',
        url: `${baseUrl}/auth/email/login`,
        params: {
            email,
            password,
        },
    });
export const doLogout = () => {
    axios({
        method: 'post',
        url: `${baseUrl}/auth/logout`,
    })
}

export const getPostList = (per_page: number, page: number) =>
    axios({
        method: 'get',
        url: `${baseUrl}/posts`,
        params: {
            per_page,
            page,
        }
    })
