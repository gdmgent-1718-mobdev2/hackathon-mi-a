import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default class Splash extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Text style ={styles.appName}> De Kabouters </Text>
          <Image style= {styles.image} source={require('../../images/logo.png')}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
container: {
  backgroundColor: "#FFF",
  flex: 1,
},
appName: {
  paddingTop: 750,
  fontSize: 35,
  fontWeight: 'bold',
},
image: {
  width: 400,
  height:400,
},
logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center'
}
});