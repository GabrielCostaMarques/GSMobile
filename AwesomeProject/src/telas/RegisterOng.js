import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import Style from '../../estilos/StyleSignIn';
import Logo from '../../assets/images.png'

const baseUrl = 'http://172.23.144.1:8080/api/v1';

export default function Register({ navigation }) {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const goHome = () => {
    navigation.navigate('Home');
  };

  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const inserir = async () => {
    try {
      const response = await axios.post(`${baseUrl}/ong/cadastrar`, {
        cnpj,
        nome,
        endereco,
        telefone,
        email,
      });
      if (response.data ==200||response.data==201){
        alert("Erro de formulário")
        goHome()}
      alert(response.status);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView>
      <View style={Style.container}>

        <View style={{ marginBottom: 30 }}>
          <Text style={Style.txt1}>Cadastre sua ONG</Text>
        </View>

        <View style={{flex:1}}>
          <Text style={Style.txt2}>CNPJ</Text>
          <TextInput
            onChangeText={setCnpj}
            value={cnpj}
            placeholder="Digite seu CNPJ"
            style={Style.input}
          />

          <Text style={Style.txt2}>NOME DA ONG</Text>
          <TextInput
            onChangeText={setNome}
            value={nome}
            placeholder="Digite o Nome Completo"
            style={Style.input}
          />

          <Text style={Style.txt2}>ENDEREÇO</Text>
          <TextInput
            onChangeText={setEndereco}
            value={endereco}
            placeholder="Digite o endereço"
            style={Style.input}
          />

          <Text style={Style.txt2}>TELEFONE</Text>
          <TextInput
            onChangeText={setTelefone}
            value={telefone}
            placeholder="Digite seu telefone"
            style={Style.input}
          />

          <Text style={Style.txt2}>EMAIL</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Digite o e-mail"
            style={Style.input}
          />
        </View>

        <View style={{marginBottom:80}}>
          <TouchableOpacity onPress={()=>{
            inserir()
            goHome()
          }}>
            <View>
              <Text style={Style.btnRegOn}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
