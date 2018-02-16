import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Button, SocialIcon, colors } from 'react-native-elements';
import {Colors} from '../colors/colors.js';

export default class Social extends Component {
  render() {
    return (
      <View style = {styles.containerSocial}>
        <View style = {styles.textright}>

          <SocialIcon
            raised={false}
            type='facebook'
          />

          <SocialIcon
            raised={false}
            type='twitter'
          />

          <SocialIcon
            raised={false}
            type='instagram'
          />

        </View>
      </View>
    );
  }
}
 const styles = StyleSheet.create({
  textright: {  
    alignSelf: 'flex-end', 
    flexDirection: 'row',
    margin: 5
  },
  containerSocial:{
    backgroundColor: Colors.BLUE_BRIGHT,
    marginTop: 15
  }
 });