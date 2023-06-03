import { View, Text , Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../common/button/CustomButton";
import CustomInput from "../../common/input/CustomInput";
import HorizantalLine from "../../common/hr/HorizantalLine";
import LoginWithButton from "../../common/button/LoginWithButton";


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';  
import styles from "./login.styles";

const Login = () =>{
    const navigation=useNavigation();
    const goToLogin=()=>{
        navigation.navigate('Signup')
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
      icon={<AntDesign name="mail" size={24} color="grey" />}
      placeholder='Email'
      />
      <CustomInput
      icon={<AntDesign name="lock" size={24} color="grey" />}
      placeholder='Email'
      />

       <Button
       title='Sign In'
       />
      
      <View  style={styles.hrstyle}>
      <HorizantalLine/>
      <Text style={styles.or}>OR</Text>
      <HorizantalLine/>

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
   </View>
</View>
   )
}
 
export default Login;

