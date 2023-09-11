import React, { useState } from "react";
import { Text, View, StyleSheet, Switch } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import StyledText from "../components/StyledText";
import StyledTextInput from "../components/StyledTextInput";
import StyledTouchable from "../components/StyledTouchable";

export default function SignIn({
    onPress,
}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <>
      <View style={[styles.container, styles.paddingContainer]}>
        <AntDesign name="arrowleft" size={35} color="black" onPress={onPress}/>
      </View>
      <View style={styles.textContainer}>
        <StyledText
          text={"Welcome"}
          color={"black"}
          fontSize={40}
          fontWeight={"bold"}
        ></StyledText>
        <StyledText
          text={"back!"}
          color={"black"}
          fontSize={40}
          fontWeight={"bold"}
        ></StyledText>
      </View>
      <View style={styles.inputContainer}>
        <StyledTextInput
          text={"Email"}
          fontSize={18}
          color={"#949494"}
          fontWeight={"bold"}
          placeholder={"name@example.com"}
          placeholderTextColor={"#EBEBEB"}
          password={false}
        />
        <StyledTextInput
          text={"Password"}
          fontSize={18}
          color={"#949494"}
          fontWeight={"bold"}
          placeholder={"Enter your password"}
          placeholderTextColor={"#EBEBEB"}
          password={true}
        />
        <View style={styles.switchContainer}>
          <StyledText
            text={"Remember me"}
            fontSize={18}
            color={"#949494"}
            fontWeight={"bold"}
          />
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <StyledTouchable
          text={"Sign In!"}
          backgroundColor={"#FF8A39"}
          paddingVertical={20}
          color={"white"}
          borderColor={"#FF8A39"}
          fontWeight={"bold"}
          onPress={onPress}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  paddingContainer: {
    paddingTop: 90,
    marginHorizontal: 25,
  },
  textContainer: {
    marginHorizontal: 25,
    paddingTop: 40,
  },
  inputContainer: {
    marginHorizontal: 25,
    paddingTop: 90,
  },
  buttonContainer: {
    marginTop: 40,
    marginHorizontal: 25,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
