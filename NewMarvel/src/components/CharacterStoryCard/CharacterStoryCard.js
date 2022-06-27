import React from "react";
import {View,Text,Image, TouchableOpacity} from 'react-native'
import styles from './CharacterStoryCard.style'
const CharacterStoryCard = ({story,handleStoryDetail}) => {
    return(
        <TouchableOpacity onPress={() =>handleStoryDetail(story)} style={styles.container} >
             {story.thumbnail != null ? <Image source={{uri:story.thumbnail.path+'.jpg'}} style={styles.image} /> : null}
           <Text numberOfLines={1} style={styles.comic_text} >{story.title}</Text> 
        </TouchableOpacity>
    )
}
export default CharacterStoryCard