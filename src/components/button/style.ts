import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    color: theme.colors.background,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})