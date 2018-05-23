/**
 * Created by chj on 2018/4/17.
 */
import { TabNavigator } from 'react-navigation'
import APPTabbar from './tabbar';
import HomeDetail from './pages/home/homeDetail'
import HomeDetail1 from './pages/home/homeDetail1'
import HomeDetail2 from './pages/home/homeDetail2'

const Tabbar = TabNavigator(APPTabbar.AppRootTabBarRouteConfigs, APPTabbar.AppRootTabBarNavigatorConfigs);

const AppNavigationRouterConfigs = {
    Tabbar: {
        screen: Tabbar,
        navigationOptions:({navigation})=>({
            //title: 'home',
            //headerBackTitle: 'back'
        })
    },
    HomeDetail: {
        screen: HomeDetail
    },
    HomeDetail1: {
        screen: HomeDetail1
    },
    HomeDetail2: {
        screen: HomeDetail2
    }
};
const AppNavigationStackConfigs = {
    initialRouteName: 'Tabbar', // 以tabbar为主路由
    mode: 'card',
    headerMode: 'screen',
    onTransitionStart:(()=>{
        console.log('onTransitionStart');
    }),
    onTransitionEnd: (()=>{
        console.log('onTransitionEnd');
    })
};
export default {
    AppNavigationRouterConfigs,
    AppNavigationStackConfigs
}

