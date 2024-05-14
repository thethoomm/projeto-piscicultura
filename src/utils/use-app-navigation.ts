import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParams } from "@/router/stack.navigator";

export function useAppNavigation() {
  return useNavigation<NavigationProp<RootStackParams>>()
}