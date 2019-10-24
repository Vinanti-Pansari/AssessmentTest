import React from 'react';
import {connect} from 'react-redux';
import {
    createReduxContainer,
    createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import { createBottomTabNavigator } from 'react-navigation-tabs'

import UserRecordScreen from '../screens/UserRecord/index';
import UserDetailsScreen from '../screens/UserDetails/index';


const AppNavigator = createBottomTabNavigator({
    UserRecordScreen,
    UserDetailsScreen
});

const middleWareNavigator = createReactNavigationReduxMiddleware(
     'root',
      state => state.nav
);

const RootNavigator = createReduxContainer(AppNavigator, 'root');
const mapStateToProps = state => ({
    state: state.nav
});

const Root = connect(mapStateToProps)(RootNavigator);

export { Root, AppNavigator, middleWareNavigator };