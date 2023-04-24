import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeView from './page/HomeView'
import SecondView from './page/SecondView';
// Navigation stack setup
const Stack = createNativeStackNavigator();

// , headerShown: false
export default function App() {

  return (
    <PaperProvider>
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Accueil' component={HomeView} options={{title: 'Accueil' , headerShown: false}} />
          <Stack.Screen name='Second' component={SecondView} options={{title: 'Second'}}/>
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}