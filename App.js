import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from './src/navigation/AppContainer';
import store, { persistor } from './src/Redux/Store';
import translate from './src/Localization/Translate'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

export default function App() {
  
  return (
    <AppearanceProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    </AppearanceProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
