import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modal:{
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        width:300,
        height:200,
        backgroundColor:'white',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:16,
       elevation:10

    },
    image:{
        width:300,
        height:80,
        marginBottom:20,
        position:'absolute',
        right:0,
        top:30
    },
    buttons:{},
    marvel_image:{
        width:300,
        height:80
    },
    remove_container:{

    },
    body_container:{
        backgroundColor:'#518cca',
        height:120,
        width:'100%',
        borderBottomLeftRadius:16,
        borderBottomRightRadius:16
       
    },
    header_text:{
        color:'white',
        marginTop:20,
        alignSelf:'center'
    },
    ok_text:{
        color:'black'
    },
    ok_container:{
        backgroundColor:'white',
        marginTop:20,
        width:80,
        alignItems:'center',
        alignSelf:'center',
        marginRight:14,
        borderRadius:8,
        elevation:10,
        zIndex:1
    }
})