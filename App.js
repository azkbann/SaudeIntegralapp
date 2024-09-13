import React from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'; 
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { name as appName } from './app.json'; 


const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor="#0094DB" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  </Provider>
);


AppRegistry.registerComponent(appName, () => App);

export default App;
