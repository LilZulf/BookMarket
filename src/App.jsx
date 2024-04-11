import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SplashScreen, SignIn } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/router';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <Router/>
    </NavigationContainer>
  );
};

export default App;
