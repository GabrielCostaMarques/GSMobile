import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import Style from '../../../estilos/StyleHome';
import Icon from '../../../assets/Icon.png';
import Doacoes from '../../../assets/Icon-doacoes.png';
import Doar from '../../../assets/Icon-doar.png';
import SobreNos from '../../../assets/SobreNos.png';

const Tab = createBottomTabNavigator();

export default function Home({ navigation }) {
    const goDoar = () => {
        navigation.navigate('Doar');
    };

    const goSobre = () => {
        navigation.navigate('SobreNos');
    };

    return (
        <NavigationContainer independent="true">
            <Tab.Navigator>
                <Tab.Screen
                    name="Tela Inicial"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icon}
                                style={[
                                    Style.img,
                                    { tintColor: focused ? 'blue' : 'gray' },
                                ]}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastrar"
                    component={CadastrarScreen}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image
                                source={Icon}
                                style={[
                                    Style.img,
                                    { tintColor: focused ? 'blue' : 'gray' },
                                ]}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    );
}

function CadastrarScreen() {
    const [nome, setNome] = React.useState('');
    const [idade, setIdade] = React.useState('');

    const handleNomeChange = (text) => {
        setNome(text);
    };

    const handleIdadeChange = (text) => {
        setIdade(text);
    };

    const handleSubmit = () => {
        // Lógica para lidar com o envio do formulário
        console.log('Nome:', nome);
        console.log('Idade:', idade);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={Style.titulo}>Cadastrar</Text>

            <TextInput
                style={Style.input}
                placeholder="Nome"
                value={nome}
                onChangeText={handleNomeChange}
            />

            <TextInput
                style={Style.input}
                placeholder="Idade"
                value={idade}
                onChangeText={handleIdadeChange}
            />

            <TouchableOpacity style={Style.button} onPress={handleSubmit}>
                <Text style={Style.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}


function HomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={Style.topo}>
                <Text style={Style.titulo}>Olá Usuário</Text>
                <Text style={Style.txt1}>São Paulo - SP</Text>
                <Image source={Icon} style={Style.img} />
            </View>

            <View style={Style.menu}>
                <Text style={Style.titulo1}>ATIVIDADES</Text>

                <TouchableOpacity style={Style.touchDoacoes}>
                    <Image source={Doacoes} style={Style.iconDoacoes}></Image>
                    <Text style={Style.txtIcon}>Doações</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Style.touchDoar}
                    onPress={() => {
                        goDoar();
                    }}
                >
                    <Image source={Doar} style={Style.iconDoar}></Image>
                    <Text style={Style.txtIcon}>Doar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Style.touchSobre}
                    onPress={() => {
                        goSobre();
                    }}
                >
                    <Image source={SobreNos} style={Style.iconSobre}></Image>
                    <Text style={Style.txtIcon}>Sobre Nós</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
