import React, { FC, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';

import { TRootStackParamList } from '../../App';
import { Background, Button, Header } from '../components';
import { logout } from '../api';

type TProfileScreenScreenNavigation = StackNavigationProp<
  TRootStackParamList,
  'ProfileScreen'
>;
interface IProfileScreen {
  navigation: TProfileScreenScreenNavigation;
}

const ProfileScreen: FC<IProfileScreen> = () => {
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
      <Header>Profile</Header>
      <Button mode="contained" loading={loading} onPress={onLogout}>
        Logout
      </Button>
    </Background>
  );
};

export { ProfileScreen };
