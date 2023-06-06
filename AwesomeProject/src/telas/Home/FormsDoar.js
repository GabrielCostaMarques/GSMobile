import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function DonationForm() {
  const [nomeDoador, setNomeDoador] = useState('');
  const [perecivel, setPerecivel] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const handleSubmit = () => {
    // Lógica para lidar com o envio do formulário
    console.log('Formulário enviado!');
    console.log('Nome do Doador:', nomeDoador);
    console.log('Perecível ou não:', perecivel);
    console.log('Quantidade:', quantidade);
    console.log('Observações:', observacoes);
  };

  return (
    <View>
      <Text>Nome do Doador</Text>
      <TextInput
        onChangeText={setNomeDoador}
        value={nomeDoador}
        placeholder="Digite o nome do doador"
      />

      <Text>Perecível ou não?</Text>
      <TextInput
        onChangeText={setPerecivel}
        value={perecivel}
        placeholder="Digite se é perecível ou não"
      />

      <Text>Quantos kg de comida</Text>
      <TextInput
        onChangeText={setQuantidade}
        value={quantidade}
        placeholder="Digite a quantidade de comida em kg"
        keyboardType="numeric"
      />

      <Text>Observações</Text>
      <TextInput
        onChangeText={setObservacoes}
        value={observacoes}
        placeholder="Digite observações adicionais"
        multiline={true}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <View>
          <Text>Enviar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
