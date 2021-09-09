import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';

import { Routes } from './src/routes';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito';
import { GuideProvider } from './src/contexts/guide';

useEffect(() => {
  async function getNewUpdates() {
    const { isAvailable } = await Updates.checkForUpdateAsync();

    if (isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }
}, [])

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GuideProvider>
      <Routes />
    </GuideProvider>

  );
}

