import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

const IconButton: React.FC = ({ title, icon, color, onPress }) => {
  return (
    <RectButton 
      onPress={() => onPress()}
      style={[styles.container, {backgroundColor: color}]}
    >
      <MaterialIcons
        name={icon} 
        size={24} 
        color="#FFFFFF"
        style={{ marginRight: 6 }} 
      />
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};

export default IconButton;