import React, {Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class MinePage extends React.Component {

	static navigationOptions = {
        title:'MinePage1',
    }
	render(){
		const {params} = this.props.navigation.state;
		return (
			<View>
		        <Text style={styles.welcome}>
		          MinePage
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