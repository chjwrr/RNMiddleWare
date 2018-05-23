/**
 * Created by chj on 2018/4/20.
 */
import * as Action from '../constance/actionType';

const initState = {
    routes:[],
};

export default (state = initState, action)=>{
    switch (action.type){
        case Action.ACTION_SAVE_ROUTEID:
            return Object.assign({},state, {
                routes: action.payLoad
            });
            break;

        default:
            return state;
    }
}