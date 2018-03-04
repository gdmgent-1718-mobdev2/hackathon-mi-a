

import React, { Component } from 'react';

import { DrawerNavigator } from 'react-navigation';



import { StyleSheet, Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, StatusBar, TextInput, Keyboard, Font } from 'react-native';
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

import DeliveriesDetail from './src/components/Deliveries/deliveriesDetail.js';
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

  var cardData = []

  _writeOverviewData = () => {
    //if there is any items already in the array they get removed
    if (cardData.length !== 0 ){
    
      cardData.splice(0, cardData.length); 
    }
    let signedInUser = firebase.auth().currentUser.uid;
    firebase.database().ref(signedInUser).once('value').then(function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        console.log("childkey " + childKey);
        console.log("childdata " + childData.Name);

        cardData.push(
          
          
          <View >
            <DeliveriesDetail store={childData.Store} packageNumber={childData.Parcel} status={childData.Status}> </DeliveriesDetail>
          </View >
        
        
        )

      });
    });
  }




/*

REASON WHY DIRTY CODE
the code underneath is an example of how it should have been together with the components to make the whole thing somewhat readable. but because of the issue with navigater we've chosen a dirty solution in order to make a working app rather then pretty code. 


export class LoginScreen extends React.Component {
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

function _writeOrderData(Name, Store, Adres, Postcode, Stad, Parcel, UserUID) {
  firebase.database().ref(UserUID + '/' + Parcel).set({
    Name: Name,
    Store: Store,
    Adres: Adres,
    Postcode: Postcode,
    Stad: Stad,
    Parcel: Parcel,
    Status: 'In de winkel'

  });

  console.log('package sent')
  
}

export class LoginScreen extends React.Component {
  state = {
    RegisterEmailInput: '',
    RegisterPasswordInput: 't',
    RegisterConfirmPasswordInput: '',
    RegisterName: '',
    LoginEmailInput: '',
    LoginPasswordInput: '',
  };
  
  render() {
    let user = firebase.auth().currentUser;
    if (user === undefined) {
    _logOut = () => {
      let that = this
      firebase.auth().signOut().then(function () {
        // Sign-out successful.

        that.props.navigation.navigate('Logout')
        console.log('you just loged out')


      }).catch(function (error) {
        // An error happened.
        console.log('you just FAILED TO LOGOUT out')
        console.log(error)

      });
    }
    _logOut();
    }
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      > 
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
                  ref={(input) => this.RegisterPasswordInput = input}
                />
                {/* text input password */}
                <TextInput
                  placeholder="Bevestig wachtwoord"
                  placeholderTextColor="#707070"
                  returnKeyType="next"
                  secureTextEntry
                  style={styles.input}

                  onChangeText={RegisterConfirmPasswordInput => this.setState({ RegisterConfirmPasswordInput })}
                  onSubmitEditing={() => this.RegisterEmailInput.focus()}
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
      </KeyboardAvoidingView>
    );
  }

  _login = () => {
    const {
      LoginEmailInput,
      LoginPasswordInput
    } = this.state
    console.log(LoginEmailInput);
    
    if (LoginEmailInput !== '' && LoginPasswordInput !== ''){
      firebase.auth().signInWithEmailAndPassword(LoginEmailInput, LoginPasswordInput).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        // ...
        console.log(LoginEmailInput)
        console.log(errorCode);
        console.log(errorMessage);
        console.log('Inside The Login');
        alert('either the e-mail or the password was incorect')
      });
      
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log(user.uid)
          signedInUser = user.uid;
          that.props.navigation.navigate('Request')
          _writeOverviewData();

        } else {
          console.log('Error something went wrong')
          }
      });

    } else {
      alert('either the e-mail or the password was not filled in')
    }
    


    let that = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
      } else {
        // No user is signed in.
        that.props.navigation.navigate('Logout')
        console.log('no user is signed in')
      }
    });
    
  }
  _register = () => {
    Keyboard.dismiss()
    const { RegisterEmailInput, RegisterPasswordInput, RegisterConfirmPasswordInput, RegisterName} = this.state

    if (RegisterEmailInput !== '' && RegisterPasswordInput !== '' && RegisterName !== '' ){
      firebase.auth().createUserWithEmailAndPassword(RegisterEmailInput, RegisterPasswordInput).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(RegisterEmailInput)
        console.log(errorCode);
        console.log(errorMessage);
        console.log('Inside The create user');

        if (errorCode === "auth/weak-password"){
          alert('the password should have at least 6 characters')
        } else if (errorCode === "auth/invalid-email") {
          alert('the email was badly formed')
        } 
        var user = firebase.auth().currentUser;
      });
    } else {
      alert('please fill all fields in correctly')
    }

    
    
    let that = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.uid)
        that.props.navigation.navigate('Request')

      } else {
        // No user is signed in.
      }
    });

  }
};


