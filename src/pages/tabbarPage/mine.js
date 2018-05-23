/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'


class mine extends Component {

    static navigationOptions = {
        headerTitle: '我的',
        headerRight: (
            <TouchableOpacity style={{marginRight: 10}}>
                <Text>设置</Text>
            </TouchableOpacity>
        ),
        headerStyle: {elevation: 0, shadowOpacity: 0} // 导航条样式
    };
    render() {
        return <View style={styles.container}>

        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(mine)