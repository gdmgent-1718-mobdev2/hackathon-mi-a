import React from 'react';
import { StatusBar, Image, StyleSheet, View, Text } from 'react-native';
import Header from '../eachPage/header';
import Social from '../eachPage/social';
import DeliveriesDetail from './deliveriesDetail.js';

export default class Deliveries extends React.Component {

  render() {
    return(
      <View >
      <Header />
      <View >
          <DeliveriesDetail store="Ikea" packageNumber="1234-12345-1502" status="afgeleverd"> </DeliveriesDetail>
      </View >
      <View >
          <DeliveriesDetail store="Media Markt" packageNumber="1111-12345-1502" status="afgeleverd"> </DeliveriesDetail>
      </View >
      <View >
          <DeliveriesDetail store="Blokker" packageNumber="0000-00001-1602" status="afgeleverd"> </DeliveriesDetail>
      </View >
      <View >
          <DeliveriesDetail store="McDonalds Large" packageNumber="7894-78945-1602" status="afgeleverd"> </DeliveriesDetail>
      </View >
      <Social />
</View >
    );
  }
    
}

const styles = StyleSheet.create({
    headerPlace: {
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#000',
        flexDirection: 'column',
        margin: 10,
        paddingVertical: 20,
    },

    title: {
        marginBottom: 20,
        marginLeft: 22,
        fontSize: 20,
        color: '#90C1C5'
    },
    
    package: {
        marginLeft: 22,
        fontSize: 12,
    },

    status: {
        fontSize: 18,
        marginRight: 30,
        marginTop: -20,
        textAlign: 'right',
        color: '#90C1C5'
    },

    first: {
        
    }
  });
  
