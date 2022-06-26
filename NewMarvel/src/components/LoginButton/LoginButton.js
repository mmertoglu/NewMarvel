import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'
import styles from './LoginButton.style'
const LoginButton = ({Button_text}) => {
    return(
        <TouchableOpacity style={styles.container} >
            <Text style={styles.text} >{Button_text}</Text>
        </TouchableOpacity>
    )
}

export default LoginButton