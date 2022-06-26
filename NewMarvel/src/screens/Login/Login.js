import React from "react";
import {View,Text, TouchableOpacity,Image, StatusBar} from 'react-native'
import styles from './Login.style'
import auth from '@react-native-firebase/auth';
import {LoginManager,AccessToken} from 'react-native-fbsdk-next'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  GoogleSignin.configure({
    webClientId: '239573572877-mjlntl526cac8q3kkrqsfpiqht231von.apps.googleusercontent.com',
  });
  async function onGoogleButtonPress() {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
       auth().signInWithCredential(googleCredential);
       navigation.navigate('HomeStack')
    } catch (error) {
      console.log(error)
    }
   
  }
  
    async function onFacebookButtonPress() {
       try {
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
        if (result.isCancelled) {
          throw'User cancelled the login process';
        }
        const data = await AccessToken.getCurrentAccessToken();
      
        if (!data) {
          throw'Something went wrong obtaining access token';
        }
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
         auth().signInWithCredential(facebookCredential);
         navigation.navigate('HomeStack')
       } catch (error) {
        console.log(error)
       }
      }
      const goEmailLogin = () => {
        navigation.navigate('EmailLoginScreen')
      }
    return(
        <View style={styles.container} >
          <StatusBar backgroundColor={'red'} />
          <View style={styles.image_container}>
          <Image source={{uri:'https://1000logos.net/wp-content/uploads/2021/06/Marvel-Comics-logo.png'}} style={styles.image} />
          <Text style={styles.slogan_text} >Explore The Universe</Text>
          </View>
          <View style={styles.body_container} >
          <Image source={{uri:'https://cdn.quotesgram.com/img/6/38/1187448698-Marvel-Heroes-2013.png'}} 
          style={styles.heroes_image}
          />
          <View style={styles.line_container}></View>
          <Text style={styles.contuniue_text}>Contuniue with this</Text>
          <View style={styles.logo_container}>
          <TouchableOpacity style={styles.google_container} onPress={onGoogleButtonPress}>
            <Image 
            style={styles.logo_image}
            source={{uri:'https://file.wikipediam.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.face_container} onPress={onFacebookButtonPress} >
            <Image 
            style={styles.logo_image}
            source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png'}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goEmailLogin} style={styles.email_container} >
            <Image 
            style={styles.logo_image}
            source={{uri:'https://cdn-icons-png.flaticon.com/512/561/561127.png'}} />
          </TouchableOpacity>
          </View>
          <View style={[styles.line_container,{marginTop:20}]}></View>
          <Text style={{color:'white',marginTop:30}} >By creating an account, you agree with our </Text>
          <Text style={{color:'white',textDecorationLine:'underline'}} >Terms of Service & Privicy Policy</Text>
          </View>
        </View>
    )
}

export default Login