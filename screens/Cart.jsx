import React, { Component } from "react";
import { Text, View, TouchableOpacity,ScrollView ,FlatList} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back-circle"
                size={30}
                color={COLORS.black}
              />
            </TouchableOpacity>
            <View style={{display:"flex",alignItems:"center",marginTop:5,marginLeft:10}}>
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: SIZES.xLarge,
                }}
              >
                Cart
              </Text>
            </View>
        </View>
      </View>

      <View style={styles.renderlist}>
        <View style={styles.headingtop}>
          <Text style={styles.heading}>Order Info</Text>
          <View style={{padding:10}}>
            <View style={styles.cash}>
              <Text style={styles.textstyle}>
                Subtotal
              </Text>
              <Text style={styles.textstyle}>
                $799.00
              </Text>
            </View>
            <View style={styles.cash}>
              <Text style={styles.textstyle}>
                Total
              </Text>
              <Text style={styles.textstyle1}>
                $799.00
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.checkoutbtn}>
            <Text style={{fontSize:SIZES.small,color:COLORS.lightWhite,fontFamily:"semibold"}}>CHECKOUT $799.00</Text>
          </TouchableOpacity>
        </View>
          <ScrollView>
            <FlatList />
          </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xLarge,
    zIndex: 999,
  },
  upperRow: {
    // backgroundColor:"red",
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    top: SIZES.large,
    zIndex: 999,
  },
  renderlist:{
    marginTop:80
  },
  headingtop:{
    marginHorizontal:SIZES.medium
  },
  heading:{
    fontFamily:"semibold",
    fontSize:SIZES.medium,
    color:COLORS.primary
  },
  cash:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:8,
    borderBottomWidth:1
  },
  textstyle:{
    fontFamily:"regular",
    fontSize:SIZES.medium-3,
    color:COLORS.gray
  },
  textstyle1:{
    fontFamily:"semibold",
    fontSize:SIZES.medium,
    color:COLORS.black,
  },
  checkoutbtn:{
    backgroundColor:COLORS.primary,
    marginHorizontal:12,
    borderRadius:12,
    flexDirection:'row',
    justifyContent:"center",
    padding:3
  }
});
