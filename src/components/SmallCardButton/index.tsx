import React from 'react';
import { Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { GUIDE_ICON } from '../../utils/public_assets';
import styles from './styles';

const SmallCardButton: React.FC = ({ id, title, onPress }) => {
  return (
    <RectButton 
      onPress={() => onPress(id)} 
      style={styles.container}
    >
      <Image 
        source={GUIDE_ICON[id]}
        style={styles.image}
      />
      <Text style={styles.textButton}>{title}</Text>
    </RectButton>
  );
};

export default SmallCardButton;