import React from "react";
import LottieView from 'lottie-react-native'

const HeroLottie = () => {
    return(
        <LottieView autoPlay source={require('./loading.json')} style={{backgroundColor:'red'}} />
    )
}
export default HeroLottie