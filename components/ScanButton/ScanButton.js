import { SafeAreaView, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './scan.styles'
import CustomInput from '../common/input/CustomInput'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useStoreActions } from 'easy-peasy'




export default function ScanButton() {
  const navigation= useNavigation()
  const [name, setName]=useState('')
  const setRestaurants=useStoreActions(actions=>actions.setRestaurants)
  

  const handleScan=()=>{
    navigation.navigate('Camera')
 }
  
  
 
  const handleSearch=()=>{
    if (name.length >= 2) {
    const searchQuery={
      name
    }
    axios.post("http://192.168.8.106:8000/api/restaurants", searchQuery)
    .then(response=>{
      const restaurants=response.data.restaurants;
      setRestaurants(restaurants)
      navigation.navigate('Search')
    })
    .catch(err =>{
      console.error('Error getting restauratnts '+err)
    })
  }
}
// useEffect(()=>{
//   // Clean up the stored restaurants when the component unmounts
//   return()=>{
//     setRestaurants([]);
//   }
// },[])
  return (
    <SafeAreaView style={styles.container}>
     
      <CustomInput
      icon={<FontAwesome5 name="search" size={24} color="white" />}
      value={name}
      onChange={text=>{
        setName(text)
        handleSearch()
      }}
     
      />
      <Text style={styles.or}>
        OR
      </Text>
      <TouchableOpacity onPress={handleScan}>
      <AntDesign name="qrcode" size={100} color="black"  style={styles.qr}/>
      <Text style={styles.or}>
        Scan, Pay and Enjoy!
      </Text>

      </TouchableOpacity>
      
      
    </SafeAreaView>
  )
}

