import React, { Component } from 'react';
import { View, Text, StyleSheet, Linking  } from 'react-native';
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
            onPress={gotoFacebook = () => {
              Linking.openURL(`https://www.facebook.com/GrafischeendigitalemediaArteveldehogeschool`).catch(err => console.error('An error occurred', err));
            }}
           
        />

          <SocialIcon
            raised={false}
            type='twitter'
            onPress={gotoFacebook = () => {
              Linking.openURL(`https://www.twitter.com/ArteveldeGDM`).catch(err => console.error('An error occurred', err));
            }}
          />

          <SocialIcon
            raised={false}
            type='instagram'
            onPress={gotoFacebook = () => {
              Linking.openURL(`https://www.instagram.com/madebygdm/`).catch(err => console.error('An error occurred', err));
            }}
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
    flexDirection: 'column-reverse'
  }
 });