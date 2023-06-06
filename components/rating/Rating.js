import { Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import CustomButton from '../common/button/CustomButton';
import { useNavigation } from '@react-navigation/native';
import styles from './rating.styles'
import Star from './Star';

export default function Rating() {
  return (
    <View style={styles.container}>
      
      <View>
        
      </View>
      <Text style={styles.paymentSuccess}>
        Yayyyy! We value all feedback. please rate the experience below:
      </Text>

      <View style={styles.stars}>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>

      </View>

      

      

      <Text style={styles.paymentSuccess}>
        Thank you for helping us improve our service!   
      </Text>
      
     
      
      <Image
      source={require('../../assets/logoBlack.png')}
      style={styles.logo}
      />

    </View>

  )
}

