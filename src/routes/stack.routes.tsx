import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Jaiane } from '../pages/jaiane';
import { Lampiao } from '../pages/Lampiao';



const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
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
        name='Lampiao'
        component={Lampiao}
        options={{ title: 'Manutenção do Lampião' }}
      />
      <Screen
        name='Jaiane'
        component={Jaiane}
      />
    </Navigator>
  );

}


{/*
const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return(
    <StackRoutes.Navigator 
            headerMode='screen'
            screenOptions={{
              headerStyle:{
                backgroundColor: '#54ABFF',
              },
              headerTintColor: 'white',
              headerTitleStyle:{
                fontFamily: 'Nunito_600SemiBold',
                fontSize: 18,
              },
              headerTitleAlign: 'center'
            } 
          }
          
      >
      <StackRoutes.Screen 
        name="Home" 
        component={Home}
      />
      <StackRoutes.Screen 
        name="Lucas" 
        component={Lucas}
      />
      <StackRoutes.Screen 
        name="Jaiane" 
        component={Jaiane}
      />
      <StackRoutes.Screen 
        name="Lampiao" 
        component={Lampiao}
      />
    </StackRoutes.Navigator>
  );
}

export default AppRoutes;

*/}