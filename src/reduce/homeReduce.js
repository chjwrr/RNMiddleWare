/**
 * Created by chj on 2018/4/17.
 */
import * as Action from '../constance/actionType';

const initState = {
    nextValue:'',
    isShowHub: true,
    userInfo: {}
};

export default (state = initState, action)=>{
    switch (action.type){
        case Action.ACTION_SEND_VALUE_FROM_NEXT:
            return Object.assign({},state, {
                nextValue: action.payload
            });
            break;
        case Action.ACTION_CHANGE_HUB_STATE:
            return Object.assign({},state, {
                isShowHub: action.payload
            });
            break;
        case Action.ACTION_SAVE_USER_INFO:
            return Object.assign({},state, {
                userInfo: action.payload
            });
            break;


        default:
            return state;
    }
}