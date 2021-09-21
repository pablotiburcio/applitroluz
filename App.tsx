import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';
import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_700Bold,
  Nunito_600SemiBold,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import { GuideProvider } from './src/contexts/guide';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <GuideProvider>
      <StatusBar
        animated={true}
        backgroundColor='#2179cc'
      />
      <Routes />
    </GuideProvider>

  );
}

