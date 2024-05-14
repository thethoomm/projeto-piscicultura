import { ScrollView, Text, View, Switch } from "react-native";
import { RenderSwitchList } from "../render-switch-list";
import { useForm } from "react-hook-form";
import { Button } from "@/components/button";

export function AutomaticForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const handleSendToThingspeak = (data: any) => {
    console.log(data);
  };

  return (
    <ScrollView>
      <RenderSwitchList control={control}/>
      <Button
        text="Enviar"
        onPress={handleSubmit(handleSendToThingspeak)}
      />
    </ScrollView>
  );
}
