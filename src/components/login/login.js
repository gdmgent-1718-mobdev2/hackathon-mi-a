import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import LoginForm from './loginForm';
import RegisterForm from './registerform';
import LogoMidden from '../Logo/logoMidden';
import Social from '../eachPage/social';
import About from '../about/about';
import { Colors } from '../colors/colors.js';


export default class Login  extends Component{
  render(){
    return(
  <ScrollView>
    <View style={styles.container}>
    <LogoMidden style={styles.containerLogo}/>
    {/* <Text style={styles.title}>test login</Text> */}
   
       <View style={styles.formContainer}>
        {/* inhoud form */}
       <Text style={styles.title}>Login</Text>
        <LoginForm> </LoginForm>
        </View>

        <View style={styles.formContainer} style={styles.formContainer2}>
        <Text style={styles.title}>Register</Text>
        <RegisterForm/>
        </View>
       
    </View>
    <Social/>
   </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  formContainer: {
    height: 250
  },
  formContainer2: {
    marginTop : 30
  },
  containerLogo:{
    height: 100
  },

    input: {
    height: 50,
    width: 250,
    backgroundColor: Colors.WHITE,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: Colors.GREY,
    color: Colors.GREY,

    textAlign: 'center',
    textAlignVertical: 'center',
  },

  buttoncontainer: {
    backgroundColor: Colors.GREEN,
    paddingVertical: 10,
    borderRadius: 50,

  },
  buttontext: {
    textAlign: 'center',
    borderColor: Colors.GREY,
    paddingHorizontal: 10,
    color: Colors.GREY,
    height: 40,

    color: Colors.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  
  title: {
    //fontFamily: 'bjorn',
   fontSize: 30,
   color: '#006633',
   marginTop: -50,
   textAlign: 'center',
   opacity: 0.8,


  },
});