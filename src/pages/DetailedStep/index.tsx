import React, { useState } from 'react';
import styles from './styles';

import { View, Text, Image } from 'react-native';
import { IconButton } from '../../components/IconButton';
import { FailureModal } from '../../components/FailureModal';

import { useGuide } from '../../contexts/guide';
import { useNavigation } from '@react-navigation/native';

function DetailedStep() {
  const { currentGuide, currentStep, previousStep, currentAction, setStep, setAction, setLastStep } = useGuide();
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  function stepDecision(decisionType: "work" | "failure") {
    if (currentStep[decisionType].type === 'step') {
      setStep(currentStep[decisionType].jump);
      setLastStep(currentStep.id);
    }

    else if (currentStep[decisionType].type === 'action') {
      setAction(currentStep[decisionType].jump);
      setModalVisible(true);
    }

    else {
      setModalVisible(false);
      navigation.navigate("FinishedGuide");
    }
  }

  function goToPreviousStep() {
    const numberPreviousStep = previousStep.pop();
    setStep(numberPreviousStep ? numberPreviousStep : 0);
  }

  function onOk() {
    setModalVisible(false);
    setLastStep(-1);
    setStep(0);
  }

  function onCancel() {
    setModalVisible(false);
    navigation.navigate("DifficultiesFound");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{currentStep.description}</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: `asset:/procedure/${currentGuide.name}/step${currentStep.id}.png` }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.questionCard}>
          <Text style={styles.questionText}>{currentStep.question}</Text>
        </View>
        <View style={styles.actionButtons}>
          {previousStep.length !== 0 &&
            <IconButton
              title='Voltar'
              icon='arrow-back'
              color='#AFAFAF'
              onPress={goToPreviousStep}
            />
          }
          <IconButton
            title='Sim'
            icon='done'
            color='#5EBF2D'
            onPress={() => stepDecision("work")}
          />
          <IconButton
            title='Não'
            icon='close'
            color='#FF3B3B'
            onPress={() => stepDecision("failure")}
          />
        </View>
      </View>
      <FailureModal
        isVisible={isModalVisible}
        title='Não Acendeu?'
        description={currentAction.description}
        onOk={onOk}
        onCancel={onCancel}
      />
    </View>
  );
}

export default DetailedStep;