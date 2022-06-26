import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import styles from './EmailLogin.style'
const EmailLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container} >
            <Image source={{ uri: 'https://1000logos.net/wp-content/uploads/2021/06/Marvel-Comics-logo.png' }} style={styles.image} />
            <View style={styles.input_container} >
            <Input
                iconName='user'
                placeHolder='email...'
                headerText='Email'
                onChangeText={text => setEmail(text)} />
                <Input
                iconName='key'
                placeHolder='password...'
                headerText='Password'
                onChangeText={text => setPassword(text)} />
            </View>
            <LoginButton
                Button_text='LOGIN'
                />
                <View style={{flexDirection:'row'}}>
                <Text style={styles.account_text} >Don't  have an account?   </Text>
                <TouchableOpacity >
                    <Text style={[styles.account_text,{textDecorationLine:'underline'}]} >Click here </Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}

export default EmailLogin