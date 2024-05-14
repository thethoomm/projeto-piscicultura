import { Switch, View } from "react-native";
import { theme } from "@/theme";
import { useState } from "react";
import { Control, Controller, FieldValues } from "react-hook-form";

type ControlledSwitchProps = {
  control: Control<FieldValues>;
  name: string;
};

export function ControlledSwitch({ control, name }: ControlledSwitchProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={true}
      render={({ field }) => (
        <Switch
          trackColor={{
            false: '#ef4444',
            true: '#16a34a',
          }}
          thumbColor={
            isEnabled ? theme.colors.background : theme.colors.background
          }
          onValueChange={field.onChange}
          value={field.value}
        />
      )}
    />
  );
}
