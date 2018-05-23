/**
 * Created by chj on 2018/4/17.
 */

import {combineReducers} from 'redux'

import homeRedux from './homeReduce'
import contactRedux from './contactReduce'
import momentRedux from './momentReduce'
import mineRedux from './mineReduce'
import routeRedux from './routeReduce'

const AppReducer = combineReducers({
    homeRedux,
    contactRedux,
    momentRedux,
    mineRedux,
    routeRedux
});

export default AppReducer
