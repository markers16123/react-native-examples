import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default class DashboardScreen extends Component {
  render() {
    return (
      <Container>
        <Text> DashboardScreen </Text>
      </Container>

    );
  }
}
