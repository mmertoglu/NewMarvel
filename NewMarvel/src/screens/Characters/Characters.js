import React, { useEffect, useState } from "react";
import { View, FlatList, } from 'react-native'
import Config from "react-native-config";
import useFetch from '../../useFetch/useFetch'
import styles from './Characters.style'
import SearchBar from '../../components/SearchBar/SearchBar'
import HeroLottie from "../../assets/Lottie/HeroLottie";
import StarterCharacterCard from "../../components/StarterCharacterCard/StarterCharacterCard";
import ErrorLottie from '../../assets/Lottie/ErrorLottie'
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'

const api_key = 'f10953d37850ea4cfdb4f98a0912cd4e'
const hash = 'f9acd06a0b64e2acd93d4a4b53145d48'

const Characters = ({navigation}) => {
  const [searchedCharacter, setSearchedCharacter] = useState('')
  const starterUrl = `${Config.API_URL_CHARACTERS}?ts=1&apikey=${api_key}&hash=${hash}&limit=20&offset=0`
  const newUrl = `${Config.API_URL_CHARACTERS}?nameStartsWith=${searchedCharacter}&ts=1&apikey=${api_key}&hash=${hash}&limit=20&offset=0`
  const { loading, error, data } = useFetch(newUrl)
  const {loading  : loading2 , data : data2 } = useFetch(starterUrl)
  
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '239573572877-mjlntl526cac8q3kkrqsfpiqht231von.apps.googleusercontent.com',
    });
  },[])
  const handleDetail = (character) => {
    navigation.navigate('CharacterDetailScreen',{character})
  }

  const renderItemStarter = ({item}) => <StarterCharacterCard character={item} handleDetail={handleDetail} />
  if (loading) {
    return <HeroLottie/>
  }
  if(error) {
    return <ErrorLottie/>
  }
  const handleSignOut = async () => {
    try {
        const currentUser = auth().currentUser
        if (currentUser) {
            await auth().signOut();
            navigation.navigate('LoginScreen')
            
        }
        else {
            await GoogleSignin.signOut();
            navigation.navigate('LoginScreen')
            }
          
        }
     catch (error) {
        console.log(error)
    }
  }
  return (
    <View style={styles.container} >
      <HomeHeader handleSignout={handleSignOut} />
      <SearchBar
        onChangeText={text => setSearchedCharacter(text)} />
      {searchedCharacter ?
      <FlatList
      key={'#'}
        data={data}
        renderItem={renderItemStarter} />:
        <FlatList
        key={'_'}
        data={data2}
        renderItem={renderItemStarter}
        />
        }
    </View>
  )
}
export default Characters