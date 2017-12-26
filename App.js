import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LoginScreen, ProfileScreen, HomeScreen
} from 'screens';
import { Font } from 'expo';  

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
    });
    this.setState({fontLoaded: true});
  }  
  render() {
    let fontLoaded = this.state.fontLoaded;
    return (      
      <View style={{flex: 1}}>
        { fontLoaded && <HomeScreen />}
      </View>
    );
  }
}
