import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    paddingHorizontal: 12,
    borderWidth: 1.7,
    borderColor: theme.colors.primary,
    borderRadius: 6,
    fontSize: 16,
    color: theme.colors.text
  },
})