import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/home';
import { Lucas } from '../pages/lucas';
import { Jaiane } from '../pages/jaiane';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return(
    <StackRoutes.Navigator headerMode='none'>
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
    </StackRoutes.Navigator>
  )
}

export default AppRoutes;