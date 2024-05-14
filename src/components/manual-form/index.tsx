import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { StyledButton } from "@/components/styled-button";

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <RenderInputList control={control}/>
      <StyledButton
        title="Enviar"
        onPress={handleSubmit(handleSendToThingspeak)}
      />
    </ScrollView>
  );
}
