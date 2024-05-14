import { Control, FieldValues } from "react-hook-form";
import { sensores } from "@/utils/sensores";
import { Text, View } from "react-native";
import { Input } from "@/components/input";
import { styles } from "./style";

type RenderInputListProps = {
  control: Control<FieldValues>;
};

export function RenderInputList({ control }: RenderInputListProps) {
  
  return sensores.map((sensor) => (
    <View key={sensor.name} style={styles.formGroup}>
      <Text style={styles.label}>{sensor.name.toUpperCase()} ({sensor.measure})</Text>
      <View style={styles.inputGroup}>
        <Input
          control={control}
          name={sensor.max}
          placeholder={sensor.max}
          keyboardType="numeric"
        />
        <Input
          control={control}
          name={sensor.min}
          placeholder={sensor.min}
          keyboardType="numeric"
        />
      </View>
    </View>
  ));
}
