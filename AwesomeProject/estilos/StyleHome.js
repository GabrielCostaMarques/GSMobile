import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default StyleSheet.create({

    topo:{
       flex:3,
       backgroundColor:'#7ED956',
       borderBottomLeftRadius:110
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

    titulo1:{
        fontSize:35,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:20,
        color:"#7ED956",
        borderRadius:30
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
    },

    iconDoacoes:{
        width:130,
        height:130,
        backgroundColor:"#7ED956",
        borderRadius:30,
    },

    touchDoacoes:{
        position:'absolute',
        left:"10%",
        top:"15%"
    },

    iconDoar:{
        width:130,
        height:130,
        backgroundColor:"#7ED956",
        borderRadius:30,
    },

    touchDoar:{
        position:'absolute',
        left:"58%",
        top:"15%"
    },

    iconSobre:{
        width:110,
        height:110,
        backgroundColor:"#7ED956",
        borderRadius:30,
    },

    touchSobre:{
        position:'absolute',
        left:"35%",
        top:"50%",
    },

    iconRegisterOng:{
        width:110,
        height:110,
        backgroundColor:"#7ED956",
        borderRadius:30,
    },

    touchRegisterOng:{
        position:'absolute',
        left:"5%",
        top:"50%",
    },
    iconListaOng:{
        width:110,
        height:110,
        backgroundColor:"#7ED956",
        borderRadius:30,
    },

    touchListaOng:{
        position:'absolute',
        left:"65%",
        top:"50%",
    },

    txtIcon:{
        textAlign:"center",
        fontWeight:"700",
        marginTop:10,
        fontSize:20
    }



})