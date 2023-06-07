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
      <View>
        <Text>{props.dados.cnpj}</Text>
        <Text>{props.dados.nome}</Text>
        <Text>{props.dados.endereco}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={Style.container}>
          <FlatList 
          data={valor}
          renderItem={({item}) => <Item dados={item} />}
          />
        <Button title='listar' onPress={(listar)} />
      </View>
    </ScrollView>
  );
}
