/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'

import ShowMoreImages from '../../comment/showMoreImage/showImages';


import image1 from '../../asset/images/1.jpg';
import image2 from '../../asset/images/2.jpg';
import image3 from '../../asset/images/3.jpg';
import image4 from '../../asset/images/4.jpg';
import image5 from '../../asset/images/5.jpg';

import image6 from '../../asset/images/6.jpg';
import image7 from '../../asset/images/7.jpg';
import image8 from '../../asset/images/8.jpg';
import image9 from '../../asset/images/9.jpg';
import image10 from '../../asset/images/10.jpg';

import image11 from '../../asset/images/11.jpg';
import image12 from '../../asset/images/12.jpg';
import image13 from '../../asset/images/13.jpg';
import image14 from '../../asset/images/14.jpg';
import image15 from '../../asset/images/15.jpg';

import image16 from '../../asset/images/16.jpg';
import image17 from '../../asset/images/17.jpg';
import image18 from '../../asset/images/18.jpg';
import image19 from '../../asset/images/19.jpg';
import image20 from '../../asset/images/20.jpg';

import image21 from '../../asset/images/21.jpg';
import image22 from '../../asset/images/22.jpg';
import image23 from '../../asset/images/23.jpg';
import image24 from '../../asset/images/24.jpg';
import image25 from '../../asset/images/25.jpg';

class moments extends Component {

    static navigationOptions = {
        headerTitle: '多图浏览',
        headerRight: (
            <TouchableOpacity style={{marginRight: 10}}>
                <Text>发布</Text>
            </TouchableOpacity>
        ),
        headerStyle: {elevation: 0, shadowOpacity: 0} // 导航条样式
    };

    constructor(props){
        super(props);
        this.abc = this.abc.bind(this);

    }
    componentDidMount() {
        this.abc();
    }
    abc(){
        Promise
        const p = new Promise((resove, reject)=>{
            setTimeout(()=>{
                console.log('Promise');
                resove('abc')
            },3000)
        });

        p.then((result)=>{
            console.log('resove:',result);

        }).finally(()=>{
            console.log('finally');
        }).done(()=>{
            console.log('done');
        })

    }
    render() {

        const images = [{key: 'key1', url: image1},
                        {key: 'key2', url: image2},
                        {key: 'key3', url: image3},
                        {key: 'key4', url: image4},
                        {key: 'key5', url: image5},
                        {key: 'key6', url: image6},
                        {key: 'key7', url: image7},
                        {key: 'key8', url: image8},
                        {key: 'key9', url: image9},
                        {key: 'key10', url: image10},
                        {key: 'key11', url: image11},
                        {key: 'key12', url: image12},
                        {key: 'key13', url: image13},
                        {key: 'key14', url: image14},
                        {key: 'key15', url: image15},
                        {key: 'key16', url: image16},
                        {key: 'key17', url: image17},
                        {key: 'key18', url: image18},
                        {key: 'key19', url: image19},
                        {key: 'key20', url: image20},
                        {key: 'key21', url: image21},
                        {key: 'key22', url: image22},
                        {key: 'key23', url: image23},
                        {key: 'key24', url: image24},
                        {key: 'key25', url: image25},
                        ];

        return <View style={styles.container} >
            <ShowMoreImages images={images} />
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(moments)