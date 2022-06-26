import React, { useState } from "react";
import {View,Text,TouchableOpacity,Image} from 'react-native'
import styles from './SignUp.style'
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import auth from '@react-native-firebase/auth'
import IonIcons from 'react-native-vector-icons/Ionicons'
const SignUp = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [rePassword,setRePassword] = useState('')

    const handleSignUp = async ()  => {
        if (email||password||rePassword !='') {
            if (password ===rePassword) {
                try {
                   await auth().createUserWithEmailAndPassword(email,password)
                    navigation.navigate('HomeStack')
                } catch (error) {
                    console.log(error)
                }
            } else {
                console.log('aynı olmalı')
            }
           
        } else {
            console.log('cant be null')
        }
    }
    const goBack  = () => {
        navigation.goBack();
    }
    return(
        <View style={styles.container} >
            <IonIcons name="arrow-back" color={'white'} style={styles.back_icon} size={30} onPress={goBack} />
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
                 <Input
                iconName='key'
                placeHolder='re-password...'
                headerText='Re-Password'
                onChangeText={text => setRePassword(text)} />
            </View>
            <LoginButton
                onPress={handleSignUp}
                Button_text='SIGN UP'
                />

        </View>
    )
}

export default SignUp