import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

type StyledButtonProps = {
  text: string;
  onPress: () => void
};
export function Button({ text, onPress }: StyledButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
      
    </TouchableOpacity>
  );
}
