import React from "react";
import {View,Text,Image, TouchableOpacity, Alert} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './FavouriteCard.style'
const FavouriteCard = ({character,handleRemove}) => {
    return(
        <TouchableOpacity onLongPress={() =>handleRemove(character)} style={styles.container}>
            { character.thumbnail != undefined ? <Image source={{uri:character.thumbnail.path+'.jpg'}} style={styles.image} resizeMode='stretch' />
        : null   
        }
            <View style={styles.text_container} >
            <Text numberOfLines={1}  style={styles.text} >{character.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default FavouriteCard;