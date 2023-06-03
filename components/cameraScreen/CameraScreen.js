import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ViewPropTypes as ViewPropTypesStyle } from 'react-native';

export default function CameraScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack(); // Return to the previous screen
      return true; // Prevent default back action
    };

    const timer = setTimeout(() => {
      BackHandler.removeEventListener('hardwareBackPress', backAction); // Remove back button listener
      navigation.goBack(); // Return to the previous screen after 3 seconds
    }, 3000);

    BackHandler.addEventListener('hardwareBackPress', backAction); // Listen for back button press

    return () => {
      clearTimeout(timer);
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [navigation]);
  return (
    <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.back}
        captureAudio={false}
      />

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
