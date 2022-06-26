import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
export default  StyleSheet.create({
    container:{
        backgroundColor:colors[700],
        margin:10,
        alignItems:'center',
        padding:10,
        elevation:10,
        borderRadius:16
        
    },
    text:{
        color:'white',
        fontWeight:'bold',
        width:100,
        alignSelf:'flex-start',
        marginTop:10
    },
    image:{
        width:140,
        height:140,
        borderRadius:8
    }
})