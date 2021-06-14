import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/home';
import { Lucas } from '../pages/lucas';

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
    </StackRoutes.Navigator>
  )
}

export default AppRoutes;