import {  TextInput, View } from 'react-native'
import React from 'react'
import styles from './input.styles'

export default function CustomInput({placeholder, icon, onChange, keyboard, value, secure}) {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={onChange}
      keyboardType={keyboard}
      secureTextEntry={secure}
      style={styles.input}
      />

      
    </View>
  )
}

