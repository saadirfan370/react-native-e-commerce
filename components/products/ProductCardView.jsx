import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './productcardview.style';
import im2 from '../../assets/images/fn5.jpg';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../../constants';

const ProductCardView = () => {
    return (
      <TouchableOpacity onPress={() =>{}} style={{height:350}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={im2} style={styles.image} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>details is very large</Text>
                <Text style={styles.supplier}>details</Text>
                <Text style={styles.price}>$6475</Text>
            </View>
            <TouchableOpacity style={styles.addbtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
  }

export default ProductCardView;