import React, { useState, useEffect } from 'react';
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
import { listarTodasOngs} from './api/api';

export default function Register() {
  const [valor, setValor] = useState([])

  useEffect(() => {
    listar()
    
  }, []);

  const API_URL = 'http://172.23.144.1:8080/api/v1';



  const listar = async () => {
    try {
      const response = await axios.get(`${API_URL}/ong/listarTodos`);
      setValor(response.data)
      if (response.data ==200||response.data==201){
        alert("Erro de formulário")
        goHome()}
      //console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  const Item = (props) => {
    let endereco = props.dados.endereco
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#7ed956', borderWidth: 2, borderColor: '#FFF', borderRadius: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>CNPJ: {props.dados.cnpj}</Text>
        <Text style={{ fontWeight: 'bold' }}>NOME: {props.dados.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>LOGRADOURO: {endereco.logradouro}</Text>
        <Text style={{ fontWeight: 'bold' }}>NUMERO: {endereco.numero}</Text>
        <Text style={{ fontWeight: 'bold' }}>COMPLEMENTO: {endereco.complemento}</Text>
        <Text style={{ fontWeight: 'bold' }}>CEP: {endereco.cep}</Text>
        <Text style={{ fontWeight: 'bold' }}>UF: {endereco.uf}</Text>
        <Text style={{ fontWeight: 'bold' }}>CIDADE: {endereco.cidade}</Text>
        <Text style={{ fontWeight: 'bold' }}>TELEFONE: {props.dados.telefone}</Text>
        <Text style={{ fontWeight: 'bold' }}>E-MAIL: {props.dados.email}</Text>
      </View>
    )
  }

  return (

      <View style={{ flex: 1 }}>
        <FlatList
          data={valor}
          renderItem={({ item }) => <Item dados={item} />}
        />
      </View>

  );
}
