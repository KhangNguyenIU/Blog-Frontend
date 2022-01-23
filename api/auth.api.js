import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASEURL


export const isAuth = () => axios({
    method: 'post',
    url: '/auth',
    headers: {
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        // 'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true
})

export const googleLogin = (tokenId) => axios({
    method: "post",
    url: '/auth/google-login',
    headers: {
        'Accept': '*/*',
        // 'Content-Type': 'application/x-www-form-urlencoded'
    },
    withCredentials: true,
    data: tokenId
})