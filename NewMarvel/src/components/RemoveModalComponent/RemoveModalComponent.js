import React from "react";
import {Text,View,Image, TouchableOpacity} from 'react-native'
import Modal from 'react-native-modal';
import styles from './RemoveModalComponent.style'
const RemoveModalComponent = ({isModalVisible,CloseModal,handleRemoveItem}) => {
    return(
        <Modal 
        backdropOpacity={0.3}
        animationInTiming={600}
        animationOutTiming={600}
        style={styles.modal}
        onBackdropPress={CloseModal}
        onBackButtonPress={CloseModal}
        isVisible={isModalVisible}  >
            <View style={styles.container} >
             <Image source={{uri:'https://1000logos.net/wp-content/uploads/2021/06/Marvel-Comics-logo.png'}}
             resizeMode='contain'
             style={styles.marvel_image} />
             <View style={styles.body_container} >
                <View style={styles.remove_container}>
                <Text style={styles.header_text} >Do you want to remove this character?</Text>
               <View style={{flexDirection:'row',alignSelf:'center',marginTop:10}} >
               <TouchableOpacity onPress={handleRemoveItem} style={styles.ok_container}>
                <Text style={styles.ok_text} >Remove</Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={CloseModal} style={styles.ok_container}>
                <Text style={styles.ok_text} >Cancel</Text>
                </TouchableOpacity>
                </View>
                </View>
             <Image source={{uri: 'https://www.linkpicture.com/q/spider_3.png'}} style={styles.image} /> 
             </View>
             </View>
        </Modal>
    )
}

export default RemoveModalComponent