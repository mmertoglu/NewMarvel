import React from "react";
import {View,Text} from 'react-native'
import useFetch from '../../useFetch/useFetch'
import Config from 'react-native-config'
const url = Config.API_URL_COMICS
const Comics = () => {
    const {data,loading,error} = useFetch()
    return(
        <View>
            <Text></Text>
        </View>
    )
}

export default Comics