import { Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import styles from './search';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';





export default function SearchResults() {
    const navigation=useNavigation()

    const goToReSto=()=>{
        navigation.navigate('Menu')
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.searchBar}>
        <View style={styles.backIcon}>
        <FontAwesome5 name="chevron-left" size={24} color="orange" />
        </View>
        <TextInput
        style={styles.searchInput}
        placeholder='Search...'
        
        />
        
        

        </View>

        <View style={styles.hr}>

        </View>

        <Text style={styles.near}>
            Nearby Restaurant
        </Text>
        

        

        <TouchableOpacity style={styles.drinkDetails}>
            <Image
            source={require('../../assets/resto.png')}
            style={styles.drinkImage}
            />
            <View style={styles.textSection} onPress={goToReSto}>
                <Text style={styles.barista}>Choose Kigali</Text>
                <Text style={styles.drinkName}>World, Arican, Pizzeria, Coffee</Text>
               
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drinkDetails}>
            <Image
            source={require('../../assets/resto.png')}
            style={styles.drinkImage}
            />
            <View style={styles.textSection} onPress={goToReSto}>
                <Text style={styles.barista}>Choose Kigali</Text>
                <Text style={styles.drinkName}>World, Arican, Pizzeria, Coffee</Text>
               
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drinkDetails}>
            <Image
            source={require('../../assets/resto.png')}
            style={styles.drinkImage}
            />
            <View style={styles.textSection} onPress={goToReSto}>
                <Text style={styles.barista}>Choose Kigali</Text>
                <Text style={styles.drinkName}>World, Arican, Pizzeria, Coffee</Text>
               
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drinkDetails}>
            <Image
            source={require('../../assets/resto.png')}
            style={styles.drinkImage}
            />
            <View style={styles.textSection} onPress={goToReSto}>
                <Text style={styles.barista}>Choose Kigali</Text>
                <Text style={styles.drinkName}>World, Arican, Pizzeria, Coffee</Text>
               
            </View>
        </TouchableOpacity>
        
              
    </View>
  )
}

