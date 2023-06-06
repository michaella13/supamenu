import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './checkout.styles'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 

import PaymentMode from './PaymentMode';

export default function Checkout() {

    const mtn=require('../../assets/mtn.png')
    const airtel=require('../../assets/airtel.png')

    const [totalPrice, setTotalPrice]=useState('')
    const navigation=useNavigation()
    
    const goToBack=()=>{
        navigation.navigate('Drinks')
    }
    const getTotalPrice = async () => {
        try {
          const totalPrice = await AsyncStorage.getItem('totalPrice');
          if (totalPrice !== null) {
            console.log('totalPrice: ' +totalPrice)
        setTotalPrice(totalPrice)
          }
        } catch (error) {
          console.log('Error retrieving total price:', error);
        }
      };
      
      // Call the getTotalPrice function to retrieve the totalPrice value
      getTotalPrice();

      const goToSucces=()=>{
        navigation.navigate('Success')
      }
  return (
    <View style={styles.container}>
        <View style={styles.upperDiv}>
        <TouchableOpacity style={styles.backIcon} onPress={goToBack}>
        <FontAwesome5 name="chevron-left" size={24} color="#08c770" />
        </TouchableOpacity>
        <View style={styles.checkOutText}>
            <View style={styles.checkOutCard}>
            <Text style={styles.checkout}>
                Checkout 
            </Text>
            <FontAwesome name="credit-card" size={24} color="black" />
            </View>
            <View>
                <Text style={styles.totalPrice}>
                    Frw {totalPrice}
                </Text>
                <Text style={styles.including}>
                    Including VAT (18%)
                </Text>
            </View>

            
        </View>
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.credit}>
                <Text style={styles.creditText}>
                    Credit card
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.mobile}>
                <Text style={styles.mobileText}>
                    Mobile & Cash
                </Text>
            </TouchableOpacity>

        </View>
        </View>
        <View style={styles.payments}>
        <PaymentMode
      title='MTN Mobile Money'
      imageSource={mtn}
      />
      <PaymentMode
      title='Airtel money'
      imageSource={airtel}
      />
      <PaymentMode
      title='Cash'
      imageSource={mtn}
      />
        </View>
        <Text style={styles.we}>
            We will send you an  order details to your email after successulf payment
        </Text>
        <TouchableOpacity style={styles.pay} onPress={goToSucces}>
                <Text >
                    <View style={styles.flexButton}>
                    <MaterialIcons name="lock" size={24} color="white" style={styles.lock} /> 
                    <Text style={styles.payText}>
                    Pay for the order
                        </Text> 
                    </View>
                
                </Text>
            </TouchableOpacity>
       
      
    </View>
  )
}

