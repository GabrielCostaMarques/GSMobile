import React from 'react'
import { View,ImageBackground,Text } from 'react-native'


import Style from '../../../estilos/StyleSobre'

export default function SobreNos(){
    
    
    
    return (
      <View style={Style.container}>
        <ImageBackground
            source={require('../../../assets/images.png')}
            style={Style.logo}/>
        <View >   
          <Text style={Style.txt1}>Sobre Nós</Text>
          <Text style={Style.txt2}>
          O aplicativo "Refood" surge como uma solução inovadora para combater o desperdício de alimentos e promover a solidariedade. Com recursos cuidadosamente projetados, o aplicativo conecta feirantes e ONGs, permitindo que os alimentos excedentes das feiras sejam direcionados para pessoas necessitadas. Essa plataforma intuitiva e eficiente visa otimizar a logística de coleta e distribuição, facilitando a conexão entre aqueles que têm alimentos não vendidos e aqueles que precisam deles. Com a integração de recursos como cadastro, agendamento de coleta, notificações, avaliações e estatísticas, o "Refood" promove uma abordagem holística para reduzir o desperdício e aumentar o impacto social positivo. Vamos explorar mais detalhadamente os recursos e benefícios desse aplicativo inovador.
          </Text>
        </View>
    </View>
    
  );
};

