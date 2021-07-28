import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from './src/core';
import { LoginScreen, StartScreen } from './src/screens';

type TRootStackParamList = {
  StartScreen: undefined;
  LoginScreen: undefined;
};

const RootStack = createStackNavigator<TRootStackParamList>();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="StartScreen" component={StartScreen} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export { TRootStackParamList };
