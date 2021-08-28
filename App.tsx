import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import {
  useFonts,
  Nunito_700Bold,
  Nunito_400Regular,
  Nunito_600SemiBold
} from '@expo-google-fonts/nunito';
import { GuideProvider } from './src/contexts/guide';

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

