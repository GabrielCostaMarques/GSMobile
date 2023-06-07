import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import axios from 'react-native-axios';
import styles from '../../estilos/StyleDoacoes';
import { removerDoador, atualizarDoador } from './api';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {API_URL} from './api'

export default function Doacoes() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      const response = await axios.get(`${API_URL}/doador/listar`);
      const dadosFiltrados = response.data.filter((item) => item.ativo);
      setDados(dadosFiltrados);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemoverDoador = async (id) => {
    try {
      await removerDoador(id);
      listar();
    } catch (error) {
      console.log(error);
    }
  };

  const Item = ({ dados }) => {
    return (
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Nome</Text>
          <Text>{dados.nome}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Documento</Text>
          <Text>{dados.documento}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Email</Text>
          <Text>{dados.email}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Telefone</Text>
          <Text>{dados.telefone}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Tipo</Text>
          <Text>{dados.tipo}</Text>
        </View>
        <TouchableOpacity onPress={() => handleRemoverDoador(dados.id)}>
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
