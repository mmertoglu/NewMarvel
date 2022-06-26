import React from "react";
import {View,Text,Image, TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './StarterCharacterCard.style'
const StarterCharacterCard = ({character,handleDetail}) => {
    return(
        <TouchableOpacity onPress={() =>handleDetail(character)} style={styles.container}>
            { character.thumbnail != undefined ? <Image source={{uri:character.thumbnail.path+'.jpg'}} style={styles.image} resizeMode='stretch' />
        : null   
        }
            <View style={styles.text_container} >
            <Text numberOfLines={1}  style={styles.text} >{character.name}</Text>
            <Entypo name="shield" size={30} color='white' />
            </View>
        </TouchableOpacity>
    )
}

export default StarterCharacterCard;