/**
 * Created by chj on 2018/4/20.
 */
/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native'
import {
    ACTION_TEST
} from '../../action/action';

class homeDetail1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
    static navigationOptions = {
        header: (
            <View style={{height: 64,backgroundColor: 'white',justifyContent: 'center',alignItems: 'center'}}>
                <Text>homeDetail 1</Text>
            </View>
        ), // 自定义导航条，系统的将会隐藏
    };

    render() {
        return <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.navigation.navigate('HomeDetail2')
                }}>
                <Text style={styles.buttonText}>下一步</Text>
            </TouchableOpacity>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor:'#2CFFFA',
        marginHorizontal: 0
    },
    view: {
        flexDirection: 'row'
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
        fontSize: 17,
        lineHeight: 44,
        marginHorizontal: 10
    }
});

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchActionTest:(value)=>{
            dispatch(ACTION_TEST(value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(homeDetail1)