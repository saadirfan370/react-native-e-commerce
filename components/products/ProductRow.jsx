import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";

const ProductRow = () => {
  const product = [1, 2, 3, 4];
  return (
    <View style={{marginTop:SIZES.medium,}}>
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
