import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./projuctRow.style";

const ProductRow = () => {
  const product = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={({ item }) => <ProductCardView />}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
}; 

export default ProductRow;
