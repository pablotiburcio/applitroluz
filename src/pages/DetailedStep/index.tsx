import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import IconButton from '../../components/IconButton';
import styles from './styles';

import { lampiao_steps_images } from '../../utils/global_variables';
import { useGuide } from '../../contexts/guide';
import FailureModal from '../../components/FailureModal';

function DetailedStep() {
  const { currentStep, currentAction, setStep, setAction } = useGuide();
  const [isModalVisible, setModalVisible] = useState(false);

  function stepSuccessful() {
    if (currentStep.work.type === 'step') {
      setStep(currentStep.work.jump);
    }

    else {
      setAction(currentStep.work.jump);
    }
  }

  function stepFailed() {
    if (currentStep.failure.type === 'step') {
      setStep(currentStep.failure.jump);
    }

    else {
      setAction(currentStep.failure.jump);
      setModalVisible(true);
    }
  }

  function onClose() {
    setModalVisible(false);
    setStep(0);
  }

  return(
    <View style={styles.container}>
      <View style={styles.cardDetailedStep}>
        <Text style={styles.title}>{currentStep.description}</Text>
        <Image
          style={styles.image}
          source={lampiao_steps_images[0]}
          resizeMode="contain"
        />
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentStep.question}</Text>
        </View>
        <View style={styles.actionButtons}>
          <IconButton 
            title='Sim'
            icon='done'
            color='#5EBF2D'
            onPress={stepSuccessful}
          />
          <View style={{width: 40}} />
          <IconButton 
            title='Não'
            icon='close'
            color='#FF3B3B'
            onPress={stepFailed}
          />
        </View>
      </View>
      <FailureModal 
        isVisible={isModalVisible}
        title='Não Acendeu?'
        description={currentAction.description}
        onClose={onClose}
      />
    </View>
  );
}

export default DetailedStep;