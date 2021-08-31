import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { ScreenModal } from '../pages/ScreenModal';
import { ScreenList } from '../pages/ScreenList';
import { ScreenStep } from '../pages/ScreenStep';
import { useProcedure } from '../Contexts/context';
import { Ressons } from '../pages/Ressons';
import { Form } from '../pages/Form'



const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  const { procedureCurrent } = useProcedure();

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
        name='Home'
        component={Home}
        options={{ title: 'Procedimentos de manutenção' }}
      />

      <Screen
        name='ScreenList'
        component={ScreenList}
        options={{ title: `Manutenção do ${procedureCurrent.title}` }}
      />

      <Screen
        name='ScreenModal'
        component={ScreenModal}
      />
      <Screen
        name="ScreenStep"
        component={ScreenStep}
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