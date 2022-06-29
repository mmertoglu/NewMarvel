import React, { useState } from "react";
import {View,Text} from 'react-native'
import auth from '@react-native-firebase/auth'
import styles from './HomeHeader.style'
import AntDesign from 'react-native-vector-icons/AntDesign'
const HomeHeader = ({handleSignout}) => {
    const [name,setName] = useState('')
    
    auth().onAuthStateChanged((user)=> {
        if (user) {
            setName(user.email)
        }
        else {
            setName(null)
        }
    })
    return(
        <View style={styles.container}>
            <Text style={styles.text} >Welcome - { name ? name.split('@',1) : null}</Text>
            <AntDesign name="logout" color={'white'} size={30} onPress={handleSignout} />
        </View>
    )
}

export default HomeHeader