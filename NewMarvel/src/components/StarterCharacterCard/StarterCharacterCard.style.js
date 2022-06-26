import { Dimensions, StyleSheet } from "react-native";
import colors from "../../assets/colors";

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 80,
        flexDirection: 'row',
        elevation:4,
        borderColor:'white',
        borderWidth:0.5,
        alignItems:'center',
        alignSelf:'center',
        width:'95%',
        marginVertical:5,
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,
        paddingLeft:10,
        justifyContent:'space-between',
        elevation:8
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
    },
    text: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        width:160,
        alignSelf:'center'
    },

    text_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:200,
        paddingHorizontal:10,
        marginRight:20,
        paddingVertical:5,
        borderRadius:8,
        
    }
})