import { View, Text, FlatList, Button, SafeAreaView } from 'react-native'
import React from 'react'

import Style from '../../estilos/StyleDoacoes'
import { useState } from 'react';

import axios from 'axios';
export default function Doacoes (){

  const [teste, setTeste]=useState({})

  const baseUrl = 'http://localhost:8080/api/v1';

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });


  // const inserir = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/ong/listar`);
  //     setTeste(JSON.stringify(response.data));
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const inserir = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/1/`);
      setTeste(response.data);
     
    } catch (error) {
      alert(error);
    }
  };

  const Item = (dados) => {
    console.log(dados,"Batata")

    return(
    <View >
      <Text>{dados}</Text>
    </View>
    )
    
  };
    
    return (
      <SafeAreaView>
            <FlatList
              data={teste}
              renderItem={({item}) => <Item dados={item} />}
            />

            <Button title='Listar' onPress={inserir}/>
      </SafeAreaView>
  )
}

