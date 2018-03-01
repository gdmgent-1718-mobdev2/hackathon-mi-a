

import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';



import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput } from 'react-native';
import { Colors } from './src/components/colors/colors.js';
import LogoMidden from './src/components/Logo/logoMidden';
import Header from './src/components/eachPage/header';
import Social from './src/components/eachPage/social';

import ModalDropdown from 'react-native-modal-dropdown';
import * as firebase from "firebase";



import Login from './src/components/login/login';
import LoginForm from './src/components/login/loginForm';
import RegisterForm from './src/components/login/registerform';

import Splash from './src/components/splash/splash';

import Deliveries from "./src/components/Deliveries/deliveries.js";
import About from "./src/components/about/about.js";
import DeliveryForm from './src/components/home/complete.js'


var config = {
  apiKey: "AIzaSyDDUjkoXS66VodkwHg6H1Q7RgTf8mXyalU",
  authDomain: "briavers-mobdev2-1718-w1.firebaseapp.com",
  databaseURL: "https://briavers-mobdev2-1718-w1.firebaseio.com",
  projectId: "briavers-mobdev2-1718-w1",
  storageBucket: "",
  messagingSenderId: "286543267019"
};



firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

/*

REASON WHY DIRTY CODE
the code underneath is an example of how it should have been together with the components to make the whole thing somewhat readable. but because of the issue with navigater we've chosen a dirty solution in order to make a working app rather then pretty code. 


export class HomeScreen extends React.Component {
  render() {
    return (
        <View>
        <Login />
        </View>
    );
  }
  
};


export class RequestScreen extends React.Component {
  render() {
    return (
        <View>
        <DeliveryForm />
        </View>
    );
  }
};

*/
function _writeOrderData(Name, Store, Adres, Postcode, Stad, Parcel) {
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

export class HomeScreen extends React.Component {
  state = {
    RegisterEmailInput: 'Jane Doe',
    RegisterPasswordInput: 'Ikea Gent',
    RegisterConfirmPasswordInput: 'Not Given',
    RegisterName: 'Jonh Doe',
    LoginEmailInput: 'Jane Doe',
    LoginPasswordInput: '',
  };
  
  render() {
    return (
      <View>
       
        <ScrollView>
          <View style={styles.container}>
            <LogoMidden style={styles.containerLogo} />
            {/* <Text style={styles.title}>test login</Text> */}

            <View style={styles.formContainer}>
              {/* inhoud form */}
              <Text style={styles.title}>Login</Text>

              {/* <LoginForm> </LoginForm> */}
              
                {/* <StatusBar barStyle = "light-content"/> 
        <Text>Titel loginform</Text>*/}
                {/* text input email */}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#707070"
                  returnKeyType="next"
                  onChangeText={LoginEmailInput => this.setState({ LoginEmailInput })}
                  onSubmitEditing={() => this.LoginPasswordInput.focus()}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}

                  style={styles.input}
                />
                {/* text input password */}
                <TextInput
                  placeholder="password"
                  placeholderTextColor="#707070"
                  returnKeyType="go"
                  secureTextEntry
                  style={styles.input}
                  onChangeText={LoginPasswordInput => this.setState({ LoginPasswordInput })}
                  ref={(input) => this.LoginPasswordInput = input}
                />

                <TouchableOpacity
                  // onPress={"./about.js"}
                  style={styles.buttoncontainer}
                  onPress={this._login}>

                  <Text style={styles.buttontext}>Login</Text>
                </TouchableOpacity>
             
            
            
            
            </View>

            <View style={styles.formContainer} style={styles.formContainer2}>
              <Text style={styles.title}>Register</Text>


                {/* <StatusBar barStyle = "light-content"/> 
        <Text>Titel loginform</Text>*/}
                {/* text input gebruikersnaam */}
                <TextInput
                  placeholder="Naam"
                  placeholderTextColor="#707070"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                  onChangeText={RegisterName => this.setState({ RegisterName })}
                  onSubmitEditing={() => this.RegisterPasswordInput.focus()}
                />
                {/* text input password */}
                <TextInput
                  placeholder="Wachtwoord"
                  placeholderTextColor="#707070"
                  returnKeyType="next"
                  secureTextEntry
                  style={styles.input}
                  onChangeText={RegisterPasswordInput => this.setState({ RegisterPasswordInput })}
                  onSubmitEditing={() => this.RegisterConfirmPasswordInput.focus()}
                  ref={(input) => this.PasswordInput = input}
                />
                {/* text input password */}
                <TextInput
                  placeholder="Bevestig wachtwoord"
                  placeholderTextColor="#707070"
                  returnKeyType="next"
                  secureTextEntry
                  style={styles.input}

                  onChangeText={RegisterConfirmPasswordInput => this.setState({ RegisterConfirmPasswordInput })}
                  onSubmitEditing={() => this.RegisteremailInput.focus()}
                  ref={(input) => this.RegisterConfirmPasswordInput = input}
                />
                {/* text input email */}
                <TextInput
                  placeholder="Email"
                  placeholderTextColor="#707070"
                  returnKeyType="go"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}

                  onChangeText={RegisterEmailInput => this.setState({ RegisterEmailInput })}
                  ref={(input) => this.RegisterEmailInput = input}
                />

                <TouchableOpacity onPress={this._register} style={styles.buttoncontainer}>
                  <Text style={styles.buttontext}>Register</Text>
                </TouchableOpacity>




            </View>

          </View>
          <Social />
        </ScrollView>
      </View>
    );
  }

  _login = () => {
    const {
      LoginEmailInput,
      LoginPasswordInput
    } = this.state
    console.log(LoginEmailInput);
    
    
    
    firebase.auth().signInWithEmailAndPassword(LoginEmailInput, LoginPasswordInput).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      console.log('Inside The Login');
    });

    let that = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.uid)
        that.props.navigation.navigate('Request')

      } else {
        // No user is signed in.
      }
    });
    
  }
  _register = () => {
    const { RegisterEmailInput, RegisterPasswordInput, RegisterConfirmPasswordInput } = this.state
    console.log(RegisterEmailInput)




    




    firebase.auth().createUserWithEmailAndPassword(RegisterEmailInput, RegisterPasswordInput).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
      console.log('Inside The create user');
    });

    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: RegisterName,
    }).then(function () {
      // Update successful.
    }).catch(function (error) {
      // An error happened.
    });
let that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.uid)
        this.props.navigation.navigate('Request')

      } else {
        // No user is signed in.
      }
    });

  }
};


export class RequestScreen extends React.Component {
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
      <View>
        
        

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



      </View>
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

    _writeOrderData(Name, Store, Adres, Postcode, Stad, Parcel)
  }
};
var usertest = firebase.auth().currentUser;
if (usertest){ 
  console.log(true)
} else {

  console.log(false)
}



export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Request: {
      screen: RequestScreen,
    },
  },
  {

      initialRouteName: 'Home',
  
  }
);




//Styles normaly would have been part in the components if the navigater had worked properly


const styles = StyleSheet.create({
  container: {
    flex: 1
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






export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}