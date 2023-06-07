import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  FlatList
} from 'react-native';

import axios from 'axios';
import Style from '../../estilos/StyleSignIn';
import Logo from '../../assets/images.png'

const baseUrl = 'http://localhost:8080/api/v1';

export default function Register({ navigation }) {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const goLogin = () => {
    navigation.navigate('Login');
  };

  const listar = async () => {
    try {
      const response = await axios.post(`${baseUrl}/ong/listar`)
      alert(response.status);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView>
      <View style={Style.container}>
          <FlatList 
          data={}
          />
      </View>
    </ScrollView>
  );
}
