import { View, Text , Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../common/button/CustomButton";
import CustomInput from "../../common/input/CustomInput";
import HorizantalLine from "../../common/hr/HorizantalLine";


import { AntDesign } from '@expo/vector-icons'; 
import styles from "./signup.styles";

const Signup =()=>{
    const navigation=useNavigation()
    const goToLogin=()=>{
        navigation.navigate('Login')
    }
   return(
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
      icon={<AntDesign name="user" size={24} color="grey" />}
      placeholder='Full Names'
      />
      <CustomInput
      icon={<AntDesign name="phone" size={24} color="grey" />}
      placeholder='Phone Number'
      />
      <CustomInput
      icon={<AntDesign name="mail" size={24} color="grey" />}
      placeholder='Email'
      />
      <Button 
      title='Proceed'
      />
      <View  style={styles.hrstyle}>
      <HorizantalLine/>
      <Text style={styles.or}>OR</Text>
      <HorizantalLine/>

      </View>
      <Text style={styles.fill}> If you have a PMG account</Text>
      <Button
      title='Sign In'
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