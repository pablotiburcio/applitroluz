import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import { IconButton } from '../../components/IconButton';
import { FailureModal } from '../../components/FailureModal';

import { LAMPIAO_STEP_IMAGE } from '../../utils/public_assets';
import { useGuide } from '../../contexts/guide';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

function DetailedStep() {
  const { currentStep, previousStep, currentAction, setStep, setAction, setLastStep } = useGuide();
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
    navigation.navigate("Ressons");
  }

  return (
    <View style={styles.container}>
      <View style={styles.stepNumberContainer}>
        <Text style={styles.stepNumberText}>{currentStep.id}</Text>
      </View>
      <View style={styles.cardDetailedStep}>
        <Text style={styles.title}>{currentStep.description}</Text>
        <Image
          style={styles.image}
          source={LAMPIAO_STEP_IMAGE[currentStep.id]}
          resizeMode="contain"
        />
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