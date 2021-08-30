import React from 'react';
import { View, Text } from 'react-native';
import { RectButtonProps, RectButton } from 'react-native-gesture-handler';

import { Entypo } from '@expo/vector-icons';
import { styles } from './styles';

interface Props extends RectButtonProps {
  id: string,
  title: string
}

export const LongCardButton = ({ id, title, onPress }: Props) => {
  return (
    <RectButton
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.circleContainer}>
        <Text style={styles.cardNumber}>{id}</Text>
      </View>
      <Text
        ellipsizeMode={'tail'}
        numberOfLines={1}
        style={styles.title}
      >
        {title}
      </Text>
      <View>
        <Entypo
          name="chevron-right"
          size={24}
          color="#83C2FF"
        />
      </View>
    </RectButton>
  );
};