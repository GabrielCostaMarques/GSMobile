import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import Style from '../../../estilos/StyleDoar'

export default function DonationForm({navigation}) {
  const [nomeDoador, setNomeDoador] = useState('');
  const [perecivel, setPerecivel] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [observacoes, setObservacoes] = useState('');


  const goHome=()=>{
    navigation.navigate('Home')
  }

  return (
    <View style={Style.container}>
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

      <TouchableOpacity onPress={()=>{goHome()}} style={Style.btn}>
        <View>
          <Text style={Style.txtBtn}>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
