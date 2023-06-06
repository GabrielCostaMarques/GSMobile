import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({

    topo:{
       flex:3,
       backgroundColor:'#7ED956',
       borderBottomLeftRadius:100
    },

    menu:{
        flex:7,
    },

    titulo:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        justifyContent:"center",
        marginTop:70,
    },

    img:{
        position:'absolute',
        width:40,
        height:40,
        top:150,
        left:120
    },

    txt1:{
        position:"absolute",
        top:160,
        left:160,
        fontWeight:"bold",
    }
})