import { Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './success.styles'
import { AntDesign } from '@expo/vector-icons'; 
import CustomButton from '../common/button/CustomButton';
import { useNavigation } from '@react-navigation/native';

export default function PaymentSuccess() {
const navigation=useNavigation()
const  goToRate=()=>{
  navigation.navigate('Rate')
  }
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/success.png')}
      style={styles.successImage}
      />
      <View>
        
      </View>
      <Text style={styles.paymentSuccess}>
        Payment Success, Yayyy!
      </Text>
      <Text style={styles.we}>
        We will send order details and invoice in your contact number and registered email
      </Text>
      <TouchableOpacity>
        <View style={styles.check}>
          <Text style={styles.checkText}>
          Check details
          </Text>
          
          <AntDesign name="arrowright" size={24} color="orange" style={styles.icon} />
        </View>
      </TouchableOpacity>
      <CustomButton
      title='Download Invoice'
      handleOnPress={goToRate}
      />
      <Image
      source={require('../../assets/logoBlack.png')}
      style={styles.logo}
      />

    </View>
  )
}

