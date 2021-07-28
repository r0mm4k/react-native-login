import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Text } from 'react-native-paper';
import firebase from 'firebase/app';
import 'firebase/auth';
import * as Google from 'expo-google-app-auth';

import { ANDROID_GOOGLE_CLIENT_ID, IOS_GOOGLE_CLIENT_ID, theme } from '../core';
import { GoogleIcon } from './icons';

const GoogleLogin = () => {
  const onLogin = async () => {
    if (Platform.OS === 'web') {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
      return;
    }

    try {
      const result = await Google.logInAsync({
        androidClientId: ANDROID_GOOGLE_CLIENT_ID,
        iosClientId: IOS_GOOGLE_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          result.idToken,
          result.accessToken
        );

        await firebase.auth().signInWithCredential(credential);
      } else {
        alert('Something went wrong.');
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider}>
        <Text style={styles.dividerText}>Or</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <GoogleIcon />
          <Text style={styles.buttonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  divider: {
    position: 'relative',
    width: '96%',
    height: 1,
    backgroundColor: theme.colors.text,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    position: 'absolute',
    backgroundColor: theme.colors.tint,
    color: theme.colors.text,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    flexDirection: 'row',
    borderColor: theme.colors.google,
    backgroundColor: theme.colors.surface,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  buttonText: {
    paddingLeft: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 15,
  },
});

export { GoogleLogin };
