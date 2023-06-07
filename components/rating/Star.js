import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useState } from 'react';

export default function Star({handleRate}) {
    const [iconColor, setIconColor]=useState('white')
    const [rating, setRating]=useState(0)
    const rate=()=>{
        const newColor= iconColor=== 'white' ? 'orange' :'white'
        setIconColor(newColor)    
         }
  return (
    <TouchableOpacity onPress={()=>{
      rate,
      {handleRate}
    }}>
        <MaterialCommunityIcons name="star" size={44} color={iconColor}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})