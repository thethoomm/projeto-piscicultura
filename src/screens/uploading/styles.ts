import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  animation: {
    width: 360,
    height: 360,
  },
  text: {
    fontSize: 22,
    color: theme.colors.background,
    fontWeight: 'bold'
  }
})