import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './ComicDetailCharacterCard.style'
const ComicDetailCharacterCard = ({character}) => {
    return(
        <View style={styles.container} >
            <Image source={{uri:character.thumbnail.path+'.jpg'}} style={styles.image} />
            <Text numberOfLines={2} lineBreakMode='head' style={styles.text} >{character.name}</Text>
        </View>
    )
}

export default ComicDetailCharacterCard