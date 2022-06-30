import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import styles from './ComicDetail.style'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import axios from 'axios'
import useFetch from "../../useFetch/useFetch";
import AuthorCard from "../../components/AuthorCard/AuthorCard";
import ComicDetailCharacterCard from "../../components/ComicDetailCharacterCard/ComicDetailCharacterCard";
import IonIcons from 'react-native-vector-icons/Ionicons'


const api_key = 'f10953d37850ea4cfdb4f98a0912cd4e'
const hash = 'f9acd06a0b64e2acd93d4a4b53145d48'

const ComicDetail = ({ route, navigation }) => {
    const [iconName, setIconName] = useState('caret-down')
    const [lines, setLines] = useState(5)
    const { comic } = route.params;
    const authorUrl = `${comic.creators.collectionURI}?ts=1&apikey=${api_key}&hash=${hash}`
    const characterUrl = `${comic.characters.collectionURI}?ts=1&apikey=${api_key}&hash=${hash}`
    const { data, loading, error } = useFetch(authorUrl)
    const { data: data2, loading: loading2 } = useFetch(characterUrl)
    const handleShowMore = () => {
        lines < 6 ? setLines(60) : setLines(5)
        lines < 6 ? setIconName('caret-up') : setIconName('caret-down')
    }
    const renderAuthors = ({ item }) => <AuthorCard author={item} />
    const renderCharacters = ({ item }) => <ComicDetailCharacterCard character={item} />
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.container} >
            <IonIcons name="arrow-back" color={'white'} style={styles.back_icon} size={30} onPress={goBack} />
            <Image source={{ uri: comic.thumbnail.path + '.jpg' }} style={styles.image} resizeMode='stretch' />
            <View style={styles.opacity_container} ></View>
            <Text style={styles.title_text} >{comic.series.name}</Text>
            <View style={styles.body_container} >
                <Text style={styles.author_text} >Authors</Text>

                {loading ? <ActivityIndicator color={'white'} /> :
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={renderAuthors}
                    />}
                <View style={styles.line_container} ></View>
                <Text style={styles.author_text} >Characters</Text>
                <FlatList
                    horizontal
                    data={data2}
                    renderItem={renderCharacters}
                />
                <View style={styles.line_container}></View>
                <Text style={styles.author_text} >Description</Text>
                <View style={styles.desciption_container} >
                    <Text numberOfLines={lines} style={styles.desciption_text} >{comic.description}</Text>
                </View>
                <TouchableOpacity onPress={handleShowMore} style={styles.showmore_container} >
                    <Text style={{ marginRight: 4, color: '#e6e6e6' }} >{lines < 6 ? 'Show More' : 'Show Less'}</Text>
                    <FontAwesome name={iconName} color='white' size={20} />
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}

export default ComicDetail;