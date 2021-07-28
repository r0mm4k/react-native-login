import { StackNavigationProp } from '@react-navigation/stack';
import firebase from 'firebase';
import React, { FC } from 'react';
import { ActivityIndicator } from 'react-native';

import { TRootStackParamList } from '../../App';
import { Background } from '../components';

type TLoadingScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'LoadingScreen'
>;
interface ILoadingScreen {
  navigation: TLoadingScreenScreenNavigation;
}

const LoadingScreen: FC<ILoadingScreen> = ({ navigation }) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    } else {
      // User is not logged in
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      });
    }
  });

  return (
    <Background>
      <ActivityIndicator size="large" />
    </Background>
  );
};

export { LoadingScreen };
