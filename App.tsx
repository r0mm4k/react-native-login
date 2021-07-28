import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Button, Header, TextInput } from './src/components';
import { theme } from './src/core';

const Stack = createStackNavigator();

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Header>Open!</Header>
      <Button mode="contained">Click me!</Button>
      <TextInput label="email" />
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={styles.container}>
      <Header>Open!</Header>
      <Button mode="contained">Click me!</Button>
      <TextInput label="email" />
    </View>
  );
};

const Screen3 = () => {
  return (
    <View style={styles.container}>
      <Header>Open!</Header>
      <Button mode="contained">Click me!</Button>
      <TextInput label="email" />
    </View>
  );
};

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Screen1"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>
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
