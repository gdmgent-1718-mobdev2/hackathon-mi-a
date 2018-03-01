import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Colors } from '../colors/colors.js';

import Header from '../eachPage/header.js';
import Social from '../eachPage/social.js';

import * as firebase from "firebase";


var config = {
  apiKey: "AIzaSyDDUjkoXS66VodkwHg6H1Q7RgTf8mXyalU",
  authDomain: "briavers-mobdev2-1718-w1.firebaseapp.com",
  databaseURL: "https://briavers-mobdev2-1718-w1.firebaseio.com",
  projectId: "briavers-mobdev2-1718-w1",
  storageBucket: "",
  messagingSenderId: "286543267019"
};



function writeOrderData(Name, Store, Adres, Postcode, Stad, Parcel) {
  firebase.database().ref('Orders/' + Parcel).set({
    Name: Name,
    Store: Store,
    Adres: Adres,
    Postcode: Postcode,
    Stad: Stad,
    Parcel: Parcel,

  });

  console.log('package sent')
}
export default class DeliveryForm extends React.Component {
  state = {
    Name: 'Jane Doe',
    Store: 'Ikea Gent',
    Adres: 'Not Given',
    Postcode: 'Not Given',
    Stad: 'Not Given',
    Parcel: '1111-12345-1502',
  };
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        {/* <StatusBar barStyle = "light-content"/> 
        <Text>Titel loginform</Text>*/}
        {/* text input email */}

        
        <Text style={styles.title}>Nieuwe Levering</Text>
        <TextInput
          placeholder="naam"
          placeholderTextColor="#707070"
          returnKeyType="next"
          onChangeText={Name => this.setState({ Name })}
          onSubmitEditing={() => this.adres.focus()}

          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}

          style={styles.input}
        />

        <ModalDropdown
          style={styles.dropdown_2}
          textStyle={styles.dropdown_2_text}
          dropdownStyle={styles.dropdown_2_dropdown}

          options={['Ikea Gent', 'MediaMarkt Grote Markt', 'Mediamarkt Ring', 'McDonalds LARGE', 'Delaize ', 'SMASH', 'Blokker']} />


        <TextInput
          placeholder="adres + huisnr"
          placeholderTextColor="#707070"
          returnKeyType="next"
          onChangeText={Adres => this.setState({ Adres })}
          onSubmitEditing={() => this.Postcode.focus()}
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}
          ref={(input) => this.adres = input}
          style={styles.input}
        />
        <TextInput
          placeholder="Postcode"
          placeholderTextColor="#707070"
          returnKeyType="next"
          onChangeText={Postcode => this.setState({ Postcode })}
          onSubmitEditing={() => this.Stad.focus()}
          keyboardType="phone-pad"
          autoCapitalize="sentences"
          autoCorrect={false}
          ref={(input) => this.Postcode = input}
          style={styles.input}
        />
        <TextInput
          placeholder="Stad/gemeente"
          placeholderTextColor="#707070"
          returnKeyType="next"
          onChangeText={Stad => this.setState({ Stad })}
          onSubmitEditing={() => this.Pakket.focus()}
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}
          ref={(input) => this.Stad = input}
          style={styles.input}
        />
        <TextInput
          placeholder="Pakket Nummer"
          placeholderTextColor="#707070"
          returnKeyType="next"
          onChangeText={Parcel => this.setState({ Parcel })}
          keyboardType="phone-pad"
          autoCapitalize="sentences"
          autoCorrect={false}
          ref={(input) => this.Pakket = input}
          style={styles.input}
        />

        <TouchableOpacity onPress={this._submitForm} style={styles.buttoncontainer}>
          <Text style={styles.buttontext}>Verzenden</Text>
        </TouchableOpacity>

      
      </KeyboardAvoidingView>

      
    );


   
  }


  _submitForm = () => {
    const { Name, Store, Adres, Postcode, Stad, Parcel } = this.state
    console.log(Name)
    console.log(Store)
    console.log(Adres)
    console.log(Postcode)
    console.log(Stad)
    console.log(Parcel)
    // do some stuff here…

    writeOrderData(Name, Store, Adres, Postcode, Stad, Parcel);
    
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
  },




  dropdown_2: {

    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: Colors.GREY,
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
  },
  dropdown_2_text: {
    height: 40,
    lineHeight: 40,
    marginHorizontal: 6,
    fontSize: 15,
    color: Colors.GREY,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    height: 150,
    width: 350,
    borderColor: Colors.GREY,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
  },

  dropdown_2_row_text: {
    fontSize: 20,
    color: 'navy',
    textAlignVertical: 'center',
  },

  title: {
    fontSize: 30,
    color: Colors.BLUE_H1,
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    opacity: 0.8,

  },
});