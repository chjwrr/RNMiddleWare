/**
 * Created by chj on 2018/4/17.
 */
import * as Action from '../constance/actionType';
import {createAction} from 'redux-actions';


export const ACTION_SAVE_ROUTEID = (value)=>{
    return {
        type: Action.ACTION_SAVE_ROUTEID,
        payload: value
    }
};
export const ACTION_SEND_VALUE_FROM_NEXT = createAction(Action.ACTION_SEND_VALUE_FROM_NEXT)
// export const ACTION_SEND_VALUE_FROM_NEXT = (value)=>{
//     return {
//         type: Action.ACTION_SEND_VALUE_FROM_NEXT,
//         payload: value
//     }
// };
export const ACTION_CHANGE_HUB_STATE = (value)=>{
    return {
        type: Action.ACTION_CHANGE_HUB_STATE,
        payload: value
    }
};
export const ACTION_SAVE_USER_INFO = (value)=>{
    return {
        type: Action.ACTION_SAVE_USER_INFO,
        payload: value
    }
};
// 延迟5秒后 隐藏/显示 首页 hub  redux-thunk
export const ACTION_DELAY_CONTROL_HUB = (value)=>{
    return (dispatch, getState)=>{
        setTimeout(()=>{
            dispatch(ACTION_CHANGE_HUB_STATE(value))
        }, 5000)
    }
};
// 异步 网络请求 redux-thunk
export const ACTION_DELAY_HTTP_REQUEST = (url)=>{
    return (dispatch, getState)=>{
        fetch(url)
            .then(response=>{
                return response.json()
            })
            .then(responseData=>{
                console.log(responseData);

                // 异步请求接口完成，发送dispatch 保存用户信息
                dispatch(ACTION_SAVE_USER_INFO(responseData))

            })
            .catch(error=>{
                console.log('网络请求错误1:',error)
            })
    }
};
// 异步 网络请求  redux-promise
export const ACTION_DELAY_HTTP_REQUEST_PROMISE = (url)=>{
    return {
        type: Action.ACTION_DISPATCH_PROMISE,
        payload: fetch(url)
    }
};
export const ACTION_DELAY_HTTP_REQUEST_PROMISE_MIDDLEWARE = (url)=>{
    return {
        type: Action.ACTION_DISPATCH_PROMISE_MIDDLEWARE,
        payload: fetch(url)
    }
};

//httpAction,用于测试自定义中间件
export const ACTION_MIDDLEWARE_HTTP = createAction(Action.ACTION_MIDDLEWARE_HTTP);


