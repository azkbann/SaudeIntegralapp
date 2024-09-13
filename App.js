import React from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store'; // ajuste o caminho conforme necessário
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { name as appName } from './app.json'; // Certifique-se de que o nome está definido corretamente no app.json

// Componente principal
const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar backgroundColor="#0094DB" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  </Provider>
);

// Registro do componente principal
AppRegistry.registerComponent(appName, () => App);

export default App;
