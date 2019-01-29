import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import firebase from 'firebase';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.checkIfLoggedIn();
  }

  checkIfLoggedIn = () => {
    console.log('checkIfLggedIn');
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          this.props.navigation.navigate('DashboardScreen');
        } else {
          this.props.navigation.navigate('LoginScreen');
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <Container>
        <ActivityIndicator size="large" />
      </Container>
    );
  }
}
