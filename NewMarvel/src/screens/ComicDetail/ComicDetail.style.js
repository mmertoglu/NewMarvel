import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#518cca'
    },
    image:{
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height/3
    },
    opacity_container:{
        opacity:.6,
        position:'absolute',
        backgroundColor:'black',
        width:'100%',
        height:80,
        top:Dimensions.get('screen').height/3 - 80
    },
    title_text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
        position:'absolute',
        top:Dimensions.get('screen').height/3 - 60,
        alignSelf:'center'
    },
    body_container:{
        
        
    },
    desciption_text:{
        color:'white'
    },
    desciption_container:{
        backgroundColor:'#504a4a',
        margin:10,
        padding:10,
        borderRadius:8,
        elevation:8,
        marginTop:20
    },
    showmore_container:{
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center'
    },
    line_container:{
        height:0.4,
        backgroundColor:'white',
        marginTop:5
    },
    author_text:{
        fontSize:18,
        color:'white',
        fontStyle:'italic',
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:10
    },
    back_icon:{
        position:'absolute',
        top:20,
        left:20,
        zIndex:1
    }

})