import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LoadingData from "../components/LoadingData";

const WaifuScreen = () => {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  const getApiData = async () => {
    try {
      const response = await fetch("https://api.waifu.pics/sfw/waifu");
      const json = await response.json();
      setResponse(json);
    } catch (error) {
      console.error(error);
    }
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    setLoading(true);
    getApiData();
    delay(5000).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold", marginTop:20}}>Random Waifu</Text>
        {loading ? (
          <LoadingData />
        ) : response ? (
          <View>
            <Image
              source={{ uri: response.url }}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        ) : (
          <View>
            <Text>Error al cargar la api</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={() => {
            setLoading(true);
            getApiData();
            delay(5000).then(() => {
              setLoading(false);
            });
          }}
          style={styles.button}
        >
          <Text>Obtener Nueva</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WaifuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#4bb4c9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 20,
  },
  image: {
    width: 350,
    height: 350,
    borderRadius: 20,
    marginVertical: 20,
  },
});
