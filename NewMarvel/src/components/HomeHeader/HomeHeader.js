import React from "react";
import {View,Text} from 'react-native'
import auth from '@react-native-firebase/auth'
import styles from './HomeHeader.style'
import AntDesign from 'react-native-vector-icons/AntDesign'
const HomeHeader = ({handleSignout}) => {
    const currentUser = auth().currentUser.email.split('@',1)
    return(
        <View style={styles.container}>
            <Text style={styles.text} >Welcome - {currentUser}</Text>
            <AntDesign name="logout" color={'white'} size={30} onPress={handleSignout} />
        </View>
    )
}

export default HomeHeader