import React from "react";
import {View,Text, TextInput} from 'react-native'
import styles from './Input.style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Input = ({placeHolder,onChangeText,value,headerText,isSecure,iconName}) => {
    return(
        <View style={styles.container} >
            <Text style={styles.text} >{headerText}</Text>
            <View style={styles.input_container} >
            <TextInput
            style={styles.input}
            placeholderTextColor={'white'} 
            placeholder={placeHolder} 
            onChangeText={onChangeText} 
            value={value} 
            secureTextEntry={isSecure} />
            <FontAwesome name={iconName} color={'white'} size={20} style={{marginRight:20}} />
            </View>
        </View>
    )
}
export default Input