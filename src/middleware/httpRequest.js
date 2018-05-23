/**
 * Created by chj on 2018/5/7.
 */
import {
    ACTION_MIDDLEWARE_HTTP
} from '../constance/actionType';
import axios from 'axios'

const timeout = 60000;

const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
};

const imageHeaders = {
    "Content-Type": "multipart/form-data",
};
export default store => next => action => {

    console.log('自定义中间件-action:',action);

    if(action.type !== ACTION_MIDDLEWARE_HTTP)
        return next(action);


    console.log('网络请求中间件的参数:',action.payload);

    const {
        url,
        method = 'POST', // 如果没有传，则默认是 POST 方式
        params = {}, // 默认 空
        loading,
        success,
        fail,
        complete
    } = action.payload;

    loading();

    // 设置url
    axios.defaults.baseURL = 'https://api.example.com';

    // 设置默认的header
    //axios.defaults.headers.DeviceId = ''

    // 设置数据类型
    //axios.defaults.headers.post['Content-Type'] = 'application/json';

    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    // 发送请求
    axios({
        url: url,
        method: method,
        headers: headers,
        data: params,
        timeout: timeout,
        responseType: 'json',
        onUploadProgress: (progressEvent)=>{
            console.log('progressEvent:', progressEvent);
        },
        onDownloadProgress: (downloadEvent)=>{
            console.log('downloadEvent:', downloadEvent);
        }
    }).then(response =>{
        success(response);
    }).catch(error =>{
        fail(error);
    }).finally(()=>{
        complete();
    })








}