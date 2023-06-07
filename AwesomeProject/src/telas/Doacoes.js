import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, SafeAreaView } from 'react-native';
import axios from 'react-native-axios';
import styles from '../../estilos/StyleDoacoes'
import {API_URL} from './api'
export default function Doacoes() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    listar()
  }, []);
    
  const listar = async () => {
    try {
      const response = await axios.get(`${API_URL}/doador/listar`);
      if (response.data.length < 1) {
        alert("Sem dados Cadastrados")
      }
      setDados(response.data);
    } catch (error) {
      // console.log(error);
      alert(`Dados não carregados${error.status}`)
    }
  };

  const Item = (dados) => {
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
        data={dados}
        renderItem={({ item }) => <Item dados={item} />}
      />
    </SafeAreaView>
  );
}