import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 80,
        flexDirection: 'row',
        elevation:8,
        alignItems:'center',
        alignSelf:'center',
        width:'95%',
        marginVertical:20,
        //borderTopLeftRadius:100,//
       // borderBottomLeftRadius:100,
        paddingLeft:10,
        justifyContent:'space-between',
        elevation:8,
        backgroundColor:'orange',
        borderRadius:16
        
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        width:160,
        alignSelf:'center',
        marginRight:100,
        fontFamily:'Ubuntu-Bold'
    },

    text_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:200,
    
        marginRight:20,
        paddingVertical:5,
        borderRadius:8,
        
    }
})