import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Switch, Route } from './routing';
import Pokemon from './Pokemon';
import Home from './Home';

export default class App extends React.Component {
  state = {
    selectedPokemon: null
  };

  selectPokemon = selectedPokemon => {
    this.setState({
      selectedPokemon
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} selectPokemon={this.selectPokemon} />}
            />
            <Route
              path="/pokemon"
              render={props => (
                <Pokemon
                  {...props}
                  selectedPokemon={this.state.selectedPokemon}
                />
              )}
            />
          </Switch>
        </Router>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  }
});
