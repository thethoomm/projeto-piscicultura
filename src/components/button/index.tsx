import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { theme } from "../../theme";

type StyledButtonProps = {
  text: string;
  onPress: () => void;
  color?: string
  disabled?: boolean
};
export function Button({ text, onPress, color = theme.colors.primary, disabled }: StyledButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: disabled ? '#737373' : color }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
