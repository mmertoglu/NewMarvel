import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import database from '@react-native-firebase/database'
import ParseContent from '../../utils/ParseContent'
import auth from '@react-native-firebase/auth'
import StarterCharacterCard from '../../components/StarterCharacterCard/StarterCharacterCard'
import styles from './Favourites.style'
import FavouriteCard from '../../components/FavouriteCard/FavouriteCard'
import RemoveModalComponent from '../../components/RemoveModalComponent/RemoveModalComponent'
const currentUser = auth().currentUser.uid
const Favourites = () => {
    const [isModalVisible, setisModalVisible] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        database().ref('users/' + currentUser + '/favourites').on('value', snapshot => {
            const newData = snapshot.val();
            const ParsedData = ParseContent(newData)
            setData(ParsedData)
            console.log(data)
        })
    }, [])
    const handleRemove = async (character) => {
        setisModalVisible(true)
    }
    const handleRemoveItem = (character) => {
        try {
            const filteredList = data.filter(x => x != character)
            setData(filteredList)
            database().ref('users/' + currentUser + '/favourites/' + character.id).remove()
            setisModalVisible(false)
        } catch (error) {
            console.log(error)
        }
    }


    const renderItem = ({ item }) => <FavouriteCard
        character={item} 
        handleRemove={handleRemove} 
        isModalVisible={isModalVisible}
        RemoveItem={handleRemoveItem} 
        CloseModal={() => setisModalVisible(false)}
        />

    return (
        <View style={styles.container} >
            <Text style={styles.header_text} >Favourites</Text>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
            
        </View>
    )
}


export default Favourites