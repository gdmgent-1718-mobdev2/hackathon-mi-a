import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Login from './login';
import LoginForm from './loginForm';
import RegisterForm from './registerform';
import LogoMidden from '../Logo/logoMidden';
import { Colors } from '../colors/colors.js';

import Header from '../eachPage/header';
import Social from '../eachPage/social';


import {
  StackNavigator,
} from 'react-navigation';



export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <View >
            <Header />
          </View>
 <Login/>
          <Social />
        </View>
      </ScrollView>
    );
  }
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});