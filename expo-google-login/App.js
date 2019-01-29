import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import { firebaseConfig } from './config';
// import user components
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';

// initialize firebase
firebase.initializeApp(firebaseConfig);

// https://www.youtube.com/watch?v=ZcaQJoXY-3Q
// https://www.youtube.com/watch?v=GZKaVJEd4JU
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppContainer = createAppContainer(AppSwitchNavigator);
