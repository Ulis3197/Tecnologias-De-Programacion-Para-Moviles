import React from "react";
import { Image, View, StyleSheet } from "react-native";

const IMAGE = "https://cdn-icons-png.flaticon.com/512/4086/4086679.png";

function CustomImage() {
  return (
    <View style={styles.header}>
      <Image
        source={{
          uri: IMAGE,
        }}
        style={styles.headerImage}
      ></Image>
    </View>
  );
}

export default CustomImage;

const styles = StyleSheet.create({
  header: {
    paddingRight: 30,
  },
  headerImage: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
});
