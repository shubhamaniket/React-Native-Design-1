import React from 'react';
import { View, Text , Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Discover from './Screens/Discover.js';
import Mall from './Screens/Mall.js';
import Order from './Screens/Order.js';
import Profile from './Screens/Profile.js';

import Icon from 'react-native-vector-icons/FontAwesome5';

const AppNavigator = createBottomTabNavigator(
  {
    Discover : {
      screen : Discover,
      navigationOptions : {
        tabBarLabel : 'Discover',
        showIcon : true,
        tabBarIcon : ({ tintColor }) => (
            <Icon name = 'globe' size={19} color={tintColor}/>
          )
      },
      tabBarOptions : {
        activeBackgroundColor : 'black',
      }
    },
    Mall : {
      screen : Mall,
      navigationOptions : {
        tabBarLabel : 'Mall',
        showIcon : true,
        tabBarIcon : ({ tintColor }) => (
            <Icon name = 'shopping-bag' size={19} color={tintColor}/>
          )
      },
    },
    Order : {screen : Order,
      navigationOptions : {
        tabBarLabel : 'Order',
        showIcon : true,
        tabBarIcon : ({ tintColor }) => (
            <Icon name = 'pen' size={19} color={tintColor}/>
          )
      },
    },
    Profile : {screen : Profile,
      navigationOptions : {
        tabBarLabel : 'Profile',
        showIcon : true,
        tabBarIcon : ({ tintColor }) => (
            <Icon name = 'user' size={19} color={tintColor}/>
          )
      },
    }
  }, 
  {
    tabBarOptions : {
      activeTintColor : 'red',
      inactiveTintColor : 'grey',
      labelStyle : {
        fontSize : 13
      },
      activeBackgroundColor : '#F0F8FF',
      inactiveBackgroundColor : 'white'
    }
  }
);

export default createAppContainer(AppNavigator);
