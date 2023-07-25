import React, { Component, useEffect } from "react";
import { FlatList, Text, View,ActivityIndicator } from "react-native";
import useFetch from "../../hook/usefetch";
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
import ProductCardView from "./ProductCardView";
import { useDispatch ,useSelector} from "react-redux";
import { productAction } from "../../redux/action/productAction";

const ProductList = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(productAction())
    },[])

    const { product, loading, error } = useSelector(state => state.product);


if(loading){
    return(
        <View style={styles.loadingContainer}>
            <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        </View>
    )
}

return(
    <View style={styles.container}>
        <FlatList
        data={product}
        numColumns={2}
        renderItem={({item}) => (<ProductCardView item={item} />)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
    </View>
)

};

export default ProductList;
