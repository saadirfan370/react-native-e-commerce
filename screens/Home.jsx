import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./home.Style";
import { Ionicons, Fontisto } from "@expo/vector-icons";
// import { ScrollView } from 'react-native-gesture-handler';
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Heading from "../components/home/Heading";
import ProductRow from "../components/products/ProductRow";
import { useNavigation } from "@react-navigation/native";


const Home = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text style={styles.location}>Shanghai China</Text>

          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => navigation.navigate("cart")}>
            <View style={styles.cartCount}>
              <Text style={styles.cutNum}> 8 </Text>
            </View>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <Carousel />
        <Heading />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
