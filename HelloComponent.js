import React, { Component } from 'react';
import {  Image }from 'react-native';
import{StackNavigator,TabNavigator} from 'react-navigation'
import center from './views/index/InputChange'
import ceshi from './views/ceshi/ceshi'

import Icon from './icon'

const Tab = TabNavigator(
  {
Main:{
  screen:center,
  navigationOptions:{
    tabBarIcon:({focused}) => {
      return <Icon
      focused={focused}
      normalImage={require('./images/index/home_btn_03dungou.png')}
      selectedImage={require('./images/index/home_btn_01yinghuan.png')}
      />
    }
  }
},
people:{
  screen:ceshi,
  navigationOptions:{
    tabBarIcon:({focused}) => {
  return <Icon
  focused={focused}
  normalImage={require('./images/index/home_btn_03dungou.png')}
  selectedImage={require('./images/index/home_btn_01yinghuan.png')}
  />
    }
  }
},

},
{
  swipeEnabled:true,
  animationEnabled:true,
  tabBarPosition:'bottom',
  lazy:true,
  tabBarOptions:{
    showIcon:true,
    // style:{
    //   height:100,
    //   backgroundColor:'#fff',
    //   zIndex:0,
    // },
    // lableStyle:{
    //   fontSize:20,
    //   marginTop:4
    // },
    // iconStyle:{
    //   marginTop:-3,
    //   width:40,
    //   height:20,
  
    // }
  },

  
}
)
export default Tab