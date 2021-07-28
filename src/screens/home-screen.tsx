import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC, useState } from 'react';

import { TRootStackParamList } from '../../App';
import { Background, Button, Header } from '../components';
import { logout } from '../api';

type THomeScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'HomeScreen'
>;
interface IHomeScreen {
  navigation: THomeScreenScreenNavigation;
}

const HomeScreen: FC<IHomeScreen> = () => {
  const [loading, setLoading] = useState(false);

  const onLogout = async () => {
    try {
      setLoading(true);

      await logout();
    } catch ({ message }) {
      alert(message);
      setLoading(false);
    }
  };
  return (
    <Background>
      <Header>Home</Header>
      <Button mode="contained" loading={loading} onPress={onLogout}>
        Logout
      </Button>
    </Background>
  );
};

export { HomeScreen };
