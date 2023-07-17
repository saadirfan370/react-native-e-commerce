import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import styles from './welcome.Style';
import { COLORS } from '../../constants';
import img1 from '../../assets/images/fn2.jpg';
import img2 from '../../assets/images/fn3.jpg';
import img3 from '../../assets/images/fn4.jpg';

const Carousel = () => { 
    const slides = [
        img1,
        img2,
        img3
    ]

    return (
      <View style={styles.carouselContainer}>
        <SliderBox  images={slides}
        dotColor = {COLORS.primary}
        inactiveDotColor = {COLORS.secondary}
        ImageComponentStyle = {{borderRadius:15,width:"93%",marginTop:15}}
        autoplay
        circleloop
        />
      </View>
    )
  }
export default Carousel;
