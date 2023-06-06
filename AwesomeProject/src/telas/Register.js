import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import Style from '../../estilos/StyleSignIn';
import Logo from '../../assets/images.png';


class Register extends Component {
  goLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
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
              alert('cadastro feito');
            }}
          >
            <View>
              <Text style={Style.btn}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar animated />
        <View>
          <Image source={Logo} style={Style.logo} />
        </View>
        <Register navigation={this.props.navigation} />
      </View>
    );
  }
}
