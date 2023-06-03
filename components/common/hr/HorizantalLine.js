import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HorizantalLine() {
    return <View style={styles.line} />;
}

const styles = StyleSheet.create({
    line: {
      borderBottomWidth: 1,
      borderBottomColor: '#A9A9A9',
      width:100
    },
  });