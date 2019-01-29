import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Category from './components/Explore/Category';
import Home from './components/Explore/Home';

const images = [
  { uri: require('../assets/dahyun01.jpg'), name: '천사' },
  { uri: require('../assets/dahyun02.jpg'), name: '잠버릇' },
  { uri: require('../assets/dahyun03.jpg'), name: '천사2' },
  { uri: require('../assets/dahyun01.jpg'), name: '천사' },
  { uri: require('../assets/dahyun02.jpg'), name: '잠버릇' },
  { uri: require('../assets/dahyun03.jpg'), name: '천사2' },
  { uri: require('../assets/dahyun01.jpg'), name: '천사' },
  { uri: require('../assets/dahyun02.jpg'), name: '잠버릇' },
  { uri: require('../assets/dahyun03.jpg'), name: '천사2' }
];

const homes = [
  {
    type: 'PRIVATE ROOM - 2 BEDS',
    name: 'The Cazy Place',
    price: 82,
    rating: 5,
    imageUri: require('../assets/dahyun01.jpg')
  },
  {
    type: 'PRIVATE ROOM - 2 BEDS',
    name: 'The Cazy Place',
    price: 25,
    rating: 3,
    imageUri: require('../assets/dahyun02.jpg')
  },
  {
    type: 'PRIVATE ROOM - 2 BEDS',
    name: 'The Cazy Place',
    price: 53,
    rating: 2,
    imageUri: require('../assets/dahyun03.jpg')
  }
];

const { height, width } = Dimensions.get('window');

export default class ExploreScreen extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    console.log(this.startHeaderHeight);
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            Style={{
              height: this.startHeaderHeight,
              backgroundColor: 'white',
              borderWidth: 1,
              borderBottomColor: '#dddddd'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                shadowOffset: { width: 0, height: 0 },
                shadowColor: 'black',
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS === 'android' ? 30 : null
              }}
            >
              <Ionicons
                name="md-search"
                size={20}
                style={{ marginRight: 10 }}
              />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
              />
            </View>
          </View>

          <ScrollView scrollEventThrottle={16}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                paddingTop: 20
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '700',
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Varun?
              </Text>

              <View style={{ height: 130, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {images.map((image, index) => (
                    <Category
                      key={index}
                      imageUri={image.uri}
                      name={image.name}
                    />
                  ))}
                </ScrollView>
              </View>

              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                  A new selection of homes verified for quality & comfort
                </Text>

                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    source={require('../assets/dahyun01.jpg')}
                    style={{
                      flex: 1,
                      height: null,
                      width: null,
                      resizeMode: 'cover',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: '#dddddd'
                    }}
                  />
                </View>
              </View>

              <View style={{ marginTop: 40 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: '700',
                    paddingHorizontal: 20
                  }}
                >
                  Homes around the world.
                </Text>

                <View
                  style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                  }}
                >
                  {homes.map((home, index) => (
                    <Home width={width} {...home} key={index} />
                  ))}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
