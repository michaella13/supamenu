import {  Text, View, Image} from 'react-native'
import React from 'react'
import styles from './resto.styles'
import CustomButton from '../common/button/CustomButton'
import { useNavigation } from '@react-navigation/native'

export default function Restaurant() {
  const navigation=useNavigation()
  const handleGoToMenu=()=>{
    navigation.navigate('Menu')
  }

  return (
    <View style={styles.container}>
        <Text
      value='and checkout our menu'
      style={styles.checkOut}
      />
      <Image
      source={require('../../assets/resto.png')}
      style={styles.image}
      />
      <Text style={styles.restoName}>
        Choose Kigali
      </Text>
      <View style={styles.vrContainer}>
        <View style={styles.vr}></View>
        <View style={styles.vr}></View>
        <View style={styles.vr}></View>
        {/* <View style={styles.hrStyle}></View> */}
        
      </View>
      <CustomButton
      title='Enter'
      handleOnPress={handleGoToMenu}
      
      />
      
      <Text style={styles.checkOut}>
        And checkout our menu
      </Text>
    </View>
  )
}

