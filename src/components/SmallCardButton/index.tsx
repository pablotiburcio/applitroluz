import React from 'react';
import styles from './styles';

import { View, Image, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

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
      <View style={styles.imageContainer}>
        <Image
          source={{uri: `asset:/procedure/guide${idImage}.png`}}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};