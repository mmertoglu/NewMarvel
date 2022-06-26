import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#000080',
        flex:1
    },
    input_container:{
        paddingHorizontal:10,
        backgroundColor:'#9E9E9E',
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