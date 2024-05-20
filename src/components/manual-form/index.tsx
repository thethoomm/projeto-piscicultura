import { useEffect } from "react";
import { ScrollView } from "react-native";
import { RenderButtonList } from "../render-button-list";
import { useForm } from "react-hook-form";
import { Button } from "@/components/button";
import { ThingspeakService } from "@/services/thingspeak";
import { useLoading } from "@/contexts/useLoading";
import { useAppNavigation } from "@/utils/use-app-navigation";
import axios from "axios";

export function ManualForm() {
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <RenderButtonList control={control} />
    </ScrollView>
  );
}
