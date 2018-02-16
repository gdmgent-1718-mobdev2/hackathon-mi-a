import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Colors } from '../colors/colors.js';

export default class RegisterForm extends Component{
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
            onSubmitEditing={()=>this.passwordInput.focus()}
            />
            {/* text input password */}          
            <TextInput 
            placeholder = "Wachtwoord"
            placeholderTextColor="#707070"
            returnKeyType="next"
            secureTextEntry
            style={styles.input}
            onSubmitEditing={()=>this.confirmPasswordInput.focus()}
            ref={(input) => this.passwordInput = input}
            />
            {/* text input password */}          
            <TextInput 
            placeholder = "Bevestig wachtwoord"
            placeholderTextColor="#707070"
            returnKeyType="next"
            secureTextEntry
            style={styles.input}
            onSubmitEditing={()=>this.emailInput.focus()}
            ref={(input) => this.confirmPasswordInput = input}
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
            ref={(input) => this.emailInput = input}
            />

            <TouchableOpacity style={styles.buttoncontainer}>
              <Text  style={styles.buttontext}>Register</Text>
            </TouchableOpacity>
      </KeyboardAvoidingView>
    );
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