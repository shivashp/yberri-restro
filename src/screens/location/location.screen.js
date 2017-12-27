import React from 'react';
import {
  View, Text, StyleSheet, Platform, Alert, TextInput, TouchableOpacity
} from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { Ionicons } from '@expo/vector-icons';

class LocationScreen extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0043,
      longitudeDelta: 0.0034
    },
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ region: {
      ...this.state.region, 
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    }});    
    Alert.alert("Location", JSON.stringify(location)); 
  };  
  onRegionChange = region => this.setState({region})
  render() {
    let { location } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onRegionChange={this.onRegionChange}
          initialRegion = {this.state.region}
          region={this.state.region}
        />   
        <View style={styles.markerBg}>
          <TouchableOpacity style={styles.marker}>
            <Text style={styles.markerText}>SET DROP LOCATION</Text>
          </TouchableOpacity>
        </View>     
        <View style={styles.topBar}>
          <Ionicons name="ios-search" size={22} style={{marginTop: 3}} color="#409DEF" />
          <TextInput
            style={styles.input}
            onChangeText={address => this.setState({address})}    
            placeholder="Search your location..."            
            placeholderTextColor="#AFB6BE"
            selectionColor = "#409DEF"
            returnKeyType = "search"            
            underlineColorAndroid="transparent"          
          />           
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  markerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',    
    zIndex: 0, // Change zindex to make marker visible
    justifyContent: 'center',
    alignItems: 'center',     
  },
  marker: {
    backgroundColor: '#0F0D1C',
    borderRadius: 50,
    zIndex: 3,
  },
  markerText: {
    color: 'white',
    paddingVertical: 6,
    paddingHorizontal: 15
  },
  topBar: {
    marginTop: 60,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#fff',
    elevation: 2,
    flexDirection: 'row' 
  },
  input: {
    flex: 1,
    paddingLeft: 10
  }
});

export {
  LocationScreen
}