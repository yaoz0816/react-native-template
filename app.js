
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';
import TableView from './app/TableView.js';
import Home1 from './app/Home.js';
import Mine from './app/Mine.js';
class HomeScreen extends Component {
  
  static navigationOptions = {
    title:'Login',
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button onPress={() => navigate('TableView',{ user:'yao'})} 
         title="dva&&antd&&async"/>
      </View>
    );
  }
}


const RNApp = StackNavigator({
   Home: { screen: HomeScreen},
   TableView: { screen: TableView}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNApp', () => RNApp);
