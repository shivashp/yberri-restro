import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TextInput, TouchableOpacity
} from 'react-native';

export class LoginScreen extends Component {
  render() {
    return (      
      <View style={styles.container}>
          <View style={styles.logoSection}>
            <Image
              source={require('./yberrilogo.png')}
              style={{ marginLeft: 60, marginTop: 100 }}
            />      
          </View>
          <View style={styles.formSection}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}    
              placeholder="Username"              
              underlineColorAndroid="transparent"          
            />
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({text})}    
              placeholder="Password"              
              underlineColorAndroid="transparent"          
            />
            <TouchableOpacity style={styles.loginButton} activeOpacity="0.7">
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2A3A50',    
    height: '100%'
  },
  input: {
    height: 50,
    backgroundColor: '#AFB6BE',
    paddingHorizontal: 15,
    marginBottom: 15
  },
  formSection: {
    paddingHorizontal: 20,
    marginTop: 100
  },  
  loginButton: {
    backgroundColor: '#409DEF',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  }
})