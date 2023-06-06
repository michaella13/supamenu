import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './button.styles'

export default function CustomButton({title, handleOnPress}) {
  return (
    
      <TouchableOpacity style={styles.button}  onPress={handleOnPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    
  )
}