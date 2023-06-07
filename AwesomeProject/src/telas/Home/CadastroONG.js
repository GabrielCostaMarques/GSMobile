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

export default CadastrarScreen = () => {

    return (
        <View style={Styles.container}>
            <View style={{marginBottom:30}}>

                <Text style={Styles.txt1}>Cadastrar ONG</Text>
                <Text style={Styles.txt2}>CNPJ</Text>
                <TextInput placeholder='Digite seu CNPJ' style={Styles.input}/>
                <Text style={Styles.txt2}>NOME DA ONG</Text>
                <TextInput placeholder='Digite seu nome' style={Styles.input}/>
                <Text style={Styles.txt2}>ENDEREÇO</Text>
                <TextInput placeholder='Digite seu endereco' style={Styles.input}/>
                <Text style={Styles.txt2}>TELEFONE</Text>
                <TextInput placeholder='Digite seu telefone' style={Styles.input}/>
                <Text style={Styles.txt2}>E-MAIL</Text>
                <TextInput placeholder='Digite seu email' style={Styles.input}/>

                <TouchableOpacity>
                    <Text style={Styles.btn}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}