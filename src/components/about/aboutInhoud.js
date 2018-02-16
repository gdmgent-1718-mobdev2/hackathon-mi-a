import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';
import { Button, SocialIcon, colors } from 'react-native-elements';
import {Colors} from '../colors/colors.js';

export default class AboutInhoud extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.h1}>ABOUT</Text>
        <Text style={styles.tekst}>
        Heb je jezelf al eens afgevraagd, hoe krijg ik die gigantische kast nu naar mij huis in Gent? Was deze doos maar wat kleiner? Wel geen nood wij bieden een oplossing aan die jouw doos levert bij jou thuis.
        </Text>
        <Text style={styles.h2}>HOE WERKT HET?</Text>
        <Text style={styles.tekst}>1. U gaat naar de winkel en koopt u product {"\n"}
{"\n"}
              2. U geeft aan bij welke winkel u gekocht heeft 
                  in de app. U geeft ons ook het pakketnummer 
                  en het afleveradres.{"\n"}
{"\n"}
              3. U kan nu de status bijhouden van u verzending 
                  bij 'Mijn verzendingen'{"\n"}
{"\n"}
              4. U product wordt bij u afgeleverd.
        </Text>
      </View>
    );
  }
}
 const styles = StyleSheet.create({
  h1:{
    marginHorizontal: 20,
    fontFamily: 'bjorn',
    fontSize: 30,
    color: Colors.BLUE_H1,
  },
  h2:{
    marginTop: 25,
    marginHorizontal: 20,
    fontFamily: 'bjorn',
    fontSize: 25,
    color: Colors.BLUE_H1,
  },
  tekst:{
    marginTop: 15,
    marginHorizontal: 20,
    fontFamily: 'roboto',
    fontSize: 20,
    color: Colors.BLACK,
  }
 });