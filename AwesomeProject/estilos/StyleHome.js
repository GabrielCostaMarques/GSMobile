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

    titulo1:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:20,
        backgroundColor:'#2d720d',
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
        top:130,
        left:130,
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
        width:130,
        height:130,
        backgroundColor:"#7ED956",
        borderRadius:30,
    },

    touchSobre:{
        position:'absolute',
        left:"35%",
        top:"50%",
    },

    txtIcon:{
        textAlign:"center",
        fontWeight:"700",
        marginTop:10,
        fontSize:20
    }

})