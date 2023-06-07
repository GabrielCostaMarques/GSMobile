import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

import Style from '../../estilos/StyleSignIn'
import Logo from '../../assets/logoMain.png'

export default function SignIn({navigation}){
  const goHome=()=>{
    navigation.navigate('Home')
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    AsyncStorage.getItem("USUARIOS")
      .then((info)=>{
        let lista = []
        let achou = false;
        if (info) { 
          lista = JSON.parse(info)
        }
        for (let i = 0; i < lista.length; i++) {
          const obj = lista[i];
          if (obj.email === email && obj.senha === senha) {
            setLogado(true);
            achou = true;
            goHome()
            break; 
          }
        }
        if (!achou) {
          alert("Usuário ou senha estão incorretos");
        }
      })
      .catch((err)=>{
        alert("Erro ao ler a lista de usuários: " + err);
      });
  };

  return( 
    <View style={Style.container}>
      <Image source={Logo} style={Style.logo}/>

      <View style={{marginBottom:30}}>
        <Text style={Style.txt1}>Login</Text>
        <Text>Faça o login para continuar</Text>
      </View>

      <View>
        <Text style={Style.txt2}>EMAIL</Text>
        <TextInput
          onChangeText={setEmail}
          value={email}
          placeholder="Digite seu E-mail"
          style={Style.input}
        />

        <Text style={Style.txt2}>PASSWORD</Text>
        <TextInput
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
          placeholder="Digite sua senha"
          style={Style.input}
        />
      </View>

      <View>
        <TouchableOpacity onPress={handleLogin}>
          <View>
            <Text style={Style.btn}>Logar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
