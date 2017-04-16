import React, {Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './Home.js';
import Mine from './Mine.js';

const TableView = TabNavigator({
  Home: {screen: Home},
  Mine: {screen: Mine},
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
export default TableView;