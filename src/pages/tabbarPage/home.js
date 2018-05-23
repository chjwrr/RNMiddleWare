/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import {
    ACTION_DELAY_CONTROL_HUB,
    ACTION_SAVE_USER_INFO,
    ACTION_DELAY_HTTP_REQUEST,
    ACTION_MIDDLEWARE_HTTP
} from '../../action/action';
class home extends Component {

    constructor(props){
        super(props)

        this.httpCallBack = this.httpCallBack.bind(this);
        this.loading = this.loading.bind(this);
        this.success = this.success.bind(this);
        this.fail = this.fail.bind(this);
        this.complete = this.complete.bind(this);
    }
    static navigationOptions = {
        headerTitle: '首页',
        headerRight: (
            <TouchableOpacity style={{marginRight: 10}}>
                <Text>消息</Text>
            </TouchableOpacity>
        ),
        headerStyle: {elevation: 0, shadowOpacity: 0} // 导航条样式
    };

    componentDidMount() {
        this.props.controlHub(false);
        this.props.httpRequest('url', this.httpCallBack);
        this.props.httpRequest1('url');

    }

    httpCallBack(data){
        console.log('httpCallBack: ', data);
    }

    // 网络开始请求
    loading() {
        // 在此处可以进行网络请求前的操作，比如显示loading...
        console.log('网络开始请求...转圈圈');
    }
    success(responseData) {
        // 网络请求成功返回数据
        console.log('网络请求成功:', responseData);
    }
    fail(error) {
        // 网络请求失败返回数据 error
        console.log('网络请求错误:', error);

    }
    complete() {
        // 网络请求完成处理，比如取消loading...
        console.log('网络请求结束...不转圈圈');
    }


    render() {
        return <View style={styles.container}>
            <Text>redux测试：下一个页面向上一个页面传值: {this.props.nextValue}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.navigation.navigate('Contact')
            }}>
                <Text style={styles.buttonText}>点击切换到 contact </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.navigation.navigate('HomeDetail')
            }}>
                <Text style={styles.buttonText}>点击跳转到下一个页面 </Text>
            </TouchableOpacity>

            {
                this.props.isShowHub ? <TouchableOpacity style={styles.button} >
                        <Text style={styles.buttonText}>延迟5秒后自动消失 </Text>
                    </TouchableOpacity> : null
            }


            <TouchableOpacity style={styles.button} onPress={()=>{

               this.props.httpMiddleWare({
                   url: 'url',
                   params: {keu1:'1',key2: '2'},
                   loading: this.loading,
                   success: this.success,
                   fail: this.fail,
                   complete: this.complete
               });

            }}>
                <Text style={styles.buttonText}>点击发送Action，进行中间件（网络请求）</Text>
            </TouchableOpacity>

        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    button: {
        marginHorizontal: 10,
        height: 44,
        backgroundColor: 'green',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 17
    }
});

function mapStateToProps(state) {
    return {
        nextValue: state.homeRedux.nextValue,
        isShowHub: state.homeRedux.isShowHub
    }
}
function mapDispatchToProps(dispatch) {
    return {
        controlHub: (value)=>{
            dispatch(ACTION_DELAY_CONTROL_HUB(value))
        },
        httpRequest: (url,callBack)=>{
            dispatch((dispatch, getState)=>{
                fetch(url)
                    .then(response=>{
                        return response.json()
                    })
                    .then(responseData=>{
                        console.log(responseData);

                        // 异步请求接口完成，发送dispatch 保存用户信息
                        dispatch(ACTION_SAVE_USER_INFO(responseData))

                        callBack(responseData)
                    })
                    .catch(error=>{
                        console.log('网络请求错误:',error)
                        callBack(error)
                    })
                })
        },
        httpRequest1: (value)=>{
            dispatch(ACTION_DELAY_HTTP_REQUEST(value))
        },
        httpMiddleWare:(value)=>{
            dispatch(ACTION_MIDDLEWARE_HTTP(value));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(home)