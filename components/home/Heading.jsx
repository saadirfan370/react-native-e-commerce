import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles1 from './heading.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../../constants';

 const Heading = () => {
    return (
      <View style={styles1.container}>
        <View style={styles1.header}>
        <Text style={styles1.headerTitle} >New Rivals</Text>

        <TouchableOpacity >
            <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
        </View>
      </View>
    )
  }

export default Heading;