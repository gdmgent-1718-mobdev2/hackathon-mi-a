import React, { Component } from 'react';
import { View, Text, StyleSheet, Image  } from 'react-native';

export default class LogoMidden extends Component {
  render() {
    return (
      <View style = {styles.logoContainer}>
        <Image style= {styles.logoMidden} source={require('../../images/logo.png')}></Image>
      </View>
    );
  }
}
 const styles = StyleSheet.create({
  logoMidden: {
    height: 300,
    width: 300
  },
  logoContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 2,
    alignItems: 'center',
  }
 });