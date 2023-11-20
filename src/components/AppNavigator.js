// AppNavigator.js

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Recetas from './Recetas';
import RecetasSanas from './RecetasSanas'; // Asegúrate de importar la pantalla de RecetasSanas

const AppNavigator = createStackNavigator({
  Recetas: {
    screen: Recetas,
    navigationOptions: {
      title: 'Recetas',
    },
  },
  RecetasSanas: {
    screen: RecetasSanas,
    navigationOptions: {
      title: 'Recetas Sanas',
    },
  },
});

export default createAppContainer(AppNavigator);
