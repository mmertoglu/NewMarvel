import React from "react";
import LottieView from 'lottie-react-native'

const ErrorLottie = () => {
    return(
        <LottieView autoPlay source={require('./error.json')} style={{backgroundColor:'#000080'}} />
    )
}
export default ErrorLottie