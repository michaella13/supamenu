import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './components/home/SplashScreen';
import LoginPage from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';
import ScanButton from './components/ScanButton/ScanButton';
import CameraScreen from './components/cameraScreen/CameraScreen';
import Restaurant from './components/restaurant/Restaurant';

const Stack = createStackNavigator();
export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Resto" screenOptions={{headerShown:false}}>
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
      </Stack.Navigator>

    </NavigationContainer>

  );
}


