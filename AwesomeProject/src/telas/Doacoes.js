import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import axios from 'react-native-axios';
import styles from '../../estilos/StyleDoacoes';
import { removerDoador, atualizarDoador,removerDoacao } from './api';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {API_URL} from './api'

export default function Doacoes() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      const response = await axios.get(`${API_URL}/alimentos`);
      const dadosFiltrados = response.data.content;
      setDados(dadosFiltrados);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoverDoacao = async (id) => {
    try {
      await axios.delete(`${API_URL}/alimentos/${id}`);
      listar();
    } catch (error) {
      console.log(error);
    }
  };

  const Item = ( {dados} ) => {
    return (
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Nome</Text>
          <Text>{dados.nome}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Quantidade</Text>
          <Text>{dados.quantidade}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Unidade de Medida</Text>
          <Text>{dados.unidadeMedida}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Data de Validade</Text>
          <Text>{dados.dataValidade}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Tipo</Text>
          <Text>{dados.tipo}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoverDoacao(dados.id)}>
          <MaterialCommunityIcons name="trash-can-outline" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={dados}
        renderItem={({ item }) => <Item dados={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}
