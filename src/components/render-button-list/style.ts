import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  formGroup: {
    flex: 1,
    marginBottom: 16,
    gap: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.text
  },
  buttonBox: {
    flexDirection: 'row',
    width: '100%',
    gap: 4,
  }
})