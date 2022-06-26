import React from "react";
import {View,Text,Image} from 'react-native'
import styles from './CharacterStoryCard.style'
const CharacterStoryCard = ({story}) => {
    return(
        <View style={styles.container} >
             {story.thumbnail != null ? <Image source={{uri:story.thumbnail.path+'.jpg'}} style={styles.image} /> : null}
           <Text numberOfLines={1} style={styles.comic_text} >{story.title}</Text> 
        </View>
    )
}
export default CharacterStoryCard