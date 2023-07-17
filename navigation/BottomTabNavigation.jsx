import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home , Search ,Profile} from '../screens'
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 55,
  },
};

const BottomTabNavigation = () => {
  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "home" : "home-outline"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={"search-sharp"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    sec:{
        position:"relative",
        height:"100%"
    }
})


export default BottomTabNavigation;
