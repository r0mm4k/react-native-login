import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from './src/core';
import { StartScreen } from './src/screens';

type TRootStackParamList = {
  StartScreen: undefined;
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
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export { TRootStackParamList };
