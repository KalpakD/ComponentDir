import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import {NativeModules, Platform} from 'react-native';
import ToastView from './src/components/NetworkToastView';

const Stack = createNativeStackNavigator();
const App: () => React$Node = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NativeModules.SplashScreenModule.hide();
    }
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToastView />
    </>
  );
};

export default App;
