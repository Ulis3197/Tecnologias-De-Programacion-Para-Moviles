import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SymptompsCard({ symptom }) {
    const symptomIcon = symptom === "none" ? "😁" : symptom === "fever " ? "🤒" : "🤢"
    const symptomText = symptom === "none" ? "I'm Fine " : symptom 
  return (
    <View style={styles.symptomsContainer}>
      <Text>{symptomIcon}</Text>
      <Text style={styles.symptonText}>{symptomText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  symptomsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#e6ecff",
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    marginRight: 15,
  },
  symptonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#48525e",
    textTransform: "capitalize"
  },
});
