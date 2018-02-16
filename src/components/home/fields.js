import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Colors } from '../colors/colors.js'

export default class NameInput extends Component {
  render() {
    return (
        <View>
        <TextInput
          placeholder="naam"
          placeholderTextColor="#000066"
          returnKeyType="next"
          onSubmitEditing={() => this.adres.focus()}
          keyboardType="default"
          autoCapitalize="sentences"
          autoCorrect={false}

          style={styles.input}
          
        />
        </View>
    );
  }
}

export default class StoreSelect extends Component {
  render() {
    return (
      <ModalDropdown
        style={styles.dropdown_2}
        textStyle={styles.dropdown_2_text}
        dropdownStyle={styles.dropdown_2_dropdown}
        options={['Ikea Gent', 'MediaMarkt Grote Markt', 'Mediamarkt Ring', 'McDonalds LARGE', 'Delaize ', 'SMASH', 'Blokker']} />
    );
  }
}


/* 
export default class Adres extends Component {
  render() {
    return (

      <TextInput
        placeholder="adres + huisnr"
        placeholderTextColor="#000066"
        returnKeyType="next"
        onSubmitEditing={() => this.Postcode.focus()}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={false}
        ref={(input) => this.adres = input}
        style={styles.input}
      />

    );
  }
}

export default class Postcode extends Component {
  render() {
    return (


      <TextInput
        placeholder="Postcode"
        placeholderTextColor="#000066"
        returnKeyType="next"
        onSubmitEditing={() => this.Stad.focus()}
        keyboardType="phone-pad"
        autoCapitalize="sentences"
        autoCorrect={false}
        ref={(input) => this.Postcode = input}
        style={styles.input}
      />

    );
  }
}

export default class City extends Component {
  render() {
    return (

      <TextInput
        placeholder="Stad/gemeente"
        placeholderTextColor="#000066"
        returnKeyType="next"
        onSubmitEditing={() => this.Pakket.focus()}
        keyboardType="default"
        autoCapitalize="sentences"
        autoCorrect={false}
        ref={(input) => this.Stad = input}
        style={styles.input}
      />

    );
  }
}

export default class TraceNumber extends Component {
  render() {
    return (
      <TextInput
        placeholder="Pakket Nummer"
        placeholderTextColor="#000066"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="phone-pad"
        autoCapitalize="sentences"
        autoCorrect={false}
        ref={(input) => this.Pakket = input}
        style={styles.input}
      />
    );
  }
}

export default class SendButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text style={styles.buttontext}>Verzenden</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20
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
    fontSize: 18,
    color: Colors.GREY,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    height: 150,
    width: 250,
    borderColor: Colors.GREY,
    borderWidth: 0.5,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
  },

  dropdown_2_row_text: {
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },


}); */