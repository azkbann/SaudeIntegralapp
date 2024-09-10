import React from 'react';
import { StatusBar, View, Text } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0094DB" barStyle="light-content" />
      <Routes/>
    </NavigationContainer>
  );
}

