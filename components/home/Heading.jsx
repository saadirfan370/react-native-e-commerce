import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import styles1 from './heading.style';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

 const Heading = () => {
  const navigation = useNavigation()
    return (
      <View style={styles1.container}>
        <View style={styles1.header}>
        <Text style={styles1.headerTitle} >New Rivals</Text>

        <TouchableOpacity onPress={() => navigation.navigate("ProductList")} >
            <Ionicons name='ios-grid' size={24} color={COLORS.primary}  />
        </TouchableOpacity>
        </View>
      </View>
    )
  }

export default Heading;