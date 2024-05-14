import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import LottieView from "lottie-react-native";
import { useLoading } from "@/contexts/useLoading";
import { useAppNavigation } from "@/utils/use-app-navigation";

export default function UploadingScreen() {

  const { isLoading, setLoading, setMessage } = useLoading()
  const navigation = useAppNavigation()

  useEffect(() => {
    if (!isLoading) {
      navigation.goBack()
      setMessage('Dados carregados para o Thingspeak!')
    } 
  })

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
