import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login";
import { TabNavigator } from "./tab.navigator";

const Stack = createNativeStackNavigator()

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={LoginScreen}/>
      <Stack.Screen name="tabs" component={TabNavigator}/>
    </Stack.Navigator>
  )
}