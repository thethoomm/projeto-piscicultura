import { TextInput, TextInputProps, View, Text } from "react-native";
import { styles } from "./style";
import { Control, Controller, FieldValues } from "react-hook-form";

type InputProps = {
  control: Control<FieldValues>
  name: string
} & TextInputProps

export function Input({ control, name, ...rest }: InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={''}
      render={({ field }) => (
        <View>
          <TextInput
            style={styles.input}
            {...rest}
            value={field.value}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
          />
        </View>
      )}
    />
  );
}
