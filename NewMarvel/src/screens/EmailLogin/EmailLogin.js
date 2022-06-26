import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import styles from './EmailLogin.style'
import auth from '@react-native-firebase/auth'
const EmailLogin = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = async () => {
        if (email || password != '') {
            try {
               await auth().signInWithEmailAndPassword(email,password)
                navigation.navigate('HomeStack')
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('a')
        }   
    }
    const goSignUp = () => {
        navigation.navigate('EmailSignUpScreen')
    }
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
                onPress={handleLogin}
                Button_text='LOGIN'
                />
                <View style={{flexDirection:'row'}}>
                <Text style={styles.account_text} >Don't  have an account?   </Text>
                <TouchableOpacity onPress={goSignUp} >
                    <Text style={[styles.account_text,{textDecorationLine:'underline'}]} >Click here </Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}

export default EmailLogin