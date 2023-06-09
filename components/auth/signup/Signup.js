import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
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

   const [signupMessage, setSignupMessage]=useState(null)
   const [messageStyle, setMessageStyle]=useState({})

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
    useEffect(()=>{
      setMessageStyle(getMessageStyle())
    },[signupMessage])


  const handleSignUp=()=>{
   
   const signUpData={
      fullNames:fullNames,
      phoneNumber:phoneNumber,
      email:email,
      password:password
   }
   console.log(signUpData)

   axios.post('http://192.168.8.106:8000/signup', signUpData)
   .then(response=>{
      const {status, message} =response.data
      setSignupMessage(message)
   })
   .catch(err=>{
      console.log('error calling the server' ,err)
   })
   // navigation.navigate('Login')
   
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
               {/* <Text style={styles.fill}> If you have a PMG account</Text>
               <Button
                  title='Sign In'
                  handleOnPress={handleSignUp}
               /> */}
               <View style={styles.dont}>
                  <Text style={styles.dontHave}>Already have an account? </Text>
                  <TouchableOpacity onPress={goToLogin}>
                     <Text style={styles.register} > Login</Text>
                  </TouchableOpacity>

               </View>
               <View style={[styles.messageContainer, messageStyle]}>
         <Text style={styles.messageContainerText}>
            {signupMessage}
         </Text>

         </View>

            </View>
         </View>
      </View>
   )
}


export default Signup;