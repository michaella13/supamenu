import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import styles from './drinks.styles'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import CustomButton from '../common/button/CustomButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useStoreState } from 'easy-peasy';




export default function Drinks() {
    const [numberOfDrinks, setNumberOfDrinks] = useState(0);


    const restaurant = useStoreState(state => state.restaurant)
    console.log(restaurant.drinks)

    const [price, setPrice] = useState(5000);
    // console.log("in drinks "+restaurant)
    const [total, setTotal] = useState(0);

    const navigation = useNavigation()

    const removeDrink = () => {
        setNumberOfDrinks(numberOfDrinks - 1);
    };
    const addDrink = () => {
        setNumberOfDrinks(numberOfDrinks + 1);
    }
    useEffect(() => {
        setTotal(numberOfDrinks * price);
    }, [numberOfDrinks, price]);

    useEffect(() => {
        const storeTotalPrice = async () => {
            try {
                await AsyncStorage.setItem('totalPrice', total.toString());
                const storedTotalPrice = await AsyncStorage.getItem('totalPrice');
                console.log('totalPrice at drinks:', storedTotalPrice);
            } catch (error) {
                console.log('Error storing or retrieving totalPrice:', error);
            }
        };

        storeTotalPrice();
    }, [total]);

    const goToMenu = () => {
        navigation.navigate('Menu')

    }
    const proceed = () => {
        navigation.navigate('Checkout')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backIcon} onPress={goToMenu}>
                <FontAwesome5 name="chevron-left" size={24} color="orange" />
            </TouchableOpacity>
            <View style={styles.choose}>
                <Text style={styles.totalText}>{restaurant.name}</Text>
                <Text style={styles.drinks}>Drinks</Text>

            </View>
            {restaurant.drinks.map((drink, index) => (
                <View style={styles.drinkDetails} key={index}>
                    <Image
                        source={require('../../assets/drink.png')}
                        style={styles.drinkImage}
                    />

                    <View style={styles.textSection}>
<Text style={styles.drinkName}>{drink.name}</Text>
                            <Text style={styles.barista}>{drink.description}</Text>
                        <View key={index} style={styles.drinksPriceSection}>
                            
                            <Text style={styles.price}>{drink.price}</Text>
                            <View style={styles.addDrinkNumber}>
                                <TouchableOpacity onPress={removeDrink}>
                                    <AntDesign name="minus" size={24} color="orange" />
                                </TouchableOpacity>
                                <Text>
                                    {numberOfDrinks}
                                </Text>
                                <TouchableOpacity onPress={addDrink}>
                                    <AntDesign name="plus" size={24} color="orange" />
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/* </View> */}

                    </View>



                </View>
            ))}







            <TouchableOpacity style={styles.moreDrinksContainer}>
                <Text style={styles.moreDrinks}>
                    more drinks
                </Text>
                <AntDesign name="arrowright" size={24} color="orange" />
            </TouchableOpacity>

            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>
                    Total
                </Text>
                <Text style={styles.totalAmount}>
                    Frw {total}
                </Text>
            </View>
            <CustomButton
                title='Proceed to checkout'
                style={styles.proceed}
                handleOnPress={proceed}
            />



        </View>
    )
}

