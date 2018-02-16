import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Login from './src/components/login/login';
import LoginForm from './src/components/login/loginForm';
import RegisterForm from './src/components/login/registerform';
import Splash from './src/components/splash/splash';
import LogoMidden from './src/components/Logo/logoMidden';
import {Colors} from './src/components/colors/colors.js';
import DeliveryForm from './src/components/home/complete';
import Deliveries from "./src/components/Deliveries/deliveries.js";
import About from "./src/components/about/about.js";

Expo.Font.loadAsync({
  bjorn: require('./assets/fonts/Bjorn.otf'),
  roboto: require('./assets/fonts/Roboto.ttf')
});


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Splash: 'yes',
  }
      this.getTime =  setInterval(() => {
        this.setState({
          Splash:'no'
        })
    }, 3000)


}
  
  render() {
    return (
      <ScrollView>
    <View>
            
          
          {this.state.Splash == 'yes' ? <Splash /> : <Login/>}
         {/*  
          {this.state.Splash == 'yes' ? <Splash /> : <DeliveryForm/>}

          {this.state.Splash == 'yes' ? <Splash /> : <About/>}
          
          {this.state.Splash == 'yes' ? <Splash /> : <Deliveries/>} */}

    </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App