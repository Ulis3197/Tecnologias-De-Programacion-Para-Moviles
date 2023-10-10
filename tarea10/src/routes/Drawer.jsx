import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import DrawerView from "../screens/DrawerView";
import BottomTabs from "./BottomTabs";
import LogIn from "../screens/LogIn";
const DrawerStack = createDrawerNavigator();

function Drawer() {
  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <DrawerView {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrawerStack.Screen name="Bottom" component={BottomTabs} />
      <DrawerStack.Screen name="LogIn" component={LogIn} />
    </DrawerStack.Navigator>
  );
}

export default Drawer;
