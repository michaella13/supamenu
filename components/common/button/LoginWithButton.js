import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

export default function LoginWithButton({icon, title}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:25, 
        marginTop:20

    },
    button: {
        borderWidth: 1,
        borderColor: '#ECECEC',
        borderRadius: 5,
        width: 310,
        height: 50,
        flexDirection:'row',
        
      },
      title:{
        color:'grey',
        fontWeight:'bold',
        flex:2,
        marginTop:12
        // padding:10
      },
      icon:{
        flex:1,
        marginLeft: 20,
        marginTop:10
      }
      
     
})