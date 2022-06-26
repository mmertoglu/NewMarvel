import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'red',
        flex:1
    },
    input_container:{
        paddingHorizontal:10,
        backgroundColor:'red',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:16,
        margin:5
    },
    search_icon : {
        marginRight:10
    },
    search_text:{
        color:'white',
        fontSize:20,
        position:'absolute',
        top:-100,
        fontWeight:'bold',
        fontStyle:'italic'
    }
})