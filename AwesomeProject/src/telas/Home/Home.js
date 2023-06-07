import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import Style from '../../../estilos/StyleHome';
import Styles from '../../../estilos/StyleSignIn'
import Icon from '../../../assets/Icon.png';
import Doacoes from '../../../assets/Icon-doacoes.png';
import Doar from '../../../assets/Icon-doar.png';
import SobreNos from '../../../assets/SobreNos.png';
import RegistroOng from '../RegisterOng'
import ListarOng from '../ListarOng'
import HomeScreen from '../Home/HomeScreen'

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <NavigationContainer independent="true">
            <Tab.Navigator>
                <Tab.Screen
                    name="Tela Inicial"
                    component={HomeScreen}
                />
                <Tab.Screen
                    name="Cadastrar"
                    component={RegistroOng}
                />
                <Tab.Screen
                    name="Listar"
                    component={ListarOng}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
