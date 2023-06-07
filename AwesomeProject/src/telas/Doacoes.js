import { View, Text, FlatList } from 'react-native'
import React from 'react'

import Style from '../../estilos/StyleDoacoes'

export default function Doacoes (){
    
    return (
    <View style={Style.container}>
        <Text>LISTA DE DOAÇÕES</Text>
      <FlatList/>
    </View>
  )
}

