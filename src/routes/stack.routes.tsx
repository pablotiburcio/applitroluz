import React from 'react';
import { createStackNavigator, CardStyleInterpolators, TransitionSpecs } from '@react-navigation/stack';

import SelectGuide from '../pages/SelectGuide';
import SelectStep from '../pages/SelectStep';
import DetailedStep from '../pages/DetailedStep';
import FinishedGuide from '../pages/FinishedGuide';

import { useGuide } from '../contexts/guide';
import DifficultiesFound from '../pages/DifficultiesFound';
import { StepNumberText } from '../components/StepNumberText';
import { SendReport } from '../pages/SendReport';




const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  const { currentGuide, currentStep } = useGuide();

  return (
    <Navigator
      headerMode='screen'
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#54ABFF',
        },
        headerTitleStyle: {
          fontFamily: 'Nunito_800ExtraBold',
          fontSize: 20,
        },
      }}
    >
      <Screen
        name='SelectGuide'
        component={SelectGuide}
        options={{
          title: 'Procedimentos de Manutenção',
          headerStyle: {
            height: 70,
            backgroundColor: '#54ABFF',
            elevation: 0
          },
          headerTitleStyle: {
            fontFamily: 'Nunito_800ExtraBold',
            paddingTop: 10,
          },
        }}
      />
      <Screen
        name='SelectStep'
        component={SelectStep}
        options={{ title: `Manutenção do ${currentGuide.title}` }}
      />
      <Screen
        name="DetailedStep"
        component={DetailedStep}
        options={{
          title: '',
          headerStyle: {
            height: 70,
            backgroundColor: '#54ABFF',
            elevation: 0
          },
          headerRight: () => <StepNumberText stepNumber={currentStep.id} />
        }}
      />
      <Screen
        name="FinishedGuide"
        component={FinishedGuide}
        options={{ headerShown: false }}
      />
      <Screen
        name="DifficultiesFound"
        component={DifficultiesFound}
        options={{ title: 'Dificuldades Encontradas' }}
      />

      <Screen
        name="SendReport"
        component={SendReport}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#54ABFF',
            elevation: 0
          },
          headerTintColor: '#FFFFFF'
        }}
      />
    </Navigator>
  );

}