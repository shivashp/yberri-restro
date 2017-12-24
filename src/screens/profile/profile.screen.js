import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headContainer}>
          <Image source={{uri: 'https://i.pinimg.com/236x/8c/f7/bf/8cf7bf38723eabd80c7229f834089693--wallpaper-for-iphone-mobile-wallpaper.jpg'}}
            style={styles.imageCover}
            blurRadius={0.7}
          />       
          <View style={styles.overlay}></View>
          <View style={styles.headSection}>        
            <Image source={{uri: 'https://i.stack.imgur.com/aSMCQ.jpg?s=328&g=1'}}
              style={styles.profilePicture}/>       
            <Text style={[styles.headText, styles.profileName]}>Shiva Pandey</Text>
          </View>
          <View style={styles.headMeta}>
            <View style={styles.grid}>
              <Text style={styles.metaValue}>120</Text>
              <Text style={styles.metaKey}>Total Orders</Text>
            </View>
            <View style={styles.grid}>
              <Text style={styles.metaValue}>2620</Text>
              <Text style={styles.metaKey}>Loyalty Points</Text>
            </View>
            <View style={styles.grid}>
              <Text style={styles.metaValue}>Rs. 1720</Text>
              <Text style={styles.metaKey}>Total Spent</Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Box />
          <Box />
        </View>
      </View>
    );
  }
}

const SingleOrder = props => (
  <TouchableOpacity style={styles.singleOrder}>
    <Text style={styles.date}>10 Dec 2017</Text> 
    <View style={styles.orderMeta}>
      <Text style={styles.orderText}>Total Items: 15</Text>
      <Text style={styles.orderText}>Rs. 2500</Text>
    </View>
  </TouchableOpacity>
)

const Box = props => (
  <View style={styles.box}>
    <View style={styles.boxHead}>
      <Text style={styles.boxHeadText}>My Address</Text>
    </View>
    <View style={styles.boxContainer}>
      <Text style={styles.contentText}>House no. 55, Ambika Marg Old Baneshwor Kathmandu Bagmati Nepal</Text>
    </View>
    <View style={styles.boxFooter}>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>ADD NEW</Text>
      </TouchableOpacity>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {    
    position: 'relative',
  },
  headContainer: {
    position: 'relative',
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
  headSection: {    
    height: 250,        
    justifyContent: 'center',
    alignItems: 'center'
  },
  headText: {
    color: 'white'
  },
  profilePicture: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  profileName: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: '500'
  },
  headMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  metaValue: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15
  },
  metaKey:{
    color: '#AFB6BE',
    fontSize: 12
  },
  contentContainer: {    
    height: '100%',
    backgroundColor:"#EEEEEE",
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  content: {
    color: 'black'
  },
  contentHead: {    
    fontSize: 17,
    fontWeight: '500',
    color: '#2A3A50',
  },
  singleOrder: {    
    backgroundColor: 'white',
    paddingVertical: 12,
    marginHorizontal: -15,
    paddingHorizontal: 15,
    marginBottom: 5,    
  },
  orderText: {
    fontWeight: 'bold',
    color: '#666',
    fontSize: 12
  },
  date: {
    color: '#409DEF',
    fontWeight: 'bold',
    fontSize: 14
  },
  orderMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  box: {
    elevation: 1,
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginBottom: 10
  },
  boxHeadText: {
    color: '#202020',
    fontWeight: '500',
    fontSize: 15,        
    marginBottom: 0,
    
  },
  boxContainer: {
    paddingTop: 5,
    paddingBottom: 15
  },
  contentText: {
    color: '#787878',
    fontSize: 13
  },
  boxFooter: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 12,
    paddingBottom: 5
  },
  footerButton: {
    backgroundColor: '#409DEF',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 20
  },
  buttonText: {    
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white'
  }
})

export {
  ProfileScreen
}