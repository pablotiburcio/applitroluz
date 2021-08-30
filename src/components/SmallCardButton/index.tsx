import React from 'react';
import { Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { GUIDE_ICON } from '../../utils/public_assets';
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
        source={GUIDE_ICON[idImage]}
        style={styles.image}
      />
      <Text style={styles.textButton}>{title}</Text>
    </RectButton>
  );
};