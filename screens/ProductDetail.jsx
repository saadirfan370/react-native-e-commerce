import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image,ActivityIndicator } from "react-native";
import styles from "./productDetail.style";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch,useSelector } from "react-redux";
import { addTOCartAction } from "../redux/action/addTOCartAction";


const ProductDetail = ({ navigation}) => {
  const dispatch = useDispatch()
  const {loading,data,error} = useSelector(state => state.addTOCart)

  const route = useRoute();
  const {item} = route.params;

  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addtocart = ( ) => {
    dispatch(addTOCartAction({
      title: item && item.title,
      supplier: item && item.supplier,
      price: item && item.price,
      imageUrl: item && item.imageUrl,
      description: item && item.description,
      product_location: item && item.product_location,
    }))
  }
  if(loading){
    return(
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        </View>
    )
}

  return (
    <View style={styles.container}>
      
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image source={{uri:item.imageUrl}} style={styles.image} />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.pricewrapper}>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <View style={styles.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color="gold" />
              ))}
              <Text style={styles.ratingText}>(4.9)</Text>
            </View>

            <View style={styles.rating}>
              <TouchableOpacity onPress={increment}>
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>

              <TouchableOpacity onPress={() => decrement()}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.descriptionWraper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
             {item.description}
            </Text>
          </View>

          <View style={{ marginBottom: SIZES.small }}>
            <View style={styles.location}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="location-outline" size={20} />
                <Text> Home</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="truck-delivery-outline"
                  size={20}
                />
                <Text> Free Delivery</Text>
              </View>
            </View>
          </View>

          <View style={styles.cartRow}>
            <TouchableOpacity onPress={() => addtocart()} style={styles.cartbtn}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.addCrt}>
            <Fontisto name="shopping-bag" color={COLORS.lightWhite} size={22} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
