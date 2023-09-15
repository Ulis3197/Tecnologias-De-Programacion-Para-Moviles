import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CustomImage from "../components/CustomImage";
import CustomText from "../components/CustomText";
import Stories from "../components/Stories";
import Card from "../components/Card";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Screen1() {
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.header]}>
        <View style={styles.row}>
          <CustomImage></CustomImage>
          <CustomText text={"Hey Alireza"} color={"black"} fontSize={20}>
            <Entypo name="hand" size={24} color="black" />
          </CustomText>
        </View>
        <View style={styles.row}>
          <AntDesign style={{paddingRight: 5}} name="search1" size={30} color="black" />
          <Ionicons name="menu" size={30} color="black" />
        </View>
      </View>
      <CustomText
        text={"Stories"}
        color={"black"}
        fontSize={20}
        paddingTop={30}
      ></CustomText>
      <View>
        <ScrollView
          style={{ paddingTop: 20 }}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Stories text={"Arturo"}></Stories>
          <Stories text={"Juan"}></Stories>
          <Stories text={"Pablo"}></Stories>
          <Stories text={"Ulises"}></Stories>
          <Stories text={"Weso"}></Stories>
          <Stories text={"Arturo"}></Stories>
          <Stories text={"Juan"}></Stories>
          <Stories text={"Pablo"}></Stories>
          <Stories text={"Ulises"}></Stories>
          <Stories text={"Weso"}></Stories>
        </ScrollView>
      </View>
      <View style={{ height: 500 }}>
        <ScrollView
          style={{ paddingTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Algo"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
          <Card text1={"Alireza Tavosi"} text2={"Let me make it"}></Card>
        </ScrollView>
      </View>
      <View style={styles.menu}>
        <Entypo name="home" size={30} color="black" />
        <Ionicons name="notifications" size={30} color="black" />
        <Ionicons name="call" size={30} color="black" />
        <Ionicons name="people" size={30} color="black" />
      </View>
    </View>
  );
}

export default Screen1;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginHorizontal: 20,
  },
  menu:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30
  }
});
