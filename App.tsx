import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import firebase from 'firebase/app';

import { FIREBASE_CONFIG, theme } from './src/core';
import {
  HomeScreen,
  LoadingScreen,
  LoginScreen,
  ProfileScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen,
} from './src/screens';
import { DrawerContent, HomeIcon, ProfileIcon } from './src/components';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

type TRootStackParamList = {
  LoadingScreen: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  StartScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ResetPasswordScreen: undefined;
};

const RootStack = createStackNavigator<TRootStackParamList>();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ tabBarIcon: ({ color }) => <HomeIcon fill={color} /> }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{ tabBarIcon: ({ color }) => <ProfileIcon fill={color} /> }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen name="Home" component={HomeTabs} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="LoadingScreen"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
          <RootStack.Screen name="HomeScreen" component={HomeDrawer} />
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
