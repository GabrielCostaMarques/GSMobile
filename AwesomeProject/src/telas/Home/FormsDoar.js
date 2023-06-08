import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

import Style from '../../../estilos/StyleDoar'
import axios from 'axios';
import {API_URL} from '../api'

export default function DonationForm({ navigation }) {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [unidadeMedida, setUnidadeMedida] = useState('');
  const [dataValidade, setdataValidade] = useState('');

 
   
  const inserir = async () => {
    try {

      await axios.post(`${API_URL}/alimentos`,{nome,tipo,quantidade,unidadeMedida,dataValidade});
      alert("Cadastro Realizado")
      
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

      <Text style={Style.txt1}>Quantidade</Text>
      <TextInput
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="Digite aqui"
        style={Style.input}
      />

      <Text style={Style.txt1}>Unidade de Medida</Text>
      <TextInput
        onChangeText={setUnidadeMedida}
        value={unidadeMedida}
        placeholder="Digite aqui"
        multiline={true}
        style={Style.input}
      />
      <Text style={Style.txt1}>Data de Validade</Text>
      <TextInput
        onChangeText={setdataValidade}
        value={dataValidade}
        placeholder="Digite aqui"
        style={Style.input}
      />

      <TouchableOpacity onPress={inserir}
       style={Style.btn}>
        <View>
          <Text style={Style.txtBtn}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}