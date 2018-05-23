/**
 * Created by chj on 2018/4/20.
 */
import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import PropTypes from 'prop-types';


import HomeIconImg from '../../asset/tabbar/home_icon.png';
import HomeIconSelectImg from '../../asset/tabbar/home_icon_select.png';

import ContactIconImg from '../../asset/tabbar/contact-icon.png';
import ContactIconSelectImg from '../../asset/tabbar/contact-icon_select.png';

import MomentIconImg from '../../asset/tabbar/moment_icon.png';
import MomentIconSelectImg from '../../asset/tabbar/moment_icon_select.png';

import MineIconImg from '../../asset/tabbar/mine_icon.png';
import MineIconSelectImg from '../../asset/tabbar/mine_icon_select.png';


type Props = {};
export default class tabbarIcon extends Component<Props> {

    render() {

        let subView;
        switch (this.props.type) {
            case 'home':
                subView = <Image source={this.props.focused ? HomeIconSelectImg : HomeIconImg} />;

                break;
            case 'contact':
                subView = <Image source={this.props.focused ? ContactIconSelectImg : ContactIconImg} />;

                break;
            case 'moment':
                subView = <Image source={this.props.focused ? MomentIconSelectImg : MomentIconImg} />;

                break;
            case 'mine':
                subView = <Image source={this.props.focused ? MineIconSelectImg : MineIconImg} />;

                break;
            default:
                break;
        }

        return (
            <View>
                { subView }
            </View>

        );
    }
};
tabbarIcon.propTypes = {
    focused: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};
tabbarIcon.defaultProps = {
};
