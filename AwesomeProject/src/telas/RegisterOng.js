import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import axios from 'axios';
import Style from '../../estilos/StyleSignIn';
import {API_URL} from './api'

export default function Register({ navigation }) {

  const goHome = () => {
    navigation.navigate('Home');
  };

  const [cnpj, setCnpj] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  
  
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  const inserir = async () => {
    try {
      
      let endereco = {
        "logradouro": logradouro,
        "numero": numero,
        "complemento": complemento,
        "cep": cep,
        "uf": uf,
        "cidade": cidade
      }

      const response = await axios.post(`${API_URL}/ong/cadastrar`, {
        cnpj,
        nome,
        endereco:endereco,
        telefone,
        email,
      });
      
      
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ScrollView >
      <View style={Style.container}>

        <View style={{ marginBottom: 30 }}>
          <Text style={Style.txt1}>Cadastre sua ONG</Text>
        </View>

        <View style={{flex:1}}>
          <Text style={Style.txt2}>CNPJ</Text>
          <TextInput
            onChangeText={setCnpj}
            value={cnpj}
            placeholder="Digite seu CNPJ"
            style={Style.input}
          />

          <Text style={Style.txt2}>NOME DA ONG</Text>
          <TextInput
            onChangeText={setNome}
            value={nome}
            placeholder="Digite o Nome Completo"
            style={Style.input}
          />

          <Text style={Style.txt2}>LOGRADOURO</Text>
          <TextInput
            onChangeText={setLogradouro}
            value={logradouro}
            placeholder="Digite o logradouro"
            style={Style.input}
          />
          <Text style={Style.txt2}>NUMERO</Text>
          <TextInput
            onChangeText={setNumero}
            value={numero}
            placeholder="Digite o numero"
            style={Style.input}
          />
          <Text style={Style.txt2}>COMPLEMENTO</Text>
          <TextInput
            onChangeText={setComplemento}
            value={complemento}
            placeholder="Digite o complemento"
            style={Style.input}
          />
          <Text style={Style.txt2}>CEP</Text>
          <TextInput
            onChangeText={setCep}
            value={cep}
            placeholder="Digite o cep"
            style={Style.input}
          />
           <Text style={Style.txt2}>UF</Text>
          <TextInput
            onChangeText={setUf}
            value={uf}
            placeholder="Digite o uf"
            style={Style.input}
          />
          <Text style={Style.txt2}>CIDADE</Text>
          <TextInput
            onChangeText={setCidade}
            value={cidade}
            placeholder="Digite a cidade"
            style={Style.input}
          />

          <Text style={Style.txt2}>TELEFONE</Text>
          <TextInput
            onChangeText={setTelefone}
            value={telefone}
            placeholder="Digite seu telefone"
            style={Style.input}
          />

          <Text style={Style.txt2}>EMAIL</Text>
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="Digite o e-mail"
            style={Style.input}
          />
        </View>

        <View style={{marginBottom:80}}>
          <TouchableOpacity onPress={()=>{
            alert("ONG Cadastrada com Sucesso!")
            inserir()
            goHome()
          }}>
            <View>
              <Text style={Style.btnRegOn}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
