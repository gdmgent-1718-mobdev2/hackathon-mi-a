import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';

import { Colors } from '../colors/colors.js';
import * as firebase from "firebase";

import { StackNavigator } from 'react-navigation';

var config = {
  apiKey: "AIzaSyDDUjkoXS66VodkwHg6H1Q7RgTf8mXyalU",
  authDomain: "briavers-mobdev2-1718-w1.firebaseapp.com",
  databaseURL: "https://briavers-mobdev2-1718-w1.firebaseio.com",
  projectId: "briavers-mobdev2-1718-w1",
  storageBucket: "",
  messagingSenderId: "286543267019"
};


export default class LoginForm extends React.Component{
  state = {
    EmailInput: 'Jane Doe',
    PasswordInput: 'Ikea Gent',
  };
  
  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* <StatusBar barStyle = "light-content"/> 
        <Text>Titel loginform</Text>*/}
        {/* text input email */}
        <TextInput 
            placeholder = "Email"
            placeholderTextColor="#707070"
            returnKeyType="next"
          onChangeText={EmailInput => this.setState({ EmailInput })}
            onSubmitEditing={()=>this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}

            style={styles.input}
            />
            {/* text input password */}          
            <TextInput 
            placeholder = "password"
            placeholderTextColor="#707070"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
          onChangeText={PasswordInput => this.setState({ PasswordInput })}
            ref={(input) => this.passwordInput = input}
            />

            <TouchableOpacity 
           // onPress={"./about.js"}
            style={styles.buttoncontainer}
            onPress={this._login}>
            
              <Text  style={styles.buttontext}>Login</Text>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }

  
_login = () => {
  const {
    EmailInput,
    PasswordInput
  } = this.state
  console.log(EmailInput);
  



  this.props.navigation.navigate('Request')



  

  firebase.auth().signInWithEmailAndPassword(EmailInput, PasswordInput).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    // ...
    console.log(errorCode);
    console.log(errorMessage);
    console.log('Inside The Login');
  });

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(user.uid)
    } else {
      // No user is signed in.
    }
  });

}


  
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    //fontFamily: 'roboto',
    height: 50,
    backgroundColor: '#00cc66',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttoncontainer: {
    backgroundColor: "#660000",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttontext: {
    //fontFamily: 'bjorn',
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700'
  },
  formContainer: {
    height: 250
  },
  formContainer2: {
    marginTop: 30
  },
  containerLogo: {
    height: 100
  },

  input: {
    height: 50,
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
    fontSize: 25,

    color: Colors.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
  },





  
});