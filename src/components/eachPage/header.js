import React from 'react';
import { StatusBar, Image, StyleSheet, View, Text } from 'react-native';
import Hamburger from 'react-native-hamburger';

const logoImage = require('../../images/logo.png');

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    }
  }
  render() {
    return(
      <View style={styles.headerPlace}>
        <Image style={styles.logoImage} source={logoImage} />
        <Text style={styles.title}>De {"\n"}Kabouters</Text>
        {/* <Hamburger active={this.state.active}
          type="cross"
          color='#39626E'
          onPress={()=> this.setState({ative: !this.state.active})}
           /> */}
      </View>
    );
  }
    
}

const styles = StyleSheet.create({
    headerPlace: {
      width: '100%',
      height: 124,
      backgroundColor: '#F0F8FB',
      position: 'relative',
      top: 0,
      alignSelf: "stretch",
      flexDirection: 'row'
    },

    title: {
        width: 140,
        fontSize: 30,
        marginLeft: 22,
        marginTop: 50,
        color: '#39626E'

    },
    
    logoImage: {
      width: 100,
      height: 150,
      // resizeMode: Image.resizeMode.contain,

      marginLeft: 33,
      marginTop: 5
    },

    hamburgerMenu: {
      position: 'absolute',
      top: 50,
      right: 40,
    }
  });
  
