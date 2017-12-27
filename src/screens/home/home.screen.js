import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { ProfileScreen, LoginScreen, LocationScreen } from 'screens';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const TabBar = props => {
  const {tintColor} = props;
  const active = props.navigationState.index;
  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Profile")}>
        <FontAwesome name="user-circle-o" size={18} style={[styles.tabIcon, {color: (active != 0)?'#AFB6BE':'#409DEF'}]}/>
        <Text style={[styles.buttonText, {color: (active != 0)?'#AFB6BE':'#409DEF'}]}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Location")}>
        <MaterialCommunityIcons name="truck-delivery" size={18} style={[styles.tabIcon, {color: (active != 1)?'#AFB6BE':'#409DEF'}]}/>
        <Text style={[styles.buttonText, {color: (active != 1)?'#AFB6BE':'#409DEF'}]}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Setting")}>
        <MaterialCommunityIcons name="truck-delivery" size={18} style={[styles.tabIcon, {color: (active != 2)?'#AFB6BE':'#409DEF'}]}/>
        <Text style={[styles.buttonText, {color: (active != 2)?'#AFB6BE':'#409DEF'}]}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

const SettingScreen = () => (
  <View style={{flex: 1, backgroundColor: '#2A3A50', justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{color: 'white', fontSize: 17}}>Setting Screen</Text>
  </View>
);

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
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {    
    fontSize: 12,
    fontFamily: 'open-sans'
  }
}

const HomeScreen = TabNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  Location: {
    screen: LocationScreen,
  },
  Setting: {
    screen: SettingScreen,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled:false,
  animationEnabled: true,
  tabBarComponent: TabBar,
  tabBarOptions: {
    activeTintColor: '#409DEF',
  },
});


export {
  HomeScreen
}