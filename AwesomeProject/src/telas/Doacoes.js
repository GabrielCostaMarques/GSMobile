import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, SafeAreaView,TextInput,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
    const [valoresAtualizados, setValoresAtualizados] = useState({
      nome: dados.nome,
      documento: dados.documento,
      email: dados.email,
      telefone: dados.telefone,
      tipo: dados.tipo,
    });

    const handleAtualizarDoador = async () => {
      try {
        const response = await axios.put(`/doador/${dados.id}`, valoresAtualizados);
        console.log(response.data);
        listar();
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.header}>Nome</Text>
          <TextInput
            value={valoresAtualizados.nome}
            onChangeText={(text) => setValoresAtualizados({ ...valoresAtualizados, nome: text })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Documento</Text>
          <TextInput
            value={valoresAtualizados.documento}
            onChangeText={(text) => setValoresAtualizados({ ...valoresAtualizados, documento: text })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Email</Text>
          <TextInput
            value={valoresAtualizados.email}
            onChangeText={(text) => setValoresAtualizados({ ...valoresAtualizados, email: text })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Telefone</Text>
          <TextInput
            value={valoresAtualizados.telefone}
            onChangeText={(text) => setValoresAtualizados({ ...valoresAtualizados, telefone: text })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.header}>Tipo</Text>
          <TextInput
            value={valoresAtualizados.tipo}
            onChangeText={(text) => setValoresAtualizados({ ...valoresAtualizados, tipo: text })}
          />
        </View>
        <TouchableOpacity onPress={handleAtualizarDoador}>
          <MaterialCommunityIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRemoverDoador(dados.id)}>
          <MaterialCommunityIcons name="trash-can" size={24} color="black" />
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
