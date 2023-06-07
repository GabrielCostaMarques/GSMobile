import React from 'react'
import { StyleSheet,Dimensions } from 'react-native'

const width = Dimensions.get('screen').width;
export default StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        backgroundColor:'#7ED956',
    },    
    
    logo:{
        width: "100%",
        height: 500/1024*width, 
        zIndex:99,
        borderRadius:40
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

    input:{
        backgroundColor:'rgba(0,0,0,0.2)',
        paddingHorizontal:110,
        paddingVertical:10,
        borderRadius:20
    },

    btn:{
        position:'relative',
        paddingHorizontal:50,
        paddingVertical:20,
        borderRadius:20,
        backgroundColor: '#235b09'
    },

    btnRegOn:{
        position:'relative',
        paddingHorizontal:50,
        paddingVertical:20,
        borderRadius:20,
        marginTop:130,
        backgroundColor: '#235b09' 
    }

   
})