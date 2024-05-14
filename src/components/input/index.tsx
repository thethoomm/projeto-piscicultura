import { TextInput, TextInputProps } from "react-native";
import { styles } from "./style";
import { Control, Controller, FieldValues } from "react-hook-form";

type InputProps = {
  control: Control<FieldValues>
  name: string
}

export function Input({ control, name, ...rest }: InputProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextInput
          style={styles.input}
          {...rest}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
      )}
    />
  );
}
