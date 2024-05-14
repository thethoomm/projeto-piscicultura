import { useEffect } from "react";
import { ScrollView } from "react-native";
import { RenderSwitchList } from "../render-switch-list";
import { useForm } from "react-hook-form";
import { Button } from "@/components/button";
import { ThingspeakService } from "@/services/thingspeak";
import { useLoading } from "@/contexts/useLoading";
import { useAppNavigation } from "@/utils/use-app-navigation";

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
    thinspeakService.toggleSensorState(data).then(() => setLoading(false));
  };

  return (
    <ScrollView>
      <RenderSwitchList control={control} />
      <Button text="Enviar" onPress={handleSubmit(handleSendToThingspeak)} />
    </ScrollView>
  );
}
