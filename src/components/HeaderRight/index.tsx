import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

const HeaderRight: React.FC<{ id: number }> = ({ id }) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title} >Etapa: </Text>
      <View style={styles.circleContainer}>
        <Text style={styles.counterText}>{id}</Text>
      </View>
    </View>
  );
};

export default HeaderRight;