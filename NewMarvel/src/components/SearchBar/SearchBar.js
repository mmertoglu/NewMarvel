import React from "react";
import {View,Text,TextInput} from 'react-native'
import styles from './SearchBar.style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const SearchBar  = ({onChangeText}) => {
    return(
        <View style={styles.input_container} >
        <FontAwesome name="search" size={24} color='white' style={styles.search_icon} />
        <TextInput
        autoCorrect={false}
        style={{color:'white',width:'90%'}}
        placeholderTextColor='white'
        placeholder="search characters"
        onChangeText={onChangeText}
        />
        </View>
    )
}

export default SearchBar