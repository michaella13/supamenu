import { Text, View, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React from 'react'
import styles from './search';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useStoreActions, useStoreState } from 'easy-peasy';

export default function SearchResults() {
  const navigation = useNavigation();
  const restaurants = useStoreState(state => state.restaurants);
  const setRestaurant = useStoreActions(state => state.setRestaurant);

  const goToReSto = (restaurant) => {
    setRestaurant(restaurant)
    navigation.navigate('Menu');
  };

  const goToSearch = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TouchableOpacity style={styles.backIcon} onPress={goToSearch}>
          <FontAwesome5 name="chevron-left" size={24} color="orange" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder='Search...'
        />
      </View>

      <View style={styles.hr}></View>

      <Text style={styles.near}>
        Nearby Restaurant
      </Text>

      {restaurants.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          style={styles.drinkDetails}
          onPress={() => goToReSto(restaurant)}
        >
          <Image
            source={require('../../assets/resto.png')}
            style={styles.drinkImage}
          />
          <View>
            <Text style={styles.barista}>{restaurant.name}</Text>
            <Text style={styles.drinkName}>{restaurant.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}