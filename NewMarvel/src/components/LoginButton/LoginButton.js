import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import styles from './LoginButton.style'
const LoginButton = ({Button_text,onPress}) => {
    return(
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <Text style={styles.text} >{Button_text}</Text>
        </TouchableOpacity>
    )
}

export default LoginButton