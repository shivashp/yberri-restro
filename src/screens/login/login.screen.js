import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

export class LoginScreen extends Component {
  render() {
    return (      
      <View style={styles.container}>
        <Image source={{uri: 'https://i.pinimg.com/236x/8c/f7/bf/8cf7bf38723eabd80c7229f834089693--wallpaper-for-iphone-mobile-wallpaper.jpg'}}
        style={styles.imageCover}/>       
        <View style={styles.overlay}></View>
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={10}>
          <View style={styles.logoSection}>
            <Image
              source={require('./yberrilogo.png')}
              style={{ marginLeft: 60, marginTop: 100 }}
            />      
          </View>
          <View style={styles.formSection}>          
            <TextInput
              style={styles.input}
              onChangeText={(username) => this.setState({username})}    
              placeholder="Username"        
              placeholderTextColor="#2A3A50"      
              underlineColorAndroid="transparent"          
            />
            <TextInput
              style={styles.input}
              onChangeText={(password) => this.setState({password})}    
              placeholder="Password"            
              placeholderTextColor="#2A3A50"        
              underlineColorAndroid="transparent"          
            />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.accountCheck}>                 
              <Text style={styles.haveAccount}>Don't have an account? </Text>
              <TouchableOpacity><Text style={styles.haveAccount}> Register</Text></TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.info}>
          <Text style={styles.infoText}>Powered by Yberri</Text>
        </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#2A3A50',        
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(42, 58, 80,0.8)'
  },
  imageCover: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  input: {
    height: 50,
    backgroundColor: 'rgba(175, 182, 190,0.9)',    
    paddingHorizontal: 15,
    marginBottom: 15,  
    borderRadius: 50  
  },
  formSection: {
    paddingHorizontal: 20,
    marginTop: 80
  },  
  loginButton: {
    backgroundColor: '#409DEF',
    width: '100%',
    paddingVertical: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50  
  },
  buttonText: {
    color: 'white'
  },
  info: {    
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15
  },
  infoText: {
    color: '#AFB6BE',
    fontSize: 15
  },
  accountCheck: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 35,
  },
  haveAccount: {  
    color: 'white',
    fontSize: 15  
  }
})