import React, { Component } from 'react';
import {
  View, ScrollView, Image, Dimensions, StyleSheet
} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.5

class Carousel extends Component {
  render() {
    const { images } = this.props;
    if (images && images.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            scrollEventThrottle={5}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image, index) => (
              <Image style={styles.image} source={image.source} key={index} resizeMode="stretch"/>
            ))}
          </ScrollView>
        </View>
      );
    }    
    return null;    
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: 'auto',
    marginHorizontal: -10
  },
  image: {
    width: width * 0.95,
    height,
    marginRight: 10,    
  },
})

export {
  Carousel
};