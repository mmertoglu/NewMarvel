import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Characters from "./src/screens/Characters/Characters";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Comics from "./src/screens/Comics/Comics";
import Favourites from "./src/screens/Favourites/Favourites";
import colors from "./src/assets/colors";
import CharacterDetail from "./src/screens/CharacterDetail/CharacterDetail";
import ComicDetail from "./src/screens/ComicDetail/ComicDetail";
import Login from "./src/screens/Login/Login";
import EmailLogin from "./src/screens/EmailLogin/EmailLogin";
import SignUp from "./src/screens/SignUp/SignUp";
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const CharacterStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="CharactersScreen" component={Characters} />
      <Stack.Screen name="CharacterDetailScreen" component={CharacterDetail} />
      <Stack.Screen name="ComicDetailScreen" component={ComicDetail} />
    </Stack.Navigator>
  )
}
  function AppTabStack () {
  return(
      <Tab.Navigator 
      screenOptions={({route}) => ({
        tabBarIcon:({focused , color , size}) => {
            let iconName;
            if (route.name==='Characters') {
                iconName='buysellads'
            }
            if (route.name==='Comics') {
                iconName='book'
                
            } 
            if (route.name==='Favourites') {
                iconName='heart'
            }
            return <FontAwesome name={iconName} color={color} size={24} />
        },
        tabBarActiveTintColor: 'white',
         tabBarInactiveTintColor: '#d9d9d9',
         headerShown:false,
         tabBarActiveBackgroundColor:'red',
         tabBarStyle:{backgroundColor:'red',borderTopWidth:0}
    })
    }
      >
        <Tab.Screen name="Characters" component={CharacterStack} />
        <Tab.Screen name="Comics" component={Comics} />
        <Tab.Screen name="Favourites" component={Favourites} />
      </Tab.Navigator>
   
  )
}

function App () {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={'red'} />
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="EmailLoginScreen" component={EmailLogin} />
        <Stack.Screen name="EmailSignUpScreen" component={SignUp} />
        <Stack.Screen name="HomeStack" component={AppTabStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App