import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from "./components/Weather";
import ZipCodeScreen from "./components/ZipCodeScreen"

import { createStackNavigator } from 'react-navigation';
import WeatherScreen from "./components/WeatherScreen";


const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
}, {
    initialRouteName: 'Weather',
    initialRouteParams: {zipCode: '90110'}
  })

export default class App extends React.Component {

  render() {
    return (

      <RootStack />


    );
  }


}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
