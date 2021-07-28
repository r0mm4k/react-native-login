import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { TRootStackParamList } from '../../App';
import { Background, Header } from '../components';

type THomeScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'HomeScreen'
>;
interface IHomeScreen {
  navigation: THomeScreenScreenNavigation;
}

const HomeScreen: FC<IHomeScreen> = () => {
  return (
    <Background>
      <Header>Home</Header>
    </Background>
  );
};

export { HomeScreen };
