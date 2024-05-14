import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  formGroup: {
    flex: 1,
    marginBottom: 16,
    flexDirection: 'column',
    gap: 8,
  },
  inputGroup: {
    flexDirection: 'column',
    gap: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.text
  }
})