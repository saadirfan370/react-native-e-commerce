import React, { Component } from "react";
import { Text, View, SafeAreaView ,StyleSheet,TouchableOpacity} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { COLORS,SIZES } from "../constants";

const Favorites = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle-outline"
            size={30}
            color={COLORS.black}
          />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 5,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "bold",
              fontSize: SIZES.large,
              color:COLORS.primary
            }}
          >
            Favorites
          </Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Favorites;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      },
      wrapper: {
        marginHorizontal: 1,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge,
        zIndex: 999,
      },
      upperRow: {
        marginHorizontal: SIZES.large,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        // backgroundColor:COLORS.primary,
        borderRadius: SIZES.large,
        top: SIZES.large,
        zIndex: 999,
      },
})