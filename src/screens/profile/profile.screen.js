import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView
} from 'react-native';
import { Carousel } from 'components';
import { LoginScreen } from 'screens';


const images = [
  {
    source: {
      uri: 'http://i.imgur.com/z1mIF5l.jpg',
    },
  },
  {
    source: {
      uri: 'http://www.rechargenshoppingtricks.com/wp-content/uploads/2015/12/Paytm-food-offers.png',
    },
  },
  {
    source: {
      uri: 'https://www.mbplc.com/images/news/ember-fooddeal-wide.jpg',
    },
  },
  {
    source: {
      uri: 'https://www.bp.com/content/dam/bp-country/en_au/promotions/p12-6.jpg',
    },
  },
  
];

class ProfileScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
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
          <Text style={styles.sectionHeading}>RECOMMENDED FOR YOU</Text>                          
          <Carousel images={images} />   

          <Box />         
          <Box />         
          <Box />         
        </View>
      </ScrollView>
    );
  }
}


const Box = props => (
  <View style={styles.box}>
    <View style={styles.boxHead}>
      <Text style={styles.boxHeadText}>My Address</Text>
    </View>
    <View style={styles.boxContainer}>
      <Text style={styles.contentText}>House no. 55, Ambika Marg Old Baneshwor Kathmandu Bagmati Nepal</Text>
    </View>
    {/* <View style={styles.boxFooter}>
      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>ADD NEW</Text>
      </TouchableOpacity>
    </View> */}
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
    fontFamily: 'open-sans'
  },
  headMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  metaValue: {
    color: 'white',    
    fontSize: 15,
    fontFamily: 'open-sans'
  },
  metaKey:{
    color: '#AFB6BE',
    fontSize: 12,
    fontFamily: 'open-sans'
  },
  contentContainer: {    
    height: '100%',
    backgroundColor:"#EEEEEE",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom:50
  },
  content: {
    color: 'black'
  },
  contentHead: {    
    fontSize: 17,
    fontWeight: '500',
    color: '#2A3A50',
  },
  sectionHeading: {    
    paddingVertical: 5,    
    fontFamily: 'open-sans',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2A3A50',
  },  
  box: {
    elevation: 1,
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    marginVertical: 10
  },
  boxHeadText: {
    color: '#202020',    
    fontSize: 15,        
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10,
    fontFamily: 'open-sans',
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
    marginTop: 10,
    paddingTop: 10,        
  },
  footerButton: {
    // backgroundColor: '#409DEF',
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 0,
    borderRadius: 20
  },
  buttonText: {    
    fontWeight: 'bold',
    fontSize: 12,
    color: '#409DEF'
  }
})

export {
  ProfileScreen
}