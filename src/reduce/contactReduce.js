/**
 * Created by chj on 2018/4/17.
 */
import * as Action from '../constance/actionType';

const initState = {
    result: '',
    middlewareResult: ''
};

export default (state = initState, action)=>{
    switch (action.type){
        case Action.ACTION_DISPATCH_PROMISE:

            return Object.assign({},state, {
                result: String(action.payload)
            });
            break;

        case Action.ACTION_DISPATCH_PROMISE_MIDDLEWARE_PENDING:

            return Object.assign({},state, {
                middlewareResult: '请求中'
            });

            break;
        case Action.ACTION_DISPATCH_PROMISE_MIDDLEWARE_FULFILLED:

            return Object.assign({},state, {
                middlewareResult: '请求成功'
            });

            break;
        case Action.ACTION_DISPATCH_PROMISE_MIDDLEWARE_REJECTED:

            return Object.assign({},state, {
                middlewareResult:'请求失败'
            });

            break;



        default:
            return state;
    }
}