import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1
    },
    image:{
        width:200,
        height:100
    },
    image_container:{
        backgroundColor:'red',
        width:'100%',
        alignItems:'center',
        flex:2,
        justifyContent:'center'
    },
    body_container:{
        flex:4,
        backgroundColor:'red',
        width:'100%',
        alignItems:'center'
      
    },
    slogan_text:{
        color:'white',
        marginTop:30,
        fontSize:18,
        fontFamily:'ChrustyRock-ORLA',
       
    },
    heroes_image:{
        width:'100%',
        height:200,
        marginBottom:50
    },
    line_container:{
        height:0.5,
        backgroundColor:'white',
        width:'100%',
    },
    contuniue_text:{
        color:'white',
        fontSize:16,
        marginTop:10,
        fontFamily:'Ubuntu-Bold'
    },
    logo_image:{
        height:40,
        width:40
    },
    face_container:{
        borderRadius:10,
        padding:10,
        backgroundColor:'#1178F2',
        elevation:8
    },
    google_container:{
        borderRadius:10,
        padding:10,
        backgroundColor:'white',
        elevation:8
    },
    email_container:{
        borderRadius:10,
        padding:10,
        backgroundColor:'white',
        elevation:8
    },
    logo_container:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        marginTop:40
    }
    
})