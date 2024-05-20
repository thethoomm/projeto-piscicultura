import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/button";

import { useForm } from "react-hook-form";
import { RenderInputList } from "../render-input-list";
import { ThingspeakService } from "@/services/thingspeak";
import { useAppNavigation } from "@/utils/use-app-navigation";
import { useEffect } from "react";
import { useLoading } from "@/contexts/useLoading";

export function AutomaticForm() {
  const { control, handleSubmit } = useForm({});

  const { isLoading, setLoading } = useLoading();

  const navigation = useAppNavigation();

  const thinspeakService = new ThingspeakService();

  useEffect(() => {
    console.log(isLoading);
    if (isLoading) {
      navigation.navigate("uploading");
    }
  }, [isLoading]);

  const handleSendToThingspeak = (data: any) => {
    setLoading(true);
    thinspeakService.updateSensorValues(data).then(() => setLoading(false));
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <RenderInputList control={control} />
      <Button text="Enviar" onPress={handleSubmit(handleSendToThingspeak)} />
    </ScrollView>
  );
}
