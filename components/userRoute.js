import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React,{useEffect} from "react";
import { useSelector } from "react-redux";

const UserRoute = ({ children }) => {
  const navigation = useNavigation();
  const { userInfo } = useSelector((state) => state.signIn);
 
  // console.log(userInfo);

  return userInfo ? children : navigation.navigate("Login");
};

export default UserRoute;
