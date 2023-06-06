import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'

export default function PaymentMode({imageSource, title}) {
  return (
    <View style={styles.container}>
      <Image
      source={imageSource}
      style={styles.image}
      />
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
container:{
    flexDirection:'row',
    width:'75%',
    justifyContent:'space-between',
    marginTop:30
},
image:{
    width:90,
    height:50
},
title:{
    fontWeight:'300',
    textAlign:'center'
},

})