import React, { Component } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS } from "../../constants";
import img from "../../assets/images/fn5.jpg";
import { Ionicons } from "@expo/vector-icons";

const CartList = ({ item }) => {
  const navigation = useNavigation();

  
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("ProductDetail", { item })}
      >
        <View style={styles.image}>
          <Image
            // source={img}
            source={{uri:item.imageUrl}}
            style={styles.productImage}
          />
        </View>
        <View style={styles.textContainer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.productTitle} numberOfLines={1}>
              {item.title}
            </Text>
            <TouchableOpacity>
              <Ionicons
                name="trash-bin-outline"
                color="red"
                size={SIZES.large}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.supplier}> {item.supplier}</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:"center"
            }}
          >
            <Text style={styles.supplier}>{item.price}</Text>
            <TouchableOpacity style={{backgroundColor:COLORS.primary,padding:2,paddingHorizontal:12,borderRadius:12}}>
              <Text style={{color:"#fff",fontFamily:"regular",fontSize:SIZES.small}}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: SIZES.small,
    flexDirection: "row",
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    backgroundColor: "#fff",
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
  },
  image: {
    width: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
  },
  productImage: {
    width: "100%",
    height: 65,
    borderRadius: SIZES.small,
    resizeMode: "cover",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
  },
  productTitle: {
    fontSize: SIZES.medium,
    fontFamily: "bold",
    color: COLORS.primary,
    width: "80%",
    overflow: "hidden",
  },
  supplier: {
    fontSize: SIZES.small + 2,
    fontFamily: "regular",
    color: COLORS.gray,
  },
});
