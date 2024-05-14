import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    width: '100%',
    height: 180,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.colors.background
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.colors.background
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 12,
  }
})