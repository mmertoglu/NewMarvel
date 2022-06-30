import React from "react";
import LottieView from 'lottie-react-native'
import { View } from "react-native";

const HeroLottie = () => {
    return(
        <View style={{backgroundColor:'red',width:'100%',height:100,flex:1,alignItems:'center',justifyContent:'center'}} >
        <LottieView autoPlay source={require('./loading.json')} style={{backgroundColor:'red',width:200}} />
        </View>
    )
}
export default HeroLottie