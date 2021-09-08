import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SelectGuide from '../pages/SelectGuide';
import SelectStep from '../pages/SelectStep';
import DetailedStep from '../pages/DetailedStep';
import FinishedGuide from '../pages/FinishedGuide';

import { useGuide } from '../contexts/guide';
import { Ressons } from '../pages/Ressons';
import { Form } from '../pages/Form'



const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  const { currentGuide } = useGuide();

  return (
    <Navigator
      headerMode='screen'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#54ABFF',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontFamily: 'Nunito_600SemiBold',
          fontSize: 18,
        },
        headerTitleAlign: 'center',
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
        name="DetailedStep"
        component={DetailedStep}
        options={{ title: '', headerStyle:{backgroundColor: '#FFFFFF', elevation: 0}, headerTintColor: '#54ABFF' }}
      />
      <Screen
        name="FinishedGuide"
        component={FinishedGuide}
        options={{ headerShown: false }}
      />
      <Screen
        name="Ressons"
        component={Ressons}
      />
      <Screen
        name="Form"
        component={Form}
      />
    </Navigator>
  );

}