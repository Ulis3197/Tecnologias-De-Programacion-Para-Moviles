import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  StatusBar as Status2,
  Platform,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";
import CustomText from "./src/components/Text/CustomText";

export default function App() {
  // const CustomText = Platform.select({
  //   android: () => AndriodText,
  //   web: () => WebText,
  // })();

  return (
    <View style={styles.container}>
      <CustomText />
      <Ionicons
        name="notifications"
        size={24}
        color={Platform.select({
          android: "black",
          ios: "black",
          web: "white",
        })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.select({
      android: "white",
      ios: "white",
      web: "black",
    }),
    justifyContent: "center",
    alignItems: "center",
    // paddingTop : Constants.statusBarHeight
  },
  text: {
    color: Platform.select({ android: "black", ios: "black", web: "white" }),
  },
});
