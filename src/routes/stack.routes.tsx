import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectGuide from '../pages/SelectGuide/index';
import SelectStep from '../pages/SelectStep/index';
import DetailedStep from '../pages/DetailedStep/index'

import { useGuide } from '../contexts/guide';
import HeaderRight from '../components/HeaderRight';

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  const { currentGuide, currentStep } = useGuide();

  return (
    <Navigator
      headerMode='screen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#54ABFF',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontFamily: 'Nunito_600SemiBold',
          fontSize: 18,
        },
        headerTitleAlign: 'center'
      }}
    >
      <Screen
        name='SelectGuide'
        component={SelectGuide}
        options={{ title: 'Procedimentos de manutenção' }}
      />

      <Screen
        name='SelectStep'
        component={SelectStep}
        options={{ title: `Manutenção do ${currentGuide.title}` }}
      />

      <Screen
        name='DetailedStep'
        component={DetailedStep}
        options={{ title: '', headerRight:() => <HeaderRight id={currentStep.id} /> }}
      />
    </Navigator>
  );

}