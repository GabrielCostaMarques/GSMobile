import React from 'react'
import { View,ImageBackground,Text } from 'react-native'

export default function SobreNos(){
    
    
    
    return (
    <View >
      <ImageBackground
        source={require('../../../assets/images.png')}
      >
        <Text >Sobre Nós</Text>
      </ImageBackground>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices dui non eleifend
        consequat. Vivamus quis eros eleifend, efficitur est id, rhoncus libero. Maecenas vel ipsum
        eu nunc semper malesuada. In tempor auctor purus, nec euismod nunc rutrum ac. Donec semper
        fermentum sagittis. Mauris semper dapibus libero, id consequat orci vestibulum vel. Duis
        posuere nulla ac metus lacinia aliquet. Phasellus varius elit nec sem mattis, nec venenatis
        mauris imperdiet. Sed feugiat quam id sem luctus ullamcorper.
      </Text>
    </View>
  );
};

