import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import Header from '../eachPage/header';
import AboutInhoud from  './aboutInhoud';
import Social from '../eachPage/social';

export default class About extends Component {
  render() {
    return (
      <View>
        <Header/>
        <AboutInhoud/>
        <Social/>
      </View>
    );
  }
}
