import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/hy66',
        timeout: 5000
    })

    instance.interceptors.request.use(config=>{  //请求拦截器
        return config
    },err=>{
        console.log(err);
    })

    instance.interceptors.response.use(res=>{   //响应拦截器
        return res.data
    },err=>{
        console.log(err)
    })

    return instance(config);
}