import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'



const width = Dimensions.get('screen').width;
export default StyleSheet.create({


    container:{
        flex:1,
        backgroundColor:'#7ED956',
        alignItems:"center",
        justifyContent:"flex-start",
        textAlign:"center",
    },
    
    logo:{
        width: "100%",
        height: 1255/2925*width, 
    },

    txt1:{
        textAlign:'center',
        color:'green',
        fontSize:40,
        fontWeight:'bold',

    },

    
    txt2:{
        fontSize:17,
        textAlign:'center',
        color:'black',
        marginTop:10
    },


})