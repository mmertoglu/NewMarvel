import React,{useState} from "react";
import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from './CharacterDetail.style'
import useFetch from "../../useFetch/useFetch";
import CharacterComicCard from "../../components/CharacterComicCard/CharacterComicCard";
import CharacterStoryCard from '../../components/CharacterStoryCard/CharacterStoryCard'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'
const api_key = 'f10953d37850ea4cfdb4f98a0912cd4e'
const hash = 'f9acd06a0b64e2acd93d4a4b53145d48'

const CharacterDetail = ({ route,navigation }) => {
    const [isFavourite,setIsFavourite] = useState(false)
    const { character } = route.params
    const comicUrl = `${character.comics.collectionURI}?ts=1&apikey=${api_key}&hash=${hash}`
    const seriesUrl = `${character.series.collectionURI}?ts=1&apikey=${api_key}&hash=${hash}`
    console.log(comicUrl)
    const {data,loading,error} = useFetch(comicUrl)
    const {data : data3,loading : loading3} = useFetch(seriesUrl)
    
    const currentUser = auth().currentUser.uid
    const renderComics = ({item}) => <CharacterComicCard comic={item} handleDetail={handleComicDetail} />
    const renderStories = ({item}) => <CharacterStoryCard story={item} />

    const handleComicDetail = (comic) => {
        navigation.navigate('ComicDetailScreen',{comic})
    }
    const handlefavourite = () => {
        setIsFavourite(true)
        database().ref(`users/${currentUser}/favourites`).push(character)
    }
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={handlefavourite} style={styles.icon_container} >
            <FontAwesome5 name="heart" size={30} color='black' solid={isFavourite} />
            </TouchableOpacity>
            {character.thumbnail != undefined ? <Image source={{ uri: character.thumbnail.path + '.jpg' }} style={styles.image} resizeMode='stretch' />
                : null
            }
            <View style={styles.body_container} >
                <Text style={styles.hero_name_text} >{character.name}</Text>
                <Text style={styles.hero_description_text} >{character.description}</Text>
                <Text style={[styles.hero_name_text,{marginBottom:5}]} >Comics</Text>
                { loading ? <ActivityIndicator color={'white'} /> :
                <FlatList
                key={'__'}
                horizontal
                data={data}
                renderItem={renderComics}
                />}
                  <Text style={[styles.hero_name_text,{marginBottom:5,marginTop:20}]} >Series</Text>
                { loading3 ? <ActivityIndicator color={'white'} /> :
                <FlatList
                key={'#_'}
                horizontal
                data={data3}
                renderItem={renderStories}
                />}
            </View>
        </View>
    )
}

export default CharacterDetail