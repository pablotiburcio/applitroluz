import { StatusBar } from 'react-native';
import React from 'react';
import { View } from 'react-native';
import { Routes } from './src/routes';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Nunito_700Bold, Nunito_400Regular, Nunito_600SemiBold} from '@expo-google-fonts/nunito'

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
    Nunito_600SemiBold
  });

   if(!fontsLoaded){
     return <AppLoading />
   }

  return (
    <Routes/>
  );
}

