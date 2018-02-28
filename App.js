

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';



import { StyleSheet, Text, View, ScrollView } from 'react-native';


import Login from './src/components/login/login';
import LoginForm from './src/components/login/loginForm';
import RegisterForm from './src/components/login/registerform';
import Splash from './src/components/splash/splash';
import LogoMidden from './src/components/Logo/logoMidden';

import { Colors } from './src/components/colors/colors.js';

import Deliveries from "./src/components/Deliveries/deliveries.js";
import About from "./src/components/about/about.js";

import Header from './src/components/eachPage/header';
import Social from './src/components/eachPage/social';






export class HomeScreen extends React.Component {
  render() {
    return (
        <View>
        <Login />
        </View>
    );
  }
  
};


export class RequestScreen extends React.Component {
  render() {
    return (
        <View>
        <DeliveryForm />
        </View>
    );
  }
};





export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Request: {
      screen: RequestScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}