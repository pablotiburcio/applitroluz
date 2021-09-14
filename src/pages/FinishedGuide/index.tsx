import React from "react";
import { View, Image, Text } from "react-native";

import { PrimaryButton } from "../../components/PrimaryButton";

import { useGuide } from '../../contexts/guide';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function FinishedGuide() {
  const { currentGuide } = useGuide();
  const navigation = useNavigation();

  function goToSelectGuide() {
    navigation.reset({ routes: [{ name: 'SelectGuide' }] });
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: `asset:/procedure/guide${currentGuide.id}.png` }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <Text style={styles.title}>Está funcionando!!!</Text>
      <Text style={styles.subtitle}>Aproveite a luz!</Text>
      <View style={{ height: 40 }} />
      <PrimaryButton
        title='Voltar para a tela inicial'
        color='#2689E8'
        onPress={goToSelectGuide}
      />
    </View>
  );
}

export default FinishedGuide;