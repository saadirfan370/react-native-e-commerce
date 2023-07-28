import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import { CartList } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../redux/action/userAction";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, user, error } = useSelector((state) => state.profile);
  const [count, setcount] = useState(0);

console.log( user && user.orderHistory.length);


const fun = () => {
  setTimeout(()=>dispatch(userProfileAction()),1000)

}

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  const calculateTotalSum = () => {
    if (user && user.orderHistory) {
      const totalSum = user.orderHistory.reduce((sum, item) => {
        const num = item.price;
        const priceArray = num.split("$");
        const numericValue = Number(priceArray[1]);
        return sum + numericValue;
      }, 0);
      setcount(totalSum.toFixed(2));
    }
  };

  useEffect(() => {
    calculateTotalSum();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

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
          <View
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: 5,
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "bold",
                fontSize: SIZES.large,
                color: COLORS.primary,
              }}
            >
              Cart
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.renderlist}>
        <View style={{height:"77%"}}>

        <FlatList
          data={user && user.orderHistory}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <CartList item={item} fun={fun} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        </View>
        {/* <CartList /> */}

        <View>
          <View style={styles.headingtop}>
            <Text style={styles.heading}>Order Info</Text>
            <View style={{ padding: 10 }}>
              <View style={styles.cash}>
                <Text style={styles.textstyle}>Subtotal</Text>
                <Text style={styles.textstyle}>${count}</Text>
              </View>
              <View style={styles.cash}>
                <Text style={styles.textstyle}>Total</Text>
                <Text style={styles.textstyle1}>${count}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.checkoutbtn}>
              <Text
                style={{
                  fontSize: SIZES.small,
                  color: COLORS.lightWhite,
                  fontFamily: "semibold",
                }}
              >
                CHECKOUT ${count}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    position: "relative",
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
  renderlist: {
    marginTop: 55,
  },
  headingtop: {
    marginHorizontal: SIZES.medium,
    marginTop:10
    // position:"absolute",
    // bottom:0,
    // backgroundColor:COLORS.lightWhite,
    // width:"90%"
  },
  heading: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  cash: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    borderBottomWidth: 1,
  },
  textstyle: {
    fontFamily: "regular",
    fontSize: SIZES.medium - 3,
    color: COLORS.gray,
  },
  textstyle1: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    color: COLORS.black,
  },
  checkoutbtn: {
    backgroundColor: COLORS.primary,
    marginHorizontal: 12,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    padding: 3,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  separator: {
    height: 1,
  },
});
