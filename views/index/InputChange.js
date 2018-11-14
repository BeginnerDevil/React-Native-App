import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'

import List from '../list/list'
import ceshi from '../ceshi/ceshi'
const InputChange = TabNavigator(
  {
    name: {
      screen: List,
      title: '岳瑶=='
    },
    sex: {
      screen: ceshi,
      title: '哼哼哼'
    },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    tabBarPosition: 'top',
  }
)
export default InputChange
