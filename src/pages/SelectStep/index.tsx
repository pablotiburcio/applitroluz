import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import LongCardButton from '../../components/LargeCardButton';

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

import { useGuide } from '../../contexts/guide';
import { useNavigation } from '@react-navigation/native';

function SelectStep() {
  const { currentGuide, setStep, setLastStep } = useGuide();
  const navigation = useNavigation();

  function setStepAndChangeScreen(stepId: number) {
    setStep(stepId);
    setLastStep(-1);
    navigation.navigate("DetailedStep");
  }

  return(
    <View style={styles.container}>
      <View style={styles.actionBar}>
        <Text style={styles.title}>Etapas</Text>
        <TouchableOpacity style={styles.stepByStepButton}>
          <Ionicons 
            name="play" 
            size={24} 
            color="#5EBF2D" 
            onPress={() => setStepAndChangeScreen(0)}
          />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={currentGuide.steps}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{paddingHorizontal: 5}}
        renderItem={({ item, index }) => 
          <LongCardButton
            id={index}
            title={item.description}
            onPress={setStepAndChangeScreen}
          />
        }
      />
    </View>
  );
}

export default SelectStep;