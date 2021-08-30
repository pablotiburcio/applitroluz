import React from 'react';
import { Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { MaterialIcons, } from '@expo/vector-icons';

import styles from './styles';

interface Props extends RectButtonProps {
  title: string,
  color: string,
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const IconButton = ({ title, onPress, color, icon }: Props) => {
  return (
    <RectButton
      onPress={onPress}
      style={[styles.container, { backgroundColor: color }]}
    >
      <MaterialIcons
        name={icon}
        size={22}
        color="#FFFFFF"
        style={{ marginRight: 6 }}
      />
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};