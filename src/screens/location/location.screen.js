import React from 'react';
import {
  View, Text, StyleSheet, Platform, Alert
} from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';

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

  componentDidMount() {
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
  };
  onRegionChange = (region) => {
    this.setState({ region });
  }
  render() {
    let { location } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          onRegionChange={this.onRegionChange}
          region={this.state.region}
        >
          {/* <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude
            }}
            title="Your Location"
            description="Set pickup location"
          /> */}
        </MapView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export {
  LocationScreen
}