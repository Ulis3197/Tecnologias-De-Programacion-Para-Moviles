import React from "react";
import { View, StyleSheet, Image } from "react-native";
import StyledText from "../components/StyledText";
import StyledTouchable from "../components/StyledTouchable";

const IMAGE =
  "https://previews.123rf.com/images/plahotya/plahotya1705/plahotya170500011/77408928-símbolo-plano-globo-aerostático-para-ilustración-o-diseño-de-logotipo.jpg";

export default function Welcome({ onPress2, onPress3 }) {
  return (
    <>
      <View style={[styles.container, styles.paddingContainer]}>
        <StyledText
          text={"Welcome!"}
          fontSize={40}
          color={"#242529"}
          fontWeight={"bold"}
        />
      </View>
      <View style={styles.container}>
        <StyledText
          text={"Sign In or create a new account"}
          fontSize={15}
          color={"#EBEBEB"}
          fontWeight={"bold"}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: IMAGE,
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <StyledTouchable
          text={"Go to Sign In"}
          backgroundColor={"#FF8A39"}
          paddingVertical={20}
          color={"white"}
          borderColor={"#FF8A39"}
          fontWeight={"bold"}
          onPress={onPress2}
        />
        <StyledTouchable
          text={"No account yet? Sign Up"}
          backgroundColor={"white"}
          paddingVertical={20}
          color={"#949494"}
          fontWeight={"bold"}
          onPress={onPress3}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paddingContainer: {
    paddingTop: 90,
  },
  imageStyle:{
    width: 450,
    height: 450,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginHorizontal: 25,
    gap: 20
  }

});
