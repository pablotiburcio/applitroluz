import React from 'react';
import { Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import { guides_images } from '../../utils/global_variables';

const SmallCardButton: React.FC = ({ id, title, onPress }) => {
  return (
    <RectButton 
      onPress={() => onPress(id)} 
      style={styles.container}
    >
      <Image 
        source={guides_images[id]}
        style={styles.image}
      />
      <Text style={styles.textButton}>{title}</Text>
    </RectButton>
  );
};

export default SmallCardButton;