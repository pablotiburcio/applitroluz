import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {Nunito_600SemiBold} from '@expo-google-fonts/nunito';

import {Home} from '../pages/Home';
import { Lucas } from '../pages/lucas';
import { Jaiane } from '../pages/jaiane';


const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return(
    <StackRoutes.Navigator 
      headerMode='screen'
      screenOptions={{
        headerStyle:{
          backgroundColor: '#54ABFF'
        },
        headerTintColor: 'white',
        headerTitleStyle:{
          fontFamily: 'Nunito_600SemiBold',
          fontSize: 15
        },
        headerTitleAlign: 'center'
      }}
      >
      <StackRoutes.Screen 
        name="Procedimentos de Manutenção" 
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
      
    </StackRoutes.Navigator>
  )
}

export default AppRoutes;