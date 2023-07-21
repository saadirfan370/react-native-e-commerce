import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform ,
  ScrollView
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import img1 from "../assets/images/bk.png";

const Register = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle-outline"
              size={30}
              color={COLORS.black}
            />
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} >
      <Image source={img1} style={styles.image} />
      <View style={styles.inputcontainer}>
        <Text style={styles.heading}>Sign up and start shopping</Text>
        <ScrollView 
        style={styles.Wrapper2}
     
        >
          <View>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Enter your name!"
            />
          </View>
          <View style={{marginTop:12}}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={{marginTop:12}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={pass}
              onChangeText={(text) => setPass(text)}
              placeholder="Enter your password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>SIGNUP</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  wrapper: {
    marginHorizontal: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: SIZES.xLarge,
    zIndex: 999,
  },
  upperRow: {
    width: 30,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    // backgroundColor:COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999,
  },
  image: {
    // aspectRatio: 1,
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  inputcontainer: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: SIZES.large,
    fontFamily: "bold",
    color: COLORS.primary,
    marginTop: 10,
  },
  Wrapper2: {
    width: "88%",
    flex:1
  },
  label: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  input: {
    backgroundColor: COLORS.secondary,
    fontSize: SIZES.medium,
    padding: 8,
    borderRadius: SIZES.small,
  },
  btn:{
    backgroundColor:COLORS.primary,
    fontSize:SIZES.large,
    padding:10,
    borderRadius:8,
    marginTop:22,
    display:'flex',
    alignItems:"center",
  },
  btnText:{
    fontFamily:'medium',
    color:COLORS.lightWhite
  }
});
