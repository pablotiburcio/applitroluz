import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';

export const StepNumberText = ({ stepNumber } : {stepNumber: number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Etapa: </Text>
      <View style={styles.circleContainer}>
        <Text style={styles.subtitle}>{stepNumber > 0 ? stepNumber.toString().padStart(2, '0') : '0'}</Text>
      </View>
    </View>
  );
};