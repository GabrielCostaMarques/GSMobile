import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Register from './src/telas/Register';
import SignIn from './src/telas/SignIn';
import Home from './src/telas/Home/HomeScreen'
import Doar from './src/telas/Home/FormsDoar'
import SobreNos from './src/telas/Home/SobreNos'
import Doacoes from './src/telas/Doacoes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Register} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Doacoes" component={Doacoes} />
        <Stack.Screen name="Doar" component={Doar} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
