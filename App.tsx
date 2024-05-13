import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/router/stack.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}