import {  Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import styles from './menu.styles'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Menu() {
  return (
    <View>
      <Text>Choose Kigali</Text>
      <View>
      <MaterialCommunityIcons name="table-furniture" size={24} color="orange" />
      <TextInput
      placeholder='Enter table number'
      />
      </View>
      
      
      <TouchableOpacity>
      <Ionicons name="hand-left-outline" size={24} color="orange" />
        <Text>Call waiter</Text>
      </TouchableOpacity>
      
      <Text>Menu</Text>
      

    </View>
  )
}

