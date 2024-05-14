import { sensores } from "@/utils/sensores";
import { Text, View } from "react-native";
import { styles } from "./style";
import { ControlledSwitch } from "@/components/controlled-switch";
import { Control, FieldValues } from "react-hook-form";

type RenderSwitchListProps = {
  control: Control<FieldValues>;
};

export function RenderSwitchList({ control }: RenderSwitchListProps) {
  return sensores.map((sensor) => (
    <View key={sensor.name} style={styles.formGroup}>
      <Text style={styles.label}>{sensor.name.toUpperCase()}</Text>
      <ControlledSwitch control={control} name={sensor.name} />
    </View>
  ));
}
