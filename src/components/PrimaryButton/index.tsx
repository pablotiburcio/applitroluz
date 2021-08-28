import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const PrimaryButton: React.FC = ({ title, color, onPress }) => {
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

export default PrimaryButton;