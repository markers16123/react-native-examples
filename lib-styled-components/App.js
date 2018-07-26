import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;
`;

const Title = styled.Text`
font-weight: 600;
font-size: ${props => props.size}px;
`

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title size={33}>Open up App.js to start working on your app!</Title>
      </Container>
    );
  }
}