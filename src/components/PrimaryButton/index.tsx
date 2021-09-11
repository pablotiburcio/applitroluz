import React from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string,
  color: string
}

export const PrimaryButton = ({ title, color, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: color }]}
      >
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity >
    </View>
  );
};