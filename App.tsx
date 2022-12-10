/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {

  StatusBar,
  
  useColorScheme,
} from 'react-native';
import {Routes} from './src/navigation';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import configureStore from './src/store/index';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {store} = configureStore();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Routes />
    </Provider>
  );
};

export default App;
