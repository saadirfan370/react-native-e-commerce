import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  RefreshControl
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import img2 from "../assets/images/space.jpg";
import imgProfile from "../assets/images/profile.jpeg";
import { COLORS, SIZES } from "../constants";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector ,useDispatch} from "react-redux";
import { ActionLogOut, userProfileAction, userSignInAction } from "../redux/action/userAction";
import { useEffect } from "react";

const Profile = () => {
  const dispatch = useDispatch()
  const {loading,user ,error} = useSelector(state => state.profile)
  
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000); 
  };

  useEffect(()=>{
    dispatch(userProfileAction())
  },[])


  const logOutfun = () => {
    dispatch(ActionLogOut())
    dispatch(userSignInAction())
    navigation.navigate("Login")
  }


  return (
    <View style={styles.imgContainer}>
      <Image source={img2} style={styles.images} />
      <SafeAreaView>
        <View style={styles.viewProfile}>
          <Image source={imgProfile} style={styles.imgProf} />
        </View>
        <View style={styles.nameView}>
          <Text
            style={{
              fontFamily: "semibold",
              fontSize: SIZES.medium,
              color: COLORS.primary,
            }}
          >
            {
            user ? user.name : "example"
            }
          </Text>
          <TouchableHighlight>
            <Text style={styles.emailStyle}>{ user ? user.email : "example@gamil.com"}</Text>
          </TouchableHighlight>
        </View>
        <View style={{ marginHorizontal: 10, paddingTop: 10 }}>
          <ScrollView
             contentContainerStyle={styles.contentContainer}
             refreshControl={
               <RefreshControl
                 refreshing={isRefreshing}
                 onRefresh={onRefresh}
                 tintColor="#000000" // Customize the loading spinner color
               />
             }
          >
            <TouchableOpacity style={styles.btn5} onPress={() => navigation.navigate("Favorites")}>
              <Ionicons name="heart-outline" size={30} />
              <Text style={styles.text2}>Favorites</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn5}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={25} />
              <Text style={styles.text2}>Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn5} onPress={()=> navigation.navigate("cart")}>
              <MaterialCommunityIcons name="cart-variant" size={25} />
              <Text style={styles.text2}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn5} onPress={()=> onRefresh()}>
              <MaterialCommunityIcons name="cached" size={25} />
              <Text style={styles.text2}>Clear Cache</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn5}>
              <AntDesign name="deleteuser" size={25} />
              <Text style={styles.text2}>Delete Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn4} onPress={()=> logOutfun()}>
              <AntDesign name="logout" size={25} />
              <Text style={styles.text2}>Logout</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
  },
  images: {
    // aspectRatio:1,
    width: "100%",
    height: 280,
    resizeMode: "cover",
  },
  viewProfile: {
    position: "absolute",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor:"red",
    height: 32,
    top: 0,
  },
  imgProf: {
    width: 170,
    height: 170,
    borderRadius: 85,
    resizeMode: "contain",
    borderColor: "#ffffff6e",
    borderWidth: 8,
  },
  nameView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginTop:10,
  },
  emailStyle: {
    padding: 4,
    paddingHorizontal: 10,
    backgroundColor: COLORS.secondary,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: COLORS.primary,
    borderWidth: 1,
    fontFamily: "regular",
    fontSize: SIZES.small,
  },
  text2: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
    color: COLORS.gray,
    paddingLeft: 20,
  },
  btn5: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.gray,
    borderBottomWidth: 1,
    paddingHorizontal: 22,
    padding:8
  },
  btn4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 22,
    padding:8
  },
});
