import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Mytabs} from './src/screen/navigation/bottomNav';
import Header from './src/component/Header';
export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <Mytabs />
    </NavigationContainer>
  );
}
