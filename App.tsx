import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

import { Button, Header } from './src/components';
import { theme } from './src/core';

type TRootStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

type TScreen1ScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'Screen1'
>;

type TScreen2ScreenNavigationProp = StackNavigationProp<
  TRootStackParamList,
  'Screen2'
>;

interface IScreen1 {
  navigation: TScreen1ScreenNavigationProp;
}

interface IScreen2 {
  navigation: TScreen2ScreenNavigationProp;
}

const RootStack = createStackNavigator<TRootStackParamList>();

const Screen1: FC<IScreen1> = ({ navigation }) => {
  const showScreen2 = () => navigation.navigate('Screen2');

  return (
    <View style={styles.container}>
      <Header>Screen1</Header>
      <Button onPress={showScreen2}>Go To Second Screen</Button>
    </View>
  );
};

const Screen2: FC<IScreen2> = ({ navigation }) => {
  const goBack = () => navigation.goBack();

  return (
    <View style={styles.container}>
      <Header>Screen2</Header>
      <Button onPress={goBack}>Go Back</Button>
    </View>
  );
};

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName="Screen1"
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen name="Screen1" component={Screen1} />
          <RootStack.Screen name="Screen2" component={Screen2} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
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
