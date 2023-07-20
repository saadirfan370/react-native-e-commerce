import React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./projuctRow.style";
import useFetch from "../../hook/usefetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();
  // const product = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
          style={{ height: 350 }}
        />
      )}
    </View>
  );
};

export default ProductRow;
