import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'

export default function SplashScreen({navigation}) {
  useEffect(()=>{
    const timer=setTimeout(()=>{
      navigation.replace('Login')

    },3000)
    return () => clearTimeout(timer);
  },[navigation])
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/logo2.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'orange',
      height:'100%'
    }
})