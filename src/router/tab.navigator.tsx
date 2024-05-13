import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AutomaticScreen from "../screens/automatic";
import ManualScreen from "../screens/manual";

const Tab = createBottomTabNavigator()

export function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="automatic">
      <Tab.Screen name="automatic" component={AutomaticScreen}/>
      <Tab.Screen name="manual" component={ManualScreen}/>
    </Tab.Navigator>
  )
}