import React from 'react'
import { View, StyleSheet, Image, Text} from 'react-native'
import { AntDesign } from "@expo/vector-icons";

function Therapist({image, name, job, rate}) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.Image}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
      </View>
      <View style={styles.therapistRate}>
        <AntDesign name={rate > 4 ? 'star' : 'staro' } size={24} color="#2263df" />
        <Text style={styles.job}>{rate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fefdfe",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
  },
  Image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontSize: 18,
    color: "#495558",
    fontWeight: "bold",
  },
  job: {
    color: "#d4d4d7",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 5,
  },
  therapistRate:{
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default Therapist