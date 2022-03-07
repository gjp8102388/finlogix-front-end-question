import axios from "axios";
import ILogin from "../interfaces/ILogin";

const baseUrl = process.env.REACT_APP_FINLOGIX_API;

axios.interceptors.request.use(
    async (config) => {
        if (localStorage.getItem('token')) {
            config.headers = {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            };
        }
        return config;
    },
    (error => Promise.reject(error)),
);

export const login = ({email, password}: ILogin) =>
    axios({
        method: 'post',
        url: `${baseUrl}/auth/email/login`,
        params: {
            email,
            password,
        },
    });

export const getPostList = (per_page:number,page:number)=>
    axios({
        method:'get',
        url: `${baseUrl}/posts`,
        params:{
            per_page,
            page,
        }
    })
