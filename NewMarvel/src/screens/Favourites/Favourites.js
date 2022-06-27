import React,{useEffect,useState} from 'react'
import {View,Text,FlatList} from 'react-native'
import database from '@react-native-firebase/database'
import ParseContent from '../../utils/ParseContent'
import auth from '@react-native-firebase/auth'
import StarterCharacterCard from '../../components/StarterCharacterCard/StarterCharacterCard'
const currentUser = auth().currentUser.uid
const Favourites = () => {
    const [data,setData] =useState([])
    useEffect(() => {
        database().ref('users/'+currentUser+'/favourites').on('value',snapshot => {
            const newData = snapshot.val();
            const ParsedData = ParseContent(newData)
            setData(ParsedData)
            console.log(data)
        })
    },[])
    const renderItem = ({item}) => <StarterCharacterCard character={item} handleDetail={as} />
    const as = () => {

    }
    return(
        <View>
            <FlatList
            data={data}
            renderItem={renderItem}
            />
        </View>
    )
}

export default Favourites