import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={styles.container}>
      <Text style={styles.supa}>SUPA</Text>
      <Text style={styles.supa}>MENU</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
flexDirection:'row'
    },
    supa:{
        fontSize:32,
        color:'black'
    },
    menu:{
        fontSize:32,
        color:'orange'
    }

})