import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import Style from './estilos/StyleSignIn';
import Logo from '../assets/images.png';

const baseUrl = 'http://localhost:8080/api/v1';

export function Register() {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const goLogin = () => {
    this.props.navigation.navigate('Login');
  };

  const [teste, setTeste] = useState([]);

  const inserir = async () => {
    try {
      const response = await axios.get(`${baseUrl}/ong/listar`);
      setTeste(JSON.stringify(response.data));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView>
      <View style={Style.container}>
        <View style={{ marginBottom: 30 }}>
          <Text style={Style.txt1}>Cadastre-se</Text>
          <TouchableOpacity onPress={this.goLogin}>
            <Text>Já Cadastrado? Entre!</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={Style.txt2}>Nome Completo</Text>
          <TextInput
            placeholder="Digite seu Nome Completo"
            style={Style.input}
          />
          <Text style={Style.txt2}>CPF</Text>
          <TextInput placeholder="Digite seu CPF" style={Style.input} />
          <Text style={Style.txt2}>Data de Nascimento</Text>
          <TextInput
            placeholder="Digite sua Data de Nascimento"
            style={Style.input}
          />
          <Text style={Style.txt2}>EMAIL</Text>
          <TextInput placeholder="Digite seu E-mail" style={Style.input} />

          <Text style={Style.txt2}>Crie uma Senha</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Digite sua senha"
            style={Style.input}
          />
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              inserir();
            }}>
            <View>
              <Text style={Style.btn}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              alert(teste);
            }}>
            <View>
              <Text style={Style.btn}>Teste Alert JSON</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default function RegisterScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar animated />
      <View>
        <Image source={Logo} style={Style.logo} />
      </View>
      <Register navigation={props.navigation} />
    </View>
  );
}
