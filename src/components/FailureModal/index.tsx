import React from 'react';
import styles from './styles';

import { Text, View } from 'react-native';
import Modal from 'react-native-modal';

import { PrimaryButton } from '../PrimaryButton';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  isVisible: boolean,
  title: string,
  description: string,
  onOk: () => void,
  onCancel: () => void
}

export const FailureModal = ({ isVisible, title, description, onOk, onCancel }: Props) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.container}>
        <AntDesign
          name='closecircleo'
          size={50}
          color='red'
          style={styles.modalIcon}
        />
        <View style={{ height: 10 }} />
        <Text style={styles.title}>{title}</Text>
        <View style={{ backgroundColor: '#FFB5B5', width: '100%', height: 1, marginVertical: 15 }} />
        <Text style={styles.description}>{description}</Text>
        <View style={{ height: 25 }} />
        <PrimaryButton
          title='Consegui'
          color='#5EBF2D'
          onPress={onOk}
        />
        <View style={{ height: 15 }} />
        <PrimaryButton
          title='Não consegui'
          color='#FF3C3C'
          onPress={onCancel}
        />
      </View>
    </Modal>
  );
}