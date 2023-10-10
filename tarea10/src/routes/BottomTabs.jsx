import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Store from "../screens/Store";

const Tab = createMaterialBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#21B2B2"
      inactiveColor="black"
      barStyle={{ backgroundColor: "#FFFFFF" }}
      shifting={true}
    >
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="compass" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store2"
        component={Store}
        options={{
          tabBarLabel: "Whislist",
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store3"
        component={Store}
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <Entypo name="shopping-cart" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store4"
        component={Store}
        options={{
          tabBarLabel: "Orders",
          tabBarIcon: ({ color }) => (
            <Entypo name="text-document-inverted" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Store5"
        component={Store}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Entypo name="users" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
