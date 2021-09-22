import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Updates from 'expo-updates';

import { Routes } from './src/routes';
import {
  useFonts,
  Nunito_800ExtraBold,
  Nunito_700Bold,
  Nunito_600SemiBold,
  Nunito_400Regular,
} from '@expo-google-fonts/nunito';
import { GuideProvider } from './src/contexts/guide';
import { ReasonsProvider } from './src/contexts/reasons'

export default function App() {
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    async function getNewUpdates() {
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }


    getNewUpdates();
    setUpdate(true);
  }, [])
  const [fontsLoaded] = useFonts({
    Nunito_800ExtraBold,
    Nunito_700Bold,
    Nunito_600SemiBold,
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (!update) {
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        Atualizando informações...
      </Text>
    </View>
  }

  return (
    <GuideProvider>
      <ReasonsProvider>
        <StatusBar
          animated={true}
          backgroundColor='#2179cc'
        />
        <Routes />
      </ReasonsProvider>
    </GuideProvider>

  );
}

