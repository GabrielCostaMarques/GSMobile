import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#7ED956',
        textAlign:'center',
        justifyContent:"space-around",
        alignItems:'center',
        fontSize:20,
        fontWeight:'500',

    },

    input:{
      marginTop:-90,  
      borderBottomWidth:1 ,
      
      paddingVertical:10,
    },

    txt1:{
        fontSize:20,
        fontWeight:'500',
    },

    btn:{
        marginTop:40,
        backgroundColor:"black",
        paddingHorizontal:40,
        paddingVertical:20,
        borderRadius:30
    },

    txtBtn:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    }




})