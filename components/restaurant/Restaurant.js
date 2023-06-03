import {  Text, View, Image} from 'react-native'
import React from 'react'
import styles from './resto.styles'
import CustomButton from '../common/button/CustomButton'

export default function Restaurant() {
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/resto.png')}
      style={styles.image}
      />
      <Text style={styles.restoName} >
        Choose Kigali
      </Text>

      <View style={styles.vrContainer}>
      <View style={styles.vr}/>
      <View style={styles.vr}/>
      <View style={styles.vr}/>

      </View>
      <CustomButton
      title='Enter'
      
      />
      <Text
      value='and checkout our menu'
      style={styles.checkOut}
      />

     
      
    </View>
  )
}

