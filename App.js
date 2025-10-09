import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Screans/Home';
import Login from './Screans/Login';

export default function App() {

  const Stack = createStackNavigator();

function Mystack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      options={{
        title: 'Iniciar Sesión',
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#1976D2'}
      }} />
      <Stack.Screen name="Home" component={Home}
        options={{
          title: 'Inicio',
          headerTintColor: '#FFFFFF',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#1976D2'}
        }} />
    </Stack.Navigator>
  );
}

  return (
    <NavigationContainer>
      <Mystack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});