import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Login';
import CadastroScreen from './screens/Cadastro';
import ListaScreen from './screens/Listar';
import InserirScreen from './screens/Inserir';
import AlterarScreen from './screens/Alterar';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown:false}} />
        <Stack.Screen name="Listar" component={ListaScreen} options={{headerShown:false}} />
        <Stack.Screen name="Inserir" component={InserirScreen} options={{headerShown:false}} />
        <Stack.Screen name="Alterar" component={AlterarScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;