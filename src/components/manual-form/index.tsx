import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/button";

import { useForm } from "react-hook-form";
import { RenderInputList } from "../render-input-list";

export function ManualForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleSendToThingspeak = (data: any) => {
    console.log(data);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <RenderInputList control={control}/>
      <Button
        text="Enviar"
        onPress={handleSubmit(handleSendToThingspeak)}
      />
    </ScrollView>
  );
}
