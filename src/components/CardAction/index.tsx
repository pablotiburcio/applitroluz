import { useNavigation } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import {
  Button,
  Image,
  Text,
  View,
} from 'react-native'
import { useProcedure } from '../../Contexts/context';

import cancelImg from '../../pages/assets/cancel.png';
import { ButtonFullWidth } from '../ButtonFullWidth';

import { styles } from './styles';

export function CardAction() {
  const { setStep, procedureCurrent, actionCurrent, showAction, handleAction } = useProcedure();

  const navigation = useNavigation();

  function goAchieved() {
    console.log("Tô aqui");
    handleAction();
    setStep(procedureCurrent.steps[1]);
  }

  return (
    <View style={styles.container}>
      <Image
        source={cancelImg}
      />
      <Text style={styles.title}>
        Não acendeu?
      </Text>
      <Text style={{ fontSize: 12, color: "black" }}>{showAction}</Text>
      <View style={styles.divider} />
      <Text style={styles.instruction}>
        {actionCurrent.description}
      </Text>
      <ButtonFullWidth
        text="Não Consegui"
        backgroundColor="#FF3C3C"

      />
      <Text style={{ fontSize: 12, color: "black" }}>{showAction ? "true" : "false"}</Text>

      <ButtonFullWidth
        text="Consegui"
        backgroundColor="#5EBF2D"
        onPress={goAchieved}
      />

    </View>
  );
}