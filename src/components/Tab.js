import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { View } from "react-native";
import Home from "../pages/Home";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Login from "../pages/Login";

const Tab = createMaterialBottomTabNavigator(); 
// createBottomTabNavigator()



export default function B_tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   height: 60,
        //   position: "absolute",
        //   bottom: 25,
        //   right: 16,
        //   left: 16,
        //   top: 830,
        //   borderRadius: 15,
        //   backgroundColor: "white",
        //   borderColor: "dodgerblue",
        //   borderWidth: 1,
        //   tabBarIcon:{
          
        //   }
         
        // },
      }}
  > 
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="home" size={30} />
            </View>
          ),
        }}
      />

    

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons name="person-pin" size={30} />
            </View>
          ),
         
        }}
      />
     
    </Tab.Navigator>
  );
}
