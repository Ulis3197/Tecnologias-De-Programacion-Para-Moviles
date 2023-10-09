import React from "react";
import { Image, StyleSheet, View } from "react-native";

function Recommended(item) {
  return (
    <View style={styles.container}>
      <Image
        source={item.img}
        style={{
          width: 120,
          height: 200,
          alignSelf: "center",
          borderRadius: 30,
        }}
      />
    </View>
  );
}

export default Recommended;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
});
