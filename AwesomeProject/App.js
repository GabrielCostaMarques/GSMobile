import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";

import Style from './estilos/StyleSignIn'
import Logo from './assets/images.png'

const Login =()=>{
  return( 
    <View style={Style.container}>
      <View style={{marginBottom:30}}>
          <Text style={Style.txt1}>Login</Text>
          <Text>Faça o login para continuar</Text>
        </View>

        <View>
          <Text style={Style.txt2}>EMAIL</Text>
          <TextInput placeholder="Digite seu E-mail" style={Style.input}/>

          <Text style={Style.txt2}>PASSWORD</Text>
          <TextInput secureTextEntry={true} placeholder="Digite sua senha" style={Style.input} />
        </View>

        <View>
          <TouchableOpacity
            onPressIn={() => {
              alert("Seus dados foram cadastrados!");
            }}
          >
            <View>
              <Text style={Style.btn}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>

  )
}

export default function App() {
  return (
    <View style={{flex:1}}>
      <View>
        <Image source={Logo} style={Style.logo}/>
      </View>
      <Login/>
    </View>
  );
}
