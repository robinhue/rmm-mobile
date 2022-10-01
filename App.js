import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/screens/LoginScreen'
import MenusScreen from './src/screens/MenusScreen'
import DishesScreen from './src/screens/DishesScreen'
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loadedFonts] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
    OpenSans: require('./assets/fonts/OpenSans.ttf'),
  })

  const [token, setToken] = useState('')

  // if (!token) {
  //   return <LoginScreen setToken={setToken}/>
  // }

  return <NavigationContainer>
    <Stack.Navigator>
      {/* <Stack.Screen name='Login' component={LoginScreen}/> */}
      <Stack.Screen name='Menu' component={MenusScreen}/>
      <Stack.Screen name='Dishes' component={DishesScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
}
