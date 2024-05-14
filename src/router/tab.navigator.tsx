import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AutomaticScreen from "@/screens/automatic";
import ManualScreen from "@/screens/manual";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from '@/theme'

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="automatic"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: theme.colors.background
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '500'
        },
      }}
    >
      <Tab.Screen
        name="automatic"
        component={AutomaticScreen}
        options={{
          tabBarLabel: 'Automático',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              size={size}
              name={focused ? "robot-happy" : "robot-happy-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="manual"
        component={ManualScreen}
        options={{
          tabBarLabel: 'Manual',
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              size={size}
              name={focused ? "hand-back-left" : "hand-back-left-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
