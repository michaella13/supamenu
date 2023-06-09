import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import styles from './menu.styles'
import { useState } from 'react';
import MenuItem from '../common/menuItem/MenuItem';

import { useStoreState } from 'easy-peasy';
import { useNavigation } from '@react-navigation/native';


export default function Menu() {
  const navigation = useNavigation()
  const [tableNumber, setTableNumber] = useState('');

  const restaurant=useStoreState(state=>state.restaurant)

  const handleTableNumber = (number) => {
    setTableNumber(number)

  }

  const goToAppetizer = () => {
    navigation.navigate('Menu')

  }
  const goToDrinks = () => {
    navigation.navigate('Drinks')

  }
  return (
    <View style={styles.container}>
      <Text style={styles.restoTitle}>{restaurant.name}</Text>
      <View style={styles.order}>
        <View>

          
          
          <MaterialCommunityIcons name="table-furniture" size={44} color="orange" style={styles.icon} />
            <View style={styles.numberOrdered}>
              <Text style={styles.n}>N</Text>
              <Text style={styles.tableNumber}>{tableNumber}</Text>
            </View>


          

          <TextInput
            value={tableNumber}
            placeholder='Table number'
            onChangeText={handleTableNumber}
            placeholderTextColor="white"
            keyboardType='numeric'
            color='white'
            textAlign='center'
          />
        </View>
        <View style={styles.vr}>
        </View>
        <TouchableOpacity>
          <Ionicons name="hand-left-outline" size={44} color="orange" style={styles.icon} />
          <Text style={styles.callWaiterText}>Call waiter</Text>
        </TouchableOpacity>

      </View>
      <Text style={styles.menu}>Menu</Text>

      <MenuItem
        type='Appetizer'
        handleOnpress={goToAppetizer}

      />
      <MenuItem
        type='Starter'
        handleOnpress={goToAppetizer}

      />
      <MenuItem
        type='Main'
        handleOnpress={goToAppetizer}

      />
      <MenuItem
        type='Dessert'
        handleOnpress={goToAppetizer}

      />

      <MenuItem
        type='Drink'
        handleOnpress={goToDrinks}

      />



    </View>
  )
}

