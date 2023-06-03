import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './button.styles'

export default function CustomButton({title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}