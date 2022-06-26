import React from "react";
import {TouchableOpacity,Text,Image} from 'react-native'
import styles from './CharacterComicCard.style'
const CharacterComicCard = ({comic,handleDetail}) => {
    return(
        <TouchableOpacity onPress={() => handleDetail(comic)} style={styles.container} >
           {comic.thumbnail != null ? <Image source={{uri:comic.thumbnail.path+'.jpg'}} style={styles.image} /> : null}
           <Text numberOfLines={1} style={styles.comic_text} >{comic.title}</Text> 
        </TouchableOpacity>
    )
}
export default CharacterComicCard