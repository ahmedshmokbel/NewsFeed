import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from './src/navigation/AppContainer';
import store, { persistor } from './src/Redux/Store';
import translate from './src/Localization/Translate'
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import * as Linking from 'expo-linking';

 const prefix = Linking.makeUrl('');

export default function App() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
      //  initialRouteName: "MainTab",
        MainTab: {
          path:'stack',
          initialRouteName: "MainTab",
          screens: {
            NewsFeed: 'news',
            Details: {
              path:'article/:name',
              
            }
          },
        },
        
      },
    }
  };

  return (
    <AppearanceProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer linking={linking} fallback={<Text>Loading...</Text>} />

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
