import React, { ReactNode } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native'

import cancelImg from '../../pages/assets/cancel.png';

import { styles } from './styles';

export function CardAction() {

  return (
    <View style={styles.container}>
      <Image
        source={cancelImg}
      />
      <Text style={styles.title}>
        Não acendeu?
      </Text>
      <View style={styles.divider} />
      <Text style={styles.instruction}>
        Trocar fusível e recomeçar do início.
      </Text>

    </View>
  );
}