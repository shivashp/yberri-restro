import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { ProfileScreen, LoginScreen, LocationScreen } from 'screens';

const TabBar = props => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Profile")}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Location")}>
        <Text style={styles.buttonText}>Location</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  bar: {
    backgroundColor: 'white',
    height: 50,
    borderTopWidth:1,
    borderColor: '#eee',
    flexDirection: 'row',
    elevation: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}

const HomeScreen = TabNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  Location: {
    screen: LocationScreen,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled:false,
  animationEnabled: true,
  tabBarComponent: TabBar
});


export {
  HomeScreen
}