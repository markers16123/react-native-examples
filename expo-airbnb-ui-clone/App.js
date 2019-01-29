import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import {
  ExploreScreen,
  InboxScreen,
  SavedScreen,
  TripsScreen,
  ProfileScreen
} from './screens';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 24 }}>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-search" size={24} color={tintColor} />
        )
      }
    },
    Saved: {
      screen: SavedScreen,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-heart-empty" size={24} color={tintColor} />
        )
      }
    },
    Trips: {
      screen: TripsScreen,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./assets/airbnb.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Inbox: {
      screen: InboxScreen,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-chatboxes" size={24} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="person-outline" size={24} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowcolor: 'black',
        shadowOpacity: 0.5
      }
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);
