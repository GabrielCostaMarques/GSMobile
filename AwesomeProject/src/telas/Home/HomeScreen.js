import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import Style from '../../../estilos/StyleHome';
import Styles from '../../../estilos/StyleSignIn'

import Icon from '../../../assets/Icon.png';
import Doacoes from '../../../assets/Icon-doacoes.png';
import Doar from '../../../assets/Icon-doar.png';
import SobreNos from '../../../assets/SobreNos.png';
import ListOng from '../../../assets/IconListOng.png';
import RegOng from '../../../assets/IconResgisterONG.png';


export default function HomeScreen({navigation}) {

    const goDoar = () => {
        navigation.navigate('Doar');
    };

    const goDoacoes = () => {
        navigation.navigate('Doacoes');
    };

    const goSobre = () => {
        navigation.navigate('SobreNos');
    };
    const goListaOng = () => {
        navigation.navigate('ListarOng');
    };
    const goRegisterOng = () => {
        navigation.navigate('RegisterOng');
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={Style.topo}>
                <Text style={Style.titulo}>Olá Usuário!</Text>
                <Text style={Style.txt1}>São Paulo - SP</Text>
                <Image source={Icon} style={Style.img} />
            </View>

            <View style={Style.menu}>
                <Text style={Style.titulo1}>ATIVIDADES</Text>

                <TouchableOpacity style={Style.touchDoacoes} onPress={()=>{
                    goDoacoes()
                }}>
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
                    <Image source={SobreNos} style={Style.iconRegisterOng}></Image>
                    <Text style={Style.txtIcon}>Sobre Nós</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={Style.touchRegisterOng}
                    onPress={() => {
                        goRegisterOng();
                    }}
                >
                    <Image source={RegOng} style={Style.iconRegisterOng}></Image>
                    <Text style={Style.txtIcon}>Nova ONG</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={Style.touchListaOng}
                    onPress={() => {
                        goListaOng();
                    }}
                >
                    <Image source={ListOng} style={Style.iconListaOng}></Image>
                    <Text style={Style.txtIcon}>Listar ONGS</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
