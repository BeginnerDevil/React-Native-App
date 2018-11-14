import React, { Component } from 'react';
import {  View }from 'react-native';
import Login from './views/login/login';
import index from './views/index/InputChange';

import hello from './HelloComponent'
import{StackNavigator,TabNavigator} from 'react-navigation'


const router = StackNavigator({
  Login:{
    screen:Login,
    navigationOptions:{
      header:null
    }
  },
  index:{
    screen:index,
    navigationOptions:{
      header:null
    }
  },
  hello:{
    screen:hello,
   
  },
 

})
export default router


