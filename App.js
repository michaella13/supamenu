import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import SplashScreen from './components/home/SplashScreen';
import LoginPage from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import ScanButton from './components/ScanButton/ScanButton';
import CameraScreen from './components/cameraScreen/CameraScreen';
import Restaurant from './components/restaurant/Restaurant';
import Menu from './components/menu/Menu';
import Drinks from './components/drinks/Drinks';
import SearchResults from './components/searchResults/SearchResults';
import PaymentSuccess from './components/paymentSuccess/PaymentSuccess';
import Checkout from './components/checkout/Checkout';
import Rating from './components/rating/Rating';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()



export default function App() {

  return (

    <NavigationContainer>
  
        <Stack.Navigator initialRouteName="Drinks" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        
      />
      <Stack.Screen
        name="Login"
        component={LoginPage}
        
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        
      />
      <Stack.Screen
        name="Scan"
        component={ScanButton}
        
      />
      {/* <Stack.Screen
          name="Camera"
          component={CameraScreen}
        /> */}
      <Stack.Screen
        name="Resto"
        component={Restaurant}
        
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
      />
      <Stack.Screen
        name="Drinks"
        component={Drinks}
      />
      <Stack.Screen
        name="Search"
        component={SearchResults}
      />
      <Stack.Screen
        name="Success"
        component={PaymentSuccess}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
      />
      <Stack.Screen
        name="Rate"
        component={Rating}
      />
    </Stack.Navigator>

    </NavigationContainer>

  );
}


