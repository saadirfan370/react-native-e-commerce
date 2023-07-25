import React,{useEffect} from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./projuctRow.style";
import { useDispatch ,useSelector} from "react-redux";
import { productAction } from "../../redux/action/productAction";

const ProductRow = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(productAction())
  },[])

  const { product, loading, error } = useSelector(state => state.product);
  // const product = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={product}
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
