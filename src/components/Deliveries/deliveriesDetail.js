import React from 'react';
import { StatusBar, Image, StyleSheet, View, Text } from 'react-native';
import Header from '../eachPage/header';
import Social from '../eachPage/social';
import { Colors } from '../colors/colors.js';

export default class DeliveriesDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }
  render() {
    return (

        <View style={styles.headerPlace}>


          <Text style={styles.title}>{this.props.store}</Text>
          <Text style={styles.package}>{this.props.packageNumber}</Text>
          <Text style={styles.status}>{this.props.status}</Text>



        </View>
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
    color: Colors.GREY,
  },

  status: {
    fontSize: 18,
    marginRight: 30,
    marginTop: -20,
    textAlign: 'right',
    color: '#90C1C5'
  },


});

