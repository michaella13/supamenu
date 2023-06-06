import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './item.styles'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function MenuItem({type, handleOnpress}) {
  return (
   <TouchableOpacity onPress={handleOnpress} style={styles.container}>
    <Text style={styles.itemType}>{type}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={30} color="white" style={styles.icon}/>
  </TouchableOpacity>
  )
}

