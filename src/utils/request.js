import axios from 'axios'
import { Message } from 'element-ui';

const service = axios.create({
    baseURL: '',
    timeout: 5000,
})

// todo axios 请求拦截,添加token请求头
// service.interceptors.request.use();

// axios 响应拦截
service.interceptors.response.use(response => {
    // console.log(response, 'response')
    const res = response.data
    if(res.code !== 200) {
        Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 5 * 1000
        })
        // todo 缺少token处理,code业务码为定义
        if(res.code === 5000) {
            Message({
                message: '未登陆',
                type: 'warning',
                duration: 5 * 1000
            })
        }
    } else {
        return res
    }
    return Promise.reject(new Error(res.message || 'Error'))
    // 处理响应结果
}, error => {
    // 处理错误响应
    Message({
        // 错误消息弹出
        message: '服务器错误',
        type: 'error'
    })
    return Promise.reject(error);
})


export default service