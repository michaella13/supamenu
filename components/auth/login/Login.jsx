import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

import axios from "axios";
import Button from "../../common/button/CustomButton";
import CustomInput from "../../common/input/CustomInput";
import HorizantalLine from "../../common/hr/HorizantalLine";
import LoginWithButton from "../../common/button/LoginWithButton";


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from "./login.styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [signupMessage, setSignupMessage] = useState(null)
   const [messageStyle, setMessageStyle] = useState({})

   const getMessageStyle = () => {
      console.log(signupMessage)
      if (signupMessage && signupMessage.includes('User created successfully')) {
         return styles.greenBackground;
      } else if (signupMessage) {
         return styles.redBackground;
      } else {
         return {}; // Default style
      }
   };
   useEffect(() => {
      setMessageStyle(getMessageStyle())
   }, [signupMessage])

   const navigation = useNavigation();
   const goToLogin = () => {
      navigation.navigate('Signup')
   }
   const storeToken = async (token) => {
      try {
         await AsyncStorage.setItem('token', token.split(' ')[1])
      }
      catch {

      }
   }
   const handleLogin = () => {
      const loginData = {
         email,
         password
      }
      console.log(loginData)
      axios.post('http://192.168.8.106:8000/login', loginData)
         .then((response) => {
            if ((response.data.token) != null) {
               console.log(response.data.token.split(' ')[1])
               storeToken()
               const { status, message } = response.data
               setSignupMessage(message)
               navigation.navigate('Scan')
            }
            else {
               setSignupMessage("Invalid credentials")
            }



         })
         .catch(err => {
            console.log(err)
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
                  value={email}
                  onChange={(text) => setEmail(text)}
                  icon={<AntDesign name="mail" size={24} color="grey" />}
                  placeholder='Email'
               />
               <CustomInput
                  value={password}
                  onChange={(text) => setPassword(text)}
                  icon={<AntDesign name="lock" size={24} color="grey" />}
                  secure={true}
                  placeholder='Password'
               />

               <Button
                  title='Sign In'
                  handleOnPress={handleLogin}
               />

               <View style={styles.hrstyle}>
                  <HorizantalLine />
                  <Text style={styles.or}>OR</Text>
                  <HorizantalLine />

               </View>

               <LoginWithButton
                  icon={<AntDesign name="google" size={24} color="grey" />}
                  title='Login with google'
               />
               <LoginWithButton
                  icon={<FontAwesome5 name="facebook-f" size={24} color="grey" />}
                  title='Login with google'
               />

               <TouchableOpacity>
                  <Text style={styles.forgot} >Forgot Password?</Text>
               </TouchableOpacity>

               <View style={styles.dont}>
                  <Text style={styles.dontHave}>Don't have an account an account? </Text>

                  <TouchableOpacity onPress={goToLogin}>
                     <Text style={styles.register} >Register</Text>
                  </TouchableOpacity>

               </View>

            </View>
            <View style={[styles.messageContainer, messageStyle]}>
               <Text style={styles.messageContainerText}>
                  {signupMessage}
               </Text>

            </View>
         </View>
      </View>
   )
}

export default Login;

