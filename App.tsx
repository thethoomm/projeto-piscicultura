import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/router/stack.navigator";
import { LoadingProvider } from "./src/contexts/useLoading";

export default function App() {
  return (
    <LoadingProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </LoadingProvider>
  );
}
