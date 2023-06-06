import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import axios from "axios";

import Button from "../../common/button/CustomButton";
import CustomInput from "../../common/input/CustomInput";
import HorizantalLine from "../../common/hr/HorizantalLine";


import { AntDesign } from '@expo/vector-icons';
import styles from "./signup.styles";

const Signup = () => {
   const navigation = useNavigation()
   const goToLogin = () => {
      navigation.navigate('Login')
   }
   const [fullNames, setFullNames] = useState('')
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp=()=>{
   
   const signUpData={
      fullNames:fullNames,
      phoneNumber:phoneNumber,
      email:email,
      password:password
   }

   axios.post('http://localhost:8000/signup', signUpData)
   .then(response=>{
      console.log(response.data)
   })
   .catch(err=>{
      console.log('error calling the server' ,err)
   })
   
  }
   return (
      <View style={styles.container}>

         <View style={styles.subContainer}>
            <Image
               source={require('../../../assets/logo.png')}
               style={styles.logo}
            />


            <Text style={styles.welcome}>Welcome...</Text>
            <Text style={styles.fill}>Please  fill in  the information</Text>



            <View style={styles.form}>
               <CustomInput
                  value={fullNames}
                  icon={<AntDesign name="user" size={24} color="grey" />}
                  placeholder='Full Names'
                  onChange={(text)=> setFullNames(text)}
               />
               <CustomInput
                  value={phoneNumber}
                  icon={<AntDesign name="phone" size={24} color="grey" />}
                  placeholder='Phone Number'
                  onChange={(text)=>setPhoneNumber(text)}
                  keyboard='numeric'

               />
               <CustomInput
                  icon={<AntDesign name="mail" size={24} color="grey" />}
                  value={email}
                  onChange={(text)=>setEmail(text)}
                  placeholder='Email'
               />
               <CustomInput
                  icon={<AntDesign name="lock" size={24} color="grey" />}
                  value={password}
                  onChange={(text)=>setPassword(text)}
                  placeholder='password'
                  secure={true}
               />
               <Button
                  title='Proceed'
                  handleOnPress={handleSignUp}

               />
               <View style={styles.hrstyle}>
                  <HorizantalLine />
                  <Text style={styles.or}>OR</Text>
                  <HorizantalLine />

               </View>
               <Text style={styles.fill}> If you have a PMG account</Text>
               <Button
                  title='Sign In'
                  handleOnPress={handleSignUp}
               />
               <View style={styles.dont}>
                  <Text style={styles.dontHave}>Already have an account? </Text>
                  <TouchableOpacity onPress={goToLogin}>
                     <Text style={styles.register} > Login</Text>
                  </TouchableOpacity>

               </View>

            </View>
         </View>
      </View>
   )
}


export default Signup;