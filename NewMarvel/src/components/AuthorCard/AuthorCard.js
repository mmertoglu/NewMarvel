import React from "react";
import {View,Text, Image} from 'react-native'
import styles from './AuthorCard.style'

const AuthorCard = ({author,jobTitle}) => {
    
    return(
        <View style={styles.container} >
            <Image source={{uri:author.thumbnail.path+'.jpg'}} style={styles.image} />
            <Text style={styles.text} numberOfLines={2} >{author.fullName}</Text>
            
        </View>
    )
}

export default AuthorCard