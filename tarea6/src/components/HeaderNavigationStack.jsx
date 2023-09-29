import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const HeaderNavigationStack = ({ title, subtitle }) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <>
      <View style={styles.container}>
        {canGoBack() ? (
          <TouchableOpacity onPress={() => goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
        ) : (
          <Text></Text>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {subtitle && (
        <View>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 100,
  },
  subtitle: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
});
