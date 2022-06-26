import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './CharacterCard.style'
const CharacterCard = ({character}) => {
    return(
        <View style={styles.container}>
            { character.thumbnail != undefined ? <Image source={{uri:character.thumbnail.path+'.jpg'}} style={styles.image} resizeMode='cover' />
        : null   
        }
            <Text style={styles.text} >{character.name}</Text>
        </View>
    )
}

export  default CharacterCard;