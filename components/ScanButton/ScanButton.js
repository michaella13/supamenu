import { SafeAreaView, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import styles from './scan.styles'
import CustomInput from '../common/input/CustomInput'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 


export default function ScanButton() {
  const navigation= useNavigation()
  const handleScan=()=>{
    navigation.navigate('Camera')

  }
  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
      icon={<FontAwesome5 name="search" size={24} color="white" />}
      />
      <Text style={styles.or}>
        OR
      </Text>
      <TouchableOpacity onPress={handleScan}>
      <AntDesign name="qrcode" size={100} color="black"  style={styles.qr}/>
      <Text style={styles.or}>
        Scan, Pay and Enjoy!
      </Text>

      </TouchableOpacity>
      
      <Text style={styles.or}>
        Scan, Pay and Enjoy!
      </Text>
    </SafeAreaView>
  )
}

