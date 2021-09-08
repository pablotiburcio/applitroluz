import React from 'react';
import { Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from './styles';

interface Props extends RectButtonProps {
  idImage: number,
  title: string,
}

export const SmallCardButton = ({ idImage, title, onPress }: Props) => {
  return (
    <RectButton
      onPress={onPress}
      style={styles.container}
    >
      <Image
        source={{uri: `asset:/procedure/guide${idImage}.png`}}
        style={styles.image}
      />
      <Text style={styles.textButton}>{title}</Text>
    </RectButton>
  );
};