import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

import Style from '../../estilos/StyleSignIn'
import Logo from '../../assets/images.png'



export default function SignIn({navigation}){
  const goHome=()=>{
  navigation.navigate('Home')
}
  
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
            onPress={() => {
              alert("cadastro feito")
              goHome()
            }}
          >
            <View>
              <Text style={Style.btn}>Logar</Text>
            </View>
          </TouchableOpacity>
        </View>
    </View>
  )}
