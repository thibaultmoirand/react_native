import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeView from './page/HomeView'
import SecondView from './page/SecondView';
// Navigation stack setup
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Accueil' component={HomeView} options={{title: 'Accueil'}} />
          <Stack.Screen name='Second' component={SecondView} options={{title: 'Second'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}