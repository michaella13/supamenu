import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './item.styles'
import { MaterialIcons } from '@expo/vector-icons'; 

export default function MenuItem({type, handleOnpress}) {
  return (
   <TouchableOpacity onPress={handleOnpress}>
    <Text>{type}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
  </TouchableOpacity>
  )
}

