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
import Style from '../../estilos/StyleSignIn';
import Logo from '../../assets/images.png'
import {API_URL} from './api'

export default function Register({ navigation }) {
  const goLogin = () => {
    navigation.navigate('Login');
  };

  const [nome, setNome] = useState('aaa');
  const [cpf, setCpf] = useState('222');
  const [dtNsc, setDtNsc] = useState('333');
  const [email, setEmail] = useState('444');
  const [senha, setSenha] = useState('555');

  const inserir = async () => {
    try {
      const response = await axios.post(`${API_URL}/ong/cadastrar`, {
        nome,
        cpf,
        dtNsc,
        email,
        senha,
      });
      alert(response.status);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView>
      <View style={Style.container}>
          <Image source={Logo} style={Style.logo} />


        <View style={{ marginBottom: 30 }}>
          <Text style={Style.txt1}>Cadastre-se</Text>
          <TouchableOpacity onPress={goLogin}>
            <Text>Já Cadastrado? Entre!</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={Style.txt2}>Nome Completo</Text>
          <TextInput
            onChangeText={setNome}
            value={nome}
            placeholder="Digite seu Nome Completo"
            style={Style.input}
          />
          <Text style={Style.txt2}>CPF</Text>
          <TextInput
            onChangeText={setCpf}
            value={cpf}
            placeholder="Digite seu CPF"
            style={Style.input}
          />

          <Text style={Style.txt2}>Data de Nascimento</Text>
          <TextInput
            onChangeText={setDtNsc}
            value={dtNsc}
            placeholder="Digite sua Data de Nascimento"
            style={Style.input}
          />

          <Text style={Style.txt2}>EMAIL</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Digite seu E-mail"
            style={Style.input}
          />

          <Text style={Style.txt2}>Crie uma Senha</Text>
          <TextInput
            onChangeText={setSenha}
            value={senha}
            secureTextEntry={true}
            placeholder="Digite sua senha"
            style={Style.input}
          />
        </View>

        <View>
          <TouchableOpacity onPress={()=>{
            alert("CADASTRO REALIZADO")
            goLogin()
          }}>
            <View>
              <Text style={Style.btn}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
