import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import LottieView from "lottie-react-native";

export default function UploadingScreen() {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        speed={0.8}
        autoPlay
        source={require("../../assets/animations/uploading.json")}
      />
      <Text style={styles.text}>Sincronizando com Thingspeak...</Text>
    </View>
  );
}
