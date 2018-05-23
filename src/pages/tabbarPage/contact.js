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
    ACTION_DELAY_HTTP_REQUEST_PROMISE,
    ACTION_DELAY_HTTP_REQUEST_PROMISE_MIDDLEWARE
} from '../../action/action'
class contact extends Component {

    static navigationOptions = {
        headerTitle: '通讯录',
        headerLeft: (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{marginLeft: 10}}>
                    <Text>添加</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 10}}>
                    <Text>删除</Text>
                </TouchableOpacity>
            </View>
        ),
        headerStyle: {elevation: 0, shadowOpacity: 0} // 导航条样式
    };
    render() {
        return <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.dispatchPromise('url');
            }}>
                <Text style={styles.buttonText}>dispatch 一个 promise</Text>
            </TouchableOpacity>
            <Text>{this.props.result}</Text>

            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.dispatchPromiseMiddleware('url');
            }}>
                <Text style={styles.buttonText}>dispatch 一个 promise-middleware</Text>
            </TouchableOpacity>
            <Text>{this.props.middlewareResult}</Text>

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
        result: state.contactRedux.result,
        middlewareResult: state.contactRedux.middlewareResult,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchPromise:(url)=>{
            dispatch(ACTION_DELAY_HTTP_REQUEST_PROMISE(url))
        },
        dispatchPromiseMiddleware:(url)=>{
            dispatch(ACTION_DELAY_HTTP_REQUEST_PROMISE_MIDDLEWARE(url))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(contact)