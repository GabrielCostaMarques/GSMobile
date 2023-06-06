import { View, Text,Image } from 'react-native'
import React from 'react'

import Style from '../../estilos/StyleHome'
import Icon from '../../assets/Icon.png'
import Doacoes from '../../assets/Icon-doacoes.png'

export default function Home(){
    
    return (
        <View style={{flex:1}}>    
            <View style={Style.topo}>
                <Text style={Style.titulo}>Olá Usuário</Text>
                <Text style={Style.txt1}>São Paulo - SP</Text>
                <Image source={Icon} style={Style.img}/>
            </View>

            <View style={Style.menu}>
                <Text>ATIVIDADES</Text>
                <Image source={Doacoes}/>
            </View>
        </View>

  )
}
