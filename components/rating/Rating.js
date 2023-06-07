import { Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import CustomButton from '../common/button/CustomButton';
import { useNavigation } from '@react-navigation/native';
import styles from './rating.styles'
import Star from './Star';
import { useState } from 'react';

export default function Rating() {
  const[rating, setRating]=useState(0);
  const countRate=()=>{
    setRating(rating+1)
  }
  return (
    <View style={styles.container}>
      
      <View>
        
      </View>
      <Text style={styles.paymentSuccess}>
        Yayyyy! We value all feedback. please rate the experience below:
      </Text>

      <View style={styles.stars}>
      <Star
      handleRate={countRate}
      />
      <Star
      handleRate={countRate}
      />
      <Star
      handleRate={countRate}
      />
      <Star
      handleRate={countRate}
      />
      <Star
      handleRate={countRate}
      />
      

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

