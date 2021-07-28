import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';

import { FIREBASE_CONFIG, theme } from './src/core';
import {
  HomeScreen,
  LoadingScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen,
} from './src/screens';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

type TRootStackParamList = {
  LoadingScreen: undefined;
  HomeScreen: undefined;
  StartScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ResetPasswordScreen: undefined;
};

const RootStack = createStackNavigator<TRootStackParamList>();

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="LoadingScreen"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
          <RootStack.Screen name="StartScreen" component={StartScreen} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="RegisterScreen" component={RegisterScreen} />
          <RootStack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export { TRootStackParamList };
