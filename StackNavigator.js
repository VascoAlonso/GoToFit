import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ...

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"> {/* Asegúrate de que la pantalla de inicio de sesión se establezca como inicial */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Otras pantallas y configuraciones de navegación */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;