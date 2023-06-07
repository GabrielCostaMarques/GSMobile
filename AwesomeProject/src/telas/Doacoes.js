import React, { useState } from 'react';
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';
import axios from 'react-native-axios';

import styles from '../../estilos/StyleDoacoes'

export default function Doacoes() {
  const [teste, setTeste] = useState([]);

  const baseUrl = 'http://localhost:8080/api/v1';

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = [
    {   "nome":"string",
        "tipo": "PF",
        "documento": "88.073.524/7950-41",
        "email": "string",
        "telefone": "string" }]


  const inserir = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/1/');
      
      setTeste([response.data]);
    } catch (error) {
      alert(error);
    }
  };

  const Item = (dados)  =>  {

    console.log(dados)
    return (

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Nome</Text>
          <Text>{dados.dados.nome}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Documento</Text>
          <Text>{dados.dados.documento}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Email</Text>
          <Text>{dados.dados.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Telefone</Text>
          <Text>{dados.dados.telefone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Tipo</Text>
          <Text>{dados.dados.tipo}</Text>
        </View>
      </View>


    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Item dados={item} />}
      />

      <Button title="Listar" onPress={inserir} />
    </SafeAreaView>
  );
}