export class RequestScreen extends React.Component {
  state = {
    Name: 'Jane Doe',
    Store: 'Not Given',
    Adres: 'Not Given',
    Postcode: 'Not Given',
    Stad: 'Not Given',
    Parcel: '1111-12345-1502',
    that: this
  };


  render() {
    let here = this
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      > 
        <ScrollView>
        <Header />

        <Text style={styles.titleRequest}>Nieuwe Levering</Text>
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

          options={['Ikea Gent', 'MediaMarkt Grote Markt', 'Mediamarkt Ring', 'McDonalds LARGE', 'Delaize ', 'SMASH', 'Blokker']} 
            onSelect={(idx, value) => this.state.Store = value}
          />


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
        
  <Social/>
          </ScrollView>
      </KeyboardAvoidingView>
    );
    
  }
  _changeScreenToOverview = () => {
    this.props.navigation.navigate('Overview')
  }

  _submitForm = () => {
    let that = this
    const { Name, Store, Adres, Postcode, Stad, Parcel } = this.state
    console.log(Name)
    console.log(Store)
    console.log(Adres)
    console.log(Postcode)
    console.log(Stad)
    console.log(Parcel)
    // do some stuff here…
    let UserUID = firebase.auth().currentUser.uid;
    console.log(UserUID)

    
    if (Adres !== 'Not Given' && Postcode !== 'Not Given' && Stad !== 'Not Given' && Parcel !== 'undfiend'){
      _writeOrderData(Name, Store, Adres, Postcode, Stad, Parcel, UserUID)
      
      //THIS SHOULD GO TO THE OVERVIEW

      _writeOverviewData();

  //this Timeout is so the data has time to be read and proccesed
      setTimeout(function () { that._changeScreenToOverview() }, 200);
   //   that.props.navigation.navigate('Overview')

      


      //that.props.navigation.navigate('Overview')
    
    } else {
      alert('you should fill in all fields')
    }




  }


};
  

export class OverviewScreen extends React.Component {

  render() {

      return (
        <ScrollView >
          <View>
            <Header />
            <View>
              {cardData}
            </View>
            <Social />
          </View>
        </ScrollView >
  
      )

  }
 
};

export class AboutScreen extends React.Component {

  render() {

    return (
      <ScrollView >
        <About  />
      </ScrollView >
    )

  }

};


export const RootStack = DrawerNavigator(
  {
    Logout: {
      screen: LoginScreen,
    },
    Request: {
      screen: RequestScreen,
    },
    Overview: {
      screen: OverviewScreen,
    },
    About: {
      screen: AboutScreen,
    }
  },
  {

    initialRouteName:'Logout',
    activeTintColor: '#2196f3',
    activeBackgroundColor: 'rgba(255, 0, 0, .04)',
    inactiveTintColor: 'rgba(0, 0, 0, .87)',
    inactiveBackgroundColor: 'transparent',
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
    width: 400,
    backgroundColor: Colors.WHITE,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: Colors.GREY,
    color: Colors.GREY,
    fontFamily: 'Roboto',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  buttoncontainer: {
    backgroundColor: Colors.GREEN,
    paddingVertical: 10,
    marginVertical: 12,
    borderRadius: 50,

  },
  buttontext: {
    textAlign: 'center',
    borderColor: Colors.GREY,
    paddingHorizontal: 10,
    color: Colors.GREY,
    height: 40,
    fontFamily: 'Roboto',
    color: Colors.WHITE,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  title: {
    fontFamily: 'bjorn',
    fontSize: 30,
    color: '#006633',
    marginTop: -50,
    textAlign: 'center',
    opacity: 0.8,


  },
  titleRequest: {
    fontFamily: 'bjorn',
    fontSize: 30,
    color: '#006633',
    textAlign: 'center',
    opacity: 0.8,


  },
  dropdown_2: {
    width: 400,
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
    fontFamily: 'Roboto',
  },
  dropdown_2_dropdown: {
    height: 150,
    width: 400,
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
});




Expo.Font.loadAsync({
  bjorn: require('./assets/fonts/Bjorn.otf'),
  roboto: require('./assets/fonts/Roboto.ttf')
});



          

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Splash: 'yes',
    }
    this.getTime = setInterval(() => {
      this.setState({
        Splash: 'no'
      })
    }, 3000)


  }
  render() {
    {this.state.Splash == 'yes' ? <Splash /> : <RootStack />}
    if (this.state.Splash == 'yes') {
      return (
        < Splash />
      )
    }else{
      return (
        < RootStack />
      )
    }
  
  }
}
/*
async componentDidMount = () => {
    await Font.LoadAsync({
      bjorn: require('./assets/fonts/Bjorn'),
      roboto: require('./assets/fonts/Roboto')
    })
  };
  */