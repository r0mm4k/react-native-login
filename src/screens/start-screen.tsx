import React, { FC } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { Background, Button, Header, Logo, Paragraph } from '../components';
import { TRootStackParamList } from '../../App';

type TStartScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'StartScreen'
>;
interface IStartScreen {
  navigation: TStartScreenScreenNavigation;
}

const StartScreen: FC<IStartScreen> = () => {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>
      <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph>
      <Button mode="outlined">Login</Button>
      <Button mode="contained">Sign Up</Button>
    </Background>
  );
};

export { StartScreen };
