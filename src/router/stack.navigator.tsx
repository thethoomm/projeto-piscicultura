import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login";
import { TabNavigator } from "./tab.navigator";
import UploadingScreen from "../screens/uploading";
import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParams = {
  login: undefined
  tabs: undefined
  uploading: undefined
}


const Stack = createNativeStackNavigator()

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="tabs" screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="login" component={LoginScreen}/>
      <Stack.Screen name="tabs" component={TabNavigator}/>
      <Stack.Screen name="uploading" component={UploadingScreen}/>
    </Stack.Navigator>
  )
}