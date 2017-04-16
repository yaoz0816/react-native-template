import React, {Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	Button
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class HomePage extends React.Component {

	static navigationOptions = {
        //title:'HomePage1',
        headerRight: (<Text>123</Text>)
    }
	render(){
		const {params} = this.props.navigation.state;
		return (
			<View>
		        <Text style={styles.welcome}>
		            HomePage
		        </Text>
		    </View>
		)
	}

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});