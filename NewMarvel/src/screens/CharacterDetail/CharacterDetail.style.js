import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#518cca'
    },
    image: {
        width: '100%',
        height: 300
    },
    body_container: {
        margin: 10
    },
    hero_name_text: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom:20
    },
    hero_description_text: {
        color: 'white',
        fontWeight: '600'
    },
    comic_name: {
        color: 'white',
        fontSize:16
    },
    comic_container:{
        backgroundColor:'tomato',
        margin:10,
        padding:5
    },
    icon_container:{
        backgroundColor:'white',
        padding:10,
        borderRadius:60,
        position:'absolute',
        top:20,
        right:20,
        width:50,
        zIndex:1,
        
    },
    back_icon:{
        position:'absolute',
        top:20,
        left:20,
        zIndex:1
    }
})