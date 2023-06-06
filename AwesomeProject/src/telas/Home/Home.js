import { View, Text,Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import Style from '../../../estilos/StyleHome'
import Icon from '../../../assets/Icon.png'
import Doacoes from '../../../assets/Icon-doacoes.png'
import Doar from '../../../assets/Icon-doar.png'
import SobreNos from '../../../assets/SobreNos.png'



export default function Home({navigation}){

    const goDoar = () => {
        navigation.navigate('Doar');
      };

    return (
        <View style={{flex:1}}>    
            <View style={Style.topo}>
                <Text style={Style.titulo}>Olá Usuário</Text>
                <Text style={Style.txt1}>São Paulo - SP</Text>
                <Image source={Icon} style={Style.img}/>
            </View>

            <View style={Style.menu}>
                <Text style={Style.titulo1}>ATIVIDADES</Text>

            <TouchableOpacity style={Style.touchDoacoes}>
                <Image source={Doacoes} style={Style.iconDoacoes}></Image>
                <Text style={Style.txtIcon}>Doações</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.touchDoar} onPress={()=>{
                goDoar()
            }}>
                <Image source={Doar} style={Style.iconDoar}></Image>
                <Text style={Style.txtIcon}>Doar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.touchSobre}>
                <Image source={SobreNos} style={Style.iconSobre}></Image>
                <Text style={Style.txtIcon}>Sobre Nós</Text>
            </TouchableOpacity>

                
                
            </View>
        </View>

  )
}
