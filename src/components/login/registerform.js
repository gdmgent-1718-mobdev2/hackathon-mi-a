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


export default class RegisterForm extends React.Component{
  state = {
    EmailInput: 'Jane Doe',
    PasswordInput: 'Ikea Gent',
    ConfirmPasswordInput: 'Not Given',
    Name: 'Jonh Doe',
  };


  render(){
    return(
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      {/* <StatusBar barStyle = "light-content"/> 
        <Text>Titel loginform</Text>*/}
        {/* text input gebruikersnaam */}
        <TextInput 
            placeholder = "Gebruikersnaam"
            placeholderTextColor="#707070"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            onChangeText={Name => this.setState({ Name })}
            onSubmitEditing={()=>this.PasswordInput.focus()}
            />
            {/* text input password */}          
            <TextInput 
            placeholder = "Wachtwoord"
            placeholderTextColor="#707070"
            returnKeyType="next"
            secureTextEntry
            style={styles.input}
          onChangeText={PasswordInput => this.setState({ PasswordInput })}
            onSubmitEditing={()=>this.confirmPasswordInput.focus()}
            ref={(input) => this.PasswordInput = input}
            />
            {/* text input password */}          
            <TextInput 
            placeholder = "Bevestig wachtwoord"
            placeholderTextColor="#707070"
            returnKeyType="next"
            secureTextEntry
            style={styles.input}

          onChangeText={ConfirmPasswordInput => this.setState({ ConfirmPasswordInput })}
            onSubmitEditing={()=>this.emailInput.focus()}
            ref={(input) => this.ConfirmPasswordInput = input}
            />
             {/* text input email */}
        <TextInput 
            placeholder = "Email"
            placeholderTextColor="#707070"
            returnKeyType="go"
            keyboardType= "email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}

          onChangeText={EmailInput => this.setState({ EmailInput })}
            ref={(input) => this.EmailInput = input}
            />

        <TouchableOpacity onPress={this._register} style={styles.buttoncontainer}>
              <Text  style={styles.buttontext}>Register</Text>
            </TouchableOpacity>


      </KeyboardAvoidingView>
    );
  }



  _register = () => {
    const { EmailInput, PasswordInput, ConfirmPasswordInput } = this.state
    console.log(EmailInput)
    
    


    this.props.navigation.navigate('Request')




    
    firebase.auth().createUserWithEmailAndPassword(EmailInput, PasswordInput).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      console.log('Inside The create user');
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
  }
});