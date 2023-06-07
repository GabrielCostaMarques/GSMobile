import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';

import Style from '../../../estilos/StyleDoar'

export default function DonationForm({ navigation }) {
  const [nomeDoador, setNomeDoador] = useState('');
  const [perecivel, setPerecivel] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [observacoes, setObservacoes] = useState('');
  const [listaDados, setListaDados] = useState([]);

  const goHome = () => {
    navigation.navigate('Home')
  }

  const adicionarDados = () => {
    const dados = {
      nomeDoador,
      perecivel,
      quantidade,
      observacoes
    };
    setListaDados([...listaDados, dados]);
    setNomeDoador('');
    setPerecivel('');
    setQuantidade('');
    setObservacoes('');
  }

  return (
    <ScrollView contentContainerStyle={Style.container}>
      <Text style={Style.txt1}>Nome do Doador</Text>
      <TextInput
        onChangeText={setNomeDoador}
        value={nomeDoador}
        placeholder="Digite o nome do doador"
        style={Style.input}
      />

      <Text style={Style.txt1}>Perecível ou não?</Text>
      <TextInput
        onChangeText={setPerecivel}
        value={perecivel}
        placeholder="Digite se é perecível ou não"
        style={Style.input}
      />

      <Text style={Style.txt1}>Quantos kg de comida</Text>
      <TextInput
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="Digite a quantidade de comida em kg"
        keyboardType="numeric"
        style={Style.input}
      />

      <Text style={Style.txt1}>Observações</Text>
      <TextInput
        onChangeText={setObservacoes}
        value={observacoes}
        placeholder="Digite observações adicionais"
        multiline={true}
        style={Style.input}
      />

      <TouchableOpacity onPress={adicionarDados} style={Style.btn}>
        <View>
          <Text style={Style.txtBtn}>Enviar</Text>
        </View>
      </TouchableOpacity>

      <View style={Style.listaContainer}>
        <Text style={Style.txt1}>Dados Armazenados:</Text>
        {listaDados.map((dados, index) => (
          <View key={index} style={Style.dadosContainer}>
            <Text style={Style.dadosText}>Nome do Doador: {dados.nomeDoador}</Text>
            <Text style={Style.dadosText}>Perecível ou não: {dados.perecivel}</Text>
            <Text style={Style.dadosText}>Quantidade: {dados.quantidade}</Text>
            <Text style={Style.dadosText}>Observações: {dados.observacoes}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
