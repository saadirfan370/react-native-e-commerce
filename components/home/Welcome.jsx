import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./welcome.Style";
import { COLORS, SIZES } from "../../constants";
import { Ionicons, Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcometxt(COLORS.black, SIZES.xSmall)}>
          {" "}
          Find The Most
        </Text>
        <Text style={styles.welcometxt(COLORS.primary, -5)}>
          {" "}
          Luxurious Furniture
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onPressIn={() => navigation.navigate("Search")}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchbtn}>
            <Ionicons
              name="camera-outline"
              size={SIZES.xLarge}
              color={COLORS.offwhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
