// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogoScreen from './screens/CatalogoScreen';
import HistoriaScreen from './screens/HistoriaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Catálogo">
        <Stack.Screen name="Catálogo" component={CatalogoScreen} />
        <Stack.Screen name="Historia" component={HistoriaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

