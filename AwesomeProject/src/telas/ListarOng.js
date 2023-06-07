import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  FlatList,
  Button
} from 'react-native';

import axios from 'axios';
import Style from '../../estilos/StyleSignIn';
import Logo from '../../assets/images.png'

const baseUrl = 'http://localhost:8080/api/v1';

export default function Register({ navigation }) {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const goLogin = () => {
    navigation.navigate('Login');
  };

  const listar = async () => {
    try {
      const response = await axios.get(`${baseUrl}/ong/listar`)
      alert(response.status);
      setValor(response.data)
      console.log(response.data)
    } catch (error) {
      alert(error);
    }
  };

  const [valor, setValor] = useState([])

  const Item = (props) => {
    console.log(props)
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ed956', borderWidth: 2, borderColor: '#FFF', borderRadius: 20}}>
        <Text style={{fontWeight: 'bold'}}>CNPJ: {props.dados.cnpj}</Text>
        <Text style={{fontWeight: 'bold'}}>NOME: {props.dados.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>ENDEREÇO: {props.dados.endereco}</Text>
        <Text style={{fontWeight: 'bold'}}>TELEFONE: {props.dados.telefone}</Text>
        <Text style={{fontWeight: 'bold'}}>E-MAIL: {props.dados.email}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{flex: 1}}>
      <Button title='listar' onPress={(listar)} />
          <FlatList 
          data={valor}
          renderItem={({item}) => <Item dados={item} />}
          />
      </View>
    </ScrollView>
  );
}
