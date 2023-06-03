import {  TextInput, View } from 'react-native'
import React from 'react'
import styles from './input.styles'

export default function CustomInput({placeholder, icon, onChange }) {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      style={styles.input}
      />

      
    </View>
  )
}

