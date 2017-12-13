import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Font, AppLoading } from 'expo'
import Router from './config/routes';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf')
    });

    this.setState({ isReady: true });
  }


  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider>
        <Router />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('main', () => App);
