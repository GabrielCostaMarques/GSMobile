import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import Style from '../../../estilos/StyleDoar'
import { cadastrarDoador } from '../api/api';
import axios from 'axios';

export default function DonationForm({ navigation }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [doacoes, setDoacoes] = useState([]);
  
  const API_URL = 'http://172.23.144.1:8080/api/v1';
  const goHome = () => {
    navigation.navigate('Home');
  };
  
  const inserir = async () => {
    try {
      const response = await axios.post(`${API_URL}/doador`,{nome,tipo,documento,email,telefone});
        if (response.data ==200||response.data==201||response.data==400){
          alert("Erro de formulário")
          goHome()}
          else{
            alert("Doação Realizada!")
          }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Text style={Style.txt1}>Nome do Doador</Text>
      <TextInput
        onChangeText={setNome}
        value={nome}
        placeholder="Digite aqui"
        style={Style.input}
      />

      <Text style={Style.txt1}>Tipo</Text>
      <TextInput
        onChangeText={setTipo}
        value={tipo}
        placeholder="Digite aqui"
        style={Style.input}
      />

      <Text style={Style.txt1}>Documento</Text>
      <TextInput
        onChangeText={setDocumento}
        value={documento}
        placeholder="Digite aqui"
        style={Style.input}
      />

      <Text style={Style.txt1}>Email</Text>
      <TextInput
        onChangeText={setEmail}
        value={email}
        placeholder="Digite aqui"
        multiline={true}
        style={Style.input}
      />
      <Text style={Style.txt1}>Telefone</Text>
      <TextInput
        onChangeText={setTelefone}
        value={telefone}
        placeholder="Digite aqui"
        style={Style.input}
      />

      <TouchableOpacity onPress={()=>{
        (inserir)
        goHome()
      }}
       style={Style.btn}>
        <View>
          <Text style={Style.txtBtn}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}