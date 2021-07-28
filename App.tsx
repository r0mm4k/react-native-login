import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-native-paper';

import { Button, Header, TextInput } from './src/components';
import { theme } from './src/core';

export default function App() {
  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <Header>Open!</Header>
        <Button mode="contained">Click me!</Button>
        <TextInput label="email" />
      </View>
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
