import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import styles from './styles';
import IconButton from '../IconButton';

const FailureModal: React.FC = ({ isVisible, title, description, onClose }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <AntDesign
          name='closecircleo' 
          size={50} 
          color='red'
          style={styles.modalIcon} 
        />
        <View style={{height: 10}} />
        <Text style={styles.title}>{title}</Text>
        <View style={{backgroundColor: '#FFB5B5', width: '100%', height: 1, marginVertical: 15}} />
        <Text style={styles.description}>{description}</Text>
        <View style={{height: 20}} />
        <IconButton 
          title='Recomeçar'
          icon='autorenew'
          color='#0074E4'
          onPress={onClose}
        />
      </View>
    </Modal>
  );
}

export default FailureModal